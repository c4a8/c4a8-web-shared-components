import '../src/assets/scss/index.scss';
import '../src/assets/scss/themes/_gk.scss';

import { h } from 'vue';
// import { createPinia } from 'pinia';
// import { setup } from '@storybook/vue3';
// import { createI18n } from 'vue-i18n';

import type { Preview } from '@nuxtjs/storybook';

declare global {
  interface Window {
    jQuery: any;
    $: any;
    sharedComponents: {
      clientOnlyLibLoaded: boolean;
    };
  }
}

import GlobalApp from '../components/global-app.vue';

// Create i18n instance
// const i18n = createI18n({
//   legacy: false,
//   defaultLocale: 'de',
//   fallbackLocale: 'en',
//   messages: {
//     de: {},
//     en: {},
//     es: {},
//   },
// });

// Setup Vue plugins
// setup((app) => {
//   app.use(createPinia());
//   app.use(i18n);
// });

const loadPlugins = () => {
  import('jquery')
    .then((module) => {
      if (!window) return;

      window.jQuery = window.$ = module.default;

      return Promise.all([
        import('bootstrap/dist/js/bootstrap.bundle.min.js'),
        import('slick-carousel'),
        import('ion-rangeslider'),
      ]);
    })
    .then(() => {
      console.debug('All libraries loaded successfully.');

      // document.dispatchEvent(new CustomEvent(Events.CLIENT_ONLY_LIB_LOADED));

      window.sharedComponents = {
        clientOnlyLibLoaded: true,
      };
    })
    .catch((error) => {
      console.error('Failed to load a library:', error);
    });
};

loadPlugins();

export const decorators = [
  (storyFn, params) => {
    const rootElement = document.getElementById('storybook-root');

    if (rootElement) {
      // TODO add theme
      const theme = 'gk';

      rootElement.classList.add('shared-components');
      rootElement.classList.add(theme);
    }

    return {
      components: { GlobalApp },

      setup() {
        if (params.parameters?.isPage) {
          return () => h(storyFn(), params.args);
        }

        return () => h(GlobalApp, {}, () => h(storyFn(), params.args));
      },
    };
  },
];

// TODO rewrite decorators but also make sure the root element has the right classes
// export const decorators = [
//   (story, context) => ({
//     components: { story, GlobalApp },
//     setup() {
//       return { args: context.args };
//     },
//     template: `
//       <global-app>
//         <story />
//       </global-app>
//     `,
//   }),
// ];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
