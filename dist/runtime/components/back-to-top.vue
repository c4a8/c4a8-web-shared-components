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
<style>
@media (hover: hover) {
  .back-to-top:hover svg {
    animation: moveRightLeft;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
    color: var(--color-back-to-top-hover-foreground);
  }
  .back-to-top:hover .back-to-top__icon {
    background-color: var(--color-back-to-top-hover-background);
    border-color: var(--color-back-to-top-hover-background);
  }
}
.back-to-top {
  z-index: 230;
  --back-to-top-bottom-position: 0rem;
  --back-to-top-highlight-underline-color: var(--color-orange);
  width: 100%;
  position: sticky;
  top: calc(100vh - var(--back-to-top-bottom-position));
  height: 0;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}
.back-to-top.show {
  opacity: 1;
  pointer-events: all;
  transition: opacity 0.8s cubic-bezier(0.19, 1, 0.2, 1);
}
.back-to-top.show .back-to-top__icon {
  transform: translateY(0) rotate(-90deg);
}
.back-to-top .back-to-top__icon .icon {
  width: inherit;
  height: inherit;
}

.back-to-top__wrapper {
  position: relative;
  right: 1.75rem;
  top: -4rem;
}

.back-to-top__icon {
  position: absolute;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 0.75rem;
  width: 3rem;
  height: 3rem;
  right: 0;
  border: 1px solid var(--color-back-to-top-border);
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.2, 1);
  transform: translateY(100%) rotate(-90deg);
}
.back-to-top__icon svg {
  width: 50%;
}
</style>
