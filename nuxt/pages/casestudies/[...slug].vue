<template>
  <tracking />
  <content>
    <!-- <fab-hint v-if="fabHintData" /> -->
    <hero :hero="casestudyNormalized?.hero" />
    <service-overview v-if="casestudyNormalized?.serviceOverview" v-bind="casestudyNormalized?.serviceOverview" />
    <div class="container space-top-1 space-top-lg-2">
      <div class="w-xl-80 mx-xl-auto">
        <article class="post" itemscope itemtype="http://schema.org/TechArticle">
          <div class="post-content e-content" itemprop="articleBody">
            <sticky-block
              class="post__sticky-bar post__sticky-bar--lg-only"
              :sticky-offset-top="100"
              :has-padding="false"
              breakpoint="lg"
              :calculate-height="true"
            >
              <socials :vertical="true" :hide-label="true" :author="null" :share-url="shareUrl" />
            </sticky-block>
          </div>
        </article>
      </div>
    </div>
    <component-list :list="componentListData" />
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
  useSeo,
} from '#imports';
import { computed } from 'vue';

import ContentRendererLink from '../../components/content-renderer-link.vue';

import Tools from '../../utils/tools.js';

const route = useRoute();
const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;
const shareUrl = `${useRequestURL().origin}${route.path}`;

const dynamicMeta = useDynamicPageMeta();

const path = route.path.replace(/^\/[a-z]{2}\//, '/');
const dataKey = 'casestudy-' + path;

const { data: event } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const casestudyNormalized = computed(() => {
  if (!event.value) return null;

  const normalizedCasestudy = Tools.normalizeMarkdownItem(event.value);

  return {
    ...normalizedCasestudy,
    body: {
      ...normalizedCasestudy?.body,
      value: Tools.applyKramdownAttrs(normalizedCasestudy?.body?.value),
    },
  };
});

// const fabHintData = computed(() => {
//   return event.value?.meta?.fabHint ? event.value.meta.fabHint : null;
// });

const componentListData = computed(() => {
  return event.value?.meta?.componentList;
});

dynamicMeta.value = {
  footer: event.value?.meta?.footer ?? { noMargin: true },
};

if (event.value && casestudyNormalized.value) {
  const baseSocialImg = casestudyNormalized.value.socialimg;
  const socialImg = baseSocialImg?.startsWith('/') ? baseSocialImg.slice(1) : baseSocialImg;

  useSeo({
    title: casestudyNormalized.value.title,
    description: casestudyNormalized.value.customExcerpt ?? null,
    keywords: casestudyNormalized.value.keywords ?? null,
    image: socialImg ? `https://res.cloudinary.com/c4a8/image/upload/${socialImg}` : null,
  });
}
</script>
