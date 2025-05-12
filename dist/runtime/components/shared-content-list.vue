<template>
  <template v-if="list">
    <slot v-bind:list="list" />
  </template>
  <slot v-bind:list="dataList" v-else></slot>
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

const { locale } = useI18n();

const localeQuery = computed(() => ({
  ...props.query,
  where: {
    ...props.query.where,
  },
}));

const dataKey = props.query?.key || props.query?.path?.replace('/', 'content-') || 'content-list';

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

const { data: list } = await useAsyncData(dataKey, async () => {
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
</script>
