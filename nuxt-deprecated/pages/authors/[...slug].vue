<template>
  <tracking />
  <content>
    <div class="container space-top-2 space-top-lg-4">
      <div class="author" v-if="author">
        <div v-if="authorData">
          <div class="row mb-4 mb-lg-5" style="display: none">
            <author-avatar
              class-list="col-6 col-sm-4 col-lg-2 pl-lg-0 mb-5 mb-lg-0"
              :author="author"
              :img-url="authorAvatarImageUrl"
              v-if="authorAvatarImageUrl"
            />
            <div class="author__meta col-lg-8 mt-lg-5 mb-2 mb-lg-0">
              <span itemprop="author" itemscope itemtype="http://schema.org/Person">
                <headline level="h1" classes="author__name h2" itemprop="name">{{ authorData.display_name }}</headline>
              </span>
              <!-- <span class="author__post-count">{{ postCount }}</span> <span class="ml-1">{{ site.data.lang[lang].posts }}</span> -->
            </div>
          </div>
          <author-header :img-url="authorAvatarImageUrl" :author="authorData" :post-count="postCount" />
          <div class="author__intro-block row">
            <div class="author__intro font-size-2 col-lg-8 pl-lg-0">
              <ContentRenderer :value="authorIntro" tag="p" />
            </div>
          </div>
        </div>
      </div>
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

const { data: author } = await useAsyncData(dataKey, () => {
  const collectionName = 'authors';
  const query = queryCollection(collectionName).path(path);

  return query.first();
});
console.log('🚀 ~ const{data:author}=awaituseAsyncData ~ author:', author);

const { authors } = useAuthors();

const authorData = computed(() => {
  return authors ? authors[author?.value.title] : null;
});

const authorAvatarImageUrl = computed(() => {
  return authorData.value ? '' + authorData.value?.avatar : '';
});

const postCount = computed(() => {
  // return authorData.value? authorData.value?.posts.length : 0;
  return 0;
});

const authorIntro = computed(() => {
  // return authorData.value? authorData.value?.intro : '';
  return 'test';
});

// const eventNormalized = computed(() => {
//   if (!event.value) return null;

//   const normalizedEvent = Tools.normalizeMarkdownItem(event.value);

//   const form = normalizedEvent?.hideForm ? null : getFormular(normalizedEvent);
//   return {
//     ...normalizedEvent,
//     form,
//     body: {
//       ...normalizedEvent.body,
//       value: Tools.applyKramdownAttrs(normalizedEvent.body.value),
//     },
//   };
// });

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
