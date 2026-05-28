<template>
  <article
    :class="[
      'event-teaser utility-animation fade-in-bottom hover__parent',
      `event-teaser--size-${variant}`,
      eventTeaserImageFullWidth,
      webcast ? 'event-teaser--webcast' : teaser ? 'event-teaser--teaser' : 'event-teaser--training',
      textShadow ? 'event-teaser--text-shadow' : '',
    ]"
    @click="clickHandler"
    data-utility-animation-step="1"
    :style="computedStyles"
    ref="root"
  >
    <header class="event-teaser__header">
      <div class="event-teaser__background">
        <div class="event-teaser__shapes is-background" v-if="shapes">
          <div
            v-for="(shape, index) in shapes"
            :key="index"
            :class="['event-teaser__shape', getShapeSettings(index, webcast).peak]"
            :style="{ width: getShapeSettings(index, webcast).width + '%' }"
          >
            <svg-shape
              :color="shape.color"
              :peak="getShapeSettings(index, webcast).peak"
              :height="getShapeSettings(index, webcast).height"
              :obliquity="getShapeSettings(index, webcast).obliquity"
            />
          </div>
        </div>
        <div class="event-teaser__image is-foreground">
          <v-img
            :img="image.img"
            :alt="image.alt"
            cloudinary
            :imgSrcSets="imgSrcSets"
            :lottie="image.lottie"
            v-if="image && !teaserImage"
          />
          <v-img
            :img="teaserImage.img"
            :alt="teaserImage.alt"
            cloudinary
            :imgSrcSets="imgSrcSets"
            :lottie="teaserImage.lottie"
            v-else-if="teaserImage"
          />
        </div>
      </div>
      <div class="event-teaser__foreground">
        <div class="event-teaser__details">
          <div class="event-teaser__badge">
            <badge
              :text="badge.text"
              :icon="badge.icon"
              :color="badge.color"
              :textColor="badge.textColor"
              v-if="badge"
            />
          </div>
          <div v-if="author" class="event-teaser__authors font-size-2 thin bold">
            <div class="event-teaser__authors-frame">
              <div class="event-teaser__authors-background"></div>
              <div class="event-teaser__authors-foreground" v-html="authorNames"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="event-teaser__main">
      <div class="event-teaser__details">
        <div class="event-teaser__badge">
          <badge :text="badge.text" :icon="badge.icon" :color="badge.color" :textColor="badge.textColor" v-if="badge" />
        </div>
        <div v-if="moment || time" class="event-teaser__timing">
          <span v-if="moment" class="event-teaser__moment font-size-1 bold">{{ moment }}</span>
          <span v-if="time" class="event-teaser__time font-size-1">{{ time }}</span>
        </div>
      </div>
      <headline level="h4">
        <a v-if="url && !webcast && !teaser" :href="url">
          {{ headline }}
        </a>
        <span v-else>{{ headline }}</span>
      </headline>
      <div v-if="webcast || teaser" class="event-teaser__content richtext" v-html="content"></div>
    </main>
    <footer v-if="price || cta" class="event-teaser__footer">
      <div v-if="price" class="event-teaser__price font-size-2 bold">{{ price }}</div>
      <div v-if="cta" class="event-teaser__cta">
        <cta
          :text="cta.text"
          :href="ctaHref"
          :skin="cta.skin || 'primary'"
          :width="cta.width || 'w-100 w-lg-auto'"
          :external="cta.external"
        />
      </div>
    </footer>
  </article>
</template>

