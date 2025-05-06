<template>
  <page-default>
    <content>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />POST 234
      <post-detail :post="post" />
    </content>
  </page-default>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { useRoute, useAsyncData, queryCollection } from '#imports';

const route = useRoute();

const { locale } = useI18n();

definePageMeta({
  footer: {
    noMargin: true,
  },
});

const path = route.path;
const dataKey = 'post-' + path;

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + locale.value;
  // const query = queryCollection(collectionName).path(path);

  // return query.first();

  return {
    body: {
      value: [
        [
          'h2',
          {
            id: 'eine-cloud-region-die-alles-verändert',
          },
          'Eine Cloud-Region, die alles verändert!',
        ],
      ],
    },
  };
});

console.log('post:', post);
</script>
