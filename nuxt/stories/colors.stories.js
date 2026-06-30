import colorsScss from '../src/assets/scss/_colors.scss?raw';
import gkScss from '../src/assets/scss/themes/_gk.scss?raw';

const parseColorVars = (source) => {
  const vars = [];
  const seen = new Set();
  const regex = /(--color-[\w-]+)\s*:\s*([^;]+);/g;
  let match;

  while ((match = regex.exec(source)) !== null) {
    const name = match[1];
    const value = match[2].trim();

    if (seen.has(name)) continue;
    seen.add(name);
    vars.push({ name, value });
  }

  return vars;
};

const groupByPrefix = (vars) => {
  const groups = [];
  const index = new Map();

  vars.forEach((color) => {
    const prefix = color.name.replace('--color-', '').split('-')[0];

    if (!index.has(prefix)) {
      const group = { prefix, colors: [] };
      index.set(prefix, group);
      groups.push(group);
    }

    index.get(prefix).colors.push(color);
  });

  return groups;
};

const BASE_PREFIX_WHITELIST = ['gk', 'products', 'konnekt', 'radius', 'rm', 'scepman', 'tp', 'rj', 'uc', 'se'];

const baseGroups = groupByPrefix(parseColorVars(colorsScss)).filter((group) =>
  BASE_PREFIX_WHITELIST.includes(group.prefix)
);
const themeGroups = groupByPrefix(parseColorVars(gkScss));

const styles = {
  docs: { display: 'flex', flexDirection: 'column', gap: '3rem' },
  group: {
    marginTop: '1.75rem',
    paddingTop: '1.75rem',
    borderTop: '1px solid #e5e6e9',
  },
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '0.75rem 1.25rem',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    cursor: 'pointer',
    userSelect: 'none',
  },
  circle: {
    flex: '0 0 auto',
    display: 'inline-block',
    width: '37px',
    height: '37px',
    borderRadius: '50%',
    border: '1px solid rgba(0, 5, 32, 0.15)',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    fontFamily: "'SFMono-Regular', Consolas, monospace",
    lineHeight: '1.35',
  },
  name: { fontSize: '12px', fontWeight: '700', color: '#000520', wordBreak: 'break-all' },
  value: { fontSize: '11px', color: '#666979', wordBreak: 'break-all' },
  resolved: { fontSize: '11px', color: '#999ba6' },
  hint: { fontSize: '11px', fontWeight: '700', color: '#0072c6' },
};

export default {
  title: 'Docs/Colors',
  component: {},
  decorators: [
    (story) => ({
      components: { story },
      data() {
        return { baseGroups, themeGroups, styles };
      },
      methods: {
        circleStyle(color) {
          return { ...styles.circle, backgroundColor: `var(${color.name})` };
        },
        copy(color) {
          const markCopied = () => {
            color.copied = true;
            setTimeout(() => {
              color.copied = false;
            }, 2000);
          };

          const textarea = document.createElement('textarea');

          textarea.value = color.name;
          textarea.style.position = 'fixed';
          textarea.style.top = '0';
          textarea.style.left = '0';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();

          let succeeded = false;

          try {
            succeeded = document.execCommand('copy');
          } catch (error) {
            console.debug(error);
          }

          textarea.remove();

          if (succeeded) {
            markCopied();

            return;
          }

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
              .writeText(color.name)
              .then(markCopied)
              .catch((error) => console.debug(error));
          }
        },
      },
      mounted() {
        const probe = document.createElement('span');

        probe.style.display = 'none';
        this.$el.appendChild(probe);

        const resolve = (color) => {
          probe.style.backgroundColor = '';
          probe.style.backgroundColor = `var(${color.name})`;
          color.resolved = getComputedStyle(probe).backgroundColor;
        };

        [...this.baseGroups, ...this.themeGroups].forEach((group) => group.colors.forEach(resolve));

        probe.remove();
      },
      template: `
        <div :style="styles.docs">
          <story />

          <section>
            <h2>Base Colors <small style="font-weight: 400; opacity: 0.6;">(_colors.scss)</small></h2>
            <div v-for="group in baseGroups" :key="group.prefix" :style="styles.group">
              <div :style="styles.list">
                <div
                  v-for="color in group.colors"
                  :key="color.name"
                  :style="styles.item"
                  :title="color.name"
                  @click="copy(color)"
                  @mouseenter="color.hover = true"
                  @mouseleave="color.hover = false"
                >
                  <span :style="circleStyle(color)"></span>
                  <span :style="styles.text">
                    <code :style="styles.name">{{ color.name }}</code>
                    <span v-if="color.hover" :style="styles.hint">{{ color.copied ? 'Copied!' : 'copy to clipboard' }}</span>
                    <template v-else>
                      <span :style="styles.value">{{ color.value }}</span>
                      <span v-if="color.resolved" :style="styles.resolved">{{ color.resolved }}</span>
                    </template>
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Theme Rules <small style="font-weight: 400; opacity: 0.6;">(themes/_gk.scss — default theme)</small></h2>
            <div v-for="group in themeGroups" :key="group.prefix" :style="styles.group">
              <div :style="styles.list">
                <div
                  v-for="color in group.colors"
                  :key="color.name"
                  :style="styles.item"
                  :title="color.name"
                  @click="copy(color)"
                  @mouseenter="color.hover = true"
                  @mouseleave="color.hover = false"
                >
                  <span :style="circleStyle(color)"></span>
                  <span :style="styles.text">
                    <code :style="styles.name">{{ color.name }}</code>
                    <span v-if="color.hover" :style="styles.hint">{{ color.copied ? 'Copied!' : 'copy to clipboard' }}</span>
                    <template v-else>
                      <span :style="styles.value">{{ color.value }}</span>
                      <span v-if="color.resolved" :style="styles.resolved">{{ color.resolved }}</span>
                    </template>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      `,
    }),
  ],
};

export const Colors = {};
