# Figma color tokens → SCSS

This folder holds **generated** output from the Figma design-token export.
Figma is the single source of truth for colors.

## Files

| File              | Generated | Purpose |
|-------------------|-----------|---------|
| `_palette.scss`   | ✅ | The full Figma **base palette** (Mode 1 → corp / shades / products) as `--color-<name>` custom properties. Canonical reference for future use. **Not imported yet** — `_colors.scss` is still the live palette. Wire it in when ready to migrate the remaining unmatched colors. |
| `rename-map.json` | ✅ | Audit of every `--color-*` variable renamed to its Figma name (old → new). |

## Source

The raw Figma exports live in [`nuxt/figma/tokens/`](../../../../figma/tokens):

- `Mode 1.tokens.json` — base palette (the "mode" Figma resolves all projects against).
- `<Product>.tokens.json` — the 34 resolved semantic theme variables per product;
  these map 1:1 to `src/assets/scss/themes/_<theme>.scss`.

## Regenerate

```bash
node scripts/sync-figma-tokens.mjs
```

This is deterministic and idempotent. It:

1. Builds a `hex → Figma name` map from `Mode 1.tokens.json` (folder prefixes
   `corp/`, `shades/`, `products/` are dropped — only the leaf name is kept).
2. Renames every `--color-*` in `_colors.scss` whose hex matches a Figma color to
   `--color-<figma-name>` (the `--color` prefix is kept). Variables with **no**
   Figma match keep their old name — so the codebase shows which colors are
   already schema-mapped and which are not yet.
3. Applies that rename to every `--color-*` occurrence across the codebase
   (`.scss` / `.css` / `.vue` / `.ts` / `.js`).
4. Writes the files in this folder.
5. Regenerates `themes/_<theme>.scss` from each product token file, referencing
   palette vars where the color exists in `_colors.scss`, raw hex otherwise.

> To onboard a new color rename: update the variable in Figma, re-export the
> `.tokens.json` files into `nuxt/figma/tokens/`, and run the script again.
