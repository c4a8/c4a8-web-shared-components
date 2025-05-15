import styles from '../src/assets/scss/_exports.module.scss';

export default {
  title: 'Docs/Typography',
  component: {},
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div>
          <story />
          <div class="typography-docs">
            <!-- Headline Sizes -->
            <h2>Headline Sizes:</h2>
            <div class="space-top-2" style="display: flex; grid-gap: 10px; flex-direction: column;">
              <div v-for="(typeValues, index) in types" :key="index">
                <div :class="['typography__item', typeValues.class, typeValues.light ? 'light' : '', typeValues.bold ? 'bold' : '']">
                  <template v-if="!typeValues.headline">
                    {{ typeValues.class }} {{ typeValues.light ? 'light' : typeValues.bold ? 'bold' : '' }}
                  </template>
                  <template v-else>
                    <div style="margin: 1em 0;" class="h4-font-size">{{ typeValues.headline }}</div>
                  </template>
                  <div v-if="typeValues.docs" class="typography__tooltip" v-html="typeValues.docs"></div>
                </div>
              </div>
            </div>

            <!-- Text Highlights -->
            <div class="space-top-2">
              <h2>Text Highlights:</h2>
              <div class="space-top-1">
                <div class="space-top-1">
                  <h4>&lt;span class="highlight"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <span class="highlight">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-orange"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-orange">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <span class="highlight-orange">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-yellow"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-yellow">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est <span class="highlight-yellow">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-underline"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-underline">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                  <h4>&lt;span style="--color-highlight-underline: var(--color-primary)" class="highlight-underline"&gt;</h4>
                  <p>Stet clita kasd gubergren, no sea takimata sanctus est <span style="--color-highlight-underline: var(--color-primary)" class="highlight-underline">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
                <div class="space-top-1">
                  <h4>&lt;span class="highlight-animated"&gt;</h4>
                  <p>Lorem ipsum dolor sit amet, <span class="highlight-animated">consetetur sadipscing elitr</span>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                  <h4>&lt;span style="--color-highlight-animated: var(--color-primary)" class="highlight-animated"&gt;</h4>
                  <p>Stet clita kasd gubergren, no sea takimata sanctus est <span style="--color-highlight-animated: var(--color-primary)" class="highlight-animated">Lorem ipsum dolor</span> sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      props: {
        types: {
          type: Array,
          default: () => [],
        },
      },
    }),
  ],
};

const defaultBreakpoints = ['sm', 'lg', 'xl'];

// Typography settings and generation logic
const settings = {
  'h1-font-size': {
    breakpoints: defaultBreakpoints,
    variant: 'light',
  },
  'h2-font-size': {
    breakpoints: defaultBreakpoints,
    variant: 'bold',
  },
  'h3-font-size': {
    breakpoints: defaultBreakpoints,
    variant: 'bold',
  },
  'h4-font-size': {
    breakpoints: defaultBreakpoints,
  },
  'h5-font-size': {
    breakpoints: defaultBreakpoints,
  },
  'h6-font-size': {
    breakpoints: defaultBreakpoints,
  },
  'Copy Sizes': null,
  'font-size-sm': {
    breakpoints: [''],
    variant: 'bold',
  },
  'font-size-1': {
    breakpoints: defaultBreakpoints,
    variant: 'bold',
  },
  'font-size-2': {
    breakpoints: defaultBreakpoints,
    variant: 'bold',
  },
  'font-size-3': {
    breakpoints: defaultBreakpoints,
    variant: 'bold',
  },
  'font-size-4': {
    breakpoints: defaultBreakpoints,
    variant: 'light',
  },
  'Extra Sizes': null,
  'font-size-5': {
    breakpoints: defaultBreakpoints,
    variant: 'light',
  },
  'font-size-6': {
    breakpoints: defaultBreakpoints,
    variant: 'light',
  },
  'font-size-7': {
    breakpoints: defaultBreakpoints,
    variant: 'light',
  },
  'font-size-8': {
    breakpoints: defaultBreakpoints,
    variant: 'bold',
  },
};

const baseFontSize = 16;
const generatedTypes = [];
const formatter = new Intl.NumberFormat('en-EN', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const getTypeFaceLevel = (typeFace) => {
  const typeFaceSegments = typeFace.split('-');

  return typeFaceSegments[0] === 'font' ? 'font-size-' + typeFaceSegments[2] : typeFaceSegments[0];
};

const generateDocs = function (typeFace, breakpoints) {
  if (!breakpoints) return;

  let docs = '';
  let aboveBreakpointLabel = breakpoints.length > 1 ? 'Above (lg) Breakpoint' : 'All Breakpoints';

  const typeFaceLevel = getTypeFaceLevel(typeFace);

  breakpoints.forEach(function (breakpoint) {
    const typeFaceKey = `${typeFace}${breakpoint ? '-' + breakpoint : ''}`;
    const typeFaceValue = styles[typeFaceKey];
    const typeFaceLineHeightKey = `${typeFaceLevel}-line-height`;
    const typeFaceLineHeightKeyBreakpoint = `${typeFaceLineHeightKey}${breakpoint ? '-' + breakpoint : ''}`;
    const typeFaceLineHeight = styles[typeFaceLineHeightKeyBreakpoint] || styles[typeFaceLineHeightKey];

    if (!typeFaceValue) return;

    let pxValue;

    if (typeFaceValue.indexOf('calc(') !== -1) {
      const pxValueWithRem = typeFaceValue.replace('calc(', '').replace(')', '').replace('rem', '');
      const pxValueWithRemParts = pxValueWithRem.split('/');
      const pxNumerator = parseFloat(pxValueWithRemParts[0]);
      const pxDenominator = parseFloat(pxValueWithRemParts[1]);

      pxValue = (pxNumerator / pxDenominator) * baseFontSize;
    } else {
      pxValue = typeFaceValue.replace('rem', '') * baseFontSize;
    }

    let pxValueLineHeight;

    if (typeFaceLineHeight && typeFaceLineHeight.indexOf('rem') !== -1) {
      pxValueLineHeight = typeFaceLineHeight.replace('rem', '') * baseFontSize;
    } else if (typeFaceLineHeight) {
      pxValueLineHeight = typeFaceLineHeight.replace('em', '') * pxValue;
    }

    const formattedValue = `<div class="typgraphy__tooltip-details">font-size: ${formatter.format(pxValue)}px`;
    const lineHeight = `${typeFaceLineHeight ? '<br/>line-height: ' + formatter.format(pxValueLineHeight) + 'px' : ''}`;
    const details = `${formattedValue}${lineHeight}</div>`;

    docs += `${breakpoint ? 'Breakpoint (' + breakpoint + ')' : aboveBreakpointLabel}: ${details}`;
  });

  if (docs === '') return null;

  return docs;
};

// Generate typography types
Object.keys(settings).forEach((typeFace) => {
  const typeFaceSettings = settings[typeFace];

  if (!typeFaceSettings)
    return generatedTypes.push({
      headline: typeFace,
    });

  const docs = generateDocs(typeFace, typeFaceSettings?.breakpoints);

  const typeFaceDefault = {
    class: typeFace,
    docs,
  };

  generatedTypes.push(typeFaceDefault);

  if (typeFaceSettings.variant) {
    const typeFaceVariant = {
      ...typeFaceDefault,
    };

    typeFaceVariant[typeFaceSettings.variant] = true;
    generatedTypes.push(typeFaceVariant);
  }
});

export const Typography = {
  args: {
    types: [...generatedTypes],
  },
};
