<template>
  <div :class="classList" ref="root" class="newsletter py-4 px-lg-0 px-1">
    <div class="js-sticky-block d-flex justify-content-center">
      <div
        class="newsletter__popup"
        :class="[{ [offScreenClass]: !isExpanded }, isMobile ? 'mx-2 w-auto' : '']"
        ref="modal"
        :style="modalStyle"
        @click="handleTriggerClick"
      >
        <div class="newsletter__close" ref="close" @click="handleClick">
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
          :isMobile="isMobile"
        />
      </div>
    </div>
    <div class="newsletter__banner-wrapper">
      <div class="newsletter__banner mx-auto" :class="isMobile ? 'd-flex' : ''" ref="icon" @click="handleClick">
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
    <a class="newsletter__trigger" ref="link" @click="handleClick"></a>
  </div>
</template>
<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';
import birdieFlap from '../../nuxt/src/assets/lottie/BirdieFlap.json';
import birdieNoflap from '../../nuxt/src/assets/lottie/BirdieNoflap.json';

const SCREEN_XS_THRESHOLD = 750;
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
      isMobile: Tools.isBelowBreakpoint('lg'),
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
    this.checkBreakpoint();

    window.addEventListener('resize', this.checkBreakpoint);

    this.animateBanner();
    this.root = this.$refs.root;
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
      document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleClick);
      window.addEventListener('click', this.handleOutsideClick);
    },
    checkBreakpoint() {
      this.isMobile = Tools.isBelowBreakpoint('lg');
      this.screenXS = window.innerHeight <= SCREEN_XS_THRESHOLD;
      this.animateBanner();
    },
    animateBanner() {
      const wrapperElement = this.$el.querySelector('.newsletter__banner-wrapper');
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
        Tools.isOutsideOf('newsletter__trigger', e)
      ) {
        this.handleClick();
      }
      if (!Tools.isOutsideOf('newsletter__trigger', e)) {
        this.handleClick();
      }
    },
    handleClick() {
      this.isExpanded = !this.isExpanded;
    },
    setLottieColors() {
      if (!this.lottieFiles) return;
      if (this.light) {
        const setLightContour = (assets) => {
          assets?.forEach((asset) => {
            asset.layers?.forEach((layer) => {
              layer.shapes?.forEach((shape) => {
                shape.it?.forEach((item) => {
                  if (item.id === 'contour') {
                    item.c.k = [1, 1, 1];
                  }
                });
              });
            });
          });
        };

        setLightContour(this.lottieFiles.fly.assets);
        setLightContour(this.lottieFiles.idle.assets);
      }
      Tools.hexToRgb(this.iconColor);
    },
    onComplete() {
      this.idle = true;
      this.lottie?.play();
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleClick);
    this.observer?.disconnect();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkBreakpoint);
  },
};
</script>
