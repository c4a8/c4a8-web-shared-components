/**
 * sync-figma-tokens.mjs
 * -------------------------------------------------------------------------
 * Deterministic Figma → SCSS color-token sync.
 *
 * Figma is the single source of truth. Color variables are exported from
 * Figma as W3C design-token JSON (one file per mode) into `figma/tokens/`:
 *
 *   - `Mode 1.tokens.json`  → the BASE palette (corp / shades / products).
 *                             Figma folder prefixes (corp/, shades/, products/)
 *                             are dropped — only the leaf name is kept.
 *   - `<Product>.tokens.json` → the 34 resolved SEMANTIC theme variables
 *                               (--color-primary, --color-bg-grey, …) that map
 *                               1:1 to `src/assets/scss/themes/_<theme>.scss`.
 *
 * What this script does (all deterministic, re-runnable, idempotent):
 *
 *   1. Builds a hex → Figma-name map from the base palette (Mode 1).
 *   2. Reads `_colors.scss`, resolves every `--color-*` to its hex (direct or
 *      `#{$scss-var}`), and renames any whose hex matches a Figma color to
 *      `--color-<figma-name>` (folder stripped, `--color` prefix kept).
 *      Variables with NO Figma match keep their old name — so the codebase
 *      itself shows which colors are schema-mapped and which are not yet.
 *   3. Applies that rename map to every `--color-*` occurrence across the
 *      codebase (.scss / .css / .vue / .ts / .js) — definitions and usages.
 *   4. Writes generated import files into `src/assets/scss/tokens/`:
 *        - `_palette.scss`  → the full Figma base palette (future canonical
 *          source; not imported yet).
 *        - `rename-map.json` → audit of every old → new rename applied.
 *   5. Regenerates `themes/_<theme>.scss` from each product token file,
 *      referencing palette vars where the color exists in `_colors.scss`,
 *      raw hex otherwise. Preserves `--site`, `--font-family`, and any
 *      SCSS-only vars not present in the Figma export (e.g. scepman's
 *      `--color-link`).
 *
 * Usage:  node scripts/sync-figma-tokens.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const TOKENS_DIR = path.join(ROOT, 'figma', 'tokens');
const SCSS_DIR = path.join(ROOT, 'src', 'assets', 'scss');
const COLORS_FILE = path.join(SCSS_DIR, '_colors.scss');
const THEMES_DIR = path.join(SCSS_DIR, 'themes');
const GEN_DIR = path.join(SCSS_DIR, 'tokens');

// Product token file → theme file + `--site` slug.
const THEME_MAP = {
  'glueckkanja': { out: '_gk.scss', slug: 'gk' },
  'KONNEKT': { out: '_konnekt.scss', slug: 'konnekt' },
  'RADIUSaaS': { out: '_radiusaas.scss', slug: 'radiusaas' },
  'RealMigrator': { out: '_realmigrator.scss', slug: 'realmigrator' },
  'RealmJoin': { out: '_realmjoin.scss', slug: 'realmjoin' },
  'SCEPman': { out: '_scepman.scss', slug: 'scepman' },
  'Sendman': { out: '_sendman.scss', slug: 'sendman' },
  'TerraProvider': { out: '_terraprovider.scss', slug: 'terraprovider' },
  'Unified Contacts': { out: '_unified-contacts.scss', slug: 'unifiedcontacts' },
};

// Roots to walk when applying the rename across the codebase.
const APPLY_ROOTS = [
  'src', 'components', 'stories', 'pages', 'layouts',
  'composables', 'utils', 'server', 'plugins', 'middleware', '.storybook',
];
const APPLY_FILES = ['app.vue'];
const APPLY_EXT = new Set(['.vue', '.scss', '.css', '.ts', '.js']);
// Never rewrite generated output, vendored code or build artifacts.
const SKIP_DIRS = new Set(['node_modules', 'dist', '.nuxt', 'storybook-static', 'tokens']);

// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

const readJson = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));

/** Normalise any css hex (#abc / #aabbcc) to lowercase #rrggbb. */
function normHex(hex) {
  let h = hex.replace('#', '').trim().toLowerCase();
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  return '#' + h;
}

// ---------------------------------------------------------------------------
// 1. base palette (Mode 1)
// ---------------------------------------------------------------------------

/**
 * Walk the Mode 1 token tree and collect every color leaf.
 * @returns {{ hexToName: Map<string,string>, palette: Array<{group:string,name:string,hex:string}> }}
 */
function loadBasePalette() {
  const tree = readJson(path.join(TOKENS_DIR, 'Mode 1.tokens.json'));
  const hexToName = new Map();
  const palette = [];

  const walk = (node, trail) => {
    if (!node || typeof node !== 'object') return;
    if ('$type' in node) {
      if (node.$type === 'color' && node.$value && node.$value.hex) {
        const hex = normHex(node.$value.hex);
        const name = trail[trail.length - 1]; // leaf name, folder dropped
        const group = trail.length > 1 ? trail[0] : 'root';
        if (!hexToName.has(hex)) hexToName.set(hex, name);
        palette.push({ group, name, hex });
      }
      return;
    }
    for (const key of Object.keys(node)) walk(node[key], [...trail, key]);
  };
  walk(tree, []);

  return { hexToName, palette };
}

