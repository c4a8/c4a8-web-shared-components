<template>
  <a
    :class="classList"
    :data-text="filter ? tag : undefined"
    :data-tag="tag"
    :href="href"
    rel="tag"
    :title="'Posts tagged with ' + tag"
  >
    {{ tag }}<span v-if="count">({{ count }})</span
    ><span class="tag__icon" v-if="hasIcon"><icon icon="close" size="xs" /></span>
  </a>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'tag',
  data() {
    return Tools.validateVueProps(this);
  },
  computed: {
    lowerLang() {
      return this.lang.toLowerCase();
    },
    classList() {
      return [
        `tags__btn btn btn-xs mb-2 vue-component`,
        this.variant ? 'tag--' + this.variant : `mx-sm-${this.props?.spacing}`,
        this.classes ? this.classes : null,
      ];
    },
    href() {
      return '/blog/#' + encodeURIComponent(this.tag);
    },
    hasIcon() {
      return this.variant === 'icon';
    },
  },
  props: {
    tag: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      default: null,
    },
    filter: {
      type: Boolean,
      default: false,
    },
    lang: {
      type: String,
      default: 'de',
    },
    spacing: {
      type: Number,
      default: 1,
    },
    classes: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: null,
    },
  },
};
</script>
