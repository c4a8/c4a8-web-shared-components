<template>
  <div>
    <div :class="classList" :style="styleVars" ref="group">
      <div v-for="(item, index) in displayedItems" :key="item?.id || index" class="masonry-item" ref="items">
        <slot :item="item" :index="index" />
      </div>
    </div>
    <div v-if="showLoadMore" class="masonry-grid__load-more mt-4 text-center">
      <button class="btn btn-primary" @click="loadMore">
        {{ loadMoreText }}
      </button>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'masonry-grid',
  data() {
    return {
      itemsChanged: false,
      displayedCount: this.initialItemsCount || null,
    };
  },
  computed: {
    classList() {
      return ['masonry-grid', 'utility-animation__group', 'vue-component'];
    },
    styleVars() {
      const sm = this.columns?.sm || 1;
      const md = this.columns?.md || sm;
      const lg = this.columns?.lg || md;
      const xl = this.columns?.xl || lg;
      const gap = this.gap || '1rem';
      return {
        '--masonry-columns-sm': sm,
        '--masonry-columns-md': md,
        '--masonry-columns-lg': lg,
        '--masonry-columns-xl': xl,
        '--masonry-gap': gap,
      };
    },
    displayedItems() {
      if (this.displayedCount === null || this.displayedCount >= this.items.length) {
        return this.items;
      }
      return this.items.slice(0, this.displayedCount);
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
  },
  updated() {
    if (!this.itemsChanged) return;
    this.itemsChanged = false;
    this.reinitUtilityAnimation();
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
      default: () => ({ sm: 1, md: 2, lg: 3, xl: 4 }),
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
      default: null,
    },
    loadMoreText: {
      type: String,
      default: 'Weitere Posts',
    },
  },
};
</script>
<style>
.masonry-grid {
  column-gap: var(--masonry-gap, 1rem);
  columns: var(--masonry-columns-sm, 1);
}
@media (min-width: 768px) {
  .masonry-grid {
    columns: var(--masonry-columns-md, 2);
  }
}
@media (min-width: 992px) {
  .masonry-grid {
    columns: var(--masonry-columns-lg, 3);
  }
}
@media (min-width: 1400px) {
  .masonry-grid {
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
}
</style>
