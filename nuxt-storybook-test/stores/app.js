// TODO get store from shared-componnents

import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
    hero: {},
    page: { isLoaded: false },
    header: {
      isScrolled: false,
      isLight: false,
      isHovering: false,
      isProduct: false,
      isExpanded: false,
      isBlending: false,
      isUpdating: false,
      navigation: null,
      meta: null,
      contact: null,
      button: null,
      search: false,
      theme: null,
      showSecondaryNavigation: false,
    },
  }),
  getters: {
    getLoading: (state) => {
      return state.loading;
    },
    getHero: (state) => {
      return state.hero;
    },
    getPage: (state) => {
      return state.page;
    },
    getHeader: (state) => {
      return state.header;
    },
    // Header specific getters
    isHeaderScrolled: (state) => state.header.isScrolled,
    isHeaderLight: (state) => state.header.isLight,
    isHeaderHovering: (state) => state.header.isHovering,
    isHeaderProduct: (state) => state.header.isProduct,
    isHeaderExpanded: (state) => state.header.isExpanded,
    isHeaderBlending: (state) => state.header.isBlending,
    isHeaderUpdating: (state) => state.header.isUpdating,
    getHeaderNavigation: (state) => state.header.navigation,
    getHeaderMeta: (state) => state.header.meta,
    getHeaderContact: (state) => state.header.contact,
    getHeaderButton: (state) => state.header.button,
    getHeaderSearch: (state) => state.header.search,
    getHeaderTheme: (state) => state.header.theme,
    getHeaderSecondaryNavigation: (state) => state.header.showSecondaryNavigation,
    getPageIsLoaded: (state) => state.page.isLoaded,
  },
  actions: {
    setLoading(loading) {
      this.loading = loading;
    },
    setHero(hero) {
      this.hero = hero;
    },
    setPage(page) {
      this.page = page;
    },
    setHeader(header) {
      this.header = { ...this.header, ...header };
    },
    // Header specific actions
    setHeaderScrolled(isScrolled) {
      this.header.isScrolled = isScrolled;
    },
    setHeaderLight(isLight) {
      this.header.isLight = isLight;
    },
    setHeaderHovering(isHovering) {
      this.header.isHovering = isHovering;
    },
    setHeaderProduct(isProduct) {
      this.header.isProduct = isProduct;
    },
    setHeaderExpanded(isExpanded) {
      this.header.isExpanded = isExpanded;
    },
    setHeaderBlending(isBlending) {
      this.header.isBlending = isBlending;
    },
    setHeaderUpdating(isUpdating) {
      this.header.isUpdating = isUpdating;
    },
    setHeaderNavigation(navigation) {
      this.header.navigation = navigation;
    },
    setHeaderMeta(meta) {
      this.header.meta = meta;
    },
    setHeaderContact(contact) {
      this.header.contact = contact;
    },
    setHeaderButton(button) {
      this.header.button = button;
    },
    setHeaderSearch(search) {
      this.header.search = search;
    },
    setHeaderTheme(theme) {
      this.header.theme = theme;
    },
    setHeaderSecondaryNavigation(showSecondaryNavigation) {
      this.header.showSecondaryNavigation = showSecondaryNavigation;
    },
    resetHeader() {
      this.header = {
        isScrolled: false,
        isLight: false,
        isHovering: false,
        isProduct: false,
        isExpanded: false,
        isBlending: false,
        isUpdating: false,
        navigation: null,
        meta: null,
        contact: null,
        button: null,
        search: false,
        theme: null,
        showSecondaryNavigation: false,
      };
    },
    setPageIsLoaded(isLoaded) {
      this.page.isLoaded = isLoaded;
    },
  },
});