<script>
import ImgSrcSets from '../utils/data/img-src-sets.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  props: {
    id: String,
    json: Object,
    headline: String,
    content: String,
    moment: String,
    time: String,
    shapes: Array,
    author: Array,
    image: Object,
    teaserImage: Object,
    badge: Object,
    price: String,
    cta: Object,
    variant: {
      type: Number,
      default: 4,
    },
    webcast: Boolean,
    teaser: Boolean,
    url: String,
    index: Number,
    textShadow: Boolean,
    bgColorRgb: String,
    lang: {
      type: String,
      default: 'de',
    },
  },
  computed: {
    authorNames() {
      const authorNames = this.author?.map((author) => author).join('<br />& ');

      return `${this.$t('withAuthor')} ${authorNames}`;
    },
    imgSrcSets() {
      if (this.teaserImage && this.teaserImage.img) {
        return this.teaserImage && this.teaserImage.lottie ? null : ImgSrcSets['eventTeaser'];
      } else {
        return this.image && this.image.lottie ? null : ImgSrcSets['eventTeaser'];
      }
    },
    computedStyles() {
      return {
        '--utility-animation-index': this.index ? this.index : undefined,
        '--event-teaser-background-color-rgb': this.bgColorRgb ? this.bgColorRgb : undefined,
      };
    },
    eventTeaserImageFullWidth() {
      return !this.shapes ? 'event-teaser--image-full-width' : '';
    },
    ctaHref() {
      return this.cta?.href || this.url;
    },
  },
  mounted() {
    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    getShapeSettings(index, webcast) {
      let shapeSettings = {
        peak: 'right',
        height: '40',
        width: '100',
        obliquity: undefined,
      };

      const shape = this.shapes[index];

      if (webcast) {
        if (this.shapes?.length > 1) {
          if (index === 0) {
            shapeSettings.peak = shape.peak || 'left';
            shapeSettings.height = shape.height || 84;
            shapeSettings.width = shape.width || 100;
          } else {
            shapeSettings.peak = shape.peak || 'right';
            shapeSettings.height = shape.height || 17;
            shapeSettings.width = shape.width || 60;
          }
        } else {
          shapeSettings.peak = shape.peak || 'right';
          shapeSettings.height = shape.height || 40;
          shapeSettings.width = shape.width || (this.variant === 12 ? 80 : 100);
        }
      } else {
        if (index === 0) {
          shapeSettings.peak = shape.peak || 'right';
          shapeSettings.height = shape.height || 12;
          shapeSettings.width = shape.width || 237;
          shapeSettings.obliquity = shape.obliquity || 4;
        } else {
          shapeSettings.peak = shape.peak || 'left';
          shapeSettings.height = shape.height || 10;
          shapeSettings.width = shape.width || 80;
        }
      }

      return shapeSettings;
    },
    clickHandler(event) {
      event.currentTarget.querySelector('a')?.click();
    },
    shapePeak(index) {
      return index === 0 ? 'right' : 'left';
    },
    shapeHeight(index) {
      return index === 0 ? 12 : 10;
    },
    shapeWidth(index) {
      return index === 0 ? 237 : 80;
    },
  },
};
</script>
<style lang="scss">
$event-teaser-default-spacing: 6;
$event-teaser-content-width: calc(var(--container-width) * 0.6);

