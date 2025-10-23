<template>
  <div class="list richtext" :class="{ 'utility-animation': !noAnimation }">
    <ul class="list__items font-size-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list__item fade-in-bottom"
        data-utility-animation-step="1"
        :style="`--utility-animation-index:${index + 1};`"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'list',
  mounted() {
    UtilityAnimation.init([this.$el]);
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    noAnimation: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
