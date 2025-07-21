<template>
  <div :class="classList" ref="group">
    <template v-for="(item, index) in items" :key="index">
      <div :class="columnClassList">
        <card
          @card-tag-clicked="handleCardTagClicked"
          v-bind="item"
          :blogtitlepic="blogImgUrl(getBlogTitlepic(item))"
          :date="item.moment ? item.moment : item.date"
          :hasAnimation="true"
          :index="index"
          :data-authors="dataAuthors"
          :row="isRow"
          ref="items"
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
      return ['grid-list row mb-3 utility-animation__group vue-component'];
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
  created() {},
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
        // delay for view to be ready for the outside view manipulation
        UtilityAnimation.resetGroup(this.$refs.group);
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
  },
};
</script>
