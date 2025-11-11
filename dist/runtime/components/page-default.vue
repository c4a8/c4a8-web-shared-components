<template>
  <global-app :classes="computedClass" :is-loading="isLoading">
    <v-header v-bind="headerDataSelected" :lang="langDataSelected" v-if="headerDataSelected"></v-header>
    <slot />
    <v-footer v-bind="footerDataSelected" :lang="langDataSelected" v-if="footerDataSelected"></v-footer>
  </global-app>
</template>

<script setup>
import { useRoute } from '#imports';
import { computed, ref, onMounted, watch } from 'vue';

import { useAppStore } from '../stores/app';

const store = useAppStore();
const route = useRoute();

const isCaseStudy = route.name?.startsWith('slug-casestudies__');

const isLoadingRoute =
  route.name?.startsWith('slug-posts__') ||
  route.name?.startsWith('slug-events__') ||
  isCaseStudy ||
  route.name?.startsWith('slug-authors__');

const isLoading = ref(isLoadingRoute ? true : false);

const props = defineProps({
  headerData: Object,
  footerData: Object,
  layoutHeaderData: Object,
  layoutFooterData: Object,
  heroData: Object,
  pageData: Object,
  lang: {
    type: String,
    default: 'en',
  },
  theme: String,
  hasBackToTop: Boolean,
  hasFabHint: Boolean,
});

const headerDataSelected = computed(() => {
  return typeof props.layoutHeaderData !== 'undefined' ? props.layoutHeaderData : props.headerData;
});

const footerDataSelected = computed(() => {
  return typeof props.layoutFooterData !== 'undefined' ? props.layoutFooterData : props.footerData;
});

const langDataSelected = computed(() => {
  return typeof props.layoutLang !== 'undefined' ? props.layoutLang : props.lang;
});

const computedClass = computed(() => {
  return [
    'shared-components',
    props.theme,
    { 'has-back-to-top': props.hasBackToTop || isCaseStudy ? true : false },
    { 'has-fab-hint': props.hasFabHint },
  ];
});

onMounted(async () => {
  if (isLoadingRoute) {
    watch(
      () => store.getPageIsLoaded,
      (isLoaded) => {
        if (isLoaded) {
          isLoading.value = false;
        }
      }
    );
  }
});
</script>
