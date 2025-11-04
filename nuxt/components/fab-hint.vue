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
    };
  },
  computed: {
    classList() {
      return ['fab-hint vue-component', this.expaned ? State.EXPANDED : ''];
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

      const parser = new DOMParser();
      const doc = parser.parseFromString(this.text, 'text/html');

      doc.querySelectorAll('a').forEach((a) => a.classList.add('is-basic-link'));

      return doc.body.innerHTML;
    },
  },
  mounted() {
    // this.addObserver();

    this.bindEvents();
  },
  methods: {
    bindEvents() {
      window.addEventListener('click', this.handleOutsideClick);
    },
    handleOutsideClick(e) {
      if (this.$refs?.root?.classList?.contains(State.EXPANDED) && Tools.isOutsideOf('fab-hint', e)) {
        this.handleClose();
      }
    },
    // addObserver() {
    //   const observer = new MutationObserver((mutations) => {
    //     mutations.forEach((mutation) => {
    //       if (mutation.attributeName === 'style') {
    //         if (!this.isVisible(mutation?.target?.style?.cssText)) {
    //           this.handleClose();
    //         }
    //       }
    //     });
    //   });

    //   observer.observe(this.$el, {
    //     attributes: true,
    //     attributeFilter: ['style'],
    //   });
    // },
    // isVisible(style) {
    //   return style !== '' ? true : false;
    // },
    handleClick() {
      this.expaned = !this.expaned;
    },
    handleClose() {
      this.expaned = false;
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
