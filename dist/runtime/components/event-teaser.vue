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
<style>
.event-teaser {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1.5s cubic-bezier(0.19, 1, 0.2, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-event-teaser-background);
  cursor: pointer;
}
.event-teaser .is-foreground :is(img, svg, .lottie),
.event-teaser .is-background {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: 0.4s;
}
.event-teaser:hover .is-foreground :is(img, svg, .lottie),
.event-teaser:hover .is-background {
  transform: scale(1.025);
  transition-duration: 1.3s;
}
.event-teaser:hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}
.event-teaser.event-teaser--image-full-width .event-teaser__image .img__picture-wrapper {
  max-width: none;
}
.event-teaser.event-teaser--image-full-width .event-teaser__image .lottie,
.event-teaser.event-teaser--image-full-width .event-teaser__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}
.event-teaser.event-teaser--training .event-teaser__image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85%;
}
.event-teaser.event-teaser--training .event-teaser__details {
  display: none;
}
.event-teaser.event-teaser--training .event-teaser__main .event-teaser__details {
  display: flex;
}
.event-teaser.event-teaser--training .event-teaser__main .event-teaser__badge {
  display: block;
}
.event-teaser.event-teaser--training .event-teaser__details {
  width: calc(100% + 1.5rem);
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin-left: -1.5rem;
  margin-bottom: 1.5rem;
}
.event-teaser.event-teaser--training .event-teaser__details .badge {
  padding-left: 1.5rem;
}
.event-teaser.event-teaser--teaser {
  --color-headlines: var(--color-event-teaser-teaser-copy);
  background-color: var(--color-event-teaser-teaser-background);
  color: var(--color-event-teaser-teaser-copy);
}
.event-teaser.event-teaser--teaser::after, .event-teaser.event-teaser--teaser::before {
  position: absolute;
  content: "";
  display: block;
  width: 50vw;
  height: 100%;
  background-color: var(--color-event-teaser-teaser-background);
}
.event-teaser.event-teaser--teaser::before {
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.25);
  left: -50vw;
}
.event-teaser.event-teaser--teaser::after {
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.25);
  right: -50vw;
  z-index: 2;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser::after {
    display: none;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__header {
  display: none;
}
.event-teaser.event-teaser--teaser .event-teaser__main {
  padding-top: 3rem;
  padding-left: 0;
}
.event-teaser.event-teaser--teaser .event-teaser__headline {
  font-size: calc(3.75rem / 1.8);
  line-height: 1.2em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: calc(3.75rem / 1.3);
    line-height: 1.2em;
  }
}
@media (min-width: 1200px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: 3.75rem;
    line-height: 1.2em;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__headline {
  margin-bottom: 1.75rem;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__content {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser .event-teaser__content {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .event-teaser.event-teaser--teaser .event-teaser__content {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__content {
  font-weight: 100 !important;
}
.event-teaser.event-teaser--teaser .event-teaser__content strong {
  font-weight: inherit;
}
.event-teaser.event-teaser--teaser .event-teaser__content {
  padding-right: 3rem;
}
@media (max-width: 991.98px) {
  .event-teaser.event-teaser--teaser .event-teaser__footer {
    padding-left: 0;
    padding-right: 0;
  }
}
.event-teaser:not(.event-teaser--training):not(.event-teaser--teaser) .event-teaser__main .event-teaser__timing {
  margin-left: 0;
  color: var(--color-event-teaser-timing-highlight);
}

.event-teaser--size-4 {
  grid-column: auto/span 12;
}
.event-teaser--size-4 .event-teaser__header {
  height: 290px;
}
@media (min-width: 768px) {
  .event-teaser--size-4 {
    grid-column: auto/span 6;
  }
}
@media (min-width: 992px) {
  .event-teaser--size-4 {
    grid-column: auto/span 4;
    max-width: 400px;
  }
}

.event-teaser--size-6 {
  grid-column: auto/span 12;
}
.event-teaser--size-6 .event-teaser__header {
  height: 270px;
}
@media (min-width: 992px) {
  .event-teaser--size-6 {
    grid-column: auto/span 6;
    max-width: 600px;
  }
  .event-teaser--size-6 .event-teaser__header {
    height: 220px;
  }
}

.event-teaser--size-8 {
  grid-column: auto/span 12;
}
@media (min-width: 992px) {
  .event-teaser--size-8 {
    grid-column: auto/span 8;
  }
}

.event-teaser--size-12 {
  grid-column: auto/span 12;
}
.event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
.event-teaser--size-12.event-teaser--size-full .event-teaser__main,
.event-teaser--size-12.event-teaser--size-full .event-teaser__footer {
  max-width: 540px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}
@media (min-width: 768px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer {
    max-width: 960px;
    padding-left: calc(2rem + 15px);
    padding-right: calc(2rem + 15px);
    width: 100%;
  }
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground > *,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main > *,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer > * {
    width: 60%;
  }
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image .lottie,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image img {
    bottom: 0;
    top: auto;
    height: 90%;
  }
}
@media (min-width: 1200px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image {
    max-width: 1140px;
  }
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    position: relative;
  }
}
@media (min-width: 1340px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image {
    max-width: 1280px;
  }
}
.event-teaser--size-12 .event-teaser__authors {
  display: none;
}
.event-teaser--size-12 .event-teaser__details {
  flex-direction: row;
  height: auto;
}
.event-teaser--size-12 .event-teaser__header {
  position: absolute;
  width: 100%;
  height: 100%;
}
.event-teaser--size-12 .event-teaser__main {
  padding-top: 6.5rem;
  padding-bottom: 4.5rem;
  width: 60%;
}
.event-teaser--size-12 .event-teaser__main,
.event-teaser--size-12 .event-teaser__footer {
  position: relative;
  z-index: 4;
}
.event-teaser--size-12 .event-teaser__headline {
  font-size: 1.625rem;
  line-height: 1.3847em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .event-teaser--size-12 .event-teaser__headline {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .event-teaser--size-12 .event-teaser__headline {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}
.event-teaser--size-12 .event-teaser__headline {
  line-height: 1.2em !important;
}
.event-teaser--size-12 .event-teaser__headline {
  width: 100%;
}
.event-teaser--size-12 .event-teaser__cta {
  text-align: center;
}
@media (max-width: 1199.98px) {
  .event-teaser--size-12 .event-teaser__image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 75%;
  }
  .event-teaser--size-12 .event-teaser__details {
    width: 100%;
  }
}
@media (max-width: 991.98px) {
  .event-teaser--size-12 .event-teaser__image {
    height: 400px;
  }
  .event-teaser--size-12 .event-teaser__main {
    padding-top: 5rem;
    margin-bottom: 240px;
    width: 100%;
  }
}
@media (max-width: 575.98px) {
  .event-teaser--size-12 .event-teaser__image {
    height: 280px;
  }
  .event-teaser--size-12 .event-teaser__main {
    margin-bottom: 120px;
  }
}

.event-teaser__authors {
  flex: 1;
  display: flex;
  align-items: flex-end;
}
@media (min-width: 992px) {
  .event-teaser__authors {
    margin-left: 1.5rem;
  }
}

.event-teaser__header {
  position: relative;
}
.event-teaser__header .badge {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 0.5rem;
}

.event-teaser__main {
  padding: 1.5rem;
}
.event-teaser__main .event-teaser__badge {
  display: none;
}
.event-teaser__main .event-teaser__details {
  height: auto;
}

.event-teaser__footer {
  padding: 0 1.5rem 1.5rem;
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.event-teaser__headline {
  width: 80%;
  margin-bottom: 1.5rem;
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

.event-teaser__image .lottie,
.event-teaser__image img {
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

.event-teaser__foreground {
  padding-top: 1.5rem;
  height: 100%;
  position: relative;
  z-index: 4;
}
@media (min-width: 992px) {
  .event-teaser__foreground {
    padding-bottom: 1rem;
  }
}

.event-teaser__timing {
  margin-left: 1.5rem;
  color: var(--color-event-teaser-timing);
}

.event-teaser__moment + .event-teaser__time::before {
  content: "|";
  display: inline-block;
  padding: 0 0.25rem;
}

.event-teaser__details {
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
}
.event-teaser__details .event-teaser__authors br {
  display: none;
}
@media (min-width: 992px) {
  .event-teaser__details {
    width: 60%;
  }
  .event-teaser__details .event-teaser__authors br {
    display: block;
  }
}

.event-teaser__shape {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
.event-teaser__shape.right {
  left: auto;
  right: 0;
}

.event-teaser__shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
}

.event-teaser__price {
  padding-right: 0.75rem;
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
  background-color: rgba(255, 255, 255, 0.3);
  z-index: -1;
}
@media (min-width: 992px) {
  .event-teaser__authors-background {
    display: none;
  }
}

.event-teaser__authors-foreground {
  padding: 0.5rem 1.5rem;
}
@media (min-width: 992px) {
  .event-teaser__authors-foreground {
    padding: 0;
  }
}

.event-teaser {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1.5s cubic-bezier(0.19, 1, 0.2, 1);
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--color-event-teaser-background);
  cursor: pointer;
}
.event-teaser .is-foreground :is(img, svg, .lottie),
.event-teaser .is-background {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: 0.4s;
}
.event-teaser:hover .is-foreground :is(img, svg, .lottie),
.event-teaser:hover .is-background {
  transform: scale(1.025);
  transition-duration: 1.3s;
}
.event-teaser:hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}
.event-teaser.event-teaser--image-full-width .event-teaser__image .img__picture-wrapper {
  max-width: none;
}
.event-teaser.event-teaser--image-full-width .event-teaser__image .lottie,
.event-teaser.event-teaser--image-full-width .event-teaser__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
}
.event-teaser.event-teaser--training .event-teaser__image {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85%;
}
.event-teaser.event-teaser--training .event-teaser__details {
  display: none;
}
.event-teaser.event-teaser--training .event-teaser__main .event-teaser__details {
  display: flex;
}
.event-teaser.event-teaser--training .event-teaser__main .event-teaser__badge {
  display: block;
}
.event-teaser.event-teaser--training .event-teaser__details {
  width: calc(100% + 1.5rem);
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  margin-left: -1.5rem;
  margin-bottom: 1.5rem;
}
.event-teaser.event-teaser--training .event-teaser__details .badge {
  padding-left: 1.5rem;
}
.event-teaser.event-teaser--teaser {
  --color-headlines: var(--color-event-teaser-teaser-copy);
  background-color: var(--color-event-teaser-teaser-background);
  color: var(--color-event-teaser-teaser-copy);
}
.event-teaser.event-teaser--teaser::after, .event-teaser.event-teaser--teaser::before {
  position: absolute;
  content: "";
  display: block;
  width: 50vw;
  height: 100%;
  background-color: var(--color-event-teaser-teaser-background);
}
.event-teaser.event-teaser--teaser::before {
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.25);
  left: -50vw;
}
.event-teaser.event-teaser--teaser::after {
  box-shadow: 10px 0 10px rgba(0, 0, 0, 0.25);
  right: -50vw;
  z-index: 2;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser::after {
    display: none;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__header {
  display: none;
}
.event-teaser.event-teaser--teaser .event-teaser__main {
  padding-top: 3rem;
  padding-left: 0;
}
.event-teaser.event-teaser--teaser .event-teaser__headline {
  font-size: calc(3.75rem / 1.8);
  line-height: 1.2em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: calc(3.75rem / 1.3);
    line-height: 1.2em;
  }
}
@media (min-width: 1200px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: 3.75rem;
    line-height: 1.2em;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__headline {
  margin-bottom: 1.75rem;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .event-teaser.event-teaser--teaser .event-teaser__headline {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__content {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .event-teaser.event-teaser--teaser .event-teaser__content {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .event-teaser.event-teaser--teaser .event-teaser__content {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
.event-teaser.event-teaser--teaser .event-teaser__content {
  font-weight: 100 !important;
}
.event-teaser.event-teaser--teaser .event-teaser__content strong {
  font-weight: inherit;
}
.event-teaser.event-teaser--teaser .event-teaser__content {
  padding-right: 3rem;
}
@media (max-width: 991.98px) {
  .event-teaser.event-teaser--teaser .event-teaser__footer {
    padding-left: 0;
    padding-right: 0;
  }
}
.event-teaser:not(.event-teaser--training):not(.event-teaser--teaser) .event-teaser__main .event-teaser__timing {
  margin-left: 0;
  color: var(--color-event-teaser-timing-highlight);
}

.event-teaser--size-4 {
  grid-column: auto/span 12;
}
.event-teaser--size-4 .event-teaser__header {
  height: 290px;
}
@media (min-width: 768px) {
  .event-teaser--size-4 {
    grid-column: auto/span 6;
  }
}
@media (min-width: 992px) {
  .event-teaser--size-4 {
    grid-column: auto/span 4;
    max-width: 400px;
  }
}

.event-teaser--size-6 {
  grid-column: auto/span 12;
}
.event-teaser--size-6 .event-teaser__header {
  height: 270px;
}
@media (min-width: 992px) {
  .event-teaser--size-6 {
    grid-column: auto/span 6;
    max-width: 600px;
  }
  .event-teaser--size-6 .event-teaser__header {
    height: 220px;
  }
}

.event-teaser--size-8 {
  grid-column: auto/span 12;
}
@media (min-width: 992px) {
  .event-teaser--size-8 {
    grid-column: auto/span 8;
  }
}

.event-teaser--size-12 {
  grid-column: auto/span 12;
}
.event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
.event-teaser--size-12.event-teaser--size-full .event-teaser__main,
.event-teaser--size-12.event-teaser--size-full .event-teaser__footer {
  max-width: 540px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}
@media (min-width: 768px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer {
    max-width: 960px;
    padding-left: calc(2rem + 15px);
    padding-right: calc(2rem + 15px);
    width: 100%;
  }
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground > *,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main > *,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer > * {
    width: 60%;
  }
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image .lottie,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image img {
    bottom: 0;
    top: auto;
    height: 90%;
  }
}
@media (min-width: 1200px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image {
    max-width: 1140px;
  }
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image {
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    position: relative;
  }
}
@media (min-width: 1340px) {
  .event-teaser--size-12.event-teaser--size-full .event-teaser__foreground,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__main,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__footer,
  .event-teaser--size-12.event-teaser--size-full .event-teaser__image {
    max-width: 1280px;
  }
}
.event-teaser--size-12 .event-teaser__authors {
  display: none;
}
.event-teaser--size-12 .event-teaser__details {
  flex-direction: row;
  height: auto;
}
.event-teaser--size-12 .event-teaser__header {
  position: absolute;
  width: 100%;
  height: 100%;
}
.event-teaser--size-12 .event-teaser__main {
  padding-top: 6.5rem;
  padding-bottom: 4.5rem;
  width: 60%;
}
.event-teaser--size-12 .event-teaser__main,
.event-teaser--size-12 .event-teaser__footer {
  position: relative;
  z-index: 4;
}
.event-teaser--size-12 .event-teaser__headline {
  font-size: 1.625rem;
  line-height: 1.3847em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .event-teaser--size-12 .event-teaser__headline {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .event-teaser--size-12 .event-teaser__headline {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}
.event-teaser--size-12 .event-teaser__headline {
  line-height: 1.2em !important;
}
.event-teaser--size-12 .event-teaser__headline {
  width: 100%;
}
.event-teaser--size-12 .event-teaser__cta {
  text-align: center;
}
@media (max-width: 1199.98px) {
  .event-teaser--size-12 .event-teaser__image {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 75%;
  }
  .event-teaser--size-12 .event-teaser__details {
    width: 100%;
  }
}
@media (max-width: 991.98px) {
  .event-teaser--size-12 .event-teaser__image {
    height: 400px;
  }
  .event-teaser--size-12 .event-teaser__main {
    padding-top: 5rem;
    margin-bottom: 240px;
    width: 100%;
  }
}
@media (max-width: 575.98px) {
  .event-teaser--size-12 .event-teaser__image {
    height: 280px;
  }
  .event-teaser--size-12 .event-teaser__main {
    margin-bottom: 120px;
  }
}

.event-teaser__authors {
  flex: 1;
  display: flex;
  align-items: flex-end;
}
@media (min-width: 992px) {
  .event-teaser__authors {
    margin-left: 1.5rem;
  }
}

.event-teaser__header {
  position: relative;
}
.event-teaser__header .badge {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 0.5rem;
}

.event-teaser__main {
  padding: 1.5rem;
}
.event-teaser__main .event-teaser__badge {
  display: none;
}
.event-teaser__main .event-teaser__details {
  height: auto;
}

.event-teaser__footer {
  padding: 0 1.5rem 1.5rem;
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.event-teaser__headline {
  width: 80%;
  margin-bottom: 1.5rem;
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

.event-teaser__image .lottie,
.event-teaser__image img {
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

.event-teaser__foreground {
  padding-top: 1.5rem;
  height: 100%;
  position: relative;
  z-index: 4;
}
@media (min-width: 992px) {
  .event-teaser__foreground {
    padding-bottom: 1rem;
  }
}

.event-teaser__timing {
  margin-left: 1.5rem;
  color: var(--color-event-teaser-timing);
}

.event-teaser__moment + .event-teaser__time::before {
  content: "|";
  display: inline-block;
  padding: 0 0.25rem;
}

.event-teaser__details {
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 100%;
}
.event-teaser__details .event-teaser__authors br {
  display: none;
}
@media (min-width: 992px) {
  .event-teaser__details {
    width: 60%;
  }
  .event-teaser__details .event-teaser__authors br {
    display: block;
  }
}

.event-teaser__shape {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
}
.event-teaser__shape.right {
  left: auto;
  right: 0;
}

.event-teaser__shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: bottom right;
}

.event-teaser__price {
  padding-right: 0.75rem;
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
  background-color: rgba(255, 255, 255, 0.3);
  z-index: -1;
}
@media (min-width: 992px) {
  .event-teaser__authors-background {
    display: none;
  }
}

.event-teaser__authors-foreground {
  padding: 0.5rem 1.5rem;
}
@media (min-width: 992px) {
  .event-teaser__authors-foreground {
    padding: 0;
  }
}
</style>
