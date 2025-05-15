import { useNuxtApp } from 'nuxt/app';

// Define the type for the queryCollection function
type QueryCollectionFn = (collectionName: string) => {
  first: () => Promise<any>;
  // Add more methods as needed
};

/**
 * A composable for querying collections
 * @param collectionName - The name of the collection to query
 * @returns A query builder object with methods like first(), find(), etc.
 */
export function queryCollection(collectionName: string) {
  const nuxtApp = useNuxtApp();

  // Get the queryCollection function from the plugin
  const queryFn = nuxtApp.$queryCollection as QueryCollectionFn;

  if (!queryFn) {
    // If the plugin is not registered, provide a minimal implementation
    console.warn('queryCollection plugin is not registered, using minimal implementation');

    return {
      first: async () => {
        // Return an empty object - the actual data will come from useAsyncData
        return {};
      },
    };
  }

  return queryFn(collectionName);
}
