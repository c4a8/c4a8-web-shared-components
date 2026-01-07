<template>
  <div :class="classList" :style="styleVars" ref="group">
    <div
      v-for="(item, index) in items"
      :key="item?.id || index"
      class="masonry-item"
      ref="items"
    >
      <slot :item="item" :index="index" />
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
      const gap = this.gap || '1rem';
      return {
        '--masonry-columns-sm': sm,
        '--masonry-columns-md': md,
        '--masonry-columns-lg': lg,
        '--masonry-gap': gap,
      };
    },
  },
  watch: {
    items() {
      this.itemsChanged = true;
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
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Object,
      default: () => ({ sm: 1, md: 2, lg: 3 }),
    },
    gap: {
      type: String,
      default: '1rem',
    },
    observeOnScroll: {
      type: Boolean,
      default: true,
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
.masonry-item {
  break-inside: avoid;
  margin-bottom: var(--masonry-gap, 1rem);
  display: block;
}
</style>


