import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogItems: [],
    blogView: 'tile-view',
  }),

  getters: {
    getBlogItems: (state) => state.blogItems,
    getBlogView: (state) => state.blogView,
  },

  actions: {
    setBlogItems(items) {
      this.blogItems = items;
    },
    setBlogView(view) {
      this.blogView = view;
    },
  },
});
