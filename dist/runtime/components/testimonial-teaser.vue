<template>
  <template v-if="img && img.img">
    <a
      class="testimonial-teaser utility-animation fade-in-bottom"
      :class="[]"
      :style="bgStyling"
      :href="href"
      data-utility-animation-step="1"
      ref="root"
    >
      <div class="testimonial-teaser__wrapper">
        <div v-if="cornerImg" class="testimonial-teaser__corner" :class="cornerPosition">
          <img-html :img="cornerImg.img" :alt="cornerImg.alt" :cloudinary="cornerImg.cloudinary" />
        </div>
        <div class="testimonial-teaser__img">
          <div class="testimonial-teaser__img-wrapper" :style="aspectRatioClass">
            <v-img
              :img="img.img"
              :alt="img.alt"
              :cloudinary="img.cloudinary"
              :imgSrcSets="imgSrcSet"
              class="testimonial-teaser-vimg"
              :style="imgObjectPositionClass"
            />
          </div>
        </div>
        <a class="testimonial-teaser__content">
          <div class="testimonial-teaser__name font-size-4 bold">
            <span v-for="(part, idx) in name.split(' ')" :key="idx">
              <div class="testimonial-teaser__name-background">
                {{ part }}
                <template v-if="idx === name.split(' ').length - 1">
                  <div class="testimonial-teaser__name-icon">
                    <icon icon="arrow" classes="testimonial-teaser__icon" size="large" />
                  </div>
                </template>
              </div>
              <template v-if="idx !== name.split(' ').length - 1"><br /></template>
            </span>
          </div>
          <div class="testimonial-teaser__title font-size-1 bg">{{ title }}</div>
        </a>
      </div>
    </a>
  </template>
  <template v-if="video && video.thumb">
    <a
      class="utility-animation fade-in-bottom testimonial-video-teaser"
      :class="[]"
      :style="bgStyling"
      :href="href"
      data-utility-animation-step="1"
      ref="root"
    >
      <div class="testimonial-teaser-video">
        <video-inner :video="video" ref="video-frame" />
      </div>
      <div>
        <a class="testimonial-teaser__content" @click="triggerVideoStart" style="cursor: pointer">
          <div class="testimonial-teaser__name font-size-4 bold">
            <span v-for="(part, idx) in name.split(' ')" :key="idx">
              <div class="testimonial-teaser__name-background">
                {{ part }}
                <template v-if="idx === name.split(' ').length - 1">
                  <div class="testimonial-teaser__name-icon">
                    <icon icon="arrow" classes="testimonial-teaser__icon" size="large" />
                  </div>
                </template>
              </div>
              <template v-if="idx !== name.split(' ').length - 1"><br /></template>
            </span>
          </div>
          <div class="testimonial-teaser__title font-size-1 bg">{{ title }}</div>
        </a>
      </div>
    </a>
  </template>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';
export default {
  tagName: 'testimonial-teaser',
  props: {
    href: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
    img: {
      type: Object,
      required: false,
    },
    imgPosition: {
      type: String,
      default: '50% 50%',
    },
    cloudinary: {
      type: Boolean,
      default: true,
    },
    video: {
      type: Object,
      required: false,
    },
    cornerImg: {
      type: Object,
      default: null,
    },
    bgColor: {
      type: String,
      default: 'var(--color-primary)',
    },
    bgColorHover: {
      type: String,
      default: 'var(--color-blue-medium)',
    },
    aspectRatio: {
      type: String,
      default: '16/9',
    },
  },
  mounted() {
    if (!this.$refs.root) return;
    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    aspectRatioClass() {
      return `--testimonial-teaser-aspect-ratio: ${this.aspectRatio};`;
    },
    imgObjectPositionClass() {
      return `--testimonial-teaser-img-object-position: ${this.imgPosition};`;
    },
    cornerPosition() {
      return this.cornerImg?.position === 'left'
        ? 'testimonial-teaser__corner--left'
        : 'testimonial-teaser__corner--right';
    },
    bgStyling() {
      return `--color-testimonial-teaser-background: ${this.bgColor}; --color-testimonial-teaser-background-hover: ${this.bgColorHover}; width: 100%;`;
    },
    nameReplaced() {
      return this.name
        .split(' ')
        .map((word) => `<div class="testimonial-teaser__name-background">${word}</div>`)
        .join('<br/>');
    },
    imgSrcSet() {
      if (!this.aspectRatio) return false;
      const key = `testimonialTeaser${this.aspectRatio}`;
      return this.$site?.data?.imgSrcSets?.[key] || false;
    },
  },
  methods: {
    triggerVideoStart() {
      this.$refs['video-frame']?.$el.querySelector('a')?.click();
    },
  },
};
</script>
<style>
.hover__parent:hover .testimonial-teaser .icon svg,
.shared-components .testimonial-teaser:hover .icon svg {
  animation: moveRightLeft;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}

