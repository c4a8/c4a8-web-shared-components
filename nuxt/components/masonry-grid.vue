<template>
  <div class="masonry-grid" :class="{ [State.HAS_LOADING]: showLoadMore }">
    <div class="container">
      <div class="row">
        <div class="col">
          <header class="masonry-grid__header">
            <headline v-if="headline" v-bind="headlineValue" />
            <div class="masonry-grid__socials">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener"
                class="masonry-grid__social-item custom"
                v-for="(social, index) in socials"
                :key="index"
              >
                <i :class="social.icon" class="fab"></i>
              </a>
            </div>
          </header>
          <div class="masonry-grid__clipper" :style="clipperStyle">
            <div class="masonry-grid__container utility-animation__group vue-component" :style="styleVars" ref="group">
              <div v-for="(item, index) in displayedItems" :key="item?.id || index" class="masonry-item" ref="items">
                <social-post-card v-bind="item" :index="index" :hasAnimation="true" />
              </div>
            </div>
          </div>
          <div v-if="showLoadMore" class="masonry-grid__load-more text-center">
            <button class="masonry-grid__load-more-button" @click="loadMore">
              {{ $t('loadMorePosts') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';
import FooterData from '../utils/data/footer-data.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'masonry-grid',
  data() {
    return {
      itemsChanged: false,
      displayedCount: this.initialItemsCount || null,
      State,
      observer: null,
      containerHeight: 0,
    };
  },

  computed: {
    headlineValue() {
      return {
        ...this.headline,
        level: this.headline.level || 'h2',
        classes: `masonry-grid__headline ${this.headline.classes}`,
      };
    },
    styleVars() {
      const sm = this.columns?.sm || 1;
      const md = this.columns?.md || sm;
      const lg = this.columns?.lg || md;
      const xl = this.columns?.xl || lg;
      const gap = this.gap;

      return {
        '--masonry-columns-sm': sm,
        '--masonry-columns-md': md,
        '--masonry-columns-lg': lg,
        '--masonry-columns-xl': xl,
        '--masonry-gap': gap,
      };
    },
    clipperStyle() {
      if (!this.showLoadMore || !this.containerHeight) return {};

      return {
        maxHeight: `${this.containerHeight * 0.85}px`,
        overflow: 'hidden',
      };
    },
    displayedItems() {
      if (this.displayedCount === null || this.displayedCount >= this.items.length) {
        return this.items;
      }

      return this.items.slice(0, this.displayedCount + this.itemsPerLoad);
    },
    showLoadMore() {
      return this.initialItemsCount !== null && this.displayedCount < this.items.length;
    },
  },
  watch: {
    items() {
      this.itemsChanged = true;
    },
    initialItemsCount(newVal) {
      if (newVal !== null) {
        this.displayedCount = newVal;
      }
    },
  },
  mounted() {
    this.reinitUtilityAnimation();

    if (process.client) {
      this.observer = new ResizeObserver((entries) => {
        if (!entries.length) return;
        this.containerHeight = entries[0].contentRect.height;
      });

      this.observer.observe(this.$refs.group);
    }
  },
  updated() {
    if (!this.itemsChanged) return;

    this.itemsChanged = false;
    this.reinitUtilityAnimation();
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    reinitUtilityAnimation() {
      if (!this.observeOnScroll) return;
      if (!this.$refs.items || this.$refs.items.length === 0) return;

      UtilityAnimation.instances = [];
      UtilityAnimation.init(Array.from(this.$refs.items));
      UtilityAnimation.addObserver();
    },
    loadMore() {
      if (this.itemsPerLoad) {
        this.displayedCount = Math.min(this.displayedCount + this.itemsPerLoad, this.items.length);
      } else {
        this.displayedCount = this.items.length;
      }
      this.$nextTick(() => {
        this.reinitUtilityAnimation();
      });
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Object,
      default: () => ({ sm: 1, md: 2, lg: 3, xl: 3 }),
    },
    gap: {
      type: String,
      default: '1rem',
    },
    observeOnScroll: {
      type: Boolean,
      default: true,
    },
    initialItemsCount: {
      type: Number,
      default: null,
    },
    itemsPerLoad: {
      type: Number,
      default: 6,
    },
    headline: {
      type: Object,
      default: null,
    },
    socials: {
      type: Array,
      default: () => FooterData.socials,
    },
  },
};
</script>
<style lang="scss">
.masonry-grid {
  --masonry-outer-spacing: #{spacing(20)};
  --masonry-more-color: var(--color-copy);
  --masonry-more-background: var(--color-copy-light);
  --masonry-background-color: var(--color-gk-light-grey);
  --masonry-shadow-height: #{spacing(16)};
  --masonry-overlap-offset: 15px;

  background-color: var(--masonry-background-color);
  padding-top: var(--masonry-outer-spacing);
  padding-bottom: var(--masonry-outer-spacing);

  @include media-breakpoint-up(md) {
    --masonry-overlap-offset: 20px;
  }
}

.masonry-grid__container {
  column-gap: var(--masonry-gap, 1rem);
  columns: var(--masonry-columns-sm, 1);
  overflow: hidden;
}

.masonry-grid__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: spacing(16);
  align-items: center;
}

.masonry-grid__socials {
  display: flex;
  gap: spacing(2);
  font-size: 1.5rem;

  > a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: var(--color-trout);

    &:hover {
      opacity: 0.7;
    }
  }
}

@include media-breakpoint-up(md) {
  .masonry-grid__container {
    columns: var(--masonry-columns-md, 2);
  }
}

@include media-breakpoint-up(lg) {
  .masonry-grid__container {
    columns: var(--masonry-columns-lg, 3);
  }
}

@include media-breakpoint-up(xxl) {
  .masonry-grid__container {
    columns: var(--masonry-columns-xl, 4);
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: var(--masonry-gap, 1rem);
  display: block;
}

.masonry-grid__load-more {
  break-inside: avoid;
  background-color: var(--masonry-background-color);
  padding: spacing(16) 0;
  position: relative;

  &::before {
    box-shadow: -1px -15px 20.6px 3px rgba(0, 0, 0, 0.1);
    height: 20px;
    overflow: hidden;
    pointer-events: none;
    z-index: 1;
    left: 0;
  }

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;

    right: 0;
    top: 0;
  }

  &::after {
    background-color: var(--masonry-background-color);
    height: calc(var(--masonry-shadow-height) - 1px);
    z-index: 2;
    left: calc(var(--masonry-overlap-offset) * -1);
    width: calc(100% + (var(--masonry-overlap-offset) * 2));
  }
}

.masonry-grid__load-more-button {
  border: 2px solid var(--masonry-more-color);
  color: var(--masonry-more-color);
  background-color: var(--masonry-more-background);
  text-align: center;
  padding: spacing(3);
  margin-top: spacing(6);
  align-self: center;
  border-radius: 0;
  width: 60%;
  font-weight: bold;

  &:hover {
    --masonry-more-color: var(--color-copy-light);
    --masonry-more-background: var(--color-copy);
  }
}

.masonry-grid__clipper {
  position: relative;
}
</style>
