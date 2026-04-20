import { promises } from 'fs';
import { defineNuxtModule, createResolver, installModule, addComponentsDir, addTemplate, addLayout, addPlugin, extendPages, addImportsDir } from '@nuxt/kit';



// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
const module = defineNuxtModule({
  meta: {
    name: "shared-components",
    configKey: "sharedComponents",
    compatibility: {
      nuxt: ">=3.16.1"
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
      ]
    };
    const sitemapOptions = {
      ...defaultSitemapOptions,
      ..._nuxt.options.sitemap,
      exclude: ["/__nuxt_content/**", ..._nuxt.options.sitemap?.exclude || []]
    };
    _nuxt.options.sitemap = sitemapOptions;
    await installModule("@nuxtjs/sitemap");
    await installModule("nuxt-schema-org");
    if (!_nuxt.options.modules.includes("nuxt-swiper")) {
      _nuxt.options.modules.push("nuxt-swiper");
    }
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
    const sfcToolsPath = resolve("./styles/sfc-tools").replace(/\\/g, "/");
    _nuxt.options.vite = _nuxt.options.vite || {};
    _nuxt.options.vite.css = _nuxt.options.vite.css || {};
    _nuxt.options.vite.css.preprocessorOptions = _nuxt.options.vite.css.preprocessorOptions || {};
    _nuxt.options.vite.css.preprocessorOptions.scss = _nuxt.options.vite.css.preprocessorOptions.scss || {};
    const existing = _nuxt.options.vite.css.preprocessorOptions.scss.additionalData;
    _nuxt.options.vite.css.preprocessorOptions.scss.additionalData = (source, filename) => {
      if (filename.endsWith(".vue")) {
        const prepend = `@import "${sfcToolsPath}";
`;
        if (typeof existing === "function") {
          return existing(prepend + source, filename);
        }
        if (typeof existing === "string") {
          return existing + prepend + source;
        }
        return prepend + source;
      }
      if (typeof existing === "function") {
        return existing(source, filename);
      }
      if (typeof existing === "string") {
        return existing + source;
      }
      return source;
    };
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
        name: "slug-posts",
        path: "/posts/:slug(.*)*",
        file: resolve("./runtime/pages/posts/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-events",
        path: "/events/:slug(.*)*",
        file: resolve("./runtime/pages/events/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-authors",
        path: "/authors/:slug(.*)*",
        file: resolve("./runtime/pages/authors/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-casestudies",
        path: "/casestudies/:slug(.*)*",
        file: resolve("./runtime/pages/casestudies/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-testimonials",
        path: "/testimonials/:slug(.*)*",
        file: resolve("./runtime/pages/testimonials/[...slug].vue")
      });
    });
    extendPages((pages) => {
      pages.unshift({
        name: "slug-all",
        path: "/:slug(.*)*",
        file: resolve("./runtime/pages/[...slug].vue")
      });
    });
    addImportsDir(resolve("./runtime/composables"));
  }
});

export { module as default };
