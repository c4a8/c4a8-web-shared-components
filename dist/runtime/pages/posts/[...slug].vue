<template>
  <page-default>
    <content>
      <post-detail :post="post" :share-url="shareUrl" />
    </content>
  </page-default>
</template>

<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp, useRequestURL, useDynamicPageMeta } from '#imports';

const route = useRoute();

const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

const dynamicMeta = useDynamicPageMeta();

const path = route.path;
const dataKey = 'post-' + path;
const shareUrl = `${useRequestURL().origin}${path}`;

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

dynamicMeta.value = {
  footer: post.value?.meta?.footer,
};
</script>