.event-teaser {
  @include hover-scale;

  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-event-teaser-background);
  cursor: pointer;

  &.event-teaser--image-full-width {
    .event-teaser__image {
      .img__picture-wrapper {
        max-width: none;
      }

      .lottie,
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: center;
      }
    }
  }

  &.event-teaser--training {
    .event-teaser__image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 85%;
    }

    .event-teaser__details {
      display: none;
    }

    .event-teaser__main {
      .event-teaser__details {
        display: flex;
      }

      .event-teaser__badge {
        display: block;
      }
    }

    .event-teaser__details {
      width: calc(100% + #{spacing($event-teaser-default-spacing)});
      flex-direction: row;
      height: auto;
      justify-content: space-between;
      margin-left: spacing($size: $event-teaser-default-spacing, $negative: true);
      margin-bottom: spacing($event-teaser-default-spacing);

      .badge {
        padding-left: spacing($event-teaser-default-spacing);
      }
    }
  }

  &.event-teaser--teaser {
    --color-headlines: var(--color-event-teaser-teaser-copy);

    background-color: var(--color-event-teaser-teaser-background);
    color: var(--color-event-teaser-teaser-copy);

    &::after,
    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 50vw;
      height: 100%;
      background-color: var(--color-event-teaser-teaser-background);
    }

    &::before {
      @include shadow($size: 'light', $x-offset: -10px);

      left: -50vw;
    }

    &::after {
      @include shadow($size: 'light', $x-offset: 10px);

      right: -50vw;
      z-index: 2;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    .event-teaser__header {
      display: none;
    }

    .event-teaser__main {
      padding-top: spacing(12);
      padding-left: 0;
    }

    .event-teaser__headline {
      @include h2;

      & {
        margin-bottom: spacing(7);
      }

      @include media-breakpoint-up(lg) {
        @include h3-breakpoints($breakpoint: 'lg');
      }

      @include media-breakpoint-up(xl) {
        @include h3-breakpoints($breakpoint: 'xl');
      }
    }

    .event-teaser__content {
      @include font-style($style: 'font-size-2', $weight: 'light');

      & {
        padding-right: spacing(12);
      }
    }

    .event-teaser__footer {
      @include media-breakpoint-down(md) {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  &:not(.event-teaser--training):not(.event-teaser--teaser) {
    .event-teaser__main {
      .event-teaser__timing {
        margin-left: 0;
        color: var(--color-event-teaser-timing-highlight);
      }
    }
  }
}

.event-teaser--size-4 {
  grid-column: auto / span 12;

  .event-teaser__header {
    height: 290px;
  }

  @include media-breakpoint-up(md) {
    grid-column: auto / span 6;
  }

  @include media-breakpoint-up(lg) {
    grid-column: auto / span 4;
    max-width: 400px;
  }
}

.event-teaser--size-6 {
  grid-column: auto / span 12;

  .event-teaser__header {
    height: 270px;
  }

  @include media-breakpoint-up(lg) {
    grid-column: auto / span 6;
    max-width: 600px;

    .event-teaser__header {
      height: 220px;
    }
  }
}

.event-teaser--size-8 {
  grid-column: auto / span 12;

  @include media-breakpoint-up(lg) {
    grid-column: auto / span 8;
  }
}

.event-teaser--size-12 {
  grid-column: auto / span 12;

  &.event-teaser--size-full {
    .event-teaser__foreground,
    .event-teaser__main,
    .event-teaser__footer {
      max-width: get-container-max-width('sm');
      padding-left: $grid-gutter-half-width;
      padding-right: $grid-gutter-half-width;
      margin-left: auto;
      margin-right: auto;
      width: auto;
    }

    @include media-breakpoint-up(md) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer {
        max-width: get-container-max-width('md');
      }
    }

    @include media-breakpoint-up(lg) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer {
        max-width: get-container-max-width('lg');
        padding-left: calc(#{spacing(8)} + $grid-gutter-half-width);
        padding-right: calc(#{spacing(8)} + $grid-gutter-half-width);
        width: 100%;

        > * {
          width: 60%;
        }
      }

      .event-teaser__image {
        .lottie,
        img {
          bottom: 0;
          top: auto;
          height: 90%;
        }
      }
    }

    @include media-breakpoint-up(xl) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer,
      .event-teaser__image {
        max-width: get-container-max-width('xl');
      }

      .event-teaser__image {
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        position: relative;
      }
    }

    @include media-breakpoint-up(xxl) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer,
      .event-teaser__image {
        max-width: 1280px;
      }
    }
  }

  .event-teaser__authors {
    display: none;
  }

  .event-teaser__details {
    flex-direction: row;
    height: auto;
  }

  .event-teaser__header {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .event-teaser__main {
    padding-top: spacing(26);
    padding-bottom: spacing(18);
    width: 60%;
  }

  .event-teaser__main,
  .event-teaser__footer {
    position: relative;
    z-index: 4;
  }

  .event-teaser__headline {
    @include font-style($style: 'h3-font-size', $weight: 'lighter', $line: 'thin');

    & {
      width: 100%;
    }
  }

  .event-teaser__cta {
    text-align: center;
  }

  @include media-breakpoint-down(lg) {
    .event-teaser__image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 75%;
    }

    .event-teaser__details {
      width: 100%;
    }
  }

  @include media-breakpoint-down(md) {
    .event-teaser__image {
      height: 400px;
    }

    .event-teaser__main {
      padding-top: spacing(20);
      margin-bottom: 240px;
      width: 100%;
    }
  }

  @include media-breakpoint-down(xs) {
    .event-teaser__image {
      height: 280px;
    }

    .event-teaser__main {
      margin-bottom: 120px;
    }
  }
}

