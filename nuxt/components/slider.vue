<template>
  <div :class="classList">
    <div class="slider__bg" v-if="!hideBackgroundValue">
      <figure class="svgshape" style="pointer-events: all; transform: translateY(2px)">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 10">
          <polygon :fill="backgroundColor" points="-5,10 100,10 100,0" />
        </svg>
      </figure>
    </div>
    <wrapper :hideContainer="hideContainerValue" classes="slider__wrapper" :style="style">
      <div class="row" v-if="headline">
        <div class="slider__header col-lg-12 col-md-10 mt-6 mt-lg-8 mb-6 mb-lg-8 text-center">
          <headline :level="headlineLevelValue" :text="headline" :classes="headlineClassesValue" />
          <span v-if="subline" :class="sublineClassesValue">{{ subline }}</span>
        </div>
      </div>
      <div class="slider__container js-slick-carousel" ref="container" v-if="!v2">
        <wrapper-slot-items v-if="wrapped" :items="$slots?.default"></wrapper-slot-items>
        <slot v-else></slot>
      </div>
      <div
        class="slider__container slider__container--v2"
        :class="{ 'slider__container--has-pagination': hasPagination }"
        v-else
      >
        <ClientOnly>
          <div
            v-if="hasControls"
            class="slider__controls position-absolute d-flex align-items-center justify-content-center z-index-2"
            :class="options?.controlsClass"
          >
            <div class="slick__arrow-left rounded-circle" :class="`prev-element-${instanceId}`"></div>
            <div class="slick__arrow-right rounded-circle" :class="`next-element-${instanceId}`"></div>
          </div>
          <swiper-container class="slider__swiper-container" ref="containerRef" v-bind="v2Options">
            <swiper-slide v-for="(item, index) in subChilds" :key="index">
              <component :is="item" :no-row="true" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
        <template v-if="fade">
          <blur-fade
            class="slider__fade slider__fade--left"
            direction="right"
            :max-blur="24"
            :steps="4"
            tint="rgba(255, 255, 255, 0.5)"
          />
          <blur-fade
            class="slider__fade slider__fade--right"
            direction="left"
            :max-blur="24"
            :steps="4"
            tint="rgba(255, 255, 255, 0.5)"
          />
        </template>
      </div>
    </wrapper>
  </div>
</template>

<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';

let sliderInstanceCounter = 0;

// TODO move shape to a vue component and insert it here in the template
// TODO try to export this to the other components that use carousel options
export const defaultOptions = ({ length, centerPadding }) => {
  return {
    rows: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
    nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
    dots: length > 3 ? true : false,
    centerMode: false,
    dotsClass: 'slick-pagination is-default',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          infinite: false,
          centerPadding: centerPadding ? centerPadding : '30px',
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: length > 2 ? true : false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          infinite: false,
          centerPadding: centerPadding ? centerPadding : '20px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: length > 1 ? true : false,
        },
      },
    ],
  };
};

