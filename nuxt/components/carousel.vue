<template>
  <div :class="classList" ref="carousel" :style="style">
    <div class="carousel__container">
      <div class="carousel__row">
        <section class="carousel__row-section" ref="row-section">
          <carousel-item
            :item="item"
            :component="component"
            @click="handleItemClick"
            v-for="(item, index) in jsonItems"
            :key="index"
          />
        </section>
        <section class="carousel__row-section">
          <carousel-item
            :item="item"
            :component="component"
            @click="handleItemClick"
            v-for="(item, index) in jsonItems"
            :key="index"
          />
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';

import { useModalStore } from '../stores/modal.js';

export default {
  tagName: 'carousel',
  data() {
    return {
      clientWidth: null,
      resizeObserver: null,
    };
  },
  setup(props) {
    if (!props.component) return {};

    const modalStore = useModalStore();

    const openSidebarModal = (sectionTitle) => {
      modalStore.openModal(sectionTitle);
    };

    return { openSidebarModal };
  },
  computed: {
    jsonItems() {
      return Tools.getJSON(this.items);
    },
    classList() {
      return [
        'carousel vue-component',
        this.bgColor ? State.HAS_BACKGROUND : '',
        this.component ? 'carousel--' + this.component : '',
      ];
    },
    style() {
      return [
        this.bgColor ? `--color-carousel-background: ${this.bgColor};` : '',
        this.clientWidth ? `--animation-scroll-width: -${this.clientWidth}px;` : '',
      ];
    },
  },
  mounted() {
    const rowSection = this.$refs['row-section'];

    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === rowSection) {
          this.clientWidth = entry.contentRect.width;
        }
      }
    });

    if (!rowSection) return;

    this.resizeObserver.observe(rowSection);

    window.addEventListener('resize', this.updateClientWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateClientWidth);
  },
  methods: {
    updateClientWidth() {
      this.clientWidth = this.$refs['row-section']?.clientWidth;
    },
    handleItemClick(item) {
      if (!(this.component && this.openSidebarModal && item.title)) return;

      this.openSidebarModal(item.title);
    },
  },
  props: {
    items: Array,
    bgColor: String,
    component: String,
  },
};
</script>
<style lang="scss">
.carousel {
  --color-carousel-background: rgba(255, 255, 255, 0);

  width: 100%;
  position: relative;

  .carousel__item-overline,
  .carousel__item-title {
    line-height: 1.15em;
  }

  &.has-background {
    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 90px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
      left: 0;
      background: linear-gradient(to right, var(--color-carousel-background) 0%, rgba(255, 255, 255, 0) 100%);
    }

    &:after {
      right: 0;
      left: auto;
      top: 0;
      background: linear-gradient(to left, var(--color-carousel-background) 0%, rgba(255, 255, 255, 0) 100%);
    }

    @include media-breakpoint-up('lg') {
      &:before,
      &:after {
        width: 150px;
      }
    }
  }

  &.carousel--tile {
    .carousel__row {
      animation-duration: 20s;
    }
  }
}

.carousel__container {
  /* prevents css bleeding edge */
  overflow: hidden;
  margin: 0 2px;
  padding: 1px 0;
  position: relative;
}

.carousel__row {
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  animation: scroll 50s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
}

.carousel__row-section {
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  flex-shrink: 0;

  > * {
    display: inline-block;
    flex-shrink: 0;

    &:not(.carousel__item--tile) {
      padding: 0 spacing(4);
    }

    &.carousel__item--tile {
      padding: 0 spacing(1);
      height: 100%;
    }
  }
}

.carousel__item-tile {
  background-color: var(--carousel-item-tile-color);
  color: var(--carousel-item-tile-text-color, var(--color-copy));
  padding: spacing(4) spacing(3);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 190px;
  white-space: normal;
  height: 100%;
  align-content: flex-start;
  position: relative;
  cursor: pointer;
}

.carousel__item-overline,
.carousel__item-title {
  text-transform: uppercase;
  padding-right: spacing(9);
  width: 100%;
}

.carousel__item-overline {
  @include font-size-2;
}

.carousel__item-title {
  @include font-size-4;
  @include font-weight('bold');
}

.carousel__item-icon {
  margin-top: spacing(4);
  position: absolute;
  bottom: spacing(2);
  right: spacing(3);

  &.icon {
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
  }
}
</style>
