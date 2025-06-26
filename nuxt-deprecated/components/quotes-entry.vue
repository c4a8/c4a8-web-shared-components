<template>
  <div class="quotes__entry row no-gutters" :class="{ active: active }" ref="root">
    <div v-if="image" class="quotes__entry-img-wrapper col-lg-5">
      <div
        class="quotes__entry-img"
        :class="hasAnimation ? 'utility-animation fade-in-bottom' : ''"
        data-utility-animation-step="1"
        ref="entry-img"
      >
        <v-img v-bind="entry" :cloudinary="true" img-src-sets="quotes" />
      </div>
    </div>
    <div
      class="quotes__entry-quote-wrapper"
      :class="[
        hasAnimation ? 'utility-animation fade-in-bottom' : '',
        image ? 'col-lg-6 offset-lg-1 disabledpb-lg-0' : 'col-lg-12',
        !image ? 'mx-auto' : '',
      ]"
      data-utility-animation-step="1"
    >
      <div class="quotes__entry-quote">&#x84;</div>
      <div class="quotes__entry-text font-weight-light mt-3 font-size-2">
        <div class="quotes__entry-text-wrapper">
          {{ entry.text }}
        </div>
      </div>
      <div class="quotes__entry-infos">
        <div class="quotes__entry-name font-size-2">{{ entry.name }}</div>
        <div class="quotes__entry-position" v-if="entry.position">
          {{ entry.position }}
        </div>
        <div class="quotes__entry-company">{{ entry.company }}&nbsp;</div>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'quotes-entry',
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  props: {
    entry: {
      type: Object,
      required: true,
    },
    image: {
      type: Boolean,
      default: false,
    },
    hasAnimation: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
