// .storybook/middleware.js

import AuthorsData from './data/authors.js';

// Mock content data - you can replace this with your actual content
const mockContent = {
  authors_data: AuthorsData,
  content_de: {
    // Add your German content here
  },
  content_en: {
    // Add your English content here
  },
  content_es: {
    // Add your Spanish content here
  },
};

/** @type {import('@storybook/core-common').StorybookConfigMiddleware} */
export default function (router) {
  router.use((req, res, next) => {
    if (req.url.startsWith('/__nuxt_content')) {
      console.log(`Mocking content for ${req.url}`);

      const contentKey = req.url.split('/__nuxt_content/')[1].split('/')[0];
      const content = mockContent[`${contentKey}`] || {};

      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(content));
    } else {
      next();
    }
  });
}
