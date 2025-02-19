import { promises } from 'fs';
import { defineNuxtModule, createResolver, installModule, addComponentsDir, addTemplate, addLayout, addPlugin, extendPages, addImportsDir } from '@nuxt/kit';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const adBlockImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 100 100' height='400' width='400'%3E%3Cpath fill='%23e5f8ff' stroke='%23DAEDF7' stroke-miterlimit='10' d='M50.28 90C72.3714 90 90.28 72.0914 90.28 50C90.28 27.9086 72.3714 10 50.28 10C28.1886 10 10.28 27.9086 10.28 50C10.28 72.0914 28.1886 90 50.28 90Z'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M66.226 41.1997H16.464C15.9336 41.1997 15.4248 41.4104 15.0498 41.7855C14.6747 42.1606 14.464 42.6693 14.464 43.1997V75.3337H68.226V43.1997C68.226 42.6693 68.0153 42.1606 67.6402 41.7855C67.2651 41.4104 66.7564 41.1997 66.226 41.1997Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23ff866e' d='M52.994 44.9966L20.42 75.3336H18.259L18.312 44.9966H52.994Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M64.431 44.9966H18.312L18.259 75.3336H64.431V44.9966Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M41.345 84.2985C55.3178 84.2985 66.645 83.5598 66.645 82.6485C66.645 81.7373 55.3178 80.9985 41.345 80.9985C27.3722 80.9985 16.045 81.7373 16.045 82.6485C16.045 83.5598 27.3722 84.2985 41.345 84.2985Z' opacity='.15'%3E%3C/path%3E%3Cpath fill='%23f5f5f5' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1286H9.72V76.3286C9.72 76.0634 9.82536 75.809 10.0129 75.6215C10.2004 75.434 10.4548 75.3286 10.72 75.3286H71.97C72.2352 75.3286 72.4896 75.434 72.6771 75.6215C72.8646 75.809 72.97 76.0634 72.97 76.3286V79.1286Z'%3E%3C/path%3E%3Cpath fill='%23adc4d9' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M72.97 79.1289C67.0954 80.8072 61.0156 81.6587 54.906 81.6589H27.784C21.6744 81.6586 15.5946 80.8071 9.72 79.1289H72.97Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' stroke='%23e04122' stroke-linecap='round' stroke-linejoin='round' d='M46.145 67.3147C45.8364 67.3155 45.5307 67.2551 45.2456 67.137C44.9605 67.0189 44.7017 66.8454 44.484 66.6267L41.345 63.4887L38.207 66.6267C37.9885 66.8449 37.7292 67.0179 37.4439 67.1359C37.1586 67.2539 36.8528 67.3145 36.5441 67.3143C36.2353 67.3141 35.9296 67.2531 35.6444 67.1348C35.3593 67.0165 35.1002 66.8431 34.882 66.6247C34.6638 66.4062 34.4908 66.1469 34.3728 65.8616C34.2548 65.5763 34.1942 65.2705 34.1944 64.9618C34.1945 64.653 34.2555 64.3473 34.3739 64.0621C34.4922 63.777 34.6655 63.5179 34.884 63.2997L38.022 60.1607L34.884 57.0227C34.6602 56.8058 34.4818 56.5465 34.3592 56.2599C34.2365 55.9734 34.1721 55.6653 34.1697 55.3536C34.1673 55.042 34.2269 54.7329 34.345 54.4445C34.4632 54.1561 34.6376 53.894 34.8579 53.6737C35.0783 53.4533 35.3404 53.2789 35.6288 53.1608C35.9172 53.0426 36.2262 52.983 36.5379 52.9854C36.8496 52.9878 37.1577 53.0522 37.4442 53.1749C37.7308 53.2975 37.99 53.4759 38.207 53.6997L41.345 56.8387L44.484 53.6997C44.927 53.2703 45.521 53.0323 46.1379 53.0371C46.7548 53.0419 47.3451 53.2891 47.7813 53.7253C48.2176 54.1616 48.4648 54.7519 48.4696 55.3688C48.4744 55.9857 48.2364 56.5797 47.807 57.0227L44.668 60.1607L47.807 63.2997C48.1354 63.6284 48.359 64.0471 48.4496 64.5029C48.5401 64.9586 48.4935 65.431 48.3156 65.8603C48.1377 66.2895 47.8366 66.6565 47.4502 66.9146C47.0639 67.1728 46.6097 67.3106 46.145 67.3107V67.3147Z'%3E%3C/path%3E%3Cpath fill='%2300b8f0' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%2380ddff' d='M71.567 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V42.2998L71.567 15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C46.4158 15.6548 44.92 17.1506 44.92 18.9958V46.6608C44.92 48.506 46.4158 50.0018 48.261 50.0018H84.69C86.5352 50.0018 88.031 48.506 88.031 46.6608V18.9958C88.031 17.1506 86.5352 15.6548 84.69 15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ffffff' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M84.69 15.6548H48.261C47.8219 15.6548 47.3871 15.7413 46.9815 15.9095C46.5759 16.0776 46.2074 16.3241 45.8971 16.6348C45.5868 16.9454 45.3408 17.3142 45.1732 17.72C45.0055 18.1258 44.9195 18.5607 44.92 18.9998V23.5998H88.031V18.9998C88.0315 18.5607 87.9455 18.1258 87.7778 17.72C87.6102 17.3142 87.3641 16.9454 87.0538 16.6348C86.7436 16.3241 86.3751 16.0776 85.9695 15.9095C85.5638 15.7413 85.1291 15.6548 84.69 15.6548V15.6548Z'%3E%3C/path%3E%3Cpath fill='%23ff6242' d='M49.932 21.279C50.8549 21.279 51.603 20.5309 51.603 19.608C51.603 18.6851 50.8549 17.937 49.932 17.937C49.0091 17.937 48.261 18.6851 48.261 19.608C48.261 20.5309 49.0091 21.279 49.932 21.279Z'%3E%3C/path%3E%3Cpath fill='%23ffe500' d='M55.789 21.279C56.7119 21.279 57.46 20.5309 57.46 19.608C57.46 18.6851 56.7119 17.937 55.789 17.937C54.8661 17.937 54.118 18.6851 54.118 19.608C54.118 20.5309 54.8661 21.279 55.789 21.279Z'%3E%3C/path%3E%3Cpath fill='%2348cf3e' d='M61.646 21.279C62.5688 21.279 63.317 20.5309 63.317 19.608C63.317 18.6851 62.5688 17.937 61.646 17.937C60.7231 17.937 59.975 18.6851 59.975 19.608C59.975 20.5309 60.7231 21.279 61.646 21.279Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M55.999 34.052C56.9103 34.052 57.649 33.3132 57.649 32.402C57.649 31.4907 56.9103 30.752 55.999 30.752C55.0877 30.752 54.349 31.4907 54.349 32.402C54.349 33.3132 55.0877 34.052 55.999 34.052Z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M76.899 34.052C77.8103 34.052 78.549 33.3132 78.549 32.402C78.549 31.4907 77.8103 30.752 76.899 30.752C75.9877 30.752 75.249 31.4907 75.249 32.402C75.249 33.3132 75.9877 34.052 76.899 34.052Z'%3E%3C/path%3E%3Cpath fill='%23c7f0ff' stroke='%233887B7' stroke-linecap='round' stroke-linejoin='round' d='M80.12 39.6307C80.1097 40.0406 79.9395 40.4302 79.646 40.7165C79.3524 41.0028 78.9585 41.163 78.5485 41.163C78.1384 41.163 77.7446 41.0028 77.451 40.7165C77.1574 40.4302 76.9873 40.0406 76.977 39.6307C76.977 38.7627 78.549 35.7017 78.549 35.7017C78.549 35.7017 80.12 38.7627 80.12 39.6307Z'%3E%3C/path%3E%3Cpath fill='%23ffb59e' stroke='%23000000' stroke-linecap='round' stroke-linejoin='round' d='M61.727 44.2536C61.5404 44.2535 61.3563 44.2108 61.1886 44.1288C61.021 44.0468 60.8743 43.9277 60.7596 43.7804C60.645 43.6332 60.5654 43.4618 60.527 43.2791C60.4886 43.0965 60.4924 42.9076 60.538 42.7266C60.8732 41.4135 61.6361 40.2494 62.7064 39.418C63.7766 38.5866 65.0933 38.1353 66.4485 38.1353C67.8037 38.1353 69.1204 38.5866 70.1906 39.418C71.2609 40.2494 72.0238 41.4135 72.359 42.7266C72.406 42.9073 72.4106 43.0964 72.3722 43.2791C72.3339 43.4618 72.2537 43.6331 72.138 43.7796C72.0236 43.9274 71.8769 44.0469 71.7091 44.1291C71.5413 44.2113 71.3569 44.2539 71.17 44.2536C69.6156 43.9216 68.0367 43.7176 66.449 43.6436C64.861 43.7176 63.2817 43.9216 61.727 44.2536V44.2536Z'%3E%3C/path%3E%3C/svg%3E";
const translations = {
  de: {
    tags: "Schlagw\xF6rter",
    tagsHeadline: "Posts nach Schlagw\xF6rtern",
    tagsClear: "Zur\xFCcksetzen",
    posts: "Eintr\xE4ge",
    follow: "Folgen",
    similarPosts: "\xC4hnliche Artikel",
    withAuthor: "Mit",
    adBlockInfo: `
        <div class="ad-block-info__content">
          <img src="${adBlockImage}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Hoppla, Adblocker erkannt!</h5>
            <div class="ad-block-info__text">Damit unsere Website reibungslos funktioniert, f\xFCge uns zur Whitelist hinzu. Wir nerven nicht mit Werbung. Versprochen!</div>
          </div>
        </div>`,
    vatInfo: "*Alle Preise sind exklusive Mehrwertsteuer. Unsere Angebote richten sich ausschlie\xDFlich an gewerbliche Kunden.",
    posts: "Eintr\xE4ge",
    address: "Adresse",
    follow: "Folgen",
    full_time: "Vollzeit",
    part_time: "Teilzeit",
    contract: "Leiharbeitszeit",
    gender: "(m/w/d)",
    formAttachmentsWrongType: "Bitte w\xE4hle ein g\xFCltiges Dateiformat und achte darauf, dass der Dateiname keine Sonderzeichen enth\xE4lt.",
    formAttachmentsMaxFiles: "Max. %s Dateien",
    formAttachmentsMaxSize: "Eine oder mehrere Dateien sind zu gro\xDF.",
    onlyLanguage: "German only",
    moreEvents: "Weitere Termine",
    positionTypePermanently: "Festanstellung",
    positionTypeInternship: "Praktikum oder Werkstudentent\xE4tigkeit",
    positionTypeTraining: "Ausbildung oder Traineeprogramm",
    positionTypeStudent: "Werkstudierende",
    filterAuthors: "Autoren",
    filterTopics: "Themen",
    filterTags: "Tags",
    clearAll: "Alles l\xF6schen",
    search: "Suche",
    apply: "Anwenden",
    reset: "Zur\xFCcksetzen",
    jobListEmpty: "Aktuell haben wir keine Stellenangebote in dieser Sprache.",
    imageCredits: "Bildnachweis"
  },
  en: {
    tags: "Tags",
    tagsHeadline: "Posts by Tags",
    tagsClear: "Clear all",
    posts: "Posts",
    follow: "Follow",
    similarPosts: "Similar Posts",
    withAuthor: "With",
    adBlockInfo: `
        <div class="ad-block-info__content">
          <img src="${adBlockImage}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detected!</h5>
            <div class="ad-block-info__text">To keep our website running smoothly, add us to the whitelist. We won't annoy you with ads. Promise!</div>
          </div>
        </div>`,
    vatInfo: 'More information about the <a data-trigger-id="product-stage-modal" data-trigger="modal">pricing conditions.</a>',
    posts: "Posts",
    address: "Address",
    follow: "Follow",
    full_time: "Full-Time",
    part_time: "Part-Time",
    contract: "Contract work",
    gender: "(m/f/d)",
    formAttachmentsWrongType: "Please choose a valid file format and make sure that the file name does not contain any special characters.",
    formAttachmentsMaxFiles: "Max. %s Files",
    formAttachmentsMaxSize: "One or more files are too large.",
    onlyLanguage: "English only",
    moreEvents: "More events",
    positionTypePermanently: "Permanent",
    positionTypeInternship: "Internship",
    positionTypeTraining: "Trainee",
    positionTypeStudent: "Working Students",
    filterAuthors: "Authors",
    filterTopics: "Topics",
    filterTags: "Tags",
    clearAll: "Clear all",
    search: "Search",
    apply: "Apply",
    reset: "Reset",
    jobListEmpty: "We currently have no positions in this language.",
    imageCredits: "Picture Credits"
  },
  es: {
    tags: "Tags",
    tagsHeadline: "Entradas por Tags",
    tagsClear: "Borrar todo",
    posts: "Puestos",
    follow: "Siga",
    similarPosts: "Puestos similares",
    withAuthor: "Con",
    adBlockInfo: `
        <div class="ad-block-info__content">
          <img src="${adBlockImage}" alt="Full Service" class="is-svg">
          <div class="ad-block-info__row">
            <h5>Oops, adblocker detectado!</h5>
            <div class="ad-block-info__text">Para que nuestro sitio web funcione correctamente, a\xF1\xE1denos a tu lista blanca. No te molestaremos con publicidad. Te lo prometemos.</div>
          </div>
        </div>`,
    vatInfo: "*Todos los precios son sin IVA. Nuestras ofertas se dirigen exclusivamente a clientes profesionales.",
    posts: "Entradas",
    address: "Direcci\xF3n",
    follow: "Seguir",
    full_time: "Tiempo completo",
    part_time: "Tiempo parcial",
    contract: "Contrato de trabajo",
    gender: "(h/m/d)",
    formAttachmentsWrongType: "Elija un formato de archivo v\xE1lido y aseg\xFArese de que el nombre del archivo no contiene caracteres especiales.",
    formAttachmentsMaxFiles: "M\xE1x. %s archivos",
    formAttachmentsMaxSize: "Uno o m\xE1s archivos son demasiado grandes.",
    onlyLanguage: "S\xF3lo espa\xF1ol",
    moreEvents: "Otras fechas",
    positionTypePermanently: "Puesto permanente",
    positionTypeInternship: "Pr\xE1cticas",
    positionTypeTraining: "Educaci\xF3n",
    positionTypeStudent: "Estudiantes que trabajan",
    filterAuthors: "Autores",
    filterTopics: "Temas",
    filterTags: "Tags",
    clearAll: "Borrar todo",
    search: "Buscar en",
    apply: "Aplicar",
    reset: "Reiniciar",
    jobListEmpty: "Actualmente no tenemos posiciones en este idioma.",
    imageCredits: "Cr\xE9ditos de las fotos"
  }
};

