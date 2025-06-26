<template>
  <div
    :class="[
      'quotes',
      quotesImage ? 'mb-8' : 'quotes--no-image',
      quotesNoFullscreen ? 'quotes--no-fullscreenn' : '',
      quotesSpacing,
    ]"
  >
    <div class="container space-top-1 space-bottom-2 space-top-lg-2 space-bottom-lg-0">
      <div class="quotes__row row">
        <div
          class="utility-animation col-lg-12 mb-4 mb-lg-6 fade-in-bottom"
          data-utility-animation-step="1"
          ref="header"
        >
          <headline
            :level="quotes.level"
            :text="quotes.headline"
            :classes="`${quotes.headlineClasses || 'h2-font-size'} quotes__headline`"
          />
        </div>
        <slider
          :options="slickOptions"
          :hide-background="true"
          class="quotes__slider col-sm-12 mb-lg-n8"
          :hide-container="true"
        >
          <quotes-entry
            v-for="(quotesItem, index) in quotes.items"
            :key="index"
            :entry="quotesItem"
            :active="index === 0"
            :image="quotesImage"
            :has-animation="index === 0"
          />
        </slider>
      </div>
      <div v-if="quotesImagesCount !== 0" class="row mt-7 mt-md-0 justify-content-center">
        <div
          v-for="(image, index) in quotes.footerImage"
          :key="index"
          class="d-flex justify-content-center"
          :class="`col-lg-${quotesColSize}`"
        >
          <v-img :cloudinary="true" :img="image.image" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'quotes',
  props: {
    page: {
      type: Object,
      required: true,
    },
    quotes: {
      type: Object,
      required: true,
    },
    spacing: {
      type: String,
      default: '',
    },
    noFullscreen: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.$refs.header) return;

    UtilityAnimation.init([this.$refs.header]);
  },
  computed: {
    quotesSpacing() {
      return this.spacing;
    },
    quotesNoFullscreen() {
      return this.noFullscreen;
    },
    quotesImagesCount() {
      return this.quotes.footerImage?.length || 0;
    },
    quotesImage() {
      return !!this.quotes.items[0]?.img;
    },
    quotesSlidesToShow() {
      return this.quotesImage ? 1.05 : 1;
    },
    quotesColSize() {
      return Math.floor(9 / this.quotesImagesCount);
    },
    slickOptions() {
      return {
        rows: 0,
        centerMode: true,
        centerPadding: this.quotesImage ? '0px' : '15px',
        prevArrow: '<span class="quotes__arrow-left slick-arrow rounded-circle"></span>',
        nextArrow: '<span class="quotes__arrow-right slick-arrow rounded-circle"></span>',
        dots: this.quotes.items.length > 1,
        dotsClass: 'slick-pagination mt-8',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: this.quotesSlidesToShow,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: this.quotesSlidesToShow,
            },
          },
        ],
      };
    },
  },
};
</script>
