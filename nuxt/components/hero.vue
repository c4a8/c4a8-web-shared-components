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
              v-if="shapeInContentValue"
              :style="{ order: shapeMobileOrder !== false ? shapeMobileOrder : undefined }"
            >
              <v-img
                v-if="showShape && shape.imgMobile && !isUpperBreakpoint"
                :cloudinary="shape.cloudinary"
                :img="shape.imgMobile"
                :alt="shape.alt"
                :lottie="lottieFileData"
                :lottie-settings="lottieSettings"
                :img-src-sets="imgSrcSets"
                :class="mobileShapeClasses"
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
              >
              </v-img>
            </div>
            <p class="hero__subline lead" v-if="subline" v-html="subline"></p>
            <cta-list v-if="ctaList" classes="hero__cta-list" :list="ctaList"> </cta-list>
            <div class="hero__badges" v-if="badges">
              <div class="hero__badge-container" v-for="(badge, index) in badges" :key="index">
                <v-img :cloudinary="true" v-bind="badge" class="hero__badge-image"></v-img>
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
    <wrapper classes="hero__background-shape-wrapper" v-if="shape" :hideContainer="!showShapeContainer">
      <wrapper classes="hero__background-shape-content" :hideContainer="!showShapeContainer" :hideContainerClass="true">
        <div
          :class="['hero__background-shape', shapeClasses, shapeOffsetX ? 'hero__background-shape--overflow' : '']"
          :style="shapeStyle"
        >
          <v-img
            v-if="showShape"
            :cloudinary="shape.cloudinary"
            :img="shape.img"
            :alt="shape.alt"
            :lottie="lottieFileData"
            :lottie-settings="lottieSettings"
            :img-src-sets="imgSrcSets"
            :lazy="true"
          >
          </v-img>
        </div>
      </wrapper>
    </wrapper>
    <svg-shape v-if="svgShapeAnimation" align="bottom" peak="left" :obliquity="4" />
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
    };
  },
  created() {
    this.preloadKeyAsset();
    this.handleResize();
  },
  mounted() {
    this.setIntroStyle();
    this.setStyle();
    this.setBackgroundImgStyle();

    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    preloadKeyAsset() {
      if (!this.shape || !this.shape.img) return;

      const keyAssetPath = this.shape.img;

      if (!keyAssetPath || !this.shape.cloudinary) return;

      const cloudinaryLink = CloudinaryTools.getCloudinaryLink({ img: keyAssetPath });

      useHead({
        link: [
          {
            href: cloudinaryLink,
            rel: 'preload',
            as: 'image',
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
      return this.shape.img || this.shape.lottie || this.lottieFileData;
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
      return this.shape && this.shape.img && this.shape.img.endsWith('.svg');
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
