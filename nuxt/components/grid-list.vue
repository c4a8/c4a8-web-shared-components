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
<style lang="scss">
.grid-list {
  &.row {
    margin: 0 calc(-1 * (#{$grid-gutter-width} / 2));
  }
}

// Product cards side by side (tile view): the links of one row share one
// line, also when a link wraps. From sm the list is a grid; every column
// takes three of its rows (image, points, link) and hands them down to its
// card and the card's body (subgrid), so each row is as tall as the
// tallest part beside it. One card per row (below sm) looks as before;
// without subgrid the links stay at the foot of their cards.
@supports (grid-template-rows: subgrid) {
  @include media-breakpoint-up(sm) {
    .grid-list--products.row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));

      // minmax(0, 1fr): a single column that does not grow with wide content
      > * {
        display: grid;
        grid-row: span 3;
        grid-template-rows: subgrid;
        grid-template-columns: minmax(0, 1fr);
        max-width: none;
      }

      .card--products {
        display: grid;
        grid-row: span 3;
        grid-template-rows: subgrid;
        grid-template-columns: minmax(0, 1fr);
      }

      .card--products .card__body {
        display: grid !important; // over the body's d-flex
        grid-row: 2 / span 2;
        grid-template-rows: subgrid;
        grid-template-columns: minmax(0, 1fr);
      }

      .card--products .card__link {
        margin-top: 0 !important; // over mt-auto, which would pin it to the foot again
      }
    }
  }

  @include media-breakpoint-up(lg) {
    .grid-list--products.row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
</style>