.testimonial-video-teaser {
  --color-testimonial-teaser-foreground: var(--color-white);
  position: relative;
  display: inline-block;
}
.testimonial-video-teaser:hover .testimonial-teaser__name .testimonial-teaser__name-background {
  text-decoration: underline;
}
.testimonial-video-teaser:hover .testimonial-teaser__name-background::before,
.testimonial-video-teaser:hover .testimonial-teaser__title::before {
  background-color: var(--color-testimonial-teaser-background-hover);
  opacity: 0.9;
}

.testimonial-teaser {
  --color-testimonial-teaser-foreground: var(--color-white);
  position: relative;
  display: inline-block;
}
.testimonial-teaser:hover img {
  transform: scale(1.2);
  transform-origin: center center;
}
.testimonial-teaser:hover .testimonial-teaser__name .testimonial-teaser__name-background {
  text-decoration: underline;
}
.testimonial-teaser:hover .testimonial-teaser__name-background::before,
.testimonial-teaser:hover .testimonial-teaser__title::before {
  background-color: var(--color-testimonial-teaser-background-hover);
  opacity: 0.9;
}
.testimonial-teaser.testimonial-teaser--aspect-ratio .testimonial-teaser__img-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.testimonial-teaser.testimonial-teaser--aspect-ratio .testimonial-teaser__img-wrapper:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: calc(9 / 16 * 100%);
}
.testimonial-teaser.testimonial-teaser--aspect-ratio .testimonial-teaser__img-wrapper > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
@media (min-width: 992px) {
  .testimonial-teaser.testimonial-teaser--aspect-ratio .testimonial-teaser__img-wrapper {
    position: relative;
  }
  .testimonial-teaser.testimonial-teaser--aspect-ratio .testimonial-teaser__img-wrapper:before {
    content: "";
    display: block;
    width: 100%;
    padding-top: calc(var(--height-testimonial-teaser-aspect-ratio) / var(--width-testimonial-teaser-aspect-ratio) * 100%);
  }
  .testimonial-teaser.testimonial-teaser--aspect-ratio .testimonial-teaser__img-wrapper > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
.testimonial-teaser.testimonial-teaser--16x9 .testimonial-teaser__content {
  bottom: 5%;
}
@media (min-width: 992px) {
  .testimonial-teaser.testimonial-teaser--16x9 .testimonial-teaser__content {
    bottom: 25%;
  }
}
.testimonial-teaser.testimonial-teaser--4x3 .testimonial-teaser__content {
  bottom: 5%;
}

.testimonial-teaser__img-wrapper {
  overflow: hidden;
  aspect-ratio: var(--testimonial-teaser-aspect-ratio);
}

.testimonial-teaser-video {
  padding-left: 1.5rem;
  padding-bottom: 2rem;
}

.testimonial-teaser__img {
  padding-left: 1.5rem;
  padding-bottom: 2rem;
}
.testimonial-teaser__img img {
  transition: transform 0.7s cubic-bezier(0.19, 1, 0.2, 1);
  will-change: transform;
}

.testimonial-teaser-vimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: var(--testimonial-teaser-img-object-position);
}

.testimonial-teaser__corner {
  position: absolute;
  width: 100%;
  z-index: 2;
  margin-top: 1.5rem;
}
.testimonial-teaser__corner.testimonial-teaser__corner--left {
  margin-left: 3rem;
}
.testimonial-teaser__corner.testimonial-teaser__corner--right {
  text-align: end;
  margin-left: -2rem;
}
.testimonial-teaser__corner img {
  height: auto;
  width: 60px;
}
@media (min-width: 768px) {
  .testimonial-teaser__corner img {
    width: 100px;
  }
}

.testimonial-teaser__content {
  position: absolute;
  bottom: 0;
}

.testimonial-teaser__name,
.testimonial-teaser__title {
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-testimonial-teaser-foreground);
  z-index: 1;
}

.testimonial-teaser__title {
  padding: 0.5rem;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
@media (min-width: 768px) {
  .testimonial-teaser__title {
    display: block;
  }
}

.testimonial-teaser__name-background::before,
.testimonial-teaser__title::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-testimonial-teaser-background);
  opacity: 0.8;
  z-index: -1;
  top: 0;
  left: 0;
  transition: opacity 0.7s cubic-bezier(0.19, 1, 0.2, 1), background-color 0.7s cubic-bezier(0.19, 1, 0.2, 1);
  will-change: opacity, background-color;
}

.testimonial-teaser__name {
  margin-bottom: 0.25rem;
  display: inline-block;
}

.testimonial-teaser__name-background {
  padding-top: 0.25rem;
  padding-right: 1rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  display: inline-flex;
  position: relative;
}
.testimonial-teaser__name-background + br + .testimonial-teaser__name-background {
  padding-top: 0;
}

.testimonial-teaser__name-icon {
  display: flex;
  width: 2.1em;
  overflow: hidden;
  position: relative;
  left: 0.25rem;
}

.testimonial-teaser__icon.icon {
  position: absolute;
  padding-top: 0.25rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  width: 100%;
  height: 100%;
  inset: 0;
}
</style>
