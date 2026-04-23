<template>
  <div :class="classList" :style="containerStyle" ref="root">
    <div class="fab-hint__wrapper">
      <div class="fab-hint__icon" @click="handleClick">
        <icon :icon="iconValue" size="large" />
      </div>
    </div>
    <div class="fab-hint__content">
      <div class="fab-hint__title highlight-underline">{{ titleValue }}:</div>
      <icon class="fab-hint__close" icon="close" size="medium" :hover="true" :circle="true" @click="handleClose" />
      <div class="fab-hint__text" v-html="enhancedText"></div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'fab-hint',
  data() {
    return {
      expaned: false,
      isVisible: false,
    };
  },
  computed: {
    classList() {
      return ['fab-hint vue-component', this.expaned ? State.EXPANDED : '', this.isVisible ? 'is-visible' : ''];
    },
    containerStyle() {
      return {
        ...(this.bgColor ? { '--fab-hint-bg-color': this.bgColor } : {}),
        ...(this.iconColor ? { '--fab-hint-icon-color': this.iconColor } : {}),
      };
    },
    iconValue() {
      return this.icon || 'image-credits';
    },
    titleValue() {
      return this.title || this.$t('imageCredits');
    },
    enhancedText() {
      if (!this.text) return '';

      if (typeof DOMParser === 'undefined') return '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(this.text, 'text/html');

      doc.querySelectorAll('a').forEach((a) => a.classList.add('is-basic-link'));

      return doc.body.innerHTML;
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
      window.addEventListener('click', this.handleOutsideClick);
    },
    unbindEvents() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('click', this.handleOutsideClick);
    },
    handleOutsideClick(e) {
      if (this.$refs?.root?.classList?.contains(State.EXPANDED) && Tools.isOutsideOf('fab-hint', e)) {
        this.handleClose();
      }
    },
    handleClick() {
      this.expaned = !this.expaned;
    },
    handleClose() {
      this.expaned = false;
    },
    handleScroll() {
      const scrollThreshold = window.innerHeight * 2;

      this.isVisible = window.scrollY >= scrollThreshold;
    },
  },
  props: {
    icon: String,
    iconColor: String,
    bgColor: String,
    text: String,
    title: String,
  },
};
</script>
<style>
.fab-hint {
  z-index: 250;
  --fab-hint-icon-size: 4.5rem;
  --fab-hint-bg-color: var(--color-fab-background);
  --fab-hint-icon-color: var(--color-copy);
  --fab-hint-bottom-position: -4rem;
  --fab-hint-highlight-underline-color: var(--color-orange);
  width: 100%;
  position: sticky;
  top: calc(100vh - var(--fab-hint-icon-size) - var(--fab-hint-bottom-position));
  height: 0;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}
.fab-hint.is-visible {
  opacity: 1;
  pointer-events: all;
}
.has-back-to-top .fab-hint {
  --fab-hint-bottom-position: 3rem;
  --fab-hint-bottom-position: -4.5rem;
  transition-delay: 0.2s;
}
.has-back-to-top .fab-hint .fab-hint__icon {
  transition-delay: inherit;
}
.has-back-to-top .fab-hint .fab-hint__wrapper {
  top: -10rem;
}
.fab-hint.is-expanded .fab-hint__content {
  transform: translateX(0);
  pointer-events: all;
  opacity: 1;
}
.fab-hint .fab-hint__icon .icon {
  width: inherit;
  height: inherit;
}
.fab-hint.is-visible .fab-hint__icon {
  transform: translateY(0);
}

.fab-hint__wrapper {
  position: relative;
  top: -6rem;
  right: 1rem;
  height: var(--fab-hint-icon-size);
}

.fab-hint__icon {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.45);
  position: absolute;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--fab-hint-bg-color);
  border-radius: 100%;
  padding: 0.75rem;
  width: var(--fab-hint-icon-size);
  height: var(--fab-hint-icon-size);
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.2, 1);
  transform: translateY(100%);
  right: 0;
  overflow: hidden;
}
.fab-hint__icon svg {
  width: 50%;
  color: var(--fab-hint-icon-color);
}

.fab-hint__content {
  z-index: 260;
  position: fixed;
  bottom: 0;
  right: 0;
  pointer-events: none;
  background-color: var(--fab-hint-bg-color);
  padding: 2.5rem;
  width: 100vw;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out, opacity 0.8s cubic-bezier(0.19, 1, 0.2, 1);
  opacity: 0;
}
@media (min-width: 992px) {
  .fab-hint__content {
    width: 360px;
  }
}

.fab-hint__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding: 0.25rem;
}
.fab-hint__close.icon.icon--circle svg {
  width: 80%;
}

.fab-hint__title {
  font-size: 1.5rem;
  line-height: 1.4165em;
  font-weight: normal;
  --color-highlight-underline: var(--fab-hint-highlight-underline-color);
  margin-bottom: 1.25rem;
  margin-right: 2.5rem;
  line-height: 1em;
  display: inline-block;
}
@media (min-width: 992px) {
  .fab-hint__title {
    font-size: calc(1.8rem / 1.2);
    line-height: 1.4585em;
  }
}
@media (min-width: 1200px) {
  .fab-hint__title {
    font-size: 1.8rem;
    line-height: 1.4585em;
  }
}
</style>
