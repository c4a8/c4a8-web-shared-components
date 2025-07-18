import { defineNuxtPlugin, addRouteMiddleware, useAsyncData } from '#app';
import Events from './utils/events.js';
import translations from './locales/global.js';
import { version } from '../../package.json';

export default defineNuxtPlugin((_nuxtApp) => {
  const i18n = _nuxtApp.$i18n;

  if (i18n) {
    for (const [locale, messages] of Object.entries(translations)) {
      i18n?.mergeLocaleMessage(locale, messages);
    }
  }

  addRouteMiddleware(
    'global-collection-layouts',
    async (to) => {
      const cleanPath = to.path;

      // TODO adjust this so it works with the collections defined in your nuxt.config.js
      // const { data } = await useAsyncData('events', () =>
      //   queryContent('events')
      //     .where({
      //       _path: cleanPath,
      //     })
      //     .findOne()
      // );

      // if (data && data.value && data.value.layout) {
      //   const middlewareState = useState("middlewareState", () => null);
      //   switch (data.value.layout) {
      //     case "event":
      //       middlewareState.value = {
      //         footer: {
      //           noMargin: true,
      //         },
      //       };
      //       break;
      //   }
      // setPageLayout(data.value.layout);
      // }
    },
    { global: true }
  );

  if (process.client) {
    console.debug(`Shared Components v${version}`);

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

        document.dispatchEvent(new CustomEvent(Events.CLIENT_ONLY_LIB_LOADED));
        // add a data attribute to the body tag to mark that the libraries are loaded
        window.sharedComponents = {
          clientOnlyLibLoaded: true,
        };
      })
      .catch((error) => {
        console.error('Failed to load a library:', error);
      });
  }
});
