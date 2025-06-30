import { defineNuxtPlugin } from 'nuxt/app';

import AuthorsData from '../../../.storybook/data/authors.js';
import { ContentDe } from '../../../.storybook/data/content.js';

export default defineNuxtPlugin((nuxtApp) => {
  // This plugin provides the queryCollection function to the app
  return {
    provide: {
      queryCollection: (collectionName: string) => {
        // Minimal implementation that returns data based on collection name
        return {
          first: async () => {
            // Return data based on collection name
            switch (collectionName) {
              case 'authors_data':
                return { meta: AuthorsData };
              case 'content_de':
              case 'posts':
                return ContentDe;
              default:
                // For other collections, return an empty object
                // The actual data will come from useAsyncData
                return {};
            }
          },
        };
      },
    },
  };
});
