<template>
  <div :class="classList" ref="root" class="py-4 px-lg-0 px-1">
    <div class="js-sticky-block d-flex justify-content-center">
      <div
        class="newsletter-modal"
        :class="[{ [offScreenClass]: !isExpanded }, isMobile ? 'mx-2 w-auto' : '']"
        ref="modal"
        :style="modalStyle"
      >
        <div class="newsletter-close" ref="close">
          <icon icon="close" :circle="true" :hover="true" size="medium" :color="contrastColor" />
        </div>
        <newsletter-modal
          v-bind="modal"
          :ajax="true"
          :success="success"
          :iconColor="iconColor"
          :bgColor="bgColor"
          :light="light"
          :lottie="lottieFiles"
        />
      </div>
    </div>
    <div class="newsletter-banner__wrapper">
      <div class="newsletter-banner mx-auto" :class="isMobile ? 'd-flex' : ''" ref="icon">
        <div :style="bannerStyle" :class="isMobile ? 'w-100 mr-5' : ''">
          <div class="d-flex align-items-center px-3 py-2 row" :class="isMobile ? '' : 'row-cols-2'">
            <div class="d-flex align-items-center" :class="isMobile ? 'px-3 py-2 row' : 'font-size-2 col-9'">
              <div v-if="isMobile" class="font-size-2 light">
                <div class="ml-2">{{ textMobile }}</div>
                <cta v-bind="cta" link="true" :class="[light ? 'text-light' : 'text-dark']" />
              </div>
              <div v-else>
                {{ text }}
              </div>
            </div>
            <div v-if="!isMobile" class="d-flex justify-content-center col-2">
              <cta v-bind="cta" />
            </div>
          </div>
        </div>
        <div :class="isMobile ? 'd-flex align-items-center col-1' : 'position-relative'">
          <lottie-player
            class="position-absolute right-0"
            :class="isMobile ? 'mx-n1' : 'mb-n5 bottom-0 mx-n11'"
            v-if="lottieFiles"
            :animationData="lottieAnimation"
            :autoplay="idle"
            :width="lottieSize"
            :height="lottieSize"
            ref="lottie"
          />
        </div>
      </div>
    </div>
    <a class="newsletter-trigger" ref="link"></a>
  </div>
</template>
<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';
import birdieFlap from '../src/assets/lottie/BirdieFlap.json';
import birdieNoflap from '../src/assets/lottie/BirdieNoflap.json';
const MOBILE_START = 2500;
const LOTTIE_SIZE_MOBILE = 110;
const LOTTIE_SIZE_DESKTOP = 180;
export default {
  tagName: 'newsletter',
  props: {
    bgColor: {
      type: String,
      default: '#fcd117',
    },
    modal: {
      type: Object,
      default: null,
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
    isMobile() {
      return Tools.isBelowBreakpoint('md');
    },
    classList() {
      return ['newsletter font-weight-light', { [this.expandedClass]: this.isExpanded }, this.light ? 'is--light' : ''];
    },
    contrastColor() {
      return this.light ? 'var(--color-white)' : 'var(--color-black)';
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
    lottieSize() {
      return this.isMobile ? LOTTIE_SIZE_MOBILE : LOTTIE_SIZE_DESKTOP;
    },
    lottieAnimation() {
      return this.idle ? this.lottieFiles.idle : this.lottieFiles.fly;
    },
  },
  data() {
    return {
      isExpanded: false,
      expandedClass: State.EXPANDED,
      offScreenClass: State.OFF_SCREEN,
      success: false,
      idle: false,
      lottieFiles: null,
      observer: null,
    };
  },
  created() {
    this.lottieFiles = {
      idle: JSON.parse(JSON.stringify(birdieNoflap)),
      fly: JSON.parse(JSON.stringify(birdieFlap)),
    };
  },
  mounted() {
    const wrapperElement = this.$el.querySelector('.newsletter-banner__wrapper');
    if (wrapperElement) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const banner = this.$refs.icon;
              if (banner && this.lottie) {
                const startFrom = this.isMobile ? MOBILE_START : 0;
                this.lottie.goToAndPlay(startFrom, false);
                banner.classList.add(this.isMobile ? 'banner-animation_mobile' : 'banner-animation');
                this.observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      this.observer.observe(wrapperElement);
    }
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
      this.setLottieColors();
      this.bindEvents();
      if (this.lottie) this.lottie.onLoopComplete = this.onComplete;
    },
    bindEvents() {
      if (!this.iconElement || !this.modalElement) return this.bindTriggerEvent();
      this.linkElement.forEach((link) => {
        link.addEventListener('click', this.handleClick);
      });
      this.iconElement.addEventListener('click', this.handleClick);
      this.closeElement?.addEventListener('click', this.handleClick);
      document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleClick);
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
        this.handleClick();
      }
      if (!Tools.isOutsideOf('newsletter-trigger', e)) {
        this.handleClick();
      }
    },
    handleClick() {
      this.isExpanded = !this.isExpanded;
    },
    hexToRGB() {
      if (!this.iconColor || !this.lottieFiles) return;
      let colorVal = this.iconColor;
      if (colorVal.startsWith('var(')) {
        colorVal = getComputedStyle(this.$refs.root || document.documentElement)
          .getPropertyValue(colorVal.slice(4, -1))
          .trim();
      }
      const hex = colorVal.replace(/^#/, '');
      const num = parseInt(hex, 16);
      const r = (num >> 16) & 255;
      const g = (num >> 8) & 255;
      const b = num & 255;
      const rgbArray = [r / 255, g / 255, b / 255];
      const flyShape = this.lottieFiles.fly.assets?.[1]?.layers?.[3]?.shapes?.[0]?.it?.[1]?.c;
      const idleShape = this.lottieFiles.idle.assets?.[1]?.layers?.[3]?.shapes?.[0]?.it?.[1]?.c;
      if (flyShape) flyShape.k = rgbArray;
      if (idleShape) idleShape.k = rgbArray;
    },
    setLottieColors() {
      if (!this.lottieFiles) return;
      if (this.light) {
        const white = [1, 1, 1];
        const flyLayers = this.lottieFiles.fly.assets?.[1]?.layers;
        const idleLayers = this.lottieFiles.idle.assets?.[1]?.layers;
        if (flyLayers && idleLayers) {
          [flyLayers, idleLayers].forEach((layers) => {
            layers[0]?.shapes?.[0]?.it?.[2]?.c && (layers[0].shapes[0].it[2].c.k = white);
            layers[1]?.shapes?.[0]?.it?.[2]?.c && (layers[1].shapes[0].it[2].c.k = white);
            layers[2]?.shapes?.[1]?.it?.[9]?.c && (layers[2].shapes[1].it[9].c.k = white);
            layers[2]?.shapes?.[0]?.it?.[11]?.c && (layers[2].shapes[0].it[11].c.k = white);
          });
        }
      }
      this.hexToRGB();
    },
    onComplete() {
      this.idle = true;
      this.lottie?.play();
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleClick);
    this.linkElement.forEach((link) => {
      link.removeEventListener('click', this.handleClick);
    });
    this.iconElement.removeEventListener('click', this.handleClick);
    this.iconElement.removeEventListener('click', this.handleTriggerClick);
    this.closeElement.removeEventListener('click', this.handleClick);
    this.observer.disconnect();
  },
};
</script>