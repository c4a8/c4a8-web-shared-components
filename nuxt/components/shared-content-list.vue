<template>
  <slot v-bind:list="contentList" :strategy="strategy" />
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useAsyncData, queryCollection } from '#imports';
import Tools from '../utils/tools';

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

const localeQuery = computed(() => ({
  ...props.query,
  where: {
    ...props.query.where,
  },
}));

const dataKey = props.query?.key || Tools.getDataKey('content', props.query, locale.value);

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

const getPrimarySort = (lQuery) => {
  if (!Array.isArray(lQuery.sort) || lQuery.sort.length === 0) return null;

  const [field, direction] = Object.entries(lQuery.sort[0])[0];

  return { field, direction: direction === 1 ? 'ASC' : 'DESC' };
};

const buildQuery = (collectionName, { missingSortField = false } = {}) => {
  const query = queryCollection(collectionName);

  let queryBuilder = query;
  const lQuery = localeQuery.value;
  const primarySort = getPrimarySort(lQuery);

  if (lQuery.where && Object.keys(lQuery.where).length > 0) {
    Object.entries(lQuery.where).forEach(([field, condition]) => {
      if (typeof condition === 'object') {
        Object.entries(condition).forEach(([operator, value]) => {
          queryBuilder = queryBuilder.where(field, operator, value);
        });
      } else {
        queryBuilder = queryBuilder.where(field, '=', condition);
      }
    });
  }

  if (missingSortField) {
    queryBuilder = queryBuilder.where(primarySort.field, 'IS NULL').order('stem', primarySort.direction);
  } else {
    if (primarySort && lQuery.limit) {
      queryBuilder = queryBuilder.where(primarySort.field, 'IS NOT NULL');
    }

    if (Array.isArray(lQuery.sort)) {
      lQuery.sort.forEach((sortItem) => {
        Object.entries(sortItem).forEach(([field, direction]) => {
          queryBuilder = queryBuilder.order(field, direction === 1 ? 'ASC' : 'DESC');
        });
      });
    }
  }

  if (lQuery.limit) {
    queryBuilder = queryBuilder.limit(lQuery.limit);
  }

  return queryBuilder;
};

const fetchCollection = async (collectionName) => {
  const lQuery = localeQuery.value;
  const results = await buildQuery(collectionName).all();

  if (!getPrimarySort(lQuery) || !lQuery.limit) return results;

  const missingSortFieldResults = await buildQuery(collectionName, { missingSortField: true }).all();

  return [...results, ...missingSortFieldResults];
};

const list = computed(() => {
  if (props.dataList.length > 0) return props.dataList;

  return null;
});

const { data: asyncList } = await useAsyncData(dataKey, async () => {
  if (props.dataList.length > 0) return null;

  const mainCollection = 'content_' + locale.value;
  const mainResults = await fetchCollection(mainCollection);

  if (!props.query.additionalCollections?.length) {
    return mainResults;
  }

  const additionalResults = await Promise.all(
    props.query.additionalCollections.map(async (collection) => {
      const collectionName = collection;

      return fetchCollection(collectionName);
    })
  );

  const allResults = [...mainResults, ...additionalResults.flat()];

  return filterDuplicateItems(allResults);
});

const contentList = computed(() => list.value || asyncList.value);
</script>
