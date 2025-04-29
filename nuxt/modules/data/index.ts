import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';

export interface ModuleOptions {
  // Add module options here if needed
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
    // Default options
  },
  setup(options, nuxt) {
    // Register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push('./modules/data/runtime/composables');
    });

    // Add plugin if needed
    addPlugin('./modules/data/runtime/plugin');
  },
});
