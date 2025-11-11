<template>
  <tracking />
  <content>
    <hero :hero="casestudyNormalized?.hero" v-if="casestudyNormalized" />
    <fab-hint v-if="fabHintData" v-bind="fabHintData" />
    <back-to-top />
    <service-overview v-if="casestudyNormalized?.serviceOverview" v-bind="casestudyNormalized?.serviceOverview" />
    <div class="container space-top-1 space-top-lg-2">
      <div class="w-xl-80 mx-xl-auto">
        <article class="post" itemscope itemtype="http://schema.org/TechArticle" v-if="casestudyNormalized">
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

            <ContentRenderer
              class="mt-xl-n4 richtext"
              :value="casestudyNormalized"
              tag="main"
              :components="{ a: ContentRendererLink }"
            />
          </div>
        </article>
        <div class="space-top-2 space-bottom-2 min-h-620rem" v-else></div>
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
  onMounted,
} from '#imports';
import { computed, nextTick } from 'vue';

import ContentRendererLink from '../../components/content-renderer-link.vue';

import Tools from '../../utils/tools.js';
import { useAppStore } from '../../stores/app';

const store = useAppStore();
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

  if (!normalizedCasestudy) return null;

  return {
    ...normalizedCasestudy,
    body: {
      ...normalizedCasestudy?.body,
      value: Tools.applyKramdownAttrs(normalizedCasestudy?.body?.value),
    },
  };
});

const fabHintData = computed(() => {
  return event.value?.meta?.hasFabHint ? event.value.meta.hasFabHint : null;
});

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

onMounted(() => {
  nextTick(() => {
    store.setPageIsLoaded(true);
  });
});
</script>
