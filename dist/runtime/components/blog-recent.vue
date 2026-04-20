<template>
  <template v-if="showComponent">
    <SharedContentList :data-list="postsArray" :query="query" v-slot="{ list }">
      <template v-if="list">
        <markdown-files
          :list="list"
          v-slot="{ files }"
          :hide-data="hideData"
          :query="query"
          :limit="limit"
          :is-recent="true"
          :hide-items="(item) => new Date(item.date) > new Date()"
          :strategy="strategy"
        >
          <div :class="classList" ref="root" v-if="updateFiles(files)">
            <div class="blog-recent__bg" :style="{ 'background-color': bgColor }" v-if="skinClass !== ''"></div>
            <wrapper :hideContainer="hiddenContainer">
              <div class="row" v-if="headline">
                <div
                  class="col-lg-12 col-md-10 mt-6 mt-lg-8 mb-4 mb-lg-6 fade-in-bottom"
                  data-utility-animation-step="1"
                >
                  <headline :level="headlineLevelValue" :classes="headlineClassesValue">{{ headline }}</headline>
                  <span v-if="subline" :class="sublineClassesValue">{{ subline }}</span>
                </div>
              </div>
              <div :class="blogRecentContainerClass" data-utility-animation-step="1" ref="container">
                <template v-for="(post, index) in files">
                  <div :class="itemClass" v-if="index <= limit" v-bind:key="index">
                    <card
                      v-bind="post"
                      :url="postUrl(post)"
                      :blogtitlepic="blogTitleUrl(post)"
                      :youtube-url="post.youtubeUrl"
                      :date="post.date"
                      :author="post.author"
                      :target="target(post)"
                      :event="event(post)"
                      :dataAuthors="dataAuthorsValue"
                      :external-language="post.externalLanguage"
                      :excerpt="excerpt(post)"
                    />
                  </div>
                </template>
              </div>
              <div class="blog-recent__cta-row row col-lg-12" v-if="cta">
                <cta
                  :text="cta?.text"
                  :button="cta?.button"
                  :target="cta?.target"
                  :width="cta?.width"
                  :href="cta?.href"
                  :external="cta?.external"
                />
              </div>
            </wrapper>
          </div>
        </markdown-files>
      </template>
    </SharedContentList>
  </template>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import StickyScroller from '../utils/sticky-scroller.js';
import UtilityAnimation from '../utils/utility-animation.js';
import MarkdownFiles from './markdown-files.vue';
import useConfig from '../composables/useConfig.js';
import useAuthors from '../composables/useAuthors.js';

import { useI18n } from 'vue-i18n';

