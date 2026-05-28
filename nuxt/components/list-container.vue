<template>
  <div :class="classValue" :style="colorStyling">
    <div
      class="list-container__container utility-animation container headline-sticky__target fade-in-bottom"
      data-utility-animation-step="1"
      ref="container"
    >
      <div class="row">
        <div class="col-sm-12">
          <headline :text="headline" :level="level" classes="list-container__headline" />
        </div>
      </div>
    </div>
    <slot-items :items="$slots.default"></slot-items>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'list-container',
  computed: {
    classValue() {
      return [
        'list-container vue-component',
        `${this.spacing ? this.spacing : ''}`,
        `${this.classes ? this.classes : ''}`,
        Tools.isTrue(this.headlineSticky) ? 'list-container--headline-sticky has-headline-sticky' : '',
      ];
    },
    colorStyling() {
      const bgColor = this.bgColor
        ? `--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);`
        : '';
      const headlineColor = this.headlineColor
        ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`
        : '';
      return [bgColor, headlineColor];
    },
  },
  mounted() {
    if (!this.$refs.container) return;

    UtilityAnimation.init([this.$refs.container]);
  },
  props: {
    classes: String,
    headline: String,
    level: String,
    bgColor: String,
    headlineColor: String,
    headlineSticky: {
      default: false,
    },
    spacing: String,
  },
};
</script>
<style lang="scss">
$list-container-spacing: spacing(14);

.list-container {
  padding-top: $list-container-spacing;
  padding-bottom: $list-container-spacing;

  &.list-container--headline-sticky {
    position: relative;

    .list-container__container {
      --headline-sticky-bg-color: var(--list-container-bg-color);

      &::after,
      &::before {
        display: block;
      }
    }
  }

  .text-image {
    .text-image__img {
      flex: 1 0 100%;
      max-width: 100%;

      img.is-svg {
        width: 40vw;
        margin: 0 auto;
        display: flex;
      }

      @include media-breakpoint-up(md) {
        flex: 1 0 40%;
        max-width: 40%;

        img.is-svg {
          max-width: 100%;
        }
      }

      @include media-breakpoint-up(lg) {
        flex: 0 0 41.66667%;
        max-width: 41.66667%;

        img.is-svg {
          width: 60%;
          padding: spacing(6);
        }
      }
    }

    .flex-row-reverse {
      @include media-breakpoint-down(md) {
        .text-image__first-col {
          order: 1;
          margin-top: 0;
        }

        .text-image__second-col {
          order: 2;
        }
      }
    }

    .text-image__second-col {
      display: flex;
      flex-direction: column;

      @include media-breakpoint-up(sm) {
        display: block;
      }
    }

    .row {
      > div {
        &:nth-child(2) {
          flex: 0 1 100%;
          max-width: 100%;

          p {
            display: none;
          }

          @include media-breakpoint-up(md) {
            flex: 0 1 60%;
            max-width: 60%;
            display: flex;
            justify-content: center;
          }

          @include media-breakpoint-up(lg) {
            flex: 0 0 50%;
            max-width: 50%;
            display: block;
          }
        }
      }
    }
  }

  > div {
    &:nth-child(1n + 4).text-image {
      padding-top: spacing(2);
    }
  }
}

.list-container__container {
  &::after,
  &::before {
    height: calc(100% + #{$list-container-spacing});
  }

  &::before {
    top: calc(-#{$list-container-spacing});
  }

  &::after {
    bottom: -$list-container-spacing;
    height: $list-container-spacing;
  }
}
</style>