export default {
  tagName: 'slider',
  computed: {
    classList() {
      return [
        'slider',
        `${Tools.isTrue(this.hideContainer) === true ? '' : this.getSpacing}`,
        `${this.backgroundClass}`,
        this.overflow || this.hasControls || this.fade ? 'slider--overflow' : '',
        this.fade ? 'slider--fade' : '',
        this.fade && this.hideContainerValue ? 'slider--fade-inset' : '',
        'vue-component',
      ];
    },
    jsonOptions() {
      return Tools.getJSON(this.options);
    },
    getSpacing() {
      return this.spacing ? this.spacing : '';
    },
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h3';
    },
    headlineClassesValue() {
      return `slider__headline ${this.headlineClasses ? this.headlineClasses : 'h3-font-size'}`;
    },
    centerPaddingValue() {
      return this.centerPadding ? this.centerPadding + 'px' : null;
    },
    carouselOptions() {
      const childrenLength = this.childrenLength;

      if (childrenLength === 0) return null;

      const options = this.jsonOptions
        ? this.jsonOptions
        : defaultOptions({
            length: childrenLength,
            centerPadding: this.centerPaddingValue,
          });

      if (!this.jsonOptions) {
        const slidesToShow = 1;

        options.slidesToShow = options.slidesToScroll = slidesToShow;
        options.dots = true;

        options.responsive.forEach((breakpoint) => {
          breakpoint.settings.dots = true;
          breakpoint.settings.slidesToScroll = breakpoint.settings.slidesToShow = slidesToShow;
        });
      }

      return options;
    },
    childrenLength() {
      return this.children?.length || 0;
    },
    children() {
      return this.$slots?.default ? this.$slots?.default() : [];
    },
    subChilds() {
      return this.children ? this.children[0].children : [];
    },
    hideBackgroundValue() {
      return Tools.isTrue(this.hideBackground);
    },
    hideContainerValue() {
      return Tools.isTrue(this.hideContainer);
    },
    backgroundClass() {
      return this.hideBackgroundValue === false ? State.HAS_BACKGROUND : '';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : this.defaultBgColor;
    },
    style() {
      if (this.hideBackgroundValue) return;

      return {
        'background-color': this.backgroundColor,
      };
    },
    hasControls() {
      return this.v2 && !!this.options?.navigation;
    },
    hasPagination() {
      return this.v2 && !!this.options?.pagination;
    },
    v2Options() {
      const { controlsClass, ...opts } = this.options || {};
      if (this.hasControls) {
        opts.navigation = {
          ...(typeof opts.navigation === 'object' ? opts.navigation : {}),
          enabled: true,
          nextEl: `.next-element-${this.instanceId}`,
          prevEl: `.prev-element-${this.instanceId}`,
        };
      }
      if (this.hasPagination) {
        opts.pagination = {
          ...(typeof opts.pagination === 'object' ? opts.pagination : {}),
          enabled: true,
          clickable: true,
        };
      }
      return opts;
    },
  },
  mounted() {
    Tools.initSlickSlider(this.$refs.container, this.carouselOptions);
  },
  data() {
    return {
      defaultBgColor: 'var(--color-bg-grey)',
      instanceId: ++sliderInstanceCounter,
    };
  },
  props: {
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    spacing: String,
    subline: String,
    hideContainer: {
      default: false,
    },
    hideBackground: {
      default: false,
    },
    overflow: Boolean,
    bgColor: String,
    centerPadding: Number,
    options: Object,
    wrapped: {
      type: Boolean,
      default: true,
    },
    v2: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.slider {
  overflow: hidden !important;
}
.slider.slider--overflow {
  overflow: visible;
}
.slider.has-background {
  padding-bottom: 4rem;
  position: relative;
}
.slider.has-background .slider__wrapper:before {
  display: block;
}
@media (min-width: 992px) {
  .slider.has-background {
    padding-bottom: 5.5rem;
  }
}
.slider .is--desktop,
.slider .slider__item--desktop {
  display: none;
}
@media (min-width: 576px) {
  .slider .slick-list {
    width: 100%;
  }
}
@media (min-width: 992px) {
  .slider .slick-list .slick-track {
    left: 0;
  }
}
.slider .slider__container--v2 {
  position: relative;
}
.slider--fade .slider__fade {
  bottom: --slider-pagination-offset;
  position: absolute;
  top: 0;
  width: 0;
  z-index: 2;
}
.slider--fade .slider__fade--left {
  left: auto;
  right: 100%;
}
.slider--fade .slider__fade--right {
  left: 100%;
  right: auto;
}
.slider .slider__container--v2.slider__container--has-pagination {
  /* distance between the slides and the dots – padding keeps the dots inside the box */
  --slider-pagination-offset: 3rem;
  --slider-pagination-space: calc(var(--slider-pagination-offset) + 0.5rem);

  padding-bottom: var(--slider-pagination-space);
}
.slider .slider__container--v2.slider__container--has-pagination swiper-container {
  --swiper-pagination-bottom: calc(var(--slider-pagination-offset) * -1);
}
/* the fade covers the slides only, the dots stay clear of it */
.slider--fade .slider__container--v2.slider__container--has-pagination .slider__fade {
  bottom: var(--slider-pagination-space);
}
.slider .slider__controls {
  left: 0;
  pointer-events: none;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}
.slider .slider__controls > * {
  pointer-events: auto;
}
.slider .slider__controls.slider__controls--full-width {
  left: 50%;
  right: auto;
  transform: translate(-50%, -50%);
  width: 99vw;
}
.slider .slider__controls.slider__controls--full-width .slick__arrow-left {
  left: 0.5rem;
}
.slider .slider__controls.slider__controls--full-width .slick__arrow-right {
  right: 0.5rem;
}
.slider .slider__controls .slick__arrow-left.swiper-button-disabled,
.slider .slider__controls .slick__arrow-right.swiper-button-disabled {
  cursor: default;
  opacity: 0.3;
  pointer-events: none;
}
.slider swiper-container::part(container) {
  overflow: visible;
}
.slider swiper-slide {
  height: auto;
}
.slider swiper-slide > * {
  height: 100%;
}

@media (min-width: 992px) {
  .slider--fade .slider__fade {
    width: calc((100vw - 890px) / 2 + 1px);
  }
}
@media (min-width: 1200px) {
  .slider--fade .slider__fade {
    width: calc((100vw - 1070px) / 2 + 1px);
  }
}
@media (min-width: 1340px) {
  .slider--fade .slider__fade {
    width: calc((100vw - 1200px) / 2 + 1px);
  }
}

/*
 * hideContainer removes the .container around the slider, so there is no gutter
 * left for the fades to sit in (right: 100% / left: 100% would push them off screen).
 * In that case they move inside the slider edges instead.
 */
.slider--fade-inset {
  --slider-fade-width: 60px;
}
.slider--fade.slider--fade-inset .slider__fade {
  width: var(--slider-fade-width);
}
.slider--fade.slider--fade-inset .slider__fade--left {
  left: 0;
  right: auto;
}
.slider--fade.slider--fade-inset .slider__fade--right {
  left: auto;
  right: 0;
}
@media (min-width: 992px) {
  .slider--fade-inset {
    --slider-fade-width: 120px;
  }
}

.slider__wrapper:before {
  background-color: inherit;
  content: '';
  display: none;
  height: 100%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 100vw;
}
</style>
