<template>
  <slot v-bind:list="contentList" :strategy="strategy" />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useAsyncData, queryCollection } from '#imports';

const props = defineProps({
  query: {
    type: Object,
    required: true,
  },
  dataList: {
    type: Array,
    default: () => [],
  },
});

const { locale, strategy } = useI18n();

// A fast, 53-bit hash function (No external lib needed)
const hash = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;

  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }

  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
};

const localeQuery = computed(() => ({
  ...props.query,
  where: {
    ...props.query.where,
  },
}));

const whereHash = hash(JSON.stringify(props.query?.where || {}));
const dataKey =
  props.query?.key || `content-${locale.value}-${(props.query?.path || 'list').replace(/\//g, '-')}-${whereHash}`;

const filterDuplicateItems = (items) => {
  const seen = new Map();

  return items.filter((item) => {
    const normalizedPath = item.path?.replace(/-(en|es)(\.md)?$/, '');

    if (!normalizedPath) return true;

    if (seen.has(normalizedPath)) {
      return false;
    }

    seen.set(normalizedPath, true);

    return true;
  });
};

const buildQuery = (collectionName) => {
  const query = queryCollection(collectionName);

  let queryBuilder = query;

  if (localeQuery.value.where && Object.keys(localeQuery.value.where).length > 0) {
    Object.entries(localeQuery.value.where).forEach(([field, condition]) => {
      if (typeof condition === 'object') {
        Object.entries(condition).forEach(([operator, value]) => {
          queryBuilder = queryBuilder.where(field, operator, value);
        });
      } else {
        queryBuilder = queryBuilder.where(field, '=', condition);
      }
    });
  }

  return queryBuilder;
};

const list = computed(() => {
  if (props.dataList.length > 0) return props.dataList;

  return null;
});

const { data: asyncList } = await useAsyncData(dataKey, async () => {
  if (props.dataList.length > 0) return null;

  const mainCollection = 'content_' + locale.value;
  const mainResults = await buildQuery(mainCollection).all();

  if (!props.query.additionalCollections?.length) {
    return mainResults;
  }

  const additionalResults = await Promise.all(
    props.query.additionalCollections.map(async (collection) => {
      const collectionName = collection;

      return buildQuery(collectionName).all();
    })
  );

  const allResults = [...mainResults, ...additionalResults.flat()];

  return filterDuplicateItems(allResults);
});

const contentList = computed(() => list.value || asyncList.value);
</script>
