<template>
  <page-default>
    <content>
      <post-detail :post="post" />
    </content>
  </page-default>
</template>

<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp } from '#imports';

const route = useRoute();

const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

definePageMeta({
  footer: {
    noMargin: true,
  },
});

const path = route.path;
const dataKey = 'post-' + path;

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});
</script>
