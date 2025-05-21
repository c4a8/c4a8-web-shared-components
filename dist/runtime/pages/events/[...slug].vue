<template>
  <tracking />
  <content>
    <event-detail v-bind="eventNormalized" />
  </content>
</template>
<script setup>
import { useRoute, useAsyncData, queryCollection, useNuxtApp, useDynamicPageMeta, useI18n } from '#imports';
import { computed } from 'vue';

import Tools from '../../utils/tools.js';
import EventForm from '../../utils/data/event-form.js';

const route = useRoute();
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

const getFormular = (event) => {
  const additionalFields = [
    {
      type: 'hidden',
      id: 'eventid',
      value: '#form-field-replace-value#',
    },
  ];

  const replaceValue = event?.eventid || 'no-event-id';

  return event?.form
    ? { form: { ...event.form, fields: [...event.form.fields, ...additionalFields] }, replaceValue }
    : {
        form: {
          ...EventForm,
          action: `/${currentLocale.value}${EventForm.action}`,
          fields: [...EventForm.fields, ...additionalFields],
        },
        replaceValue,
        useTranslation: true,
      };
};

const eventNormalized = computed(() => {
  if (!event.value) return null;

  const normalizedEvent = Tools.normalizeMarkdownItem(event.value);

  const form = normalizedEvent?.hideForm ? null : getFormular(normalizedEvent);
  return {
    ...normalizedEvent,
    form,
    body: {
      ...normalizedEvent.body,
      value: Tools.applyKramdownAttrs(normalizedEvent.body.value),
    },
  };
});

dynamicMeta.value = {
  footer: event.value?.meta?.footer ?? { noMargin: true },
};
</script>
