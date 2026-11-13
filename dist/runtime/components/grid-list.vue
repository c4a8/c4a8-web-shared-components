<template>
  <div :class="classList" ref="group">
    <template v-for="(item, index) in items" :key="index">
      <div :class="columnClassList">
        <card
          @card-tag-clicked="handleCardTagClicked"
          v-bind="item"
          :blogtitlepic="blogImgUrl(getBlogTitlepic(item)) ? blogImgUrl(getBlogTitlepic(item)) : item.blogtitlepic"
          :date="item.moment ? item.moment : item.date"
          :hasAnimation="true"
          :index="index"
          :data-authors="dataAuthors"
          :row="isRow"
          ref="items"
          :has-no-aspect-ratio="hasNoAspectRatio"
          :logo="item.logo"
        />
      </div>
    </template>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';
import Events from '../utils/events.js';

export default {
  tagName: 'grid-list',
  computed: {
    classList() {
      return [
        'grid-list row mb-3 utility-animation__group vue-component',
        this.hasProductTiles ? 'grid-list--products' : '',
      ];
    },
    hasProductTiles() {
      return this.view === 'tile-view' && this.items?.some((item) => item.product);
    },
    columnClassList() {
      return [this.view === 'tile-view' ? 'col-sm-6 col-lg-4' : 'col-sm-6 col-lg-12', 'mb-3 mb-sm-8'];
    },
    isList() {
      return this.view === 'list-view';
    },
    isRow() {
      return this.isList ? true : false;
    },
  },
  watch: {
    view() {
      this.resetUtilityAnimation();
    },
    items() {
      this.itemsChanged = true;
    },
  },
  updated() {
    if (!this.itemsChanged) return;
    this.itemsChanged = false;

    this.reinitUtilityAnimation();
  },
  methods: {
    getBlogTitlepic(item) {
      return item.blogtitlepic || item.meta?.blogtitlepic;
    },
    resetUtilityAnimation() {
      setTimeout(() => {
        if (this.$refs?.items?.length !== UtilityAnimation.instances.length) {
          this.reinitUtilityAnimation();
        } else {
          // delay for view to be ready for the outside view manipulation
          UtilityAnimation.resetGroup(this.$refs.group);
        }
      }, 100);
    },
    reinitUtilityAnimation() {
      if (!this.$refs.items || !this.$refs.items.length === 0) return;

      UtilityAnimation.instances = [];
      UtilityAnimation.init(Array.from(this.$refs.items));
      UtilityAnimation.addObserver();
    },
    blogImgUrl(url) {
      const blogPath = 'blog/heads/';

      return !url?.includes(blogPath) ? `${blogPath}${url}` : url;
    },
    handleCardTagClicked(event) {
      this.$emit(Events.CARD_TAG_CLICKED, event);
    },
  },
  props: {
    items: Array,
    view: String,
    dataAuthors: Object,
    hasNoAspectRatio: Boolean,
  },
};
</script>
<style>
.grid-list.row {
  margin: 0 calc(-1 * 30px / 2);
}

@supports (grid-template-rows: subgrid) {
  @media (min-width: 576px) {
    .grid-list--products.row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .grid-list--products.row > * {
      display: grid;
      grid-row: span 3;
      grid-template-rows: subgrid;
      grid-template-columns: minmax(0, 1fr);
      max-width: none;
    }
    .grid-list--products.row .card--products {
      display: grid;
      grid-row: span 3;
      grid-template-rows: subgrid;
      grid-template-columns: minmax(0, 1fr);
    }
    .grid-list--products.row .card--products .card__body {
      display: grid !important;
      grid-row: 2/span 2;
      grid-template-rows: subgrid;
      grid-template-columns: minmax(0, 1fr);
    }
    .grid-list--products.row .card--products .card__link {
      margin-top: 0 !important;
    }
  }
  @media (min-width: 992px) {
    .grid-list--products.row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