const module = defineNuxtModule({
  // TODO prereder collections
  // https://nuxt.com/docs/getting-started/prerendering#prerenderroutes-nuxt-hook
  // hooks: {
  //   async "prerender:routes"(ctx) {
  //     const { pages } = await fetch("https://api.some-cms.com/pages").then(
  //       (res) => res.json(),
  //     );
  //     for (const page of pages) {
  //       ctx.routes.add(`/${page.name}`);
  //     }
  //   },
  // },
  meta: {
    name: "shared-components",
    configKey: "sharedComponents",
    compatibility: {
      nuxt: ">=3.0.0"
    }
  },
  defaults: {
    // TODO add prefix and rename components
    // prefix: 'shared'
  },
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const { theme } = _options;
    console.log("\u2714 Shared components module setup");
    console.log("messages ", _nuxt.options.i18n);
    console.log("translations", translations);
    const i18nOptions = {
      legacy: false,
      locale: "de",
      fallbackLocale: "en",
      messages: translations
    };
    _nuxt.options.i18n = {
      ...i18nOptions,
      ..._nuxt.options.i18n
    };
    _nuxt.options.runtimeConfig.public.sharedComponents = _options || {};
    const defaultSitemapOptions = {
      discoverImages: false,
      discoverVideos: false,
      autoI18n: false,
      sitemapName: "sitemap.xml",
      credits: false,
      sitemaps: false,
      xslColumns: [
        { label: "URL", width: "75%" },
        { label: "Last Modified", select: "sitemap:lastmod", width: "25%" }
        // { label: 'Hreflangs', select: 'count(xhtml:link)', width: '25%' },
      ]
    };
    const sitemapOptions = {
      ...defaultSitemapOptions,
      ..._nuxt.options.sitemap
    };
    _nuxt.options.sitemap = sitemapOptions;
    await installModule("@nuxtjs/sitemap");
    const runtimeDir = resolve(__dirname, "./runtime");
    const optimizeDeps = [runtimeDir, "node-html-parser", "jquery", "slick-carousel"];
    _nuxt.options.build.transpile = _nuxt.options.build.transpile || [];
    _nuxt.options.build.transpile.push(...optimizeDeps);
    _nuxt.options.vite.optimizeDeps ||= {};
    _nuxt.options.vite.optimizeDeps.include ||= [];
    _nuxt.options.vite.optimizeDeps.include.push(...optimizeDeps);
    _nuxt.options.css.push(resolve("./styles/index.min.css"));
    if (theme) {
      _nuxt.options.css.push(resolve(`./styles/${theme}.min.css`));
    }
    addComponentsDir({
      path: resolve("./runtime/components")
    });
    const layoutsDir = resolve("./runtime/components/layouts");
    const layoutFiles = await promises.readdir(layoutsDir);
    layoutFiles.forEach((file) => {
      if (file.endsWith(".vue")) {
        const name = file.replace(".vue", "");
        const template = addTemplate({
          src: resolve(`${layoutsDir}/${file}`),
          write: true
        });
        addLayout(template, name);
      }
    });
    addPlugin(resolve("./runtime/plugin"));
    extendPages((pages) => {
      pages.unshift({
        name: "slug-all",
        path: "/:slug(.*)*",
        file: resolve("./runtime/pages/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-events",
        path: "/events/:slug(.*)*",
        file: resolve("./runtime/pages/events/[...slug].vue")
      });
    });
    addImportsDir(resolve("./runtime/composables"));
  }
});

export { module as default };
