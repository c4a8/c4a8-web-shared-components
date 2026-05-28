<template>
  <div :class="classList" :style="styles" ref="root">
    <div class="logo-list__row row">
      <wrapper classes="logo-list__scroller" :hide-container="!isOverlapping" :hide-container-class="true">
        <div :class="['logo-list__col col d-flex', { 'flex-wrap': !isOverlapping }]">
          <logo-list-items :list="list" :is-overlapping="isOverlapping" />
          <logo-list-items :list="list" is-clone="true" :is-overlapping="isOverlapping" v-if="isOverlapping" />
        </div>
      </wrapper>
    </div>
  </div>
</template>
<script>
import StickyScroller from '../utils/sticky-scroller.js';
import UtilityAnimation from '../utils/utility-animation.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'logo-list',
  mounted() {
    if (!this.$refs.root) return;

    if (this.sticky) {
      StickyScroller.init([this.$refs.root]);
    }

    UtilityAnimation.init([this.$refs.root]);
  },
  computed: {
    defaultSpacing() {},
    classList() {
      return [
        'logo-list container utility-animation vue-component',
        this.aspectRatio ? 'logo-list--aspect-ratio' : '',
        this.sticky ? 'is-sticky-scroller' : '',
        this.spacing ? this.spacing : 'py-4',
        this.isOverlapping ? 'logo-list--is-overlapping' : '',
      ];
    },
    isOverlapping() {
      return Tools.isTrue(this.overlapping);
    },
    columnsValue() {
      const defaultColumn = 4;
      const columnParam = parseInt(this.columns);
      const columnPercentage = 100 / (Number.isNaN(columnParam) ? defaultColumn : columnParam);
      const columnWidth = '--column-width: ';
      const gap = 3;

      return columnWidth + `calc(${columnPercentage}% - ${gap}px)`;
    },
    aspectRatioValue() {
      if (!this.aspectRatio) return '';

      const aspectRatio = this.aspectRatio.split('/');

      if (aspectRatio.length != 2) return '';

      return `--aspect-ratio-width: ${aspectRatio[0]}; --aspect-ratio-height: ${aspectRatio[1]}`;
    },
    styles() {
      return [
        this.columnsValue,
        this.aspectRatioValue,
        this.bgColor ? `--logo-list-background: ${this.bgColor}` : '',
      ].join('; ');
    },
  },
  props: {
    list: Array,
    sticky: {
      default: false,
    },
    spacing: String,
    columns: Number,
    aspectRatio: {
      default: false,
    },
    overlapping: {
      default: false,
    },
    bgColor: String,
  },
};
</script>
<style lang="scss">
.logo-list {
  &.logo-list--aspect-ratio {
    .logo-list__item {
      > img {
        aspect-ratio: var(--aspect-ratio-width) / var(--aspect-ratio-height);
      }
    }
  }

  &.logo-list--is-overlapping {
    @include shadow('light');
    @include z-index;

    background-color: var(--logo-list-background);
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(spacing($size: 12, $negative: true));
    overflow: hidden;

    .logo-list__col {
      gap: spacing(8);

      @include media-breakpoint-up(lg) {
        gap: spacing(6);
        justify-content: space-between;
      }
    }

    .logo-list__row {
      mask: linear-gradient(
        90deg,
        transparent spacing(4),
        white 30%,
        white 70%,
        transparent calc(100% - #{spacing(4)})
      );

      @include media-breakpoint-up(lg) {
        mask: none;
      }
    }

    .logo-list__col {
      animation: scroll-infinite 60s forwards linear infinite;
      width: max-content;

      @include media-breakpoint-up(lg) {
        animation: none;
        width: auto;
      }
    }

    .logo-list__item {
      filter: brightness(0) invert(1);
      opacity: 0.7;
      box-shadow: none;
      flex-basis: auto;

      img {
        max-height: spacing(10);
      }

      &:hover {
        filter: brightness(0) invert(1);
        box-shadow: none;
      }

      &[data-utility-animation-step] {
        --utility-animation-to-opacity: 0.7;
      }

      @include media-breakpoint-up(md) {
        flex-grow: 1;
        max-width: none;
      }

      @include media-breakpoint-up(lg) {
        &.logo-list--clone {
          display: none;
        }
      }
    }
  }

  .logo-list__item {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.22);
    flex-basis: 100%;
    filter: grayscale(1);
    opacity: 0.4;
    transition-property: filter, opacity, box-shadow;
    transition-duration: 0.6s;
    transition-timing-function: $animation-transition;
    display: flex;

    &[data-utility-animation-step] {
      --utility-animation-to-opacity: 0.4;

      opacity: 0;
      animation-delay: var(--utility-animation-delay);
      animation-duration: 1.4s;
    }

    img {
      object-fit: contain;
      height: inherit;
      height: intrinsic;
      width: auto;
    }

    &:hover {
      filter: grayscale(0);
      opacity: 1;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);

      &[data-utility-animation-step] {
        --utility-animation-to-opacity: 1;
      }
    }

    @include media-breakpoint-up(md) {
      box-shadow: none;
      flex-basis: 48%;
      max-width: 48%;
    }

    @include media-breakpoint-up(lg) {
      flex-basis: var(--column-width);
      max-width: var(--column-width);
    }
  }
}

.logo-list__scroller {
  @include media-breakpoint-up(lg) {
    width: 100%;
  }
}
</style>