// ---------------------------------------------------------------------------
// 2. rename map (from _colors.scss)
// ---------------------------------------------------------------------------

/**
 * Resolve every `--color-*` definition in _colors.scss to a hex value and,
 * where that hex exists in the Figma palette, map the old var name to the new
 * Figma-based name.
 * @returns {Map<string,string>} old `color-foo` → new `color-figma-name`
 */
function buildRenameMap(hexToName) {
  const css = fs.readFileSync(COLORS_FILE, 'utf8');

  // Resolve `$scss-var: #hex;` so interpolated `--color-x: #{$scss-var};` works.
  const scssVars = {};
  for (const m of css.matchAll(/\$([\w-]+):\s*(#[0-9a-fA-F]{3,8})\s*;/g)) {
    scssVars[m[1]] = normHex(m[2]);
  }

  const rename = new Map();
  // --color-name: #hex;   OR   --color-name: #{$scss-var};
  const re = /--(color-[\w-]+):\s*(#[0-9a-fA-F]{3,8}|#\{\$[\w-]+\})\s*;/g;
  for (const m of css.matchAll(re)) {
    const oldName = m[1];
    let hex;
    if (m[2].startsWith('#{')) {
      const varName = m[2].slice(3, -1); // strip `#{$` … `}`
      hex = scssVars[varName];
    } else {
      hex = normHex(m[2]);
    }
    if (!hex) continue;
    const figma = hexToName.get(hex);
    if (!figma) continue; // no Figma match → keep old name
    const newName = `color-${figma}`;
    if (newName !== oldName) rename.set(oldName, newName);
  }
  return rename;
}

// ---------------------------------------------------------------------------
// 3. apply rename across the codebase
// ---------------------------------------------------------------------------

function buildRenameRegex(rename) {
  if (rename.size === 0) return null;
  // Longest first so prefixes never shadow longer names (boundaries already guard).
  const alts = [...rename.keys()].sort((a, b) => b.length - a.length).map((k) => k.replace(/[-]/g, '\\$&'));
  // Match `--<oldname>` not surrounded by ident chars (so `--color-blue-light`
  // never matches inside `--color-blue-lighter`).
  return new RegExp(`(?<![\\w-])--(${alts.join('|')})(?![\\w-])`, 'g');
}

function applyRename(rename) {
  const re = buildRenameRegex(rename);
  if (!re) return [];
  const changed = [];

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (SKIP_DIRS.has(entry.name)) continue;
        walk(path.join(dir, entry.name));
      } else if (APPLY_EXT.has(path.extname(entry.name))) {
        const file = path.join(dir, entry.name);
        const before = fs.readFileSync(file, 'utf8');
        const after = before.replace(re, (_, name) => `--${rename.get(name)}`);
        if (after !== before) {
          fs.writeFileSync(file, after);
          changed.push(path.relative(ROOT, file));
        }
      }
    }
  };

  for (const r of APPLY_ROOTS) {
    const p = path.join(ROOT, r);
    if (fs.existsSync(p)) walk(p);
  }
  for (const f of APPLY_FILES) {
    const p = path.join(ROOT, f);
    if (fs.existsSync(p)) {
      const before = fs.readFileSync(p, 'utf8');
      const after = before.replace(re, (_, name) => `--${rename.get(name)}`);
      if (after !== before) {
        fs.writeFileSync(p, after);
        changed.push(f);
      }
    }
  }
  return changed;
}

/** Drop duplicate `--color-x:` definitions inside the `:root{}` of _colors.scss
 *  (collisions where two old names mapped to the same Figma name). Keeps first. */
function dedupeColorsRoot() {
  const lines = fs.readFileSync(COLORS_FILE, 'utf8').split('\n');
  const seen = new Set();
  const out = [];
  for (const line of lines) {
    const m = line.match(/^\s*(--color-[\w-]+):/);
    if (m) {
      if (seen.has(m[1])) continue; // skip duplicate definition
      seen.add(m[1]);
    }
    out.push(line);
  }
  fs.writeFileSync(COLORS_FILE, out.join('\n'));
}

// ---------------------------------------------------------------------------
// 4. generated import files
// ---------------------------------------------------------------------------

function writePalette(palette) {
  fs.mkdirSync(GEN_DIR, { recursive: true });
  const groups = {};
  for (const c of palette) (groups[c.group] ||= []).push(c);

  let out = '// AUTO-GENERATED by scripts/sync-figma-tokens.mjs — do not edit by hand.\n';
  out += '// Full Figma base palette (Mode 1). Canonical source for future use.\n\n:root {\n';
  for (const group of Object.keys(groups)) {
    out += `  // ${group}\n`;
    for (const c of groups[group]) out += `  --color-${c.name}: ${c.hex};\n`;
    out += '\n';
  }
  out = out.replace(/\n$/, '') + '}\n';
  fs.writeFileSync(path.join(GEN_DIR, '_palette.scss'), out);
}

