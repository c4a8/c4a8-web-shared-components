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
<style>
.carousel {
  --color-carousel-background: rgba(255, 255, 255, 0);
  width: 100%;
  position: relative;
}
.carousel .carousel__item-overline,
.carousel .carousel__item-title {
  line-height: 1.15em;
}
.carousel.has-background:before, .carousel.has-background:after {
  content: "";
  position: absolute;
  width: 90px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  left: 0;
  background: linear-gradient(to right, var(--color-carousel-background) 0%, rgba(255, 255, 255, 0) 100%);
}
.carousel.has-background:after {
  right: 0;
  left: auto;
  top: 0;
  background: linear-gradient(to left, var(--color-carousel-background) 0%, rgba(255, 255, 255, 0) 100%);
}
@media (min-width: 992px) {
  .carousel.has-background:before, .carousel.has-background:after {
    width: 150px;
  }
}
.carousel.carousel--tile .carousel__row {
  animation-duration: 20s;
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
}
.carousel__row:hover {
  animation-play-state: paused;
}

.carousel__row-section {
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  flex-shrink: 0;
}
.carousel__row-section > * {
  display: inline-block;
  flex-shrink: 0;
}
.carousel__row-section > *:not(.carousel__item--tile) {
  padding: 0 1rem;
}
.carousel__row-section > *.carousel__item--tile {
  padding: 0 0.25rem;
  height: 100%;
}

.carousel__item-tile {
  background-color: var(--carousel-item-tile-color);
  color: var(--carousel-item-tile-text-color, var(--color-copy));
  padding: 1rem 0.75rem;
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
  padding-right: 2.25rem;
  width: 100%;
}

.carousel__item-overline {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .carousel__item-overline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .carousel__item-overline {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}

.carousel__item-title {
  font-size: 1.375rem;
  line-height: 1.6365em;
}
@media (min-width: 992px) {
  .carousel__item-title {
    font-size: 1.5625rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .carousel__item-title {
    font-size: 1.95313rem;
    line-height: 1.7em;
  }
}
.carousel__item-title {
  font-weight: bold;
}

.carousel__item-icon {
  margin-top: 1rem;
  position: absolute;
  bottom: 0.5rem;
  right: 0.75rem;
}
.carousel__item-icon.icon {
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
}
</style>
