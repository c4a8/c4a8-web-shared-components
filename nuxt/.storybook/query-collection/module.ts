import { dirname, join } from 'node:path';
import { addImports, createResolver, defineNuxtModule, resolvePath } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'storybook-query-collection',
  },
  async setup(_, nuxt) {
    if (nuxt.options.buildId !== 'storybook') return;

    const { resolve } = createResolver(import.meta.url);
    const contentModule = await resolvePath('@nuxt/content');

    nuxt.options.alias['#content-runtime-app'] = join(dirname(contentModule), 'runtime/app');

    addImports({ name: 'queryCollection', from: resolve('./runtime'), priority: 2 });
  },
});
