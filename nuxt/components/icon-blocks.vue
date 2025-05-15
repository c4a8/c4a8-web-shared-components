<template>
  <div
    :class="['icon-blocks', 'utility-animation', spacing, 'container-fluid', { 'is-sticky-scroller': sticky }]"
    :style="{ backgroundColor: iconBlocks.bgColor }"
  >
    <div class="container space-2">
      <div v-if="headline" class="row mt-5 mb-8 px-lg-3 fade-in-bottom" data-utility-animation-step="1">
        <div class="col">
          <headline :text="headline" level="h3" />
        </div>
      </div>
      <div class="row">
        <div
          v-for="(item, index) in iconBlocks.items"
          :key="index"
          :class="[columnClass, 'mb-5', 'mb-md-8', 'fade-in-bottom']"
          data-utility-animation-step="1"
          :style="{ '--utility-animation-index': index + 1 }"
        >
          <div :class="['px-lg-3', { 'text-center': !item.copy }]">
            <figure :class="['max-w-15rem', 'mb-4', { 'mx-auto': !item.copy }]">
              <v-img :img="item.image" :cloudinary="item.cloudinary" :alt="iconBlocks.alt" />
            </figure>
            <headline :text="item.headline" :level="level" :classes="classes" />
            <div v-html="item.copy"></div>
          </div>
        </div>
      </div>
      <div v-if="iconBlocks.cta" class="row justify-content-center mt-8">
        <cta
          :text="iconBlocks.cta.text"
          :href="iconBlocks.cta.href"
          :skin="iconBlocks.cta.skin"
          :button="iconBlocks.cta.button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StickyScroller from '../utils/sticky-scroller.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'icon-blocks',
  props: {
    iconBlocks: {
      type: Object,
      required: true,
    },
    level: {
      type: String,
      default: 'h3',
    },
    classes: {
      type: String,
      default: 'font-size-3 bold',
    },
    columns: {
      type: [Boolean, Number],
      default: false,
    },
    headline: {
      type: String,
      default: null,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: String,
      default: '',
    },
  },
  computed: {
    columnClass() {
      if (this.columns) {
        const maxColNumber = 12;
        const colWidth = maxColNumber / this.columns;
        const baseClass = `col-md-${colWidth}`;
        const isDivisibleByTwo = colWidth % 2 === 0;
        return isDivisibleByTwo ? `col-6 ${baseClass}` : baseClass;
      }

      return 'col-md-4';
    },
  },
  mounted() {
    if (this.sticky) {
      StickyScroller.init([this.$el]);
    }

    UtilityAnimation.init([this.$el]);
  },
};
</script>
