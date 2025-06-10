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
