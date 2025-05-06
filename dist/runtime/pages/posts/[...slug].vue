<template>
  <page-default>
    <content>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />POST
      <!-- <post-detail :post="post" /> -->
    </content>
  </page-default>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
// import { useRoute } from '#imports';

const route = useRoute();

const { locale } = useI18n();

definePageMeta({
  footer: {
    noMargin: true,
  },
});

const path = route.path;
const dataKey = 'post-' + path;

// const { data: post } = await useAsyncData(dataKey, () => {
//   const collectionName = 'content_' + locale.value;
//   const query = queryCollection(collectionName).path(path);

//   return query.first();
// });
</script>
