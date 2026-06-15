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
        : `assets/${keyAssetPath}`;

      useHead({
        link: [
          {
            href: cloudinaryLink,
            rel: 'preload',
            as: 'image',
            crossorigin: 'anonymous',
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
<style lang="scss">
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

  &.hero--shape-mobile-order {
    .hero__background-shape {
      display: none;

      @include media-breakpoint-up(lg) {
        display: flex;
      }
    }

    @include media-breakpoint-down(lg) {
      .hero__intro-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .hero__overline {
        order: 1;
      }

      .hero__headline {
        order: 2;
      }

      .hero__subline {
        order: 3;

        &.hero__subline::before {
          display: none;
        }
      }

      .hero__cta-list {
        order: 4;
      }

      .hero__badges {
        order: 5;
      }
    }

    @include media-breakpoint-up(lg) {
      .hero__background-shape-wrapper.hero__background-shape-wrapper {
        display: none;
      }
    }
  }

  &.hero--shape-mobile-small {
    .hero__content-shape img {
      width: 50%;
    }
  }

  &.is-light {
    --hero-copy-color: var(--color-copy-light);

    .hero__headline {
      color: var(--color--headlines);
    }
  }

  &.is-light-overline {
    --hero-copy-overline-color: var(--color-copy-light);
  }

  &.hero--fullscreen {
    min-height: 100vh;

    .hero__container,
    .hero__content {
      min-height: inherit;
    }

    .hero__content {
      padding: spacing(10) 0;
    }

    @include media-breakpoint-up(lg) {
      .hero__content {
        padding: spacing(64) 0;
      }
    }
  }

  &.hero--animation {
    .hero__overline {
      &::before {
        animation-name: growFull;
      }
    }

    .hero__content {
      justify-content: flex-start;

      @include media-breakpoint-up(lg) {
        justify-content: center;
      }
    }
  }

  &.hero--text-shadow {
    .hero__headline {
      display: inline;
    }

    .hero__headline,
    .hero__subline {
      background-color: rgba(var(--hero-background-color-rgb), 0.5);
    }

    .hero__subline {
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: spacing(10);
      }
    }
  }

  &.hero--shape-bottom {
    .hero__background-shape {
      top: auto;
      transform: translateY(0);
      bottom: 0;
    }
  }

  &.hero--shape-top {
    .hero__background-shape {
      bottom: auto;
      transform: translateY(0);
      top: 0;
    }
  }

  &.hero--shape-center {
    .hero__background-shape {
      top: 0;
      bottom: auto;
      transform: translateY(0);

      @include media-breakpoint-up(lg) {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  &.hero--shape-in-content,
  &.hero--bg-width,
  &.hero--small {
    @include media-breakpoint-up(lg) {
      .hero__background-shape-wrapper {
        .hero__background-shape {
          position: absolute;
        }
      }
    }
  }

  &.hero--bg-width {
    overflow: hidden;

    .hero__background-shape {
      position: initial;
    }

    .hero__subline {
      @include font-size-2;
    }

    @include media-breakpoint-up(lg) {
      background: linear-gradient(
        to right,
        var(--hero-background-color) var(--hero-background-width-middle),
        transparent var(--hero-background-width-middle)
      );

      .hero__background-shape {
        width: 100%;
        padding-left: spacing(4);
        left: 50%;
        right: auto;
        max-width: none;
      }

      .hero__content {
        background: linear-gradient(
          to right,
          var(--hero-background-color) var(--hero-background-width),
          transparent var(--hero-background-width)
        );
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  &.hero--small {
    .hero__background-shape {
      max-height: 300px;

      @include media-breakpoint-down(md) {
        position: relative;
        left: 50%;
        transform: translateX(-50%);

        & > * {
          object-position: center;
        }
      }
    }

    .hero__content {
      min-height: 300px;

      @include media-breakpoint-up(lg) {
        min-height: 400px;
      }
    }
  }

  &.hero--centered {
    .hero__intro {
      --hero-intro-delay: 1.7s;

      grid-column: content-left / content-right;
      text-align: center;
      margin: 0 auto;
      transition:
        height 0.7s var(--hero-intro-delay) $animation-transition,
        opacity 1.6s var(--hero-intro-delay) $animation-transition;

      @include media-breakpoint-up(lg) {
        width: 55%;
      }
    }

    .hero__intro {
      opacity: 0;
      overflow: hidden;
    }

    .hero__letter-switcher {
      grid-column: intro-left / intro-right;
    }
  }

  &.hero--text {
    .hero__headline {
      @include font-style($style: 'h2-font-size', $line: 'thin', $weight: 'light');
    }

    .hero__content {
      @include media-breakpoint-up(lg) {
        grid-template-columns: 6fr 1fr;
      }
    }
  }

  &.hero--shape-fullscreen {
    .hero__background-shape {
      max-height: none;
      height: 100%;
    }

    .hero__cta-list {
      padding-top: spacing(12);

      @include media-breakpoint-up(lg) {
        padding-top: spacing(18);
      }
    }
  }

  &.hero--shape-in-content {
    .hero__background-shape-wrapper {
      display: none;

      .hero__background-shape {
        position: initial;
        transform: none;
        justify-content: flex-end;
        max-height: none;
        padding-left: spacing(8);
        display: none;

        @include media-breakpoint-up(lg) {
          display: flex;
        }
      }

      @include media-breakpoint-up(lg) {
        display: block;
      }
    }
  }

  &.hero--shape-svg {
    .hero__content-shape {
      &[style] {
        align-self: flex-end;
      }
    }
  }

  &:not(.hero--shape-svg) {
    .hero__content-shape {
      &[style] {
        left: calc((100vw - 100%) / 2);
      }
    }
  }

  .hero__headline {
    margin-bottom: spacing(10);
  }

  .hero__back {
    top: spacing($size: 10, $negative: true);

    @include media-breakpoint-up(lg) {
      top: spacing(26);
    }
  }
}

.hero__back-row {
  @include media-breakpoint-up(lg) {
    position: absolute;
    top: 0;
  }
}

.hero__overline {
  @include background-grow($color: var(--hero-overline-background-color), $spacing: spacing(1));

  display: inline-block;
  margin-bottom: spacing(2);
  padding: spacing(1) spacing(6) spacing(1) spacing(2);
  color: var(--hero-copy-overline-color);

  &.hero__overline--full {
    &::before {
      animation-name: growFull;
    }
  }
}

.hero__overline-wrapper {
  display: block;
}
.hero__content {
  min-height: 400px;

  &.hero__content--large {
    @include media-breakpoint-up(lg) {
      min-height: 880px;
      padding-bottom: spacing(48);
    }
  }

  @include media-breakpoint-up(lg) {
    min-height: 700px;
  }
}

.hero__background-shape-content,
.hero__content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include media-breakpoint-up(lg) {
    display: grid;
    align-content: center;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'intro-left intro-right'
      'content-left content-right';
  }
}

.hero__animation {
  grid-column: content-left / content-right;
}

.hero__intro {
  grid-area: intro-left;
  grid-row: span 2;
  margin-bottom: spacing(6);
}

.hero__background-img {
  @include z-index;

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
  @include font-size-2;

  display: inline;

  .highlight {
    @include text-highlight;
  }
}

.hero__background-shape {
  @include z-index;

  max-height: unquote('min(23vw, 30%)');
  grid-area: intro-right / content-right;

  &.hero__background-shape--overflow {
    // overflow-x: clip;
    left: 0;
  }

  &:not(.is--mobile) {
    display: flex;
  }

  > * {
    object-fit: contain;
    object-position: right;
    position: relative;
    transform: translateY(var(--hero-shape-offset-y)) translateX(var(--hero-shape-offset-x));

    &.is-svg {
      width: 100%;
    }

    &.lottie {
      display: inline-flex;
      justify-content: flex-end;
    }

    .lottie__container {
      width: auto;
      height: auto;
    }
  }

  @include media-breakpoint-up(lg) {
    max-height: unquote('min(40vw, 60%)');
  }

  @include media-breakpoint-up(xl) {
    max-height: unquote('min(45vw, 85%)');
  }
}

.hero__pattern {
  @include z-index;
}

.hero__background-shape,
.hero__pattern {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.hero__container {
  @include z-index;

  position: relative;
}

.hero__cta-list {
  padding-top: spacing(6);

  @include media-breakpoint-down(md) {
    width: 100%;

    .cta-list__item {
      width: 100%;
    }
  }
}

.hero__background-shape-wrapper {
  @include z-index;

  margin-top: spacing($size: 14, $negative: true);
  pointer-events: none;

  @include media-breakpoint-up(lg) {
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

  &[style] {
    position: relative;

    &[style*='order: 5'],
    &[style*='order: 6'],
    &[style*='order: 7'],
    &[style*='order: 8'],
    &[style*='order: 9'] {
      margin-top: spacing(8);
    }

    &:not([style*='order: 5']):not([style*='order: 6']):not([style*='order: 7']):not([style*='order: 8']):not(
        [style*='order: 9']
      ) {
      margin: spacing(8) 0;
    }
  }

  .is-svg {
    width: 100%;
  }

  &:not([style]) {
    > * {
      margin: spacing($size: 8, $negative: true) 0;
    }
  }

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.hero__badges {
  padding-top: spacing(8);
  display: flex;
  gap: spacing(8);
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  > * {
    flex: 0 1 auto;
    width: auto;
  }

  @include media-breakpoint-up(md) {
    flex-direction: row;
  }

  @include media-breakpoint-up(lg) {
    padding-top: spacing(16);
  }
}

.hero__svg-shape {
  @include z-index;
}
</style>
