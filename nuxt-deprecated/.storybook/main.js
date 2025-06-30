/** @type { import('storybook-vue').StorybookConfig } */

import { mergeConfig } from 'vite';
import path from 'path';

const getAbsolutePath = (packageName) => path.dirname(require.resolve(path.join(packageName, 'package.json')));

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: getAbsolutePath('@storybook-vue/nuxt'),
    options: {},
  },
  docs: {},
  staticDirs: ['../public', '../static'],
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          vue: 'vue/dist/vue.esm-bundler',
        },
      },
    });
  },
};

export default config;
