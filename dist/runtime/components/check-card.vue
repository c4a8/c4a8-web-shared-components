<template>
  <div :class="classList">
    <div class="container">
      <div class="row" v-if="headline">
        <div :class="containerValue">
          <headline
            :level="headlineLevelValue"
            :text="headline"
            :classes="headlineClassesValue"
            data-utility-animation-step="1"
            ref="headline"
          />
          <div
            v-if="subline"
            :class="sublineClassesValue"
            v-html="subline"
            data-utility-animation-step="1"
            ref="subline"
          ></div>
        </div>
      </div>
      <div :class="checkCardsContainerClass" data-utility-animation-step="1" ref="container">
        <template v-for="(check, index) in checks" v-bind:key="index">
          <div :class="itemClass">
            <template v-if="hasProducts">
              <card :product="check.product" :title="check.title" :tag="check.tag" :blogtitlepic="check.picture" />
            </template>
            <template v-else>
              <card
                :url="check.url"
                :title="check.title"
                :blogtitlepic="check.picture"
                :excerpt="check.subline"
                :sub-points="check.subpoints"
                :scope="check.scope"
                :footer="check.footer"
                :cta="check.cta"
                long="true"
              />
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

// TODO rename component
export default {
  tagName: 'check-card',
  computed: {
    classList() {
      return [
        'check-card vue-component',
        this.hasProducts ? 'check-card--products' : null,
        this.classes ? this.classes : null,
      ];
    },
    checkCardsContainerClass() {
      return ['check-card__container utility-animation fade-in-bottom js-slick-carousel slick--single-list'];
    },
    containerValue() {
      return `col-lg-12 col-md-10 ${this.spacing ? this.spacing : ''} mb-9`;
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `h2-font-size utility-animation fade-in-bottom ${this.headlineClasses ? this.headlineClasses : ''} ${
        this.subline ? 'mb-10' : ''
      }`;
    },
    sublineClassesValue() {
      return `check-card__subline utility-animation fade-in-bottom e w-lg-65 ${
        this.sublineClasses ? this.sublineClasses : 'font-size-2'
      }`;
    },
    itemClass() {
      return `check-card__slide`;
    },
    hasProducts() {
      return this.checks[0]?.product;
    },
    carouselOptions() {
      const slidesToShowDesktop = this.hasProducts ? 2 : 3;

      return {
        slidesToShow: slidesToShowDesktop,
        slidesToScroll: slidesToShowDesktop,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        dots: this.checks.length > slidesToShowDesktop ? true : false,
        centerMode: false,
        dotsClass: 'slick-pagination is-default',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: this.checks.length > 2 ? true : false,
            },
          },
          {
            breakpoint: 992,
            settings: {
              centerMode: true,
              infinite: true,
              centerPadding: this.hasProducts ? '37px' : '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1 ? true : false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              infinite: false,
              centerPadding: '20px',
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: this.checks.length > 1 ? true : false,
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
              dots: this.checks.length > 1 ? true : false,
            },
          },
        ],
      };
    },
  },
  mounted() {
    Tools.initSlickSlider(this.$refs.container, this.carouselOptions);

    if (this.$refs.headline) {
      UtilityAnimation.init([this.$refs.headline]);
    }

    if (this.$refs.subline) {
      UtilityAnimation.init([this.$refs.subline]);
    }

    if (this.$refs.container) {
      UtilityAnimation.init([this.$refs.container]);
    }
  },
  methods: {},
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    subline: String,
    sublineClasses: String,
    spacing: String,
    checks: {
      default: null,
    },
    classes: String,
  },
};
</script>
<style scoped>
.check-card {
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;
}
@media (min-width: 992px) {
  .check-card.check-card--products .check-card__slide {
    padding: 0 2rem;
  }
}

.check-card__container {
  width: 100%;
}
.check-card__container[data-utility-animation-step] {
  --utility-animation-distance: 5%;
}
.check-card__container[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 150ms + 0ms);
}
@media (min-width: 992px) {
  .check-card__container {
    margin: 0 -0.5rem;
  }
}

.check-card__slide {
  padding: 0;
}
@media (min-width: 992px) {
  .check-card__slide {
    padding: 0 1rem;
  }
}

.check-card__subline[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
}
</style>
