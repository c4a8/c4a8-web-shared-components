// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

const turnstileSiteKey = process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY ?? null;
const personioApiKey = process.env.NUXT_PUBLIC_PERSONIO_API_KEY ?? null;

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
    turnstile?: {
      siteKey?: string;
    };
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/storybook',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-swiper',
    '@nuxtjs/turnstile',
    '@nuxt/scripts',
  ],
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    detectBrowserLanguage: false,
    locale: 'de',
    legacy: false,
    fallbackLocale: 'en',
    // defaultLocale: 'de',
    // strategy: 'prefix',
    locales: ['de', 'en', 'es'],
    vueI18n: './i18n.config.js',
  },
  runtimeConfig: {
    public: {
      personioApiKey,
    },
  },
  turnstile: {
    siteKey: turnstileSiteKey ?? undefined,
  },
});
