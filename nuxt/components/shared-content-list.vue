<template>
  <template v-if="!isStorybook">
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

// TODO move query.path to collectionName and remove /

const localeQuery = computed(() => ({
  ...props.query,
  where: {
    ...props.query.where,
  },
}));

const { data: list } = await useAsyncData('content-list', () => {
  const collectionName = 'content_' + locale.value;

  const query = queryCollection(collectionName);

  if (localeQuery.value.where && Object.keys(localeQuery.value.where).length > 0)
    return query.where(localeQuery.value.where).all();

  return query.all();
});
</script>
