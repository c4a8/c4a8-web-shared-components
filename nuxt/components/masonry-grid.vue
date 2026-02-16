<template>
  <div class="masonry-grid" :class="{ [State.HAS_LOADING]: showLoadMore }">
    <div class="container">
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
