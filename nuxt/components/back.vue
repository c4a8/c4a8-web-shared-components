<template>
  <div class="back back--animated" :class="[classes, { [State.SHOW]: canGoBack }]" @click="handleClick">
    <icon icon="arrow" direction="left" :hover="true" :circle="true" />
  </div>
</template>

<script>
import State from '../utils/state.js';

export default {
  name: 'back',
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      State,
      canGoBack: false,
    };
  },
  mounted() {
    this.canGoBack = document.referrer.indexOf(document.location.host) !== -1;
  },
  methods: {
    handleClick(e) {
      e.stopImmediatePropagation();
      window.history.back();
    },
  },
};
</script>
<style lang="scss">
.back {
  position: relative;
  display: none;
  width: spacing(9);
  height: spacing(9);
  cursor: pointer;
  top: spacing($size: 8, $negative: true);

  .icon {
    width: 100%;
    height: 100%;
  }

  &.show {
    display: inline-flex;
  }

  &:not(.back--animated) {
    pointer-events: none;

    &.show {
      opacity: 1;
      pointer-events: all;
    }

    @include media-breakpoint-up(lg) {
      top: spacing($size: 24, $negative: true);
      opacity: 0;
      transition: opacity 0.6s $animation-transition;
    }
  }
}
</style>