function writeRenameMap(rename) {
  const obj = {};
  for (const [k, v] of [...rename.entries()].sort()) obj[`--${k}`] = `--${v}`;
  fs.writeFileSync(path.join(GEN_DIR, 'rename-map.json'), JSON.stringify(obj, null, 2) + '\n');
}

// ---------------------------------------------------------------------------
// 5. regenerate theme files
// ---------------------------------------------------------------------------

/** Collect the raw `$value` of a token leaf as a string (hex / number / text). */
function tokenValue(node) {
  if (node && typeof node === 'object' && '$value' in node) {
    const v = node.$value;
    if (v && typeof v === 'object' && v.hex) return { type: 'color', hex: normHex(v.hex) };
    return { type: node.$type || 'string', value: v };
  }
  return null;
}

/** hex → `var(--color-name)` if that color exists in _colors.scss, else raw hex. */
function colorRef(hex, definedNames, hexToName) {
  const figma = hexToName.get(hex);
  if (figma && definedNames.has(figma)) return `var(--color-${figma})`;
  return hex;
}

function regenerateThemes(hexToName, definedNames) {
  const written = [];
  for (const [tokenName, cfg] of Object.entries(THEME_MAP)) {
    const tokenFile = path.join(TOKENS_DIR, `${tokenName}.tokens.json`);
    if (!fs.existsSync(tokenFile)) {
      console.warn(`  ! token file missing: ${tokenName}.tokens.json`);
      continue;
    }
    const tok = readJson(tokenFile);
    const outFile = path.join(THEMES_DIR, cfg.out);

    // Color keys present in the Figma export, in export order.
    const colorKeys = Object.keys(tok).filter(
      (k) => k.startsWith('--') && tok[k] && tok[k].$type === 'color',
    );

    // SCSS-only `--color-*` vars not in the export (e.g. scepman --color-link).
    const existing = fs.existsSync(outFile) ? fs.readFileSync(outFile, 'utf8') : '';
    const extras = [];
    for (const m of existing.matchAll(/(--color-[\w-]+):\s*([^;]+);/g)) {
      if (!colorKeys.includes(m[1]) && !extras.find((e) => e.prop === m[1])) {
        extras.push({ prop: m[1], value: m[2].trim() });
      }
    }

    const font = tokenValue(tok['--font-family']);
    const ctaCutoff = tokenValue(tok['--cta-cutoff']);
    const ctaNormal = tokenValue(tok['--cta-normal']);

    let out = `// ${cfg.slug} theme — AUTO-GENERATED from figma/tokens/${tokenName}.tokens.json\n`;
    out += '// Regenerate via: node scripts/sync-figma-tokens.mjs — do not edit by hand.\n\n';
    out += ':root {\n';
    out += `  --site: '${cfg.slug}';\n\n`;
    out += '  // Theme colors (Figma source of truth)\n';
    for (const key of colorKeys) {
      const v = tokenValue(tok[key]);
      out += `  ${key}: ${colorRef(v.hex, definedNames, hexToName)};\n`;
    }
    if (extras.length) {
      out += '\n  // SCSS-only — not yet defined in Figma\n';
      for (const e of extras) out += `  ${e.prop}: ${e.value};\n`;
    }
    out += '\n  // fonts\n';
    out += `  --font-family: '${font ? font.value : 'Miriam Libre'}', sans-serif;\n`;
    if (ctaCutoff || ctaNormal) {
      out += '\n  // cta\n';
      if (ctaCutoff) out += `  --cta-cutoff: ${ctaCutoff.value};\n`;
      if (ctaNormal) out += `  --cta-normal: ${ctaNormal.value};\n`;
    }
    out += '}\n';

    fs.writeFileSync(outFile, out);
    written.push(path.relative(ROOT, outFile));
  }
  return written;
}

// ---------------------------------------------------------------------------
// run
// ---------------------------------------------------------------------------

function main() {
  console.log('▶ Sync Figma color tokens → SCSS\n');

  const { hexToName, palette } = loadBasePalette();
  console.log(`  Base palette: ${palette.length} colors from Mode 1`);

  const rename = buildRenameMap(hexToName);
  console.log(`  Rename map:   ${rename.size} variables matched by hex\n`);
  for (const [o, n] of [...rename.entries()].sort()) console.log(`    --${o}  →  --${n}`);

  console.log('\n  Applying rename across codebase…');
  const changed = applyRename(rename);
  dedupeColorsRoot();
  console.log(`    ${changed.length} files updated`);

  console.log('\n  Writing generated import files…');
  writePalette(palette);
  writeRenameMap(rename);
  console.log('    src/assets/scss/tokens/_palette.scss');
  console.log('    src/assets/scss/tokens/rename-map.json');

  // Names actually defined as CSS vars in _colors.scss after the rename.
  const definedNames = new Set([...rename.values()].map((n) => n.replace(/^color-/, '')));

  console.log('\n  Regenerating theme files…');
  const themes = regenerateThemes(hexToName, definedNames);
  for (const t of themes) console.log(`    ${t}`);

  console.log('\n✔ Done.');
}

main();
