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
<style>
.highlight-teaser {
  --highlight-teaser-start-position: 200%;
  --highlight-teaser-animation-duration: 1.5s;
  container-type: inline-size;
  overflow-x: clip;
}
.highlight-teaser .slick-slide {
  margin-bottom: 2.5rem;
}
@container (min-width: 1024px) {
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__infos.highlight-teaser__infos--fade-out .highlight-teaser__infos-content {
    transition-duration: 0.4s;
    transition-delay: 0.5s;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__infos.highlight-teaser__infos--fade-in .highlight-teaser__infos-content {
    transition-delay: 1s;
    transition-duration: calc(var(--highlight-teaser-animation-duration) + 0.1s);
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation).highlight-teaser--right-direction .highlight-teaser__container .slick-active .highlight-teaser__entry-image {
    transform: translateX(var(--highlight-teaser-start-position));
    animation: reveal var(--highlight-teaser-animation-duration) 0s ease-in-out forwards;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation).highlight-teaser--right-direction .highlight-teaser__container .slick-active ~ .slick-slide {
    transform: translate(200%);
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation).highlight-teaser--right-direction .highlight-teaser__entry-image::before {
    transform: translateX(-100%);
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-slide {
    transition: none !important;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active {
    z-index: 3 !important;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active .highlight-teaser__entry-image {
    position: relative;
    transform: translateX(calc(-1 * (var(--highlight-teaser-start-position))));
    animation: reveal-reverse var(--highlight-teaser-animation-duration) 0s ease-in-out forwards;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active .highlight-teaser__entry-image::before {
    opacity: 1;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active .highlight-teaser__entry-image .img__picture-wrapper {
    opacity: 0;
    animation: inherit;
    animation-name: reveal-opacity;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active + .slick-slide {
    z-index: 2 !important;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active + .slick-slide ~ .slick-slide {
    z-index: 1 !important;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__container .slick-active ~ .slick-slide {
    transform: translateX(0);
    opacity: 1 !important;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__entry-image {
    position: relative;
  }
  .highlight-teaser:not(.highlight-teaser--reduce-animation) .highlight-teaser__entry-image::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--highlight-teaser-animation-color);
    transform: translateX(100%);
  }
}

.highlight-teaser__blur-image {
  opacity: 0;
  transition: filter 0.9s 0s ease-in-out;
  animation: reveal-opacity2 1.1s 1.1s ease-in-out forwards;
}

.highlight-teaser__slider-blur {
  display: none;
  background-color: var(--color-surface-background);
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;
}
.highlight-teaser__slider-blur.highlight-teaser__slider-blur--in-animation .highlight-teaser__blur-image {
  filter: blur(7px) opacity(0);
}
.highlight-teaser__slider-blur > * {
  position: absolute;
}
.highlight-teaser__slider-blur > * img {
  height: 100%;
  max-width: none;
  filter: blur(7px);
  transform: scale(2.5);
  transform-origin: 10% 15%;
}

.highlight-teaser__container {
  --highlight-spacing: var(--spacing-medium);
}
.highlight-teaser__container .highlight-teaser__entry .highlight-teaser__entry-image .img__picture-wrapper {
  max-width: none;
}

.highlight-teaser__infos {
  background-color: var(--color-surface-background);
  padding: var(--highlight-spacing) var(--spacing-medium) var(--highlight-spacing) var(--highlight-spacing);
  flex: 1;
}
.highlight-teaser__infos.highlight-teaser__infos--fade-out .highlight-teaser__infos-content {
  opacity: 0;
  transition-duration: 0.2s;
}
.highlight-teaser__infos.highlight-teaser__infos--fade-in .highlight-teaser__infos-content {
  opacity: 1;
  transition-delay: 0.7s;
}

.highlight-teaser__infos-content {
  transition: opacity 1.8s cubic-bezier(0.19, 1, 0.2, 1);
  display: flex;
  height: 100%;
  flex-direction: column;
}

.highlight-teaser__entry {
  height: 100%;
}

.highlight-teaser__entry {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1.5s cubic-bezier(0.19, 1, 0.2, 1);
  display: flex;
  flex-direction: column;
}
.highlight-teaser__entry .is-foreground :is(img, svg, .lottie),
.highlight-teaser__entry .is-background {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: 0.4s;
}
.highlight-teaser__entry:hover .is-foreground :is(img, svg, .lottie),
.highlight-teaser__entry:hover .is-background {
  transform: scale(1.025);
  transition-duration: 1.3s;
}
.highlight-teaser__entry:hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}

.highlight-teaser__entry-image .img__picture-wrapper {
  aspect-ratio: 1/1;
  object-fit: cover;
}

.highlight-teaser__infos-current::selection {
  background-color: inherit;
  color: inherit;
}

.highlight-teaser__infos-title {
  font-size: 1.625rem;
  line-height: 1.3847em;
  font-weight: lighter;
  line-height: 1em;
  margin-bottom: 1.5rem;
}
@media (min-width: 992px) {
  .highlight-teaser__infos-title {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .highlight-teaser__infos-title {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}

.highlight-teaser__infos-subline {
  font-size: 1.125rem;
  line-height: 1.6667em;
  margin-bottom: 1.5rem;
}
@media (min-width: 992px) {
  .highlight-teaser__infos-subline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .highlight-teaser__infos-subline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}

.highlight-teaser__overlay-container {
  display: none;
  height: 100%;
}
.highlight-teaser__overlay-container .highlight-teaser__overlay-infos {
  display: flex;
  justify-content: flex-end;
  height: inherit;
}
.highlight-teaser__overlay-container .highlight-teaser__infos {
  height: inherit;
  position: relative;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}
.highlight-teaser__overlay-container .highlight-teaser__infos::after {
  position: absolute;
  content: "";
  display: block;
  width: 50vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: var(--color-surface-background);
}

.highlight-teaser__infos-logo {
  margin-bottom: 1.5rem;
}

.highlight-teaser__infos-cta-list {
  margin-top: auto;
}

.highlight-teaser__infos-pagination {
  display: none;
  gap: 1.5rem;
  place-items: center;
  margin-bottom: 30%;
}
.highlight-teaser__infos-pagination .highlight-teaser__infos-icon-prev.icon,
.highlight-teaser__infos-pagination .highlight-teaser__infos-icon-next.icon {
  cursor: pointer;
  width: 2.25rem;
  height: 2.25rem;
}
.highlight-teaser__infos-pagination.highlight-teaser__infos-pagination--last .highlight-teaser__infos-icon-next, .highlight-teaser__infos-pagination.highlight-teaser__infos-pagination--first .highlight-teaser__infos-icon-prev {
  pointer-events: none;
  opacity: 0.2;
}

@container (min-width: 1024px) {
  .highlight-teaser__container {
    --highlight-teaser-max-height: min(900px, 90vh);
    display: flex;
  }
  .highlight-teaser__container .highlight-teaser__entry {
    height: 100%;
  }
  .highlight-teaser__container .slick-slide {
    margin-bottom: 0;
    opacity: 1 !important;
    transition: transform 0.8s ease-in-out, opacity 0.6s ease-in-out !important;
    z-index: 1 !important;
  }
  .highlight-teaser__container .slick-slide.slick-active {
    transform: translateX(0%);
  }
  .highlight-teaser__container .slick-slide.slick-active ~ .slick-slide {
    transform: translateX(100%);
    opacity: 0.6 !important;
    z-index: 2 !important;
  }
  .highlight-teaser__container .slick-list {
    pointer-events: none;
  }
  .highlight-teaser__container .highlight-teaser__infos-pagination {
    display: inline-flex;
    margin-bottom: 5rem;
  }
  .highlight-teaser__container .highlight-teaser__entry-image .img__picture-wrapper,
  .highlight-teaser__container .highlight-teaser__overlay-container {
    max-height: var(--highlight-teaser-max-height);
  }
  .highlight-teaser__overlay-container {
    display: block;
  }
  .highlight-teaser__entry {
    width: auto;
    height: auto;
  }
  .highlight-teaser__entry .highlight-teaser__infos {
    display: none;
  }
  .highlight-teaser__overlay {
    flex-grow: 1;
    max-width: 50vw;
    width: 50vw;
  }
  .highlight-teaser__slider-container {
    place-self: flex-end;
    overflow: hidden;
    flex-grow: 1;
    flex-shrink: 1;
    width: auto;
    display: flex;
  }
  .highlight-teaser__slider-container .container {
    padding-left: 0;
    padding-right: 0;
  }
  .highlight-teaser__slider-blur {
    display: block;
  }
  .highlight-teaser__slider {
    padding-right: 0;
    padding-left: 0;
    max-width: var(--highlight-teaser-max-height);
    max-height: var(--highlight-teaser-max-height);
    flex: 1 1 auto;
  }
  .highlight-teaser__slider .slick-list,
  .highlight-teaser__slider .slick-slider {
    width: auto;
    height: 100%;
  }
  .highlight-teaser__entry-image {
    display: inline-flex;
    justify-content: flex-end;
  }
}
@container (min-width: 1100px) {
  .highlight-teaser__container {
    --highlight-spacing: var(--spacing-medium-large);
    position: relative;
  }
}
@keyframes reveal {
  0% {
    transform: translateX(var(--highlight-teaser-start-position));
  }
  50%, 65% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes reveal-reverse {
  0% {
    transform: translateX(calc(-1 * (var(--highlight-teaser-start-position))));
  }
  50%, 65% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes reveal-opacity {
  0%, 65% {
    opacity: 0;
  }
  66%, 80%, 100% {
    opacity: 1;
  }
}
@keyframes reveal-opacity2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
