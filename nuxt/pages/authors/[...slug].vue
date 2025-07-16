<template>
  <tracking />
  <content>
    <div class="container space-top-2 space-top-lg-4">
      <author :person="person" :person-data="personData" :posts="posts" :events="events" v-if="personData" />
      <div v-else><headline>Author not found</headline></div>
    </div>
  </content>
</template>
<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp, useDynamicPageMeta, useSeo } from '#imports';
import { computed } from 'vue';

import Tools from '../../utils/tools.js';
import useAuthors from '../../composables/useAuthors.js';

const route = useRoute();
const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/').replace('/authors', '');
const dataKey = 'author-' + path;

const { data: person } = await useAsyncData(dataKey, () => {
  const collectionName = 'authors';
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const { authors } = useAuthors();

const personData = computed(() => {
  return authors ? authors[person?.value.title] : null;
});

const authorName = computed(() => {
  return person?.value.title;
});

const authorDataKey = 'content-' + currentLocale.value + '-' + person.value.stem;

const { data: posts } = await useAsyncData(authorDataKey, async () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName);

  let queryBuilder = query.where('path', 'LIKE', '/posts/%');

  queryBuilder = queryBuilder.where('author', 'LIKE', `%${authorName.value}%`);

  return queryBuilder.all();
});

const eventsDataKey = 'content-events-' + currentLocale.value + '-' + person.value.stem;

const { data: events } = await useAsyncData(eventsDataKey, async () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName);

  let queryBuilder = query.where('path', 'LIKE', '/events/%');

  queryBuilder = queryBuilder.where('author', 'LIKE', `%${authorName.value}%`);
  // queryBuilder = queryBuilder.sort = [{ moment: 1 }];
  // queryBuilder = queryBuilder.reversed = true;
  // queryBuilder = queryBuilder.order('moment', 'DESC');

  // query.sort = [{ moment: this.reversed ? 1 : -1 }];

  return queryBuilder.all();
});

// dynamicMeta.value = {
//   footer: event.value?.meta?.footer ?? { noMargin: true },
// };

// if (event.value && eventNormalized.value) {
// const baseSocialImg = eventNormalized.value.socialimg;
// const socialImg = baseSocialImg?.startsWith('/') ? baseSocialImg.slice(1) : baseSocialImg;

// useSeo({
//   title: eventNormalized.value.title,
//   description: eventNormalized.value.customExcerpt ?? null,
//   keywords: eventNormalized.value.keywords ?? null,
//   image: socialImg ? `https://res.cloudinary.com/c4a8/image/upload/${socialImg}` : null,
// });
// }
</script>
