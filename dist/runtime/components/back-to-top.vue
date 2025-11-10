<template>
  <div :class="classList">
    <div class="back-to-top__wrapper">
      <div class="back-to-top__icon" @click="handleClick">
        <icon icon="arrow" size="large" />
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'back-to-top',
  data() {
    return {
      expaned: false,
      isVisible: false,
    };
  },
  computed: {
    classList() {
      return ['back-to-top vue-component', this.expaned ? State.EXPANDED : '', this.isVisible ? State.SHOW : ''];
    },
  },
  mounted() {
    this.bindEvents();
    this.handleScroll();
  },
  beforeUnmount() {
    this.unbindEvents();
  },
  methods: {
    bindEvents() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unbindEvents() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    handleClick() {
      Tools.scrollToTop();
    },
    handleScroll() {
      const scrollThreshold = window.innerHeight * 2;

      this.isVisible = window.scrollY >= scrollThreshold;
    },
  },
};
</script>
