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
      default: 'var(--color-gk-mid-blue)',
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
<style lang="scss">
.hover__parent:hover .testimonial-teaser,
.shared-components .testimonial-teaser:hover {
  .icon {
    svg {
      @include move-right-left;
    }
  }
}

.testimonial-video-teaser {
  --color-testimonial-teaser-foreground: var(--color-gk-white);
  position: relative;
  display: inline-block;

  &:hover {
    .testimonial-teaser__name .testimonial-teaser__name-background {
      text-decoration: underline;
    }

    .testimonial-teaser__name-background,
    .testimonial-teaser__title {
      &::before {
        background-color: var(--color-testimonial-teaser-background-hover);
        opacity: 0.9;
      }
    }
  }
}

.testimonial-teaser {
  --color-testimonial-teaser-foreground: var(--color-gk-white);

  position: relative;
  //max-width: unquote('min(500px, 100vw)');
  display: inline-block;

  &:hover {
    img {
      transform: scale(1.2);
      transform-origin: center center;
    }

    .testimonial-teaser__name .testimonial-teaser__name-background {
      text-decoration: underline;
    }

    .testimonial-teaser__name-background,
    .testimonial-teaser__title {
      &::before {
        background-color: var(--color-testimonial-teaser-background-hover);
        opacity: 0.9;
      }
    }
  }

  &.testimonial-teaser--aspect-ratio {
    .testimonial-teaser__img-wrapper {
      @include aspect-ratio(16, 9);

      height: 100%;
      width: 100%;

      @include media-breakpoint-up(lg) {
        @include aspect-ratio(
          var(--width-testimonial-teaser-aspect-ratio),
          var(--height-testimonial-teaser-aspect-ratio)
        );
      }
    }
  }

  &.testimonial-teaser--16x9 {
    .testimonial-teaser__content {
      bottom: 5%;

      @include media-breakpoint-up(lg) {
        bottom: 25%;
      }
    }
  }

  &.testimonial-teaser--4x3 {
    .testimonial-teaser__content {
      bottom: 5%;
    }
  }
}

.testimonial-teaser__img-wrapper {
  overflow: hidden;
  aspect-ratio: var(--testimonial-teaser-aspect-ratio);
}

.testimonial-teaser-video {
  padding-left: spacing(6);
  padding-bottom: spacing(8);
}

.testimonial-teaser__img {
  padding-left: spacing(6);
  padding-bottom: spacing(8);

  img {
    transition: transform 0.7s $animation-transition;
    will-change: transform;
  }
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

  &.testimonial-teaser__corner--left {
    margin-left: 3rem;
  }

  &.testimonial-teaser__corner--right {
    text-align: end;
    margin-left: -2rem;
  }

  img {
    height: auto;
    width: 60px;

    @include media-breakpoint-up(md) {
      width: 100px;
    }
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
  padding: spacing(2);
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;

  @include media-breakpoint-up(md) {
    display: block;
  }
}

.testimonial-teaser__name-background,
.testimonial-teaser__title {
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-testimonial-teaser-background);
    opacity: 0.8;
    z-index: -1;
    top: 0;
    left: 0;
    transition:
      opacity 0.7s $animation-transition,
      background-color 0.7s $animation-transition;
    will-change: opacity, background-color;
  }
}

.testimonial-teaser__name {
  margin-bottom: spacing(1);
  display: inline-block;
}

.testimonial-teaser__name-background {
  padding-top: spacing(1);
  padding-right: spacing(4);
  padding-bottom: spacing(1);
  padding-left: spacing(2);
  display: inline-flex;
  position: relative;

  // TODO refactor this selector because it is very fragile
  + br + .testimonial-teaser__name-background {
    padding-top: 0;
  }
}

.testimonial-teaser__name-icon {
  display: flex;
  width: 2.1em;
  overflow: hidden;
  position: relative;
  left: spacing(1);
}

.testimonial-teaser__icon {
  &.icon {
    position: absolute;
    padding-top: spacing(1);
    padding-left: spacing(4);
    padding-right: spacing(2);
    width: 100%;
    height: 100%;
    inset: 0;
  }
}
</style>
