<template>
  <div :class="classList" ref="root" class="py-4">
    <div class="js-sticky-block d-flex justify-content-center">
      <div
        class="newsletter-modal is-off-screen"
        :class="isMobile ? 'ml-2 mr-2 w-auto' : ''"
        ref="modal"
        :style="modalStyle"
      >
        <div class="newsletter-close" ref="close">
          <icon icon="close" :circle="true" :hover="true" size="medium" :color="getContrastColor()" />
        </div>
        <newsletter-modal
          v-bind="modal"
          :ajax="true"
          :success="success"
          :iconColor="iconColor"
          :bgColor="bgColor"
          :light="light"
        />
      </div>
    </div>

    <div class="newsletter-banner__wrapper">
      <!-- mobile -->
      <div v-if="!isMobile" class="newsletter-banner mx-auto" ref="icon">
        <div :style="bannerStyle">
          <div class="d-flex align-items-center px-3 py-2 row row-cols-2">
            <div class="d-flex align-items-center font-size-2 col-9">
              {{ text }}
            </div>
            <div class="d-flex justify-content-center col-2">
              <cta v-bind="cta" />
            </div>
          </div>
        </div>
        <div class="position-relative">
          <lottie-player
            class="position-absolute mb-n5 bottom-0"
            v-if="modal.lottie"
            :animationData="idle ? modal.lottie.idle : modal.lottie.fly"
            :autoplay="setAutoplay()"
            :width="'180'"
            :height="'180'"
            :style="'right: -5em'"
            ref="lottie"
          />
        </div>
      </div>

      <div v-else class="newsletter-banner d-flex mx-auto" ref="icon">
        <div :style="bannerStyle" class="w-100">
          <div class="d-flex align-items-center px-3 py-2 row">
            <div class="font-size-2 light col-9 mr-5">
              <div class="ml-2">{{ isMobile ? textMobile : text }}</div>
              <cta v-bind="cta" link="true" :class="[light ? 'text-light' : 'text-dark']" />
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center col-1">
          <lottie-player
            class="position-absolute"
            v-if="modal.lottie"
            :animationData="idle ? modal.lottie.idle : modal.lottie.fly"
            :autoplay="setAutoplay()"
            :width="'120'"
            :height="'120'"
            :style="'right: 0'"
            ref="lottie"
          />
        </div>
      </div>
    </div>
    <a class="newsletter-trigger" ref="link"></a>
  </div>
</template>
<style>
@keyframes fly{0%{transform:translateX(-100vw)}to{transform:translateX(0)}}@media (prefers-reduced-motion:no-preference){.banner-animation{animation:fly 4.5s 1}}
</style>
<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

import birdIdle from '/Users/lisa.nagl/Code/c4a8-web-shared-components/nuxt/stories/data/BirdieNoFlap.json';
import birdFly from '/Users/lisa.nagl/Code/c4a8-web-shared-components/nuxt/stories/data/BirdieFlap.json';

