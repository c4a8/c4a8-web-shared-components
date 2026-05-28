<template>
  <div
    class="testimonials-slider container"
    ref="root"
    :class="[testimonialsSliderSpacing, { 'is-sticky-scroller': testimonialsSliderSticky }]"
  >
    <div class="testimonials-slider__header row">
      <div class="col-lg-12 utility-animation fade-in-bottom" data-utility-animation-step="1">
        <headline :text="testimonialsSliderHeadline" :level="testimonialsSliderHeadlineLevel" />
        <div class="testimonials-slider__subline mt-4" v-if="testimonialsSliderSubline">
          {{ testimonialsSliderSubline }}
        </div>
      </div>
    </div>
    <div class="row mt-6">
      <div class="col-lg-12">
        <div
          class="testimonials-slider__slides js-slick-carousel"
          ref="container"
          :data-hs-slick-carousel-options="slickOptions"
        >
          <div v-for="testimonial in filteredSlides">
            <testimonial-teaser
              v-if="!testimonial.hidden"
              :key="testimonial.uid"
              :href="testimonial.url"
              :name="testimonial.name"
              :title="testimonial.title"
              :img="testimonial.sliderImg"
              :aspectRatio="testimonial.aspectRatio"
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
  tagName: 'testimonial-slider',
  props: {
    headline: {
      type: String,
      default: null,
    },
    headlineLevel: {
      type: [String, Number],
      default: null,
    },
    subline: {
      type: String,
      default: null,
    },
    slides: {
      type: Array,
      default: () => [],
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    ignoreLang: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: String,
      default: 'space-bottom-3',
    },
    lang: {
      type: String,
      default: 'de',
    },
  },
  mounted() {
    Tools.initSlickSlider(this.$refs.container, this.slickOptions);
    if (!this.$refs.root) return;
    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    testimonialsSliderHeadline() {
      return this.headline;
    },
    testimonialsSliderHeadlineLevel() {
      return this.headlineLevel;
    },
    testimonialsSliderSubline() {
      return this.subline;
    },
    testimonialsSliderSticky() {
      return this.sticky;
    },
    testimonialsSliderSpacing() {
      return this.spacing;
    },
    sortedSlides() {
      return [...this.slides]; //.sort((a, b) => (a.uid > b.uid ? 1 : -1));
    },
    filteredSlides() {
      if (this.ignoreLang) {
        return this.sortedSlides;
      }
      return this.sortedSlides; //.filter(item => item.lang === this.lang);
    },
    slickOptions() {
      return {
        dots: true,
        dotsClass: 'slick-pagination is-default mt-8 mb-n6',
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: false,
            },
          },
          {
            todobreakpoint: 576,
            settings: 'unslick',
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang="scss">
.testimonials-slider {
  width: 100%;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    .testimonials-slider__slides {
      column-width: inherit;
      column-gap: inherit;
      width: auto;

      .testimonial-teaser {
        max-width: 60%;
        width: 60%;
      }
    }
  }

  @include media-breakpoint-up(lg) {
    overflow: visible;

    .testimonials-slider__slides {
      .testimonial-teaser {
        max-width: 50%;
        width: 50%;

        &:nth-child(2n) {
          .testimonial-teaser__wrapper {
            margin-top: spacing(30);
            margin-left: spacing(10);
            margin-right: spacing(10);
          }
        }
      }
    }
  }
}

.testimonials-slider__subline {
  @include media-breakpoint-up(lg) {
    width: 55%;
  }
}

.testimonials-slider__slides {
  // column-width: 350px;
  // column-gap: 0;
  // width: 2000px;

  // TODO mobile grid with 2 rows and the items align where they fit. free swiping mode without the dots.

  .testimonial-teaser__img {
    width: calc(100vw - 180px);
  }

  .slick-list,
  .slick-track {
    align-items: flex-start;
  }

  .testimonial-teaser {
    max-width: 75%;
    width: 75%;

    &:nth-child(2n) {
      .testimonial-teaser__wrapper {
        margin-top: spacing(22);
        margin-right: spacing(6);
      }
    }

    .testimonial-teaser__wrapper {
      margin-right: 1px;
      margin-left: spacing(7);
    }
  }

  @include media-breakpoint-down(md) {
    .slick-slide {
      &:first-of-type {
        margin-left: 0;
      }
    }
  }

  @include media-breakpoint-up(sm) {
    .testimonial-teaser__img {
      width: auto;
    }
  }
}
</style>
