import { useAsyncData, queryCollection } from '#imports';

/**
 * Composable for fetching authors data
 * @returns {Object} Object containing authors data and loading state
 */
export default function useAuthors() {
  const {
    data: authors,
    pending,
    error,
    refresh,
  } = useAsyncData('authors_data', () => {
    const query = queryCollection('authors_data');

    return query.first();
  });

  return {
    authors: authors.value?.meta || null,
    pending,
    error,
    refresh,
  };
}