export default {
  components: { MarkdownFiles },
  tagName: 'blog-recent',
  data() {
    return {
      hideData: ['tags'],
      filesValue: [],
      dataAuthorsValue: null,
      retryLimit: 5,
      retryTimeout: 200,
    };
  },
  setup() {
    const config = useConfig();
    const { authors } = useAuthors();
    const { strategy } = useI18n();

    return {
      config,
      authors,
      strategy,
    };
  },
  computed: {
    classList() {
      return [
        'blog-recent utility-animation utility-animation--percentage-offset',
        `${this.hasBackground}`,
        `${this.skinClass}`,
        this.hideContainer === true ? '' : this.getSpacing,
        this.sticky === true ? StickyScroller.rootSelector.substring(1) : '',
        'vue-component',
      ];
    },
    showComponent() {
      return this.postsArray.length > 0 || this.query;
    },
    query() {
      let query = {};

      query.limit = this.limit;
      query.sort = [{ moment: this.reversed ? 1 : -1 }];
      query.reversed = this.reversed;

      if (this.combine === true) {
        query.where = {
          layout: { IN: ['event', 'post', 'casestudies'] },
        };

        query.path = 'event-post-casestudies';
        query.limit = null;
        query.limitEvents = this.limitEvents;
      } else {
        if (this.events === true) {
          query.where = {
            path: { LIKE: ['/events/%'] },
          };
          query.path = 'events';
        } else if (this.caseStudies === true) {
          query.where = {
            path: { LIKE: ['/casestudies/%'] },
          };
          query.path = 'casestudies';
        } else {
          query.where = {
            path: { LIKE: ['/posts/%'] },
          };
          query.path = 'posts';
        }
      }

      if (this.tag) {
        if (!query.where) {
          query.where = {};
        }

        query.where.tags = {
          LIKE: `%${this.tag}%`,
        };
      }

      return query;
    },
    getSpacing() {
      return this.spacing ? this.spacing : '';
    },
    hasBackground() {
      return this.bgColor ? State.HAS_BACKGROUND : '';
    },
    blogRecentContainerClass() {
      return [
        'blog-recent__container fade-in-bottom',
        this.slider === true ? 'js-slick-carousel' : 'row mb-3',
        'vue-component',
      ];
    },
    hiddenContainer() {
      return this.slider === false ? this.hideContainer : false;
    },
    skinClass() {
      return `${this.slider === true ? 'has-slider' : ''}`;
    },
    itemClass() {
      return `${this.slider === true ? 'mb-6 mb-lg-0 blog-recent__slide' : 'col-sm-6 col-lg-4 mb-3 mb-sm-8'}`;
    },
    postsArray() {
      return typeof this.posts === 'string' ? JSON.parse(this.posts) : this.posts;
    },
    carouselOptions() {
      const obj = {
        rows: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.filesValue?.length > 3 ? true : false,
        centerMode: false,
        infinite: false,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: '30px',
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.filesValue?.length > 2 ? true : false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.filesValue?.length > 1 ? true : false,
            },
          },
        ],
      };

      return { ...obj, ...this.sliderOptions };
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      const defaultHeadlineClasses = 'h2-font-size';

      return this.headlineClasses
        ? Tools.hasFontSizeClass(this.headlineClasses)
          ? this.headlineClasses
          : `${defaultHeadlineClasses} ${this.headlineClasses}`
        : defaultHeadlineClasses;
    },
    sublineClassesValue() {
      return `blog-recent__subline ${this.sublineClasses ? this.sublineClasses : 'font-size-2'}`;
    },
    imgUrl() {
      return Tools.getBlogImgPath(this.config);
    },
  },
  watch: {
    filesValue(newValue) {
      if (newValue.length > 0) {
        this.$nextTick(() => {
          this.init();
        });
      }
    },
  },
  created() {
    this.getDataAuthors();
  },
  methods: {
    init() {
      if (this.retryLimit > 0 && !this.$refs.container)
        return setTimeout(() => {
          this.retryLimit--;

          this.init();
        }, this.retryTimeout);

      Tools.initSlickSlider(this.$refs.container, this.carouselOptions);

      if (!this.$refs.root) return;

      if (this.sticky) {
        StickyScroller.init([this.$refs.root]);
      }

      UtilityAnimation.init([this.$refs.root]);
    },
    async getDataAuthors() {
      if (this.dataAuthors) return (this.dataAuthorsValue = this.dataAuthors);

      this.dataAuthorsValue = this.authors;
    },
    event(post) {
      return post.layout === 'post' ? false : true;
    },
    blogTitleUrl(post) {
      if (post.layout === 'casestudies') {
        return post.hero?.v2 ? post.hero.shape.img : post.hero.background.img;
      } else if (post.image?.img) {
        return post.image.img;
      } else {
        return this.imgUrl + post.blogtitlepic;
      }
    },
    target(post) {
      return post.external || post.cta?.external ? '_blank' : '_self';
    },
    postUrl(post) {
      let url = post?.cta?.href || post.url;

      return url;
    },
    excerpt(post) {
      return post.excerpt || post.hero?.subline;
    },
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    bgColor: {
      type: String,
      default: 'var(--color-blue-light)',
    },
    dataAuthors: Object,
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    posts: {
      type: [Array, String],
      default: [],
    },
    cta: {
      default: null,
    },
    hideContainer: {
      default: false,
    },
    limitEvents: Number,
    limit: {
      type: Number,
      default: 3,
    },
    slider: {
      default: null,
    },
    sliderOptions: Object,
    sticky: {
      default: null,
    },
    events: Boolean,
    combine: Boolean,
    caseStudies: Boolean,
    reversed: Boolean,
    tag: {
      type: String,
      default: null,
    },
  },
};
</script>
<style>
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
.blog-recent {
  position: relative;
  overflow: hidden;
}
.blog-recent [data-utility-animation-step] {
  --utility-animation-distance: 15%;
  animation-duration: 0.8s;
}

.blog-recent__bg {
  position: absolute;
  height: 420vw;
  width: 148vh;
  left: -188px;
  top: 100px;
  transform: rotate(320deg);
  transform-origin: top left;
}
@media (min-width: 768px) {
  .blog-recent__bg {
    transform: rotate(310deg);
  }
}
@media (min-width: 992px) {
  .blog-recent__bg {
    left: -100px;
    top: 130px;
    transform: rotate(292deg);
  }
}

.blog-recent__slide {
  padding: 0;
}
@media (min-width: 576px) {
  .blog-recent__slide {
    padding: 0 0.5rem;
  }
}
@media (min-width: 992px) {
  .blog-recent__slide {
    padding: 0 1rem;
  }
}

.blog-recent__container {
  width: 100%;
}
@media (min-width: 576px) {
  .blog-recent__container {
    margin: 0 -0.5rem;
    width: calc(100% + 2 * 0.5rem);
  }
}
@media (min-width: 992px) {
  .blog-recent__container {
    width: 100%;
    margin: 0;
  }
}

.blog-recent__cta-row {
  place-content: end;
  margin: 1.25rem 0;
}
</style>
