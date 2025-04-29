import { ref, Ref } from 'vue';

import AuthorsData from '../../../../.storybook/data/authors.js';
import { ContentDe } from '../../../../.storybook/data/content.js';

/**
 * A composable for handling asynchronous data fetching
 * @param key - A unique key for the data
 * @param fn - The async function to fetch data
 * @returns An object containing the data, loading state, error, and refresh function
 */
export function useAsyncData<T>(key: string, fn: () => Promise<T>) {
  // Create immediate mock data based on the key
  const initialMockData = (() => {
    // Special cases for known collections
    if (key === 'authors_data') {
      return {
        meta: AuthorsData,
      } as T;
    } else if (key === 'content_de' || key === 'posts') {
      return {
        ...ContentDe,
      } as T;
    }

    // Default mock data for other collections
    const mockKey = key.split('_')[0];
    return {
      meta: {
        [mockKey]: {
          id: Math.floor(Math.random() * 1000),
          name: `${mockKey} Item`,
          description: `This is a mock ${mockKey} item`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    } as T;
  })();

  // Initialize with mock data immediately
  const data = ref<T>(initialMockData) as Ref<T>;
  const pending = ref(true);
  const error = ref<Error | null>(null);

  const refresh = async () => {
    pending.value = true;
    error.value = null;

    try {
      // Execute the provided function to get data
      const result = await fn();

      // Update with real data if available
      if (result) {
        data.value = result;
      }
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
      // Keep using the initial mock data on error
    } finally {
      pending.value = false;
    }
  };

  // Start the async operation in the background
  refresh();

  return {
    data,
    pending,
    error,
    refresh,
  };
}
