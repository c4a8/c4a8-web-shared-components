// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

declare module 'nuxt/config' {
  interface NuxtConfig {
    storybook?: {
      port?: number;
      [key: string]: any;
    };
    i18n?: {
      bundle?: {
        optimizeTranslationDirective?: boolean;
        [key: string]: any;
      };
      detectBrowserLanguage?: boolean;
      locale?: string;
      legacy?: boolean;
      fallbackLocale?: string;
      defaultLocale?: string;
      strategy?: string;
      locales?: string[];
      vueI18n?: string;
      [key: string]: any;
    };
    content?: {
      markdown?: {
        anchorLinks?: boolean;
        [key: string]: any;
      };
      locales?: string[];
      defaultLocale?: string;
      [key: string]: any;
    };
    data?: {
      // Add data module options here if needed
      [key: string]: any;
    };
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-08-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/storybook',
    // '@nuxt/content',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    // [
    //   'shared-components',
    //   {
    //     theme: 'gk',
    //   },
    // ],
    '~/modules/data',
  ], // , '@nuxt/image'
  storybook: {
    port: 6006,
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: false,
    locale: 'de',
    legacy: false,
    fallbackLocale: 'en',
    defaultLocale: 'de',
    strategy: 'prefix',
    locales: ['de', 'en', 'es'],
    vueI18n: './i18n.config.js',
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    locales: ['de', 'en', 'es'],
    defaultLocale: 'de',
  },
});

// TODO try to fix nuxt content inside storybook. right now query is not working and returns a 404
