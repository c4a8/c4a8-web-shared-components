import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  staticDirs: ['../public', '../static'],
};

export default config;