.event-teaser__authors {
  flex: 1;
  display: flex;
  align-items: flex-end;

  @include media-breakpoint-up(lg) {
    margin-left: spacing($event-teaser-default-spacing);
  }
}

.event-teaser__header {
  position: relative;

  .badge {
    padding-left: spacing($event-teaser-default-spacing);
    padding-right: spacing($event-teaser-default-spacing);
    margin-bottom: spacing(2);
  }
}

.event-teaser__main {
  padding: spacing($event-teaser-default-spacing);

  .event-teaser__badge {
    display: none;
  }

  .event-teaser__details {
    height: auto;
  }
}

.event-teaser__footer {
  padding: 0 spacing($event-teaser-default-spacing) spacing($event-teaser-default-spacing);
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.event-teaser__headline {
  width: 80%;
  margin-bottom: spacing(6);
}

.event-teaser__background {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
}

.event-teaser__image {
  .lottie,
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 3;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    transform-origin: top right;
    image-rendering: -webkit-optimize-contrast;
  }
}

.event-teaser__foreground {
  padding-top: spacing($event-teaser-default-spacing);
  height: 100%;
  position: relative;
  z-index: 4;

  @include media-breakpoint-up(lg) {
    padding-bottom: spacing(4);
  }
}

.event-teaser__timing {
  margin-left: spacing($event-teaser-default-spacing);
  color: var(--color-event-teaser-timing);
}

.event-teaser__moment {
  + .event-teaser__time {
    &::before {
      content: '|';
      display: inline-block;
      padding: 0 spacing(1);
    }
  }
}

.event-teaser__details {
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;

  .event-teaser__authors {
    br {
      display: none;
    }
  }

  @include media-breakpoint-up(lg) {
    width: 60%;

    .event-teaser__authors {
      br {
        display: block;
      }
    }
  }
}

.event-teaser__shape {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  &.right {
    left: auto;
    right: 0;
  }
}

.event-teaser__shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
}

.event-teaser__price {
  padding-right: spacing(3);
}

.event-teaser__cta {
  flex: 1;
  text-align: right;
}

.event-teaser__authors-frame {
  position: relative;
  width: 100%;
}

.event-teaser__authors-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $white-30;
  z-index: -1;

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.event-teaser__authors-foreground {
  padding: spacing(2) spacing($event-teaser-default-spacing);

  @include media-breakpoint-up(lg) {
    padding: 0;
  }
}
$event-teaser-default-spacing: 6;
$event-teaser-content-width: calc(var(--container-width) * 0.6);

