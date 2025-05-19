<template>
  <tracking />
  <content>
    <event-detail v-bind="eventNormalized" />
    <!-- <event-detail
    v-bind="page"
    :headline="page?.title"
    :name="page?.author"
    :form-additional-fields="additionalFields"
    :form-replace-value="page?.eventid"
  /> -->
  </content>
</template>
<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp, useDynamicPageMeta, useI18n } from '#imports';
import { computed } from 'vue';

import Tools from '../../utils/tools.js';

const route = useRoute();

const { t, strategy } = useI18n();

const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/');
const dataKey = 'post-' + path;

const { data: event } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const eventNormalized = computed(() => {
  if (!event.value) return null;

  const normalizedEvent = Tools.normalizeMarkdownItem(event.value);

  return {
    ...normalizedEvent,
    body: {
      ...normalizedEvent.body,
      value: Tools.applyKramdownAttrs(normalizedEvent.body.value),
    },
  };
});

// const additionalFields = [
//   {
//     type: 'hidden',
//     id: 'eventid',
//     value: '#form-field-replace-value#',
//   },
// ];

// const page = ref({});
// const eventForm = ref(null);

// const route = useRoute();
// const cleanPath = route.path.substring(0, route.path.length - 1);

// // TODO adjust this so it works with multiple collections not just events
// const { data } = await useAsyncData('events', () =>
//   queryContent('events')
//     .where({
//       _path: cleanPath,
//     })
//     .findOne()
// );

// if (data.value) {
//   page.value = data.value;

//   if (data.value.hideForm) {
//     eventForm.value = data.value.form;
//   }
// }

dynamicMeta.value = {
  footer: event.value?.meta?.footer ?? { noMargin: true },
};
</script>
