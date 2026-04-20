<template>
  <div :class="containerClasses" v-if="accordion.headline" ref="container">
    <div class="row">
      <div :class="columnClasses">
        <headline :classes="headlineClasses"><span v-html="accordion.headline"></span></headline>
        <div class="accordion__subline font-size-2" v-if="accordion.subline">{{ accordion.subline }}</div>
      </div>
      <div class="row accordion__image" v-if="accordion.image">
        <v-img
          :img="accordion.image"
          :cloudinary="cloudinary(accordion)"
          :alt="accordion.alt"
          :animated="accordion.animated"
        />
      </div>
    </div>
  </div>
  <section :class="accordionClasses" ref="accordion">
    <div class="row position-relative">
      <div class="accordion__image-spacer col-lg-6">
        <v-img
          :img="outsideImage"
          :cloudinary="cloudinary(accordion)"
          :lazy="true"
          :alt="accordion.alt"
          :animated="outsideAnimated"
          :preset="outsidePreset"
          v-if="outsideImage"
        />
      </div>
      <div class="col-lg-6 position-static" :id="accordion.id">
        <div class="accordion__fallback-container mb-4 col-lg-6" v-if="outsideImage">
          <div :class="fallbackImageClasses">
            <v-img
              :img="outsideImage"
              :cloudinary="cloudinary(accordion)"
              :lazy="true"
              :alt="outsideAlt"
              :animated="outsideAnimated"
              :preset="outsidePreset"
            />
          </div>
        </div>
        <div :class="cardClasses(index)" v-for="(tab, index) in tabs" :style="cardStyle(index)" v-bind:key="index">
          <div class="accordion__card-header card-collapse" :id="getId(accordion, index, 'Heading')">
            <button
              type="button"
              :class="buttonClasses(tab)"
              data-toggle="collapse"
              :data-target="getId(accordion, index, '#Content')"
              :aria-expanded="isExpanded(tab)"
              :aria-controls="getId(accordion, index, 'Content')"
              @click="handleClick(index)"
            >
              {{ tab?.headline }}

              <span class="card-btn-toggle">
                <icon icon="plus-minus" class="accordion__icon-toggle" :closed="!states[index]" />
              </span>
            </button>
          </div>
          <div
            :id="getId(accordion, index, 'Content')"
            :class="contentClasses(tab)"
            :aria-labelledby="getId(accordion, index, 'Heading')"
            :data-parent="accordionId(accordion)"
          >
            <div class="accordion__richtext richtext richtext__small card-body">
              <div class="mb-4 col-lg-6 accordion__floating-container">
                <div :class="imageWrapperClasses" v-if="getImage(tab)">
                  <v-img
                    :img="getImage(tab)"
                    :cloudinary="cloudinary(tab)"
                    :lazy="true"
                    :alt="tab.alt"
                    :animated="getTab(tab).animated"
                  />
                </div>
              </div>
              <div class="accordion__text" v-html="tab.content"></div>
              <cta v-if="tab.cta" :text="tab.cta.text" :link="tab.cta.link" :href="tab.cta.href" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'accordion',
  computed: {
    outsidePreset() {
      return this.isOutsideImageWebpOrGif ? 'animated' : null;
    },
    isOutsideImageWebpOrGif() {
      if (!this.outsideImage) return false;

      return this.outsideImage.endsWith('.webp') || this.outsideImage.endsWith('.gif');
    },
    imageWrapperClasses() {
      return ['accordion__floating-image-wrapper', Tools.isTrue(this.shadowless) === true ? null : 'drop-shadow'];
    },
    containerClasses() {
      return [
        'accordion__container utility-animation container vue-component',
        this.spacing,
        this.accordion.image ? 'accordion--has-image' : null,
      ];
    },
    accordionClasses() {
      return [
        'accordion utility-animation container mt-6 mb-4 my-lg-8 vue-component',
        this.accordion.image ? 'accordion--has-image' : null,
      ];
    },
    fallbackImageClasses() {
      return [
        'accordion__fallback-image-wrapper',
        Tools.isTrue(this.shadowless) === true ? null : 'drop-shadow',
        this.showOutsideImage ? State.SHOW : null,
      ];
    },
    columnClasses() {
      return ['col', Tools.isTrue(this.left) ? null : 'text-center'];
    },
    headlineClasses() {
      return `accordion__headline  ${this.accordion?.headlineClasses}`;
    },
  },
  created() {
    if (!document) return;

    this.tabs = this.accordion.tabs;

    this.changeExpandedStateOnAnchor();
  },
  mounted() {
    if (!this.accordion.tabs) return;

    this.selectFallbackImage();

    if (this.isUpperBreakpoint()) {
      this.changeOutsideImage();
    } else {
      this.outsideImage = this.fallbackImage;
      this.outsideAlt = this.fallbackAlt;
    }

    this.accordion.tabs.forEach((element) => {
      this.states.push(element.expanded ? true : false);
    });

    if (this.$refs.container) {
      UtilityAnimation.init([this.$refs.container]);
    }

    if (this.$refs.accordion) {
      UtilityAnimation.init([this.$refs.accordion]);
    }
  },
  methods: {
    changeExpandedStateOnAnchor() {
      const hash = this.getHash();
      const id = hash
        .substring(1)
        .replace(/^(Heading|Content)/, '')
        .slice(0, -1);

      if (this.accordion?.id !== id) return;

      const index = hash.substring(hash.length - 1);

      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].expanded === true) {
          this.tabs[i].expanded = false;
        }
      }

      if (!this.tabs[index]) return;

      this.tabs[index].expanded = true;
    },
    getHash() {
      return window.location.hash;
    },
    isUpperBreakpoint() {
      return !Tools.isBelowBreakpoint('md');
    },
    selectFallbackImage() {
      if (!this.fallbackImage) {
        const activeTab = this.getActiveTab();

        this.fallbackImage = this.accordion.image || activeTab?.image;
        this.fallbackAnimated = this.accordion.image ? this.accordion.animated : activeTab.animated;
        this.fallbackAlt = this.accordion.image ? this.accordion.alt : activeTab?.alt;
      }
    },
    getActiveTab() {
      const expandedTabs = this.tabs.filter((item) => item.expanded);

      return expandedTabs ? expandedTabs[0] : null;
    },
    handleClick(index) {
      const lastState = this.states[index];

      this.states = this.states.map((_) => false);
      this.states[index] = !lastState;

      if (this.isUpperBreakpoint()) {
        this.changeOutsideImage(index);
      }

      if (!this.allTabsClosed()) return;

      this.changeToFallbackImage();
    },
    changeToFallbackImage() {
      this.showOutsideImage = true;

      this.accordion.image = this.fallbackImage;
      this.outsideImage = this.fallbackImage;
      this.outsideAnimated = this.fallbackAnimated;
      this.outsideAlt = this.fallbackAlt;
    },
    changeOutsideImage(index) {
      const tab = this.getTabByIndex(index);

      this.showOutsideImage = true;
      this.outsideImage = tab?.image || this.fallbackImage;
      this.outsideAnimated = tab?.image ? tab.animated : this.fallbackAnimated;
      this.outsideAlt = tab?.image ? tab.alt : this.fallbackAlt;
    },
    getTabByIndex(index) {
      if (typeof index === 'undefined') return this.getActiveTab();

      return this.accordion?.tabs[index];
    },
    allTabsClosed() {
      return this.states.filter((value) => value === true).length === 0;
    },
    getStateByIndex(index) {
      return this.states[index];
    },
    getId(accordion, index, name, saveElement = false) {
      return `${name}${accordion.id}${index}`;
    },
    isExpanded(tab) {
      return tab.expanded ? 'true' : 'false';
    },
    buttonClasses(tab) {
      return [
        'accordion__btn btn btn-link btn-block d-flex justify-content-between',
        !tab.expanded ? 'collapsed' : null,
      ];
    },
    contentClasses(tab) {
      return ['accordion__content collapse position-static', tab.expanded ? 'show' : null];
    },
    cardClasses(index) {
      const state = this.getStateByIndex(index);

      return ['accordion__card', state ? State.EXPANDED : null];
    },
    cardStyle(index) {
      return `--utility-animation-index: ${index}`;
    },
    accordionId(accordion) {
      return `#${accordion.id}`;
    },
    cloudinary(image) {
      return image.cloudinary || true;
    },
    getImage(tab) {
      if (tab.image) return tab.image;

      if (this.accordion.image) return this.accordion.image;

      return null;
    },
    getTab(tab) {
      return tab.image ? tab : this.accordion;
    },
  },
  data() {
    return {
      showOutsideImage: false,
      outsideImage: false,
      outsideAnimated: false,
      outsideAlt: '',
      states: [],
      fallbackImage: false,
      fallbackAnimated: false,
      fallbackAlt: '',
      tabs: [],
    };
  },
  props: {
    accordion: Object,
    shadowless: {
      default: null,
    },
    left: {
      default: null,
    },
    spacing: String,
  },
};
</script>
<style scoped>
:root {
  --color-black: #000000;
  --color-black-85: #262626;
  --color-black-70: #4c4c4c;
  --color-black-50: #7f7f7f;
  --color-black-40: #999;
  --color-black-30: #b2b2b2;
  --color-black-15: #d9d9d9;
  --color-black-4: #f5f5f5;
  --color-black-2: #fbfbfb;
  --color-white-30: rgba(255, 255, 255, 0.3);
  --color-white-50: rgba(255, 255, 255, 0.5);
  --color-white-80: rgba(255, 255, 255, 0.8);
  --color-manatee: #999ba6;
  --color-blue-dark: #000520;
  --color-blue-medium: #0072c6;
  --color-blue-light: #5cbbff;
  --color-blue-lighter: #77c6ff;
  --color-blue-jeans: #24a1fa;
  --color-celery: #9fc54f;
  --color-ziggurat: #bfdfe1;
  --color-conifer: #acd653;
  --color-green: #acd653;
  --color-frost: #edf5db;
  --color-sushi: #809f3e;
  --color-green-blue: #008187;
  --color-yellow-medium: #dab61d;
  --color-yellow: #fcd116;
  --color-orange: #f8842c;
  --color-red: #e44418;
  --color-french-rose: #ed4c78;
  --color-trout: #4c5062;
  --color-porcelain: #f3f5f6;
  --color-bon-jour: #e5e2e2;
  --color-deep-sea: #008774;
  --color-mint-green: #80f785;
  --color-midnight: #011e33;
  --color-regent-grey: #808e99;
  --color-geyser: #d1d9dd;
  --color-macaroni-and-cheese: #fcb975;
  --color-nevada: #60727f;
  --color-edgewater: #c2deda;
  --color-link-water: #cce3f4;
  --color-summer-green: #8ebeb2;
  --color-ripe-lemon: #f7cb0b;
  --color-sunglow: #ffd233;
  --color-cold-purple: #a09edb;
  --color-biloba-flower: #bd90ea;
  --color-lavender: #ad76e5;
  --color-perfume: #ddc3f7;
  --color-varden: #fff8dc;
  --color-sahara: #bd9d11;
  --color-gigas: #543b9c;
  --color-portage: #9898f9;
  --color-sahara-sand: #f6ee8c;
  --color-sunflower: #e1d429;
  --color-piper: #c66a23;
  --color-cream-can: #f5c663;
  --color-cyprus: #004144;
  --color-wax-flower: #ffbb9a;
  --color-manhatten: #f3b394;
  --color-jacarta: #19122f;
  --color-wistful: #b2a7d2;
  --color-lochmara: #007ac8;
  --color-denim: #1476bf;
  --color-polar: #f6f9fd;
  --color-ghost: #cccdd2;
  --color-athens-gray: #e5e6e9;
  --color-bombay: #b3b4bc;
  --color-cornflower-blue: #6195ed;
  --color-shuttle-gray: #666979;
  --color-waterloo: #80828f;
  --color-anakiwa: #97d4ff;
  --color-butterfly-bush: #524fa3;
  --color-kimberly: #716fa7;
  --color-white: #fff;
  --color-headlines: var(--color-blue-dark);
  --color-copy: var(--color-blue-dark);
  --color-copy-light: var(--color-white);
  --color-copy-lowlight: var(--color-black-30);
  --color-copy-reduced: var(--color-black-50);
  --color-copy-hover: var(--color-black-70);
  --color-active: var(--color-primary);
  --color-surface-background: var(--color-black-4);
  --color-background: var(--color-white);
  --color-border-default: var(--color-black-30);
  --color-border-light: var(--color-black-15);
  --color-service-overview-border: var(--color-border-default);
  --color-services-border: var(--color-service-overview-border);
  --color-services-labels: var(--color-trout);
  --color-page-detail-border: var(--color-border-default);
  --color-page-detail-copy: var(--color-black-85);
  --color-page-detail-shape: var(--color-yellow);
  --color-page-detail-details: var(--color-orange);
  --color-job-list-border: var(--color-border-default);
  --color-job-list-detail: var(--color-yellow);
  --color-job-list-detail-copy: var(--color-black-85);
  --color-person-quote-detail: var(--color-yellow);
  --color-icon-hover-background: var(--color-black-85);
  --color-icon-hover-color: var(--color-white);
  --color-icon-check-background: var(--color-link-water);
  --color-modal-background: var(--color-white);
  --color-form-background: var(--color-porcelain);
  --color-form-background-light: var(--color-white);
  --color-form-error: var(--color-red);
  --color-form-success: var(--color-deep-sea);
  --color-form-border: var(--color-bon-jour);
  --color-form-border-hover: var(--color-border-default);
  --color-google-maps-popup-background: var(--color-blue-dark);
  --color-hero-icon: var(--color-yellow);
  --color-hero-study-background: var(--color-primary);
  --color-hero-study-copy: var(--color-copy);
  --color-hero-image-content-grid-overline-text: var(--color-blue-dark);
  --color-hero-text-overline-text: var(--color-orange);
  --color-people-square-copy: var(--color-white);
  --color-step-list-highlight: var(--color-yellow);
  --color-step-list-highlight-copy: var(--color-copy);
  --color-step-list-border: var(--color-border-light);
  --color-career-background: var(--color-blue-dark);
  --color-text-image-background: var(--color-career-background);
  --color-pricing-product-border: var(--color-manatee);
  --color-fab-background: var(--color-yellow);
  --color-testimonials: var(--color-blue-jeans);
  --color-event-teaser-timing: var(--color-manatee);
  --color-event-teaser-timing-highlight: var(--color-orange);
  --color-event-teaser-background: var(--color-black-2);
  --color-event-teaser-teaser-background: var(--color-green-blue);
  --color-event-teaser-teaser-copy: var(--color-white);
  --color-event-detail: var(--color-surface-background);
  --color-event-detail-shape: var(--color-yellow);
  --color-badge-icon: var(--color-white);
  --color-badge-background: var(--color-orange);
  --color-card-background: var(--color-surface-background);
  --color-card-highlight: var(--color-orange);
  --color-back-to-top-border: var(--color-border-default);
  --color-back-to-top-hover-background: var(--color-blue-dark);
  --color-back-to-top-hover-foreground: var(--color-white);
  --color-faq-border: var(--color-trout);
  --color-modal-error-title: var(--color-red);
  --color-modal-error-contact: var(--color-black);
  --color-letter-switcher-highlight: var(--color-lochmara);
  --color-letter-switcher-copy: var(--color-copy-light);
  --color-letter-switcher-overline: var(--color-yellow);
  --color-letter-switcher-underline: var(--color-orange);
  --color-scroll-arrow: var(--color-orange);
  --color-header-background: var(--color-white);
  --color-header-border: var(--color-ghost);
  --color-header-container-border: var(--color-athens-gray);
  --color-header-contact-background: var(--color-polar);
  --color-header-active: var(--color-active);
  --color-header-product-subtitle: var(--color-shuttle-gray);
  --color-link-list-border: var(--color-ghost);
  --color-link-list-icon: var(--color-bombay);
  --color-link-list-title: var(--color-trout);
  --color-link-list-active: var(--color-active);
  --color-toggle-switch-indicator: var(--color-midnight);
  --color-accordion-hover-background: var(--color-surface-background);
  --color-table-mark: var(--color-yellow);
  --color-emergency: var(--color-orange);
  --color-emergency-accent: var(--color-piper);
  --color-input-placeholder: var(--color-bombay);
  --color-highlight-underline: var(--color-highlight-second);
  --color-highlight-animated: var(--color-highlight-second);
  --color-link: var(--color-primary);
  --color-link-hover: var(--color-primary-accent);
}