export default {
  tagName: 'newsletter',
  props: {
    bgColor: {
      type: String,
      default: '#fcd117',
    },
    icon: {
      type: String,
      default: 'origami-bird',
    },
    modal: {
      type: Object,
      default: null,
    },
    noSticky: {
      type: Boolean,
      default: false,
    },

    iconColor: {
      type: String,
      default: 'var(--color-orange)',
    },
    text: {
      type: String,
    },
    textMobile: {
      type: String,
    },
    cta: {
      type: Object,
      default: null,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classList() {
      return ['newsletter font-weight-light', { [this.expandedClass]: this.isExpanded }, this.light ? 'is--light' : ''];
    },
    bannerStyle() {
      return {
        backgroundColor: this.bgColor,
        color: this.contrastColor,
      };
    },
    modalStyle() {
      return {
        backgroundColor: this.bgColor,
        color: this.contrastColor,
      };
    },
    success() {
      return this.success;
    },
  },
  data() {
    return {
      isExpanded: false,
      expandedClass: State.EXPANDED,
      offScreenClass: State.OFF_SCREEN,
      success: false,
      idle: false,
      animationCompleted: false,
      isMobile: Tools.isBelowBreakpoint('lg'),
      flyAnimationDuration: 4500,
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const banner = entry.target.querySelector('.newsletter-banner');
        if (entry.isIntersecting) {
          if (!this.animationCompleted) {
            this.lottie.play();
            banner.classList.add('banner-animation');
            setTimeout(() => {
              this.animationCompleted = true;
              banner.classList.remove('banner-animation');
              this.idle = true;
              this.lottie.play();
            }, this.flyAnimationDuration);
          }
        }
      });
    });
    observer.observe(document.querySelector('.newsletter-banner__wrapper'));

    this.root = this.$refs.root;
    this.iconElement = this.$refs.icon;
    this.linkElement = this.$refs.link instanceof NodeList ? this.$refs.link : [this.$refs.link];
    this.modalElement = this.$refs.modal;
    this.closeElement = this.$refs.close;
    this.lottie = this.$refs.lottie;

    this.init();
  },
  methods: {
    init() {
      this.bindEvents();
      this.setLottieColors();
    },
    bindEvents() {
      if (!this.iconElement || !this.modalElement) return this.bindTriggerEvent();

      this.linkElement.forEach((link) => {
        link.addEventListener('click', this.handleClick);
      });
      this.iconElement.addEventListener('click', this.handleClick);
      this.closeElement?.addEventListener('click', this.handleClose);

      document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
      window.addEventListener('click', this.handleOutsideClick);
    },
    bindTriggerEvent() {
      this.iconElement.addEventListener('click', this.handleTriggerClick);
    },
    handleTriggerClick(e) {
      const target = e.currentTarget;
      const triggerId = target.dataset.triggerId;

      document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, { detail: { id: triggerId } }));
    },
    handleOutsideClick(e) {
      if (
        this.root.classList.contains(this.expandedClass) &&
        Tools.isOutsideOf('newsletter', e) &&
        Tools.isOutsideOf('newsletter-trigger', e)
      ) {
        this.handleClose();
      }
      if (!Tools.isOutsideOf('newsletter-trigger', e)) {
        this.handleClick();
      }
    },
    handleClose() {
      this.handleClick();
    },
    handleClick() {
      this.isExpanded = !this.isExpanded;
      this.modalElement.classList.toggle(this.offScreenClass);

      if (this.modalElement.classList.contains(this.offScreenClass)) {
        this.modalElement.style.opacity = '';
      }
    },
    getContrastColor() {
      if (this.light) {
        return 'var(--color-white)';
      }
      return 'var(--color-black)';
    },
    hexToRGB() {
      if (!this.iconColor) return null;
      let colorVal = this.iconColor;
      let r, g, b;

      if (colorVal.startsWith('var(')) {
        colorVal = getComputedStyle(this.$refs.root || document.documentElement)
          .getPropertyValue(colorVal.slice(4, -1))
          .trim();
      }
      let hex = colorVal.replace(/^#/, '');
      const num = parseInt(hex, 16);
      r = (num >> 16) & 255;
      g = (num >> 8) & 255;
      b = num & 255;
      if (r !== undefined && g !== undefined && b !== undefined) {
        birdFly.assets[1].layers[3].shapes[0].it[1].c.k = [r / 255, g / 255, b / 255];
        birdIdle.assets[1].layers[3].shapes[0].it[1].c.k = [r / 255, g / 255, b / 255];
      }
    },

    setLottieColors() {
      if (this.light) {
        const white = [1, 1, 1];
        const flyLayers = birdFly.assets[1].layers;
        const idleLayers = birdIdle.assets[1].layers;

        [flyLayers, idleLayers].forEach((layers) => {
          layers[0].shapes[0].it[2].c.k = white;
          layers[1].shapes[0].it[2].c.k = white;
          layers[2].shapes[1].it[9].c.k = white;
          layers[2].shapes[0].it[11].c.k = white;
        });
      }
      this.hexToRGB();
    },

    setAutoplay() {
      if (this.animationCompleted) {
        return true;
      }
      return false;
    },
  },

  beforeDestroy() {
    window.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
  },
};
</script>
