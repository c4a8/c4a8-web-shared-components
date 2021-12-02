import '../assets/scss/index.scss';
import '../assets/js/index.js';

import { Styles } from './themeImports';

import { STORY_RENDERED } from '@storybook/core-events';
import addons from '@storybook/addons';
import { EVENTS, DEFAULT_THEME, addStyles, addBaseClass } from './themes/src/themes';

let currentTheme = DEFAULT_THEME;

function loadTheme(theme) {
  addBaseClass(theme);
  addStyles(Styles[theme]);

  currentTheme = theme;
}

const channel = addons.getChannel();

channel.on(EVENTS.CHANGE, (theme) => {
  loadTheme(theme);
});

channel.on(STORY_RENDERED, () => {
  loadTheme(currentTheme);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story, params) => {
    const body = document.querySelector('body');

    if (params.parameters?.root) {
      body.setAttribute('style', 'padding: 0 !important; margin: 0 !important');
    } else {
      body.setAttribute('style', '');
    }

    return story();
  },
];
