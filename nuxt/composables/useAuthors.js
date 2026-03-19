import { useAsyncData, queryCollection } from '#imports';

function normalizeUmlauts(str) {
  const replacements = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss',
  };

  return str.replace(/[äöüÄÖÜß]/g, (match) => replacements[match]);
}

export default function useAuthors() {
  const {
    data: authors,
    pending,
    error,
    refresh,
  } = useAsyncData(
    'authors_data',
    async () => {
      return await queryCollection('authors_data').first();
    },
    {
      transform: (data) => {
        if (!data?.meta) return data;

        const augmentedMeta = { ...data.meta };

        Object.keys(data.meta).forEach((name) => {
          const normalizedName = normalizeUmlauts(name);

          if (normalizedName !== name) {
            augmentedMeta[normalizedName] = data.meta[name];
          }
        });

        return {
          ...data,
          meta: augmentedMeta,
        };
      },
    }
  );

  return {
    authors: authors.value?.meta || null,
    pending,
    error,
    refresh,
  };
}
