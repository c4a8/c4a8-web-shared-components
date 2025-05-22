<template>
  <tracking />
  <content>
    <post-detail :post="post" :share-url="shareUrl" />
    <contact
      v-bind="contactInContent.infos"
      :contact="contactInContent.infos"
      :quote="contactInContent.quote"
      spacing="mt-10"
      v-if="contactInContent"
    />
    <text-image
      v-bind="textImageTeaser"
      :headline="null"
      :headline-text="textImageTeaser.headline"
      v-if="textImageTeaser"
    />
    <blog-recent v-bind="blogRecentData" v-if="showBlogRecent" />
  </content>
</template>
<script setup>
import {
  useRoute,
  useAsyncData,
  queryCollection,
  useNuxtApp,
  useRequestURL,
  useDynamicPageMeta,
  useI18n,
  useRuntimeConfig,
} from '#imports';

import { computed } from 'vue';

const route = useRoute();

const { t, strategy } = useI18n();

const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/');
const dataKey = 'post-' + path;
const shareUrl = `${useRequestURL().origin}${route.path}`;

const config = useRuntimeConfig();
const postsMapping = config.public.postsMapping || {};

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale.value;
  const queryPath = postsMapping[route.path] || postsMapping[route.path.replace(/\/$/, '')] || path;
  const query = queryCollection(collectionName).path(queryPath);

  return query.first();
});

const contactInContent = computed(() => post.value?.meta?.contactInContent);
const textImageTeaser = computed(() => post.value?.meta?.textImageTeaser);
const blogRecentData = computed(() => {
  return {
    limit: 21,
    headline: t('similarPosts'),
    slider: true,
    tag: post.value?.meta?.tags,
    spacing: contactInContent.value ? '' : 'mt-10',
  };
});

const showBlogRecent = computed(() => {
  return strategy === 'prefix';
});

dynamicMeta.value = {
  footer: post.value?.meta?.footer,
};
</script>
