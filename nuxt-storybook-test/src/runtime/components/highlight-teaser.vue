<template>
  <div :class="classList" :style="style">
    <div class="highlight-teaser__container" ref="container">
      <div class="highlight-teaser__slider-container">
        <div :class="['highlight-teaser__slider-blur', { 'highlight-teaser__slider-blur--in-animation': inAnimation }]">
          <v-img
            :img="activeEntry.image.img"
            :alt="activeEntry.image.alt"
            :cloudinary="activeEntry.image.cloudinary"
            class="highlight-teaser__blur-image"
            img-src-sets="highlightTeaser"
          />
        </div>
        <slider :options="sliderOptions" :hide-background="true" class="highlight-teaser__slider">
          <div class="highlight-teaser__entry" v-for="(entry, index) in limitedEntries" :key="index">
            <div class="highlight-teaser__entry-image">
              <v-img
                :img="entry.image.img"
                :alt="entry.image.alt"
                :cloudinary="entry.image.cloudinary"
                class="highlight-teaser__image"
                img-src-sets="highlightTeaser"
              />
            </div>
            <highlight-teaser-infos
              :pagination="pagination"
              :current-page="index + 1"
              :last-page="lastPage"
              :entry="entry"
            />
          </div>
        </slider>
      </div>

      <div class="highlight-teaser__overlay">
        <div class="highlight-teaser__overlay-container">
          <div class="highlight-teaser__overlay-infos">
            <highlight-teaser-infos
              :pagination="pagination"
              :current-page="currentPage"
              :last-page="lastPage"
              :entry="activeEntry"
              :entries="entries"
              :next="next"
              :prev="prev"
              :is-first-entry="isFirstEntry"
              :is-last-entry="isLastEntry"
              :is-changing="isChanging"
              :index="index"
              :last-index="lastIndex"
              :reduced-animation="reducedAnimationValue"
              @transitions-end="handleTransitionsEnd"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'highlight-teaser',
  data() {
    return {
      index: 0,
      lastIndex: 0,
      inAnimation: false,
    };
  },
  computed: {
    classList() {
      return [
        'highlight-teaser',
        this.spacing,
        'vue-component',
        this.rightDirection ? 'highlight-teaser--right-direction' : '',
        this.reducedAnimationValue ? 'highlight-teaser--reduce-animation' : '',
      ];
    },
    style() {
      return `--highlight-teaser-animation-color: ${
        typeof this.animationColor !== 'undefined' ? this.animationColor : 'var(--color-primary)'
      };`;
    },
    reducedAnimationValue() {
      return Tools.isTrue(this.reduceAnimation);
    },
    limitValue() {
      const defaultLimit = 3;
      const radix = 10;
      const limit = parseInt(this.limit, radix);

      return limit > 0 ? limit : defaultLimit;
    },
    isFirstEntry() {
      return this.index === 0;
    },
    isLastEntry() {
      return this.index === this.entries.length - 1;
    },
    activeEntry() {
      return this.entries[this.index];
    },
    currentPage() {
      return this.index + 1;
    },
    lastPage() {
      return this.entries.length;
    },
    pagination() {
      return this.entries.length > 1;
    },
    limitedEntries() {
      return this.entries.slice(0, this.limitValue);
    },
    sliderOptions() {
      return {
        rows: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        fade: true,
        dotsClass: 'slick-pagination is-default',
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '30px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              fade: false,
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
              dots: false,
              fade: false,
            },
          },
        ],
      };
    },
    rightDirection() {
      return !this.lastIndex || this.lastIndex < this.index;
    },
  },
  methods: {
    handleTransitionsEnd() {
      this.inAnimation = false;
    },
    next() {
      if (this.isLastEntry) return;

      this.switchSlide(true);
    },
    prev() {
      if (this.isFirstEntry) return;

      this.switchSlide(false);
    },
    switchSlide(next) {
      const container = this.$refs.container;

      if (!container) return;

      const slickCarousel = container.querySelector('.js-slick-carousel');

      if (!slickCarousel) return;

      this.lastIndex = this.index;

      if (next) {
        this.index++;
      } else {
        this.index--;
      }

      this.inAnimation = true;

      $(slickCarousel).slick('slickGoTo', this.index);
    },
  },
  props: {
    entries: Array,
    limit: Number,
    spacing: String,
    reduceAnimation: {
      default: null,
    },
    animationColor: String,
  },
};
</script>
