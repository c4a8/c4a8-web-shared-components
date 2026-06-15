<template>
  <div :class="classList" :style="style">
    <hero-pattern class="hero__pattern" v-if="pattern" />
    <svg-shape-animation v-else-if="svgShapeAnimation" />
    <v-img
      v-if="img"
      class="hero__background-img"
      :cloudinary="background.cloudinary"
      :img="img"
      :style="backgroundImgStyle"
      :alt="backgroundAlt"
    ></v-img>
    <div class="hero__container container">
      <main :class="contentClassList">
        <div class="hero__back-row row" v-if="hasBack">
          <div class="hero__back-col col">
            <div class="hero__back back">
              <icon icon="arrow" classes="hero__back-icon" direction="left" :hover="true" :circle="true"> </icon>
            </div>
          </div>
        </div>
        <letter-switcher
          v-if="letterSwitcher"
          v-bind="letterSwitcher"
          class="hero__letter-switcher"
          @ended="handleLetterSwitcherEnded"
        >
        </letter-switcher>
        <div class="hero__intro row" v-if="overline || headlineText || subline" ref="intro">
          <div class="hero__intro-col col">
            <div class="hero__overline-wrapper">
              <span :class="overlineClassList" v-if="overline">{{ overline }}</span>
            </div>
            <headline :class="headlineClassList" v-if="headlineText" :level="level" :text="headlineText"></headline>
            <div
              :class="['hero__content-shape', shapeClasses]"
              v-if="$slots['background'] || shapeInContentValue"
              :style="{ order: shapeMobileOrder !== false ? shapeMobileOrder : undefined }"
            >
              <slot name="background" v-if="isMounted && $slots['background']" :alt="shape.alt"></slot>
              <v-img
                v-if="showShape && shape.imgMobile && !isUpperBreakpoint"
                :cloudinary="shape.cloudinary"
                :img="shape.imgMobile"
                :alt="shape.alt"
                :lottie="lottieFileData"
                :lottie-settings="lottieSettings"
                :img-src-sets="imgSrcSets"
                :class="mobileShapeClasses"
                fetchpriority="high"
              >
              </v-img>
              <v-img
                v-if="showShape && !shape.imgMobile && !isUpperBreakpoint"
                :cloudinary="shape.cloudinary"
                :img="shape.img"
                :alt="shape.alt"
                :lottie="lottieFileData"
                :lottie-settings="lottieSettings"
                :img-src-sets="imgSrcSets"
                fetchpriority="high"
              >
              </v-img>
            </div>
            <p class="hero__subline lead" v-if="subline" v-html="subline"></p>
            <cta-list v-if="ctaList" classes="hero__cta-list" :list="ctaList"> </cta-list>
            <div class="hero__badges" v-if="badges">
              <div class="hero__badge-container" v-for="(badge, index) in badges" :key="index">
                <v-img :cloudinary="true" v-bind="badge" class="hero__badge-image" fetchpriority="high"></v-img>
              </div>
            </div>
          </div>
        </div>
        <text-icon-animation
          v-if="animation"
          :animation="animation"
          :cta="cta"
          :icon="icon"
          :iconColor="iconColor"
          classes="hero__animation"
        >
        </text-icon-animation>
      </main>
    </div>
    <wrapper
      classes="hero__background-shape-wrapper"
      v-if="shape || $slots['background']"
      :hideContainer="!showShapeContainer"
    >
      <wrapper classes="hero__background-shape-content" :hideContainer="!showShapeContainer" :hideContainerClass="true">
        <div
          v-if="$slots['background'] || shape"
          :class="['hero__background-shape', shapeClasses, shapeOffsetX ? 'hero__background-shape--overflow' : '']"
          :style="shapeStyle"
        >
          <slot name="background" v-if="isMounted && $slots['background']" :alt="shape.alt"></slot>
          <v-img
            v-else-if="showShape"
            :cloudinary="shape.cloudinary"
            :img="shape.img"
            :alt="shape.alt"
            :lottie="lottieFileData"
            :lottie-settings="lottieSettings"
            :img-src-sets="imgSrcSets"
            fetchpriority="high"
          >
          </v-img>
        </div>
      </wrapper>
    </wrapper>
    <svg-shape
      v-if="svgShapeAnimation"
      align="bottom"
      :peak="svgShapePeak"
      :obliquity="4"
      class="hero__svg-shape position-absolute bottom-0 left-0 w-100"
    />
  </div>
