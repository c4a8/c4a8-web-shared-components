<template>
  <figure :class="classList" ref="root">
    <div :class="containerClasses">
      <div v-if="headline" class="row mb-9 mt-9">
        <div :class="['col', headlineClasses, 'fade-in-bottom']" data-utility-animation-step="1">
          <headline :text="headline" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p
            :class="['intro-text__copy fade-in-bottom richtext', copyClasses]"
            data-utility-animation-step="1"
            v-html="copy"
          ></p>
        </div>
      </div>
    </div>
  </figure>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'intro-text',
  computed: {
    classList() {
      return ['intro-text', 'utility-animation', 'vue-component', this.variant, this.spacing];
    },
    containerClasses() {
      return ['container', this.containerSpacing || 'space-lg-2'];
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  props: {
    copy: String,
    variant: String,
    headline: String,
    spacing: String,
    containerSpacing: {
      type: String,
      default: 'space-lg-2',
    },
    headlineClasses: {
      type: String,
      default: 'text-center',
    },
    copyClasses: String,
  },
};
</script>
