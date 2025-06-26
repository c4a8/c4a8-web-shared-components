<template>
  <div :class="classList">
    <div class="row">
      <div
        :class="['col-sm-12', animationStepClass, headlineRowClassesValue]"
        data-utility-animation-step="1"
        ref="row"
      >
        <headline :level="level" :classes="headlineClasses"><span v-html="text"></span></headline>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'headline-row',
  props: {
    centered: Boolean,
    level: {
      type: String,
      default: 'h2',
    },
    text: String,
    spacing: {
      type: String,
      default: 'space-top-3',
    },
    hasAnimation: Boolean,
    classes: String,
    headlineClasses: String,
    noContainer: Boolean,
  },
  mounted() {
    if (!this.$refs.row) return;

    UtilityAnimation.init([this.$refs.row]);
  },
  computed: {
    headlineRowClassesValue() {
      const baseClasses = this.classes?.includes('text-')
        ? this.classes
        : `${this.classes || ''}${this.centered ? ' text-center' : ''}`;

      return `${baseClasses} headline-row__col`;
    },
    containerClass() {
      return this.noContainer ? '' : 'container';
    },
    animationClass() {
      return this.hasAnimation ? 'utility-animation' : '';
    },
    animationStepClass() {
      return this.hasAnimation ? 'fade-in-bottom' : '';
    },
    classList() {
      return [`${this.containerClass} ${this.spacing} headline-row`, this.animationClass];
    },
  },
};
</script>
