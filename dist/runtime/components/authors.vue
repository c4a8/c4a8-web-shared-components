<template>
  <template v-if="hasDataAndAuthors">
    <span :class="classList" v-for="(author, index) in authorArray" v-bind:key="index">
      <template v-if="!noLink">
        <a
          :href="authorLink(author)"
          class="authors__link post-teaser__auto"
          itemprop="author"
          itemscope
          itemtype="https://schema.org/Person"
        >
          <span class="authors__name" itemprop="name">{{ author }}</span>
        </a>
      </template>
      <template v-else>
        <span class="authors__name" itemprop="name">{{ authorStart(authorArray, author) }} {{ author }}</span>
      </template>
      <template v-if="!authorsSeperator(authorArray, author)"> {{ seperator }}&nbsp;</template>
    </span>
  </template>
</template>
<script>
import Tools from '../utils/tools.js';

import { useI18n } from '#imports';

export default {
  tagName: 'authors',
  setup() {
    const { locale } = useI18n();

    return { locale };
  },
  computed: {
    classList() {
      return [
        'authors',
        `${Tools.isTrue(this.noLink) === true ? 'authors authors--no-link' : 'authors'}`,
        'vue-component',
      ];
    },
    seperator() {
      return this.noLink ? ' &' : ',';
    },
    authorArray() {
      return typeof this.authorsList === 'object' ? this.authorsList : [this.authorsList];
    },
    hasDataAndAuthors() {
      return this.authorArray && this.dataAuthors;
    },
    langValue() {
      return this.lang ? this.lang : this.locale;
    },
  },
  methods: {
    authorsSeperator(array, element) {
      return array[array.length - 1] === element;
    },
    authorStart(array, element) {
      if (array[0] === element) {
        return this.dataLang.withAuthor;
      }
    },
    authorLink(author) {
      return this.dataAuthors?.hasOwnProperty(author)
        ? `/${this.langValue}${this.dataAuthors[author].permalink}`
        : null;
    },
  },
  props: {
    authorsList: Array,
    noLink: {
      default: null,
    },
    dataLang: {
      default: 'de',
    },
    dataAuthors: {
      default: null,
    },
    lang: String,
  },
};
</script>