.event-teaser {
  @include hover-scale;

  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-event-teaser-background);
  cursor: pointer;

  &.event-teaser--image-full-width {
    .event-teaser__image {
      .img__picture-wrapper {
        max-width: none;
      }

      .lottie,
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: center;
      }
    }
  }

  &.event-teaser--training {
    .event-teaser__image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 85%;
    }

    .event-teaser__details {
      display: none;
    }

    .event-teaser__main {
      .event-teaser__details {
        display: flex;
      }

      .event-teaser__badge {
        display: block;
      }
    }

    .event-teaser__details {
      width: calc(100% + #{spacing($event-teaser-default-spacing)});
      flex-direction: row;
      height: auto;
      justify-content: space-between;
      margin-left: spacing($size: $event-teaser-default-spacing, $negative: true);
      margin-bottom: spacing($event-teaser-default-spacing);

      .badge {
        padding-left: spacing($event-teaser-default-spacing);
      }
    }
  }

  &.event-teaser--teaser {
    --color-headlines: var(--color-event-teaser-teaser-copy);

    background-color: var(--color-event-teaser-teaser-background);
    color: var(--color-event-teaser-teaser-copy);

    &::after,
    &::before {
      position: absolute;
      content: '';
      display: block;
      width: 50vw;
      height: 100%;
      background-color: var(--color-event-teaser-teaser-background);
    }

    &::before {
      @include shadow($size: 'light', $x-offset: -10px);

      left: -50vw;
    }

    &::after {
      @include shadow($size: 'light', $x-offset: 10px);

      right: -50vw;
      z-index: 2;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    .event-teaser__header {
      display: none;
    }

    .event-teaser__main {
      padding-top: spacing(12);
      padding-left: 0;
    }

    .event-teaser__headline {
      @include h2;

      & {
        margin-bottom: spacing(7);
      }

      @include media-breakpoint-up(lg) {
        @include h3-breakpoints($breakpoint: 'lg');
      }

      @include media-breakpoint-up(xl) {
        @include h3-breakpoints($breakpoint: 'xl');
      }
    }

    .event-teaser__content {
      @include font-style($style: 'font-size-2', $weight: 'light');

      & {
        padding-right: spacing(12);
      }
    }

    .event-teaser__footer {
      @include media-breakpoint-down(md) {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }

  &:not(.event-teaser--training):not(.event-teaser--teaser) {
    .event-teaser__main {
      .event-teaser__timing {
        margin-left: 0;
        color: var(--color-event-teaser-timing-highlight);
      }
    }
  }
}

.event-teaser--size-4 {
  grid-column: auto / span 12;

  .event-teaser__header {
    height: 290px;
  }

  @include media-breakpoint-up(md) {
    grid-column: auto / span 6;
  }

  @include media-breakpoint-up(lg) {
    grid-column: auto / span 4;
    max-width: 400px;
  }
}

.event-teaser--size-6 {
  grid-column: auto / span 12;

  .event-teaser__header {
    height: 270px;
  }

  @include media-breakpoint-up(lg) {
    grid-column: auto / span 6;
    max-width: 600px;

    .event-teaser__header {
      height: 220px;
    }
  }
}

.event-teaser--size-8 {
  grid-column: auto / span 12;

  @include media-breakpoint-up(lg) {
    grid-column: auto / span 8;
  }
}

.event-teaser--size-12 {
  grid-column: auto / span 12;

  &.event-teaser--size-full {
    .event-teaser__foreground,
    .event-teaser__main,
    .event-teaser__footer {
      max-width: get-container-max-width('sm');
      padding-left: $grid-gutter-half-width;
      padding-right: $grid-gutter-half-width;
      margin-left: auto;
      margin-right: auto;
      width: auto;
    }

    @include media-breakpoint-up(md) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer {
        max-width: get-container-max-width('md');
      }
    }

    @include media-breakpoint-up(lg) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer {
        max-width: get-container-max-width('lg');
        padding-left: calc(#{spacing(8)} + $grid-gutter-half-width);
        padding-right: calc(#{spacing(8)} + $grid-gutter-half-width);
        width: 100%;

        > * {
          width: 60%;
        }
      }

      .event-teaser__image {
        .lottie,
        img {
          bottom: 0;
          top: auto;
          height: 90%;
        }
      }
    }

    @include media-breakpoint-up(xl) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer,
      .event-teaser__image {
        max-width: get-container-max-width('xl');
      }

      .event-teaser__image {
        margin-left: auto;
        margin-right: auto;
        height: 100%;
        position: relative;
      }
    }

    @include media-breakpoint-up(xxl) {
      .event-teaser__foreground,
      .event-teaser__main,
      .event-teaser__footer,
      .event-teaser__image {
        max-width: 1280px;
      }
    }
  }

  .event-teaser__authors {
    display: none;
  }

  .event-teaser__details {
    flex-direction: row;
    height: auto;
  }

  .event-teaser__header {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .event-teaser__main {
    padding-top: spacing(26);
    padding-bottom: spacing(18);
    width: 60%;
  }

  .event-teaser__main,
  .event-teaser__footer {
    position: relative;
    z-index: 4;
  }

  .event-teaser__headline {
    @include font-style($style: 'h3-font-size', $weight: 'lighter', $line: 'thin');

    & {
      width: 100%;
    }
  }

  .event-teaser__cta {
    text-align: center;
  }

  @include media-breakpoint-down(lg) {
    .event-teaser__image {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 75%;
    }

    .event-teaser__details {
      width: 100%;
    }
  }

  @include media-breakpoint-down(md) {
    .event-teaser__image {
      height: 400px;
    }

    .event-teaser__main {
      padding-top: spacing(20);
      margin-bottom: 240px;
      width: 100%;
    }
  }

  @include media-breakpoint-down(xs) {
    .event-teaser__image {
      height: 280px;
    }

    .event-teaser__main {
      margin-bottom: 120px;
    }
  }
}

.event-teaser__authors {
  flex: 1;
  display: flex;
  align-items: flex-end;

  @include media-breakpoint-up(lg) {
    margin-left: spacing($event-teaser-default-spacing);
  }
}

.event-teaser__header {
  position: relative;

  .badge {
    padding-left: spacing($event-teaser-default-spacing);
    padding-right: spacing($event-teaser-default-spacing);
    margin-bottom: spacing(2);
  }
}

.event-teaser__main {
  padding: spacing($event-teaser-default-spacing);

  .event-teaser__badge {
    display: none;
  }

  .event-teaser__details {
    height: auto;
  }
}

.event-teaser__footer {
  padding: 0 spacing($event-teaser-default-spacing) spacing($event-teaser-default-spacing);
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.event-teaser__headline {
  width: 80%;
  margin-bottom: spacing(6);
}

.event-teaser__background {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
}

.event-teaser__image {
  .lottie,
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 3;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    width: auto;
    transform-origin: top right;
    image-rendering: -webkit-optimize-contrast;
  }
}

.event-teaser__foreground {
  padding-top: spacing($event-teaser-default-spacing);
  height: 100%;
  position: relative;
  z-index: 4;

  @include media-breakpoint-up(lg) {
    padding-bottom: spacing(4);
  }
}

.event-teaser__timing {
  margin-left: spacing($event-teaser-default-spacing);
  color: var(--color-event-teaser-timing);
}

.event-teaser__moment {
  + .event-teaser__time {
    &::before {
      content: '|';
      display: inline-block;
      padding: 0 spacing(1);
    }
  }
}

.event-teaser__details {
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;

  .event-teaser__authors {
    br {
      display: none;
    }
  }

  @include media-breakpoint-up(lg) {
    width: 60%;

    .event-teaser__authors {
      br {
        display: block;
      }
    }
  }
}

.event-teaser__shape {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;

  &.right {
    left: auto;
    right: 0;
  }
}

.event-teaser__shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
}

.event-teaser__price {
  padding-right: spacing(3);
}

.event-teaser__cta {
  flex: 1;
  text-align: right;
}

.event-teaser__authors-frame {
  position: relative;
  width: 100%;
}

.event-teaser__authors-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: $white-30;
  z-index: -1;

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.event-teaser__authors-foreground {
  padding: spacing(2) spacing($event-teaser-default-spacing);

  @include media-breakpoint-up(lg) {
    padding: 0;
  }
}
</style>
