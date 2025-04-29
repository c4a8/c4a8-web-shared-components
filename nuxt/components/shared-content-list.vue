<template>
  list : {{ list }}
  <template v-if="list">
    LIST LILST
    <slot v-bind:list="list" />
  </template>
  <slot v-bind:list="dataList" v-else></slot>
</template>

<script setup>
import Tools from '../utils/tools.js';
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

const isStorybook = computed(() => Tools.isStorybook());

const { locale } = useI18n();

const localeQuery = computed(() => ({
  ...props.query,
  where: {
    ...props.query.where,
  },
}));

const dataKey = props.query?.key || props.query?.path?.replace('/', 'content-') || 'content-list';

const { data: list } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + locale.value;
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

  return queryBuilder.all();
});
</script>
