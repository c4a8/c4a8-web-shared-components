<template>
  <component :is="item.component" v-bind="item.data" v-for="(item, index) in enhancedList" :key="index" />
</template>

<script>
import BlogRecent from "./blog-recent.vue";
import Quotes from "./quotes.vue";
export default {
  components: {
    "blog-recent": BlogRecent,
    quotes: Quotes
  },
  tagName: "component-list",
  props: {
    list: {
      default: null,
      type: Array
    }
  },
  computed: {
    enhancedList() {
      if (!this.list?.length) return this.list;
      const enhancedList = [...this.list];
      const firstIndex = 0;
      const firstItem = enhancedList[firstIndex];
      if (firstItem && firstItem.data && !firstItem.data.spacing) {
        enhancedList[firstIndex] = {
          ...firstItem,
          data: {
            ...firstItem.data,
            spacing: "mt-8 mt-lg-10"
          }
        };
      }
      return enhancedList;
    }
  }
};
</script>
