import { queryCollection as contentQueryCollection } from '#content-runtime-app';
import Authors from '../data/authors.js';

export const queryCollection = (collection) => {
  if (collection !== 'authors_data') return contentQueryCollection(collection);

  return {
    first: async () => ({ meta: Authors }),
  };
};
