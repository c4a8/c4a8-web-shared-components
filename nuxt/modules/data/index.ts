import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  postsMapping?: Record<string, string>;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-data',
    configKey: 'data',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    postsMapping: {},
  },
  setup(options, nuxt) {
    // Register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push('./modules/data/runtime/composables');
    });

    // Add runtime config
    nuxt.options.runtimeConfig.public.postsMapping = options.postsMapping;

    // Add plugin if needed
    addPlugin('./modules/data/runtime/plugin');
  },
});