.bg-grey {
  background-color: var(--color-bg-grey);
}

@keyframes fade-in-from-bottom {
  0% {
    opacity: 0;
    transform: translate3d(0, var(--utility-animation-distance), 0);
  }
  100% {
    opacity: var(--utility-animation-to-opacity);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fade-in-from-top {
  0% {
    opacity: 0;
    transform: translate3d(0, calc(-1 * var(--utility-animation-distance)), 0);
  }
  100% {
    opacity: var(--utility-animation-to-opacity);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: min(30vw, 150px);
  }
}
@keyframes growFull {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes slideIn {
  0% {
    opacity: 0;
    top: 100px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}
@keyframes slideInUp {
  from {
    opacity: 0;
    visibility: visible;
  }
  to {
    opacity: 1;
  }
}
@keyframes moveRightLeft {
  0% {
    transform: translateX(0%);
  }
  30% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes moveTopRight {
  0% {
    transform: scale(1);
    transform-origin: left bottom;
    position: relative;
  }
  100% {
    transform: scale(1.2);
    transform-origin: left bottom;
    position: relative;
    top: 1px;
  }
}
/**
* Animation for Background Shapes
*/
@keyframes svgShape1 {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  100% {
    transform: translateY(50px) rotate(-5deg) scale(1.1);
  }
}
@keyframes svgShape2 {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(50px) rotate(-5deg);
  }
}
@keyframes svgShape3 {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  100% {
    transform: translateY(-50px) rotate(2deg) scale(0.8);
  }
}
@keyframes svgShape4 {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(-50px) rotate(-2deg);
  }
}
.svg-shape-animation path:nth-child(1n) {
  animation: svgShape1 9s ease-in-out alternate infinite;
  transform-origin: center;
}
.svg-shape-animation path:nth-child(2n) {
  animation: svgShape2 10s ease-in-out alternate infinite;
  transform-origin: center;
}
.svg-shape-animation path:nth-child(3n) {
  animation: svgShape3 11s ease-in-out alternate infinite;
  transform-origin: center;
}
.svg-shape-animation path:nth-child(4n) {
  animation: svgShape4 12s ease-in-out alternate infinite;
  transform-origin: center;
}

@keyframes scaleOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(1.3);
  }
}
@keyframes blurry-orbit {
  0% {
    transform: translate(var(--blurry-x1), var(--blurry-y1));
  }
  20% {
    filter: blur(var(--blurry-blur));
    transform: translate(var(--blurry-x2), var(--blurry-y2));
  }
  70% {
    filter: blur(0);
    transform: translate(var(--blurry-x3), var(--blurry-y3));
  }
  100% {
    filter: blur(var(--blurry-blur));
    transform: translate(var(--blurry-x1), var(--blurry-y1));
  }
}
.fade-in-bottom,
.fade-in-top {
  opacity: 0;
}

.fade-in-bottom.is-starting {
  transform: translate3d(0, var(--utility-animation-distance), 0);
  animation: fade-in-from-bottom 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}

.fade-in-top.is-starting {
  transform: translate3d(0, calc(-1 * var(--utility-animation-distance)), 0);
  animation: fade-in-from-top 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}

.zoom-in-out.is-starting {
  transform: scale(1);
  animation: zoom-in-out 3s forwards;
}

.bouncing.is-starting {
  transform: translateY(0);
  animation: bouncing 2s forwards;
}

.fill-in-left {
  width: 0%;
  overflow: hidden;
  animation: fill-in-from-left 3s forwards;
}

@keyframes zoom-in-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes fill-in-from-left {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes bouncing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--animation-scroll-width));
  }
}
@keyframes scroll-infinite {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
.accordion .accordion__text,
.accordion .accordion__btn,
.accordion .accordion__fallback-image-wrapper {
  opacity: 0;
}
.accordion[data-utility-animation-in-viewport=true] .accordion__text,
.accordion[data-utility-animation-in-viewport=true] .accordion__btn,
.accordion[data-utility-animation-in-viewport=true] .accordion__fallback-image-wrapper {
  transform: translate3d(0, var(--utility-animation-distance), 0);
  animation: fade-in-from-bottom 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.accordion[data-utility-animation-in-viewport=true] .accordion__text,
.accordion[data-utility-animation-in-viewport=true] .accordion__btn {
  animation-delay: calc(var(--utility-animation-index) * 120ms);
}
.accordion[data-utility-animation-in-viewport=true] .accordion__floating-image-wrapper {
  opacity: 1;
  transition-delay: 0.5s;
}
@media (min-width: 992px) {
  .accordion.accordion--has-image .accordion__fallback-container,
  .accordion.accordion--has-image .accordion__floating-container {
    display: block;
  }
}
.accordion.accordion--has-image .accordion__floating-container {
  display: none;
  opacity: 0;
}
.accordion .btn-link:not(.collapsed), .accordion .btn-link:hover {
  color: var(--color-primary-accent);
}
.accordion .btn-link:not(.collapsed) {
  border-bottom-color: transparent;
}
.accordion .accordion__btn:not(.collapsed) .card-btn-toggle-default {
  display: none;
}
.accordion .accordion__btn.collapsed .card-btn-toggle-default {
  display: inline-flex;
}
.accordion .accordion__btn.collapsed .card-btn-toggle-active {
  display: none;
}
.accordion .card-btn-toggle {
  color: currentColor;
  margin-left: 1rem;
}
.accordion .accordion__icon-toggle.icon {
  width: 1.5rem;
  height: 1.5rem;
  overflow: hidden;
}
.accordion .card-collapse:hover {
  background-color: var(--color-accordion-hover-background);
}

.accordion__container {
  opacity: 0;
  overflow: hidden;
}
.accordion__container[data-utility-animation-in-viewport=true] {
  transform: translate3d(0, var(--utility-animation-distance), 0);
  animation: fade-in-from-bottom 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.accordion__container.accordion--has-image .accordion__image {
  display: block;
}
@media (min-width: 992px) {
  .accordion__container.accordion--has-image .accordion__image {
    display: none;
  }
}
.accordion__container + .accordion .accordion__fallback-container {
  display: none;
}
@media (min-width: 992px) {
  .accordion__container + .accordion .accordion__fallback-container {
    display: block;
  }
}

.accordion__image-spacer {
  display: none;
  opacity: 0;
  pointer-events: none;
}
@media (min-width: 992px) {
  .accordion__image-spacer {
    display: block;
  }
}

.accordion__image {
  margin-top: 1rem;
  display: none;
}

.accordion__fallback-container {
  z-index: 1;
}

.accordion__fallback-container,
.accordion__floating-container {
  width: 100%;
}
@media (min-width: 992px) {
  .accordion__fallback-container,
  .accordion__floating-container {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
}

@media (min-width: 992px) {
  .accordion__fallback-image-wrapper img,
  .accordion__floating-image-wrapper img {
    opacity: 0;
    display: block;
    position: sticky;
    left: 0;
    top: 25vh;
  }
}
@media (min-width: 992px) {
  .accordion__fallback-image-wrapper,
  .accordion__floating-image-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .show .accordion__fallback-image-wrapper img {
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }
}

.accordion__btn {
  padding: 1rem;
  color: var(--color-copy);
  border-bottom: 1px solid var(--color-border-light);
  border-radius: 0;
}
.accordion__btn.btn {
  text-align: left;
}

.accordion__card.is-expanded .collapsing .accordion__richtext {
  opacity: 0.7;
}
.accordion__card.is-expanded .show .accordion__richtext {
  opacity: 1;
}

.accordion__card-header {
  padding-top: 0.25rem;
}

.accordion__card-header,
.accordion__content {
  scroll-margin-top: 80px;
}
@media (min-width: 992px) {
  .accordion__card-header,
  .accordion__content {
    scroll-margin-top: 100px;
  }
}

.accordion__richtext {
  padding: 1.5rem 1rem 2.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.accordion__content {
  border-bottom: 1px solid var(--color-border-light);
}

.accordion__fallback-image-wrapper.show img {
  opacity: 1;
  transition: opacity 250ms ease-in-out;
}

.accordion__headline + .accordion__subline {
  margin-top: 1.5rem;
}
</style>
