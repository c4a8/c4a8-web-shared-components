<template>
  <div class="page-detail" :class="{ 'page-detail--has-back': hasBack }" ref="root">
    <div v-if="$slots.shape" class="page-detail__shape page-detail__animation-3" ref="shape">
      <slot name="shape"></slot>
      <div class="page-detail__shape-corner">
        <div class="page-detail__shape-corner-desktop">
          <svg-shape :color="detailShapeColor" :height="30" />
        </div>
        <div class="page-detail__shape-corner-mobile">
          <svg-shape :color="detailShapeColor" :height="15" />
        </div>
      </div>
    </div>
    <div class="page-detail__container container">
      <div class="page-detail__start row">
        <div class="page-detail__sticky-start col-md-11 col-lg-5">
          <sticky-block
            v-model:is-at-end="isAtEnd"
            class="page-detail__intro"
            :sticky-offset-top="200"
            :sticky-offset-bottom="20"
            breakpoint="lg"
          >
            <div class="page-detail__back page-detail__animation-3 back back--animated">
              <icon icon="arrow" direction="left" :hover="true" :circle="true" />
            </div>
            <slot name="intro"></slot>
          </sticky-block>
        </div>
        <div class="page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
          <div class="page-detail__description has-no-border richtext">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
      <!-- <div class="page-detail__intro" ref="intro">
        <div class="page-detail__intro-content" ref="introContent">
          <div class="page-detail__badge" ref="badge"></div>
          <div class="page-detail__headline" ref="headline"></div>
          <div class="page-detail__details" ref="details"></div>
        </div>
      </div>

      <div class="page-detail__description"></div>
      <div class="page-detail__cta">
        <div class="cta" ref="cta"></div>
      </div> -->
    </div>
    <sticky-block-end v-model:is-at-end="isAtEnd" :sticky-offset-top="800" :sticky-offset-bottom="20" />
  </div>
</template>

<script>
import State from '../utils/state.js';
// import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

import useAuthors from '../composables/useAuthors.js';

export default {
  name: 'page-detail',
  setup() {
    const { authors } = useAuthors();
    const isAtEnd = ref(false);

    return {
      authors,
      isAtEnd,
    };
  },
  data() {
    return {
      hasBack: false,
      stickyPosition: 0,
      isStickyEndReached: false,
      hsStickyBlockOptions: null,
      loadingDelay: 300,
      percentageInViewport: 1,
    };
  },
  props: {
    detailColor: {
      type: String,
    },
    detailShapeColor: {
      type: String,
    },
  },
  computed: {
    hasShape() {
      return true;
      // return !!this.$refs.shape;
    },
  },
  methods: {
    showBackButton() {
      if (document.referrer.indexOf(document.location.host) !== -1) {
        this.hasBack = true;
      }
    },
    setStickyPosition() {
      if (!this.hasShape || !this.isInViewport() || !Tools.isUpperBreakpoint()) return;

      const heightOffset = Tools.isBelowBreakpoint('lg') ? 10 : -40;
      const badgeHeight = this.$refs.badge?.offsetHeight || 0;
      const detailsHeight = this.$refs.details?.offsetHeight || 0;
      const headlineHeight = this.$refs.headline?.offsetHeight || 0;

      this.stickyPosition = badgeHeight + detailsHeight + headlineHeight - heightOffset;
    },
    isInViewport() {
      return Tools.isInViewportPercent(this.$refs.root, this.percentageInViewport);
    },
    setShapePosition() {
      if (!this.hasShape || !this.isInViewport()) return;
      if (!Tools.isUpperBreakpoint()) return this.resetShape();

      if (this.isStickyShapeEnd()) {
        this.handleStickyShapeEnd();
      } else if (this.isSticky()) {
        this.$refs.shape.classList.add(State.STICKY);
        this.$refs.shape.style.top = -this.stickyPosition + 'px';
      } else {
        this.resetShape();
      }
    },
    handleStickyShapeEnd() {
      if (this.isStickyEnd()) {
        this.$refs.shape.classList.add(State.STICKY);
        this.$refs.shape.style.top = -this.stickyPosition - this.getRelativePosition() + 'px';
      }
    },
    getRelativePosition() {
      const introTop = this.$refs.intro?.style.top.replace('px', '') || 0;
      return introTop >= 0
        ? this.getStickyOffsetTop() - Math.abs(introTop)
        : this.getStickyOffsetTop() - parseFloat(introTop);
    },
    resetShape() {
      this.$refs.shape.classList.remove(State.STICKY);
      this.$refs.shape.style.top = '';
      this.isStickyEndReached = false;
    },
    isSticky() {
      return window.scrollY > this.stickyPosition;
    },
    isStickyShapeEnd() {
      return this.$refs.root.getBoundingClientRect().bottom <= window.innerHeight;
    },
    getHsStickyBlockOptions() {
      if (this.hsStickyBlockOptions) return this.hsStickyBlockOptions;

      let options = this.$refs.intro?.dataset.hsStickyBlockOptions;

      if (options) {
        options = JSON.parse(options);
      }

      this.hsStickyBlockOptions = options;
      return options;
    },
    getStickyOffsetTop() {
      return this.getHsStickyBlockOptions()?.stickyOffsetTop || 0;
    },
    isStickyEnd() {
      return this.$refs.intro?.style.top !== this.getStickyOffsetTop() + 'px';
    },
    handleScroll() {
      this.setShapePosition();
    },
    handleResize() {
      this.setStickyPosition();
      this.setShapePosition();
    },
  },
  mounted() {
    this.showBackButton();
    this.setStickyPosition();
    this.setShapePosition();

    document.addEventListener(Events.SCROLL_UPDATE, this.handleScroll);
    document.addEventListener(Events.WINDOW_RESIZE, this.handleResize);
  },
  beforeUnmount() {
    document.removeEventListener(Events.SCROLL_UPDATE, this.handleScroll);
    document.removeEventListener(Events.WINDOW_RESIZE, this.handleResize);
  },
};
</script>