</template>

<script>
import { useHead } from '@unhead/vue';
import { useAppStore } from '../stores/app';

import Tools from '../utils/tools.js';
import CloudinaryTools from '../utils/cloudinary-tools.js';
import StickyScroller from '../utils/sticky-scroller.js';

export default {
  tagName: 'hero',
  setup() {
    const store = useAppStore();

    return { store };
  },
  data() {
    return {
      introHeight: null,
      style: null,
      isUpperBreakpoint: null,
      backgroundImgStyle: null,
      isMounted: false,
    };
  },
  created() {
    this.preloadKeyAsset();
    this.handleResize();

    this.setIntroStyle();
    this.setStyle();
    this.setBackgroundImgStyle();
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);

    this.isMounted = true;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    preloadKeyAsset() {
      if (!this.shape || !this.shape.img) return;

      const keyAssetPath = this.shape.img;

      if (!keyAssetPath) return;

      const cloudinaryLink = this.shape.cloudinary
        ? CloudinaryTools.getCloudinaryLink({ img: keyAssetPath })
        : `/assets/${keyAssetPath}`;

      useHead({
        link: [
          {
            href: cloudinaryLink,
            rel: 'preload',
            as: 'image',
            ...(isCloudinary ? { crossorigin: 'anonymous' } : {}),
            fetchpriority: 'high',
          },
        ],
      });
    },
    handleResize() {
      this.isUpperBreakpoint = Tools.isUpperBreakpoint();
    },
    setStyle() {
      this.style = [
        this.bgColor
          ? `--hero-background-color: ${this.bgColor}; --hero-background-color-rgb: ${Tools.hexToRgb(this.bgColor)}`
          : '',
        this.bgWidth ? `--hero-background-width: ${this.bgWidth}%;` : '',
        this.overlineBgColor ? `--hero-overline-background-color: ${this.overlineBgColor};` : '',
      ];
    },
    setBackgroundImgStyle() {
      this.backgroundImgStyle = [this.bgFit ? `--hero-background-img-fit: ${this.bgFit};` : ''];
    },

    setIntroStyle() {
      if (!this.isCentered) return;

      const intro = this.$refs['intro'];

      if (!intro) return;

      this.introHeight = intro.offsetHeight;

      intro.style.height = `0`;
    },
    handleLetterSwitcherEnded() {
      const intro = this.$refs['intro'];

      if (!intro) return;

      intro.style.height = `${this.introHeight}px`;
      intro.style.opacity = 1;
    },
  },
  computed: {
    classList() {
      return [
        'hero vue-component',
        this.variant,
        this.isLight ? 'is-light' : '',
        this.isLightOverline ? 'is-light-overline' : '',
        this.shapePosition,
        this.fullscreen ? 'hero--fullscreen' : '',
        this.shapeFullscreen ? 'hero--shape-fullscreen' : '',
        this.animation ? 'hero--animation' : '',
        this.textShadow ? 'hero--text-shadow' : '',
        this.bgWidth ? 'hero--bg-width' : '',
        this.isCentered ? 'hero--centered' : '',
        this.shapeInContentValue ? 'hero--shape-in-content' : '',
        this.hasStickyScroller ? StickyScroller.getRootClass() : '',
        this.shapeMobileOrder ? 'hero--shape-mobile-order' : '',
        this.shapeIsSVG ? 'hero--shape-svg' : '',
        this.shapeMobileSmall ? 'hero--shape-mobile-small' : '',
      ];
    },
    shape() {
      return this.heroJson && this.heroJson.shape ? this.heroJson.shape : null;
    },
    overlineClassList() {
      return ['hero__overline', this.overlineFull ? 'hero__overline--full' : ''];
    },
    contentClassList() {
      return ['hero__content', this.spacing ? this.spacing : this.animation ? '' : 'py-10 py-lg-11'];
    },
    cta() {
      return this.heroJson ? this.heroJson.cta : null;
    },
    isLight() {
      if (this.heroJson && typeof this.heroJson.light !== 'undefined') return this.heroJson.light;

      return this.store.header?.isLight;
    },
    isLightOverline() {
      return this.heroJson && typeof this.heroJson.lightOverline !== 'undefined'
        ? this.heroJson.lightOverline
        : this.isLight;
    },
    background() {
      return this.heroJson && this.heroJson.background ? this.heroJson.background : null;
    },
    bgColor() {
      return this.heroJson ? this.heroJson.bgColor : null;
    },
    bgFit() {
      return this.heroJson ? this.heroJson.bgFit : 'cover';
    },
    bgWidth() {
      return this.heroJson ? this.heroJson.bgWidth : null;
    },
    overline() {
      return this.heroJson ? this.heroJson.overline : null;
    },
    overlineBgColor() {
      return this.heroJson ? this.heroJson.overlineBgColor : null;
    },
    overlineFull() {
      return this.heroJson ? this.heroJson.overlineFull : false;
    },
    subline() {
      return this.heroJson ? this.heroJson.subline : null;
    },
    headlineText() {
      return this.heroJson ? this.heroJson.headline : null;
    },
    headlineClasses() {
      return this.heroJson ? this.heroJson.headlineClasses : null;
    },
    headlineClassList() {
      return ['hero__headline', this.headlineClasses];
    },
    textShadow() {
      return this.heroJson ? this.heroJson.textShadow : null;
    },
    level() {
      return this.heroJson && this.heroJson.level ? this.heroJson.level : 'h1';
    },
    animation() {
      return this.heroJson ? this.heroJson.animation : null;
    },
    letterSwitcher() {
      return this.heroJson ? this.heroJson.letterSwitcher : null;
    },
    icon() {
      return this.heroJson && this.background ? this.background.icon : null;
    },
    iconColor() {
      return this.heroJson && this.background ? this.background.iconColor : null;
    },
    fullscreen() {
      return this.heroJson && this.heroJson.fullscreen ? true : false;
    },
    spacing() {
      return this.heroJson && this.background ? this.background.spacing : null;
    },
    img() {
      return this.heroJson && this.background ? this.background.img : null;
    },
    backgroundAlt() {
      return this.heroJson && this.background ? this.background.alt : null;
    },
    hasStickyScroller() {
      return this.heroJson ? this.heroJson.sticky : false;
    },
    lottieSettings() {
      if (!this.shape || !this.shape.lottie) return;

      const height = this.shapeFullscreen ? '100%' : 'auto';

      return {
        ...this.shape.lottieSettings,
        width: 'auto',
        height,
      };
    },
    lottieFileData() {
      if (!this.shape) return null;

      return this.shape.lottie ? this.shape.lottie : this.lottieData ? Tools.getJSON(this.lottieData) : null;
    },
    showShape() {
      return this.shape ? this.shape.img || this.shape.lottie || this.lottieFileData : false;
    },
    shapeFullscreen() {
      return this.shape && this.shape.fullscreen ? true : false;
    },
    shapeOffsetY() {
      return (this.shape && this.shape.offsetY) || null;
    },
    shapeOffsetX() {
      return (this.shape && this.shape.offsetX) || null;
    },
    shapeStyle() {
      const style = {};

      if (this.shapeOffsetY) {
        style['--hero-shape-offset-y'] = this.shapeOffsetY;
      }

      if (this.shapeOffsetX) {
        style['--hero-shape-offset-x'] = this.shapeOffsetX;
      }

      return style;
    },
    shapeBottom() {
      return (this.shape && this.shape.bottom) || null;
    },
    shapeTop() {
      return (this.shape && this.shape.top) || null;
    },
    shapeMobileOrder() {
      return this.shape && this.shape.mobileOrder ? this.shape.mobileOrder : null;
    },
    shapeMobileSmall() {
      return this.shape && (this.shape.mobileSmall || this.shape.mobileSmall) ? true : false;
    },
    shapePosition() {
      if (!this.shape) return null;

      if (this.shapeFullscreen) return 'hero--shape-top';

      return this.shapeTop ? 'hero--shape-top' : this.shapeBottom ? 'hero--shape-bottom' : 'hero--shape-center';
    },
    shapeInContentMobile() {
      return this.shape && (this.shape.inContentMobile || this.shapeMobileOrder) ? true : false;
    },
    shapeInContentValue() {
      return this.shapeInContent ? true : this.shapeInContentMobile && !this.isUpperBreakpoint ? true : false;
    },
    shapeInContent() {
      return this.shape && this.shape.inContent ? true : false;
    },
    shapeClasses() {
      return this.shape && this.shape.classes ? this.shape.classes : null;
    },
    mobileShapeClasses() {
      return this.shape && this.shape.mobileClasses ? this.shape.mobileClasses : null;
    },
    shapeIsSVG() {
      return (this.shape && this.shape.img && this.shape.img.endsWith('.svg')) || this.shape?.isSvg;
    },
    variant() {
      return this.heroJson && this.heroJson.variant ? this.heroJson.variant : null;
    },
    pattern() {
      return this.heroJson && this.heroJson.pattern ? this.heroJson.pattern : null;
    },
    ctaList() {
      if (!this.heroJson || this.animation || (!this.heroJson.cta && !this.heroJson.ctaList)) return null;

      return this.heroJson.cta ? [this.heroJson.cta] : this.heroJson.ctaList;
    },
    svgShapeAnimation() {
      return this.heroJson && this.heroJson.svgShapeAnimation ? this.heroJson.svgShapeAnimation : false;
    },
    showShapeContainer() {
      return this.bgWidth || this.isSmall || (this.showShape && this.shapeInContentValue);
    },
    isCentered() {
      return this.letterSwitcher ? true : false;
    },
    isSmall() {
      return this.variant === 'hero--small';
    },
    imgSrcSets() {
      if (!this.bgWidth) return null;

      return 'heroStudy';
    },
    badges() {
      return this.heroJson && this.heroJson.badges ? this.heroJson.badges : false;
    },
    hasBack() {
      return this.heroJson && this.heroJson.back ? this.heroJson.back : false;
    },
    svgShapePeak() {
      return this.heroJson && this.heroJson.svgShapePeak ? this.heroJson.svgShapePeak : 'left';
    },
    heroJson() {
      return Tools.getJSON(this.hero);
    },
  },
  props: {
    hero: Object,
    lottieData: String,
  },
};
</script>
<style>
.hero {
  --hero-background-color: transparent;
  --hero-copy-color: var(--color-copy);
  --hero-copy-overline-color: var(--color-copy);
  --hero-overline-background-color: var(--color-highlight-second);
  --hero-background-width: 100%;
  --hero-background-width-middle: 50%;
  --hero-shape-offset-y: 0;
  --hero-shape-offset-x: 0;
  --hero-background-img-fit: cover;
  background: var(--hero-background-color);
  color: var(--hero-copy-color);
  position: relative;
  overflow-x: clip;
}
.hero.hero--shape-mobile-order .hero__background-shape {
  display: none;
}
@media (min-width: 992px) {
  .hero.hero--shape-mobile-order .hero__background-shape {
    display: flex;
  }
}
@media (max-width: 1199.98px) {
  .hero.hero--shape-mobile-order .hero__intro-col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .hero.hero--shape-mobile-order .hero__overline {
    order: 1;
  }
  .hero.hero--shape-mobile-order .hero__headline {
    order: 2;
  }
  .hero.hero--shape-mobile-order .hero__subline {
    order: 3;
  }
  .hero.hero--shape-mobile-order .hero__subline.hero__subline::before {
    display: none;
  }
  .hero.hero--shape-mobile-order .hero__cta-list {
    order: 4;
  }
  .hero.hero--shape-mobile-order .hero__badges {
    order: 5;
  }
}
@media (min-width: 992px) {
  .hero.hero--shape-mobile-order .hero__background-shape-wrapper.hero__background-shape-wrapper {
    display: none;
  }
}
.hero.hero--shape-mobile-small .hero__content-shape img {
  width: 50%;
}
.hero.is-light {
  --hero-copy-color: var(--color-copy-light);
}
.hero.is-light .hero__headline {
  color: var(--color--headlines);
}
.hero.is-light-overline {
  --hero-copy-overline-color: var(--color-copy-light);
}
.hero.hero--fullscreen {
  min-height: 100vh;
}
.hero.hero--fullscreen .hero__container,
.hero.hero--fullscreen .hero__content {
  min-height: inherit;
}
.hero.hero--fullscreen .hero__content {
  padding: 2.5rem 0;
}
@media (min-width: 992px) {
  .hero.hero--fullscreen .hero__content {
    padding: 16rem 0;
  }
}
.hero.hero--animation .hero__overline::before {
  animation-name: growFull;
}
.hero.hero--animation .hero__content {
  justify-content: flex-start;
}
@media (min-width: 992px) {
  .hero.hero--animation .hero__content {
    justify-content: center;
  }
}
.hero.hero--text-shadow .hero__headline {
  display: inline;
}
.hero.hero--text-shadow .hero__headline,
.hero.hero--text-shadow .hero__subline {
  background-color: rgba(var(--hero-background-color-rgb), 0.5);
}
.hero.hero--text-shadow .hero__subline::before {
  content: "";
  display: block;
  width: 100%;
  height: 2.5rem;
}
.hero.hero--shape-bottom .hero__background-shape {
  top: auto;
  transform: translateY(0);
  bottom: 0;
}
.hero.hero--shape-top .hero__background-shape {
  bottom: auto;
  transform: translateY(0);
  top: 0;
}
.hero.hero--shape-center .hero__background-shape {
  top: 0;
  bottom: auto;
  transform: translateY(0);
}
@media (min-width: 992px) {
  .hero.hero--shape-center .hero__background-shape {
    top: 50%;
    transform: translateY(-50%);
  }
}
@media (min-width: 992px) {
  .hero.hero--shape-in-content .hero__background-shape-wrapper .hero__background-shape, .hero.hero--bg-width .hero__background-shape-wrapper .hero__background-shape, .hero.hero--small .hero__background-shape-wrapper .hero__background-shape {
    position: absolute;
  }
}
.hero.hero--bg-width {
  overflow: hidden;
}
.hero.hero--bg-width .hero__background-shape {
  position: initial;
}
.hero.hero--bg-width .hero__subline {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .hero.hero--bg-width .hero__subline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .hero.hero--bg-width .hero__subline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 992px) {
  .hero.hero--bg-width {
    background: linear-gradient(to right, var(--hero-background-color) var(--hero-background-width-middle), transparent var(--hero-background-width-middle));
  }
  .hero.hero--bg-width .hero__background-shape {
    width: 100%;
    padding-left: 1rem;
    left: 50%;
    right: auto;
    max-width: none;
  }
  .hero.hero--bg-width .hero__content {
    background: linear-gradient(to right, var(--hero-background-color) var(--hero-background-width), transparent var(--hero-background-width));
    grid-template-columns: 1fr 1fr;
  }
}
.hero.hero--small .hero__background-shape {
  max-height: 300px;
}
@media (max-width: 991.98px) {
  .hero.hero--small .hero__background-shape {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .hero.hero--small .hero__background-shape > * {
    object-position: center;
  }
}
.hero.hero--small .hero__content {
  min-height: 300px;
}
@media (min-width: 992px) {
  .hero.hero--small .hero__content {
    min-height: 400px;
  }
}
.hero.hero--centered .hero__intro {
  --hero-intro-delay: 1.7s;
  grid-column: content-left/content-right;
  text-align: center;
  margin: 0 auto;
  transition: height 0.7s var(--hero-intro-delay) cubic-bezier(0.19, 1, 0.2, 1), opacity 1.6s var(--hero-intro-delay) cubic-bezier(0.19, 1, 0.2, 1);
}
@media (min-width: 992px) {
  .hero.hero--centered .hero__intro {
    width: 55%;
  }
}
.hero.hero--centered .hero__intro {
  opacity: 0;
  overflow: hidden;
}
.hero.hero--centered .hero__letter-switcher {
  grid-column: intro-left/intro-right;
}
.hero.hero--text .hero__headline {
  font-size: calc(3.75rem / 1.8);
  line-height: 1.2em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .hero.hero--text .hero__headline {
    font-size: calc(3.75rem / 1.3);
    line-height: 1.2em;
  }
}
@media (min-width: 1200px) {
  .hero.hero--text .hero__headline {
    font-size: 3.75rem;
    line-height: 1.2em;
  }
}
.hero.hero--text .hero__headline {
  font-weight: 100 !important;
}
.hero.hero--text .hero__headline strong {
  font-weight: inherit;
}
.hero.hero--text .hero__headline {
  line-height: 1.2em !important;
}
@media (min-width: 992px) {
  .hero.hero--text .hero__content {
    grid-template-columns: 6fr 1fr;
  }
}
.hero.hero--shape-fullscreen .hero__background-shape {
  max-height: none;
  height: 100%;
}
.hero.hero--shape-fullscreen .hero__cta-list {
  padding-top: 3rem;
}
@media (min-width: 992px) {
  .hero.hero--shape-fullscreen .hero__cta-list {
    padding-top: 4.5rem;
  }
}
.hero.hero--shape-in-content .hero__background-shape-wrapper {
  display: none;
}
.hero.hero--shape-in-content .hero__background-shape-wrapper .hero__background-shape {
  position: initial;
  transform: none;
  justify-content: flex-end;
  max-height: none;
  padding-left: 2rem;
  display: none;
}
@media (min-width: 992px) {
  .hero.hero--shape-in-content .hero__background-shape-wrapper .hero__background-shape {
    display: flex;
  }
}
@media (min-width: 992px) {
  .hero.hero--shape-in-content .hero__background-shape-wrapper {
    display: block;
  }
}
.hero.hero--shape-svg .hero__content-shape[style] {
  align-self: flex-end;
}
.hero:not(.hero--shape-svg) .hero__content-shape[style] {
  left: calc((100vw - 100%) / 2);
}
.hero .hero__headline {
  margin-bottom: 2.5rem;
}
.hero .hero__back {
  top: -2.5rem;
}
@media (min-width: 992px) {
  .hero .hero__back {
    top: 6.5rem;
  }
}

@media (min-width: 992px) {
  .hero__back-row {
    position: absolute;
    top: 0;
  }
}

.hero__overline {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 0.5rem;
  padding: 0.25rem 1.5rem 0.25rem 0.5rem;
  color: var(--hero-copy-overline-color);
}
.hero__overline::before {
  position: absolute;
  content: "";
  display: block;
  height: calc(var(--type-default-line-height) * 1em + 2 * 0.25rem);
  width: 0;
  left: 0;
  top: 0;
  background-color: var(--hero-overline-background-color);
  animation: grow;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  z-index: -1;
}
.hero__overline.hero__overline--full::before {
  animation-name: growFull;
}

.hero__overline-wrapper {
  display: block;
}

.hero__content {
  min-height: 400px;
}
@media (min-width: 992px) {
  .hero__content.hero__content--large {
    min-height: 880px;
    padding-bottom: 12rem;
  }
}
@media (min-width: 992px) {
  .hero__content {
    min-height: 700px;
  }
}

.hero__background-shape-content,
.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (min-width: 992px) {
  .hero__background-shape-content,
  .hero__content {
    display: grid;
    align-content: center;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "intro-left intro-right" "content-left content-right";
  }
}

.hero__animation {
  grid-column: content-left/content-right;
}

.hero__intro {
  grid-area: intro-left;
  grid-row: span 2;
  margin-bottom: 1.5rem;
}

.hero__background-img {
  z-index: 30;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: var(--hero-background-img-fit);
}

.hero__headline {
  --color--headlines: var(--hero-copy-color);
}

.hero__subline {
  font-size: 1.125rem;
  line-height: 1.6667em;
  display: inline;
}
@media (min-width: 992px) {
  .hero__subline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .hero__subline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
.hero__subline .highlight {
  background-position-x: 1em;
  background-position-y: 0.6em;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-image: linear-gradient(to bottom, var(--color-highlight-underline) 0%, var(--color-highlight-underline) 100%);
  background-repeat: repeat-x;
}

.hero__background-shape {
  z-index: 40;
  max-height: min(23vw, 30%);
  grid-area: intro-right/content-right;
}
.hero__background-shape.hero__background-shape--overflow {
  left: 0;
}
.hero__background-shape:not(.is--mobile) {
  display: flex;
}
.hero__background-shape > * {
  object-fit: contain;
  object-position: right;
  position: relative;
  transform: translateY(var(--hero-shape-offset-y)) translateX(var(--hero-shape-offset-x));
}
.hero__background-shape > *.is-svg {
  width: 100%;
}
.hero__background-shape > *.lottie {
  display: inline-flex;
  justify-content: flex-end;
}
.hero__background-shape > * .lottie__container {
  width: auto;
  height: auto;
}
@media (min-width: 992px) {
  .hero__background-shape {
    max-height: min(40vw, 60%);
  }
}
@media (min-width: 1200px) {
  .hero__background-shape {
    max-height: min(45vw, 85%);
  }
}

.hero__pattern {
  z-index: 20;
}

.hero__background-shape,
.hero__pattern {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.hero__container {
  z-index: 50;
  position: relative;
}

.hero__cta-list {
  padding-top: 1.5rem;
}
@media (max-width: 991.98px) {
  .hero__cta-list {
    width: 100%;
  }
  .hero__cta-list .cta-list__item {
    width: 100%;
  }
}

.hero__background-shape-wrapper {
  z-index: 60;
  margin-top: -3.5rem;
  pointer-events: none;
}
@media (min-width: 992px) {
  .hero__background-shape-wrapper {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0;
  }
}

.hero__background-shape-content {
  height: 100%;
  width: 100%;
}

.hero__content-shape {
  display: flex;
  justify-content: center;
}
.hero__content-shape[style] {
  position: relative;
}
.hero__content-shape[style][style*="order: 5"], .hero__content-shape[style][style*="order: 6"], .hero__content-shape[style][style*="order: 7"], .hero__content-shape[style][style*="order: 8"], .hero__content-shape[style][style*="order: 9"] {
  margin-top: 2rem;
}
.hero__content-shape[style]:not([style*="order: 5"]):not([style*="order: 6"]):not([style*="order: 7"]):not([style*="order: 8"]):not([style*="order: 9"]) {
  margin: 2rem 0;
}
.hero__content-shape .is-svg {
  width: 100%;
}
.hero__content-shape:not([style]) > * {
  margin: -2rem 0;
}
@media (min-width: 992px) {
  .hero__content-shape {
    display: none;
  }
}

.hero__badges {
  padding-top: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
}
.hero__badges > * {
  flex: 0 1 auto;
  width: auto;
}
@media (min-width: 768px) {
  .hero__badges {
    flex-direction: row;
  }
}
@media (min-width: 992px) {
  .hero__badges {
    padding-top: 4rem;
  }
}

.hero__svg-shape {
  z-index: 10;
}
</style>
