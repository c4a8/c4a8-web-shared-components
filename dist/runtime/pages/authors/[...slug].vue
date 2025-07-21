<template>
  <tracking />
  <content>
    <div class="container space-top-2 space-top-lg-4">
      <author
        :person="person"
        :person-data="personData"
        :posts="postsOrdered"
        :events="events"
        :data-authors="authors"
      />
    </div>
  </content>
</template>
<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp, useSeo, useI18n } from '#imports';
import { computed } from 'vue';

import Tools from '../../utils/tools.js';
import useAuthors from '../../composables/useAuthors.js';

const { strategy } = useI18n();
const route = useRoute();
const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

let path = route.path.replace(/^\/[a-z]{2}\//, '/').replace('/authors', '');
path = !path.endsWith('/') ? path + '/' : path;

const cleanPath = path.replaceAll('/', '');
const dataKey = 'author-' + cleanPath;

const { data: person } = await useAsyncData(dataKey, () => {
  const collectionName = 'authors';
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const { authors } = useAuthors();

const personData = computed(() => {
  return authors ? authors[person?.value?.title] : null;
});

const authorName = computed(() => {
  return person?.value?.title;
});

const authorDataKey = 'content-' + currentLocale.value + '-' + person.value?.stem;

const { data: posts } = await useAsyncData(authorDataKey, async () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName);

  let queryBuilder = query.where('path', 'LIKE', '/posts/%');

  queryBuilder = queryBuilder.where('author', 'LIKE', `%${authorName.value}%`);

  return queryBuilder.all();
});

const postsOrdered = computed(() => {
  if (!posts.value) return [];

  return [...posts.value]
    .map((item) => {
      const newItem = Tools.normalizeMarkdownItem(item);

      newItem.url = Tools.addPathPrefix(newItem.url, currentLocale.value, strategy);

      return newItem;
    })
    .sort((a, b) => {
      const momentA = new Date(a.moment);
      const momentB = new Date(b.moment);

      return momentB - momentA;
    });
});

const eventsDataKey = 'content-events-' + currentLocale.value + '-' + person.value?.stem;

const { data: events } = await useAsyncData(eventsDataKey, async () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName);

  let queryBuilder = query.where('path', 'LIKE', '/events/%');

  queryBuilder = queryBuilder.where('author', 'LIKE', `%${authorName.value}%`);

  return queryBuilder.all();
});

const hasAuthor = computed(() => {
  if (person.value && person.value.stem) return true;
});

if (hasAuthor.value) {
  useSeo({
    title: authorName,
  });
}
</script>
