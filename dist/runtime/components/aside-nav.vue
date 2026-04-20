<template>
  <aside class="aside-nav font-size-1 bold">
    <a class="aside-nav__toggle" @click="toggleMenu" v-if="isMobile"
      >{{ $t('topicsOnPage') }}<icon icon="plus-minus" class="aside-nav__icon-toggle" :closed="!isMenuOpen"
    /></a>
    <Transition name="slide-fade">
      <ul v-show="isMenuOpen || !isMobile" class="aside-nav__list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="getListItemClass(item)"
          :style="{ '--item-index': index }"
        >
          <template v-if="isAnchorLink(item.href)">
            <a :href="item.href" @click.prevent="handleAnchorClick(item.href)" class="font-size-1 link">
              <span>{{ item.text }}</span>
            </a>
          </template>
          <template v-else>
            <NuxtLink :to="item.href" :target="item.target">
              <span>{{ item.text }}</span>
            </NuxtLink>
          </template>
        </li>
      </ul>
    </Transition>
  </aside>
</template>

<script setup>
import Tools from '../utils/tools';
import State from '../utils/state';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const isMenuOpen = ref(false);
const isMobile = ref(false);
const activeSection = ref('');
let observer = null;

const checkBreakpoint = () => {
  isMobile.value = Tools.isBelowBreakpoint('lg');

  if (!isMobile.value) {
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isAnchorLink = (href) => href.startsWith('#');

const handleAnchorClick = (href) => {
  const id = href.substring(1);
  const idTarget = document.querySelector(`#${id}`);

  if (idTarget) {
    Tools.scrollIntoView(idTarget, true);
  }

  if (isMobile.value) {
    isMenuOpen.value = false;
  }
};

const getListItemClass = (item) => {
  return {
    'aside-nav__list-item': true,
    [State.ACTIVE]: activeSection.value === item.href,
  };
};

const setupIntersectionObserver = () => {
  const headlines = props.menuItems
    .filter((item) => isAnchorLink(item.href))
    .map((item) => {
      const id = item.href.substring(1);
      const element = document.querySelector(`#${id}`);

      return { id: item.href, element };
    })
    .filter((item) => item.element);

  const topOffset = 200;
  const enterTop = -window.innerHeight + topOffset;

  const enterObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top)[0];

      if (visibleEntry) {
        const id = '#' + visibleEntry.target.id;

        activeSection.value = id;
      }
    },
    {
      rootMargin: enterTop + 'px 0px 0px 0px',
      threshold: 1,
    }
  );

  const leaveObserver = new IntersectionObserver(
    (entries) => {
      const leavingEntry = entries
        .filter((entry) => !entry.isIntersecting && entry.boundingClientRect.top > 0)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (leavingEntry) {
        const currentIndex = headlines.findIndex((item) => item.element === leavingEntry.target);
        if (currentIndex > 0) {
          activeSection.value = headlines[currentIndex - 1].id;
        }
      }
    },
    {
      rootMargin: '200px 0px 0px 0px',
      threshold: 1,
    }
  );

  headlines.forEach((item) => {
    enterObserver.observe(item.element);
    leaveObserver.observe(item.element);
  });

  observer = {
    enter: enterObserver,
    leave: leaveObserver,
  };
};

onMounted(() => {
  checkBreakpoint();

  window.addEventListener('resize', checkBreakpoint);

  setupIntersectionObserver();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkBreakpoint);

  if (observer) {
    observer.enter.disconnect();
    observer.leave.disconnect();
  }
});
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
.aside-nav {
  --aside-nav-background-color: var(--color-black-2);
}
.aside-nav .slide-fade-enter-active,
.aside-nav .slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.aside-nav .slide-fade-enter-from,
.aside-nav .slide-fade-leave-to {
  transform: translateY(15px);
  opacity: 0;
}
.aside-nav .slide-fade-enter-to,
.aside-nav .slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
@media (max-width: 1199.98px) {
  .aside-nav {
    --aside-nav-bottom-position: 1rem;
    --aside-nav-shadow-width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    z-index: 290;
    margin: 2rem 0;
    background-color: var(--aside-nav-background-color);
    padding: 1rem;
    position: sticky;
    bottom: var(--aside-nav-bottom-position);
    width: min(100vw - 2 * var(--grid-gutter-half-width), 380px);
  }
  .aside-nav::after {
    content: "";
    display: block;
    position: absolute;
    width: var(--aside-nav-shadow-width);
    left: -1rem;
    height: var(--aside-nav-bottom-position);
    bottom: calc(-1 * var(--aside-nav-bottom-position));
    background-color: var(--color-background);
  }
}
@media (max-width: 991.98px) {
  .aside-nav {
    --aside-nav-shadow-width: 100vw;
  }
}

.aside-nav__list-item + .aside-nav__list-item {
  margin-top: 0.75rem;
}
@media (max-width: 1199.98px) {
  .aside-nav__list-item:first-of-type {
    margin-top: 2.25rem;
  }
}

.aside-nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.aside-nav__toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.aside-nav__toggle .aside-nav__icon-toggle.icon {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
