<template>
  <div class="page-detail" :class="{ 'page-detail--has-back': hasBack }" ref="root">
    <div v-if="$slots.shape" class="page-detail__shape page-detail__animation-3" ref="shape" style="aaadisplay: none">
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
            v-model:end-point="endPoint"
            class="page-detail__intro"
            :sticky-offset-top="stickyOffsetTop"
            :sticky-offset-bottom="20"
            breakpoint="lg"
            :sticky-top-position="stickyTopPosition"
          >
            <back classes="page-detail__back page-detail__animation-3" />
            <div
              style="
                position: fixed;
                top: 100px;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 100;
                background-color: white;
                width: 250px;
                height: 300px;
              "
            >
              isAtEnd : {{ isAtEnd }}<br />
              stickyUnstuckOffsetTop: {{ stickyUnstuckOffsetTop }}<br />
              stickyTopPosition: {{ stickyTopPosition }}<br />
              endPoint: {{ endPoint }}<br />
              scrollY: {{ debugScrollY }}<br />
              innerHeight: {{ debugInnerHeight }}<br />
              top: {{ stickyOffsetTop + (endPoint - debugScrollY) }}<br />
            </div>

            <slot name="intro"></slot>
          </sticky-block>
          <div
            :style="{
              position: 'fixed',
              top: `${stickyOffsetTop + (endPoint - debugScrollY)}px`,
              left: '300px',
              zIndex: 100,
              backgroundColor: `${isAtEnd ? 'red' : 'blue'}`,
              width: '300px',
              height: '300px',
            }"
          ></div>
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
    <sticky-block-end
      v-model:is-at-end="isAtEnd"
      v-model:end-point="endPoint"
      :sticky-offset-top="stickyUnstuckOffsetTop"
      :sticky-offset-bottom="40"
      style="border: 2px solid red"
    />
  </div>
</template>

<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

import useAuthors from '../composables/useAuthors.js';

export default {
  name: 'page-detail',
  setup() {
    const { authors } = useAuthors();
    const isAtEnd = ref(false);
    const endPoint = ref(null);

    return {
      authors,
      isAtEnd,
      endPoint,
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
      stickyOffsetTop: 200,
      stickyUnstuckOffsetTop: 0,
      stickyTopPosition: null,
      debugScrollY: 0,
      debugInnerHeight: 0,
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
      return !!this.$refs.shape;
    },
  },
  methods: {
    showBackButton() {
      if (document.referrer.indexOf(document.location.host) !== -1) {
        this.hasBack = true;
      }
    },
    getDOMElement(selector) {
      return this.$refs.root?.querySelector(selector);
    },
    setStickyPosition() {
      if (!this.hasShape || !this.isInViewport() || !Tools.isUpperBreakpoint()) return;

      const heightOffset = Tools.isBelowBreakpoint('lg') ? 10 : -40;
      const badgeHeight = this.getDOMElement('.page-detail__intro-content .page-detail__badge')?.offsetHeight || 0;
      const detailsHeight = this.getDOMElement('.page-detail__intro-content .page-detail__details')?.offsetHeight || 0;
      const headlineHeight =
        this.getDOMElement('.page-detail__intro-content .page-detail__headline')?.offsetHeight || 0;

      this.stickyPosition = badgeHeight + detailsHeight + headlineHeight - heightOffset;
      // console.log('############ 🚀 ~ setStickyPosition ~ this.stickyPosition:', this.stickyPosition);
    },
    isInViewport() {
      return Tools.isInViewportPercent(this.$refs.root, this.percentageInViewport);
    },
    setShapePosition() {
      this.debugScrollY = window.scrollY;
      this.debugInnerHeight = window.innerHeight;

      if (!this.hasShape || !this.isInViewport()) return;
      if (!Tools.isUpperBreakpoint()) return this.resetShape();

      if (this.isStickyShapeEnd()) {
        // console.log('Sticky shape end reached');

        this.handleStickyShapeEnd();
      } else if (this.isSticky()) {
        // console.log('Sticky right now');

        this.$refs.shape.classList.add(State.STICKY);
        this.$refs.shape.style.top = -this.stickyPosition + 'px';
        // console.log('🚀 ~ setShapePosition ~ this.$refs.shape.style.top:', this.$refs.shape.style.top);

        // this.stickyTopPosition = -this.stickyPosition + 'px';
        this.isStickyEndReached = false;
      } else {
        // console.log('Not sticky right now');

        this.resetShape();
      }
    },
    handleStickyShapeEnd() {
      // if (this.isStickyEnd()) {
      let relativePostion = this.getRelativePosition();
      // console.log('🚀 ~ handleStickyShapeEnd ~ relativePostion:', relativePostion);

      // const difference = Math.abs(relativePostion);
      // console.log('🚀 ~ handleStickyShapeEnd ~ difference:', difference);

      // relativePostion = difference > window.innerHeight ? 0 : relativePostion;

      // if (difference === 0) {
      //   const stickyBlock = this.getStickyBlock();
      //   console.log('🚀 ~ getRelativePosition ~ stickyBlock:', stickyBlock);

      //   const stickyBlockTop = stickyBlock?.style.top.replace('px', '') || 0;

      //   this.stickyTopPosition = -stickyBlockTop + 'px';
      // } else {
      //   this.stickyTopPosition = null;
      // }

      this.$refs.shape.classList.add(State.STICKY);
      this.$refs.shape.style.top = -this.stickyPosition - this.getRelativePosition() + 'px';

      // this.stickyTopPosition = -this.stickyPosition - this.getRelativePosition() + 'px';

      // console.log('🚀 ~ handleStickyShapeEnd ~ this.$refs.shape.style.top:', this.$refs.shape.style.top);

      this.isStickyEndReached = true;
      // }
    },
    getStickyBlock() {
      return this.getDOMElement('.js-sticky-block');
    },
    getRelativePosition() {
      const stickyBlock = this.getStickyBlock();
      // console.log('🚀 ~ getRelativePosition ~ stickyBlock:', stickyBlock);

      // stickyBlock.style.position = '';

      const stickyBlockTop = stickyBlock?.style.top.replace('px', '') || 0;

      // stickyBlock.style.position = 'fixed';
      // console.log('🚀 ~ getRelativePosition ~ stickyBlockTop:', stickyBlockTop);
      // console.log('🚀 ~ getRelativePosition ~ this.stickyOffsetTop:', this.stickyOffsetTop);
      // console.log(
      //   '🚀 ~ getRelativePosition ~ stickyBlockTop',
      //   stickyBlockTop >= 0
      //     ? this.stickyOffsetTop - Math.abs(stickyBlockTop)
      //     : this.stickyOffsetTop - parseFloat(stickyBlockTop)
      // );
      return stickyBlockTop >= 0
        ? this.stickyOffsetTop - Math.abs(stickyBlockTop)
        : this.stickyOffsetTop - parseFloat(stickyBlockTop);
    },
    resetShape() {
      this.$refs.shape.classList.remove(State.STICKY);
      this.$refs.shape.style.top = '';

      this.stickyTopPosition = null;

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
    setStickyUnstuckOffsetTop() {
      this.stickyUnstuckOffsetTop = window.innerHeight;
      // console.log('🚀 ~ setStickyUnstuckOffsetTop ~ this.stickyUnstuckOffsetTop:', this.stickyUnstuckOffsetTop);
    },
    handleScroll() {
      this.setShapePosition();
    },
    handleResize() {
      this.setStickyPosition();
      this.setShapePosition();
      this.setStickyUnstuckOffsetTop();
    },
    // isStickyEnd() {
    //   const stickyBlock = this.getStickyBlock();

    //   return stickyBlock?.style.top !== this.stickyOffsetTop + 'px';
    // },
  },
  mounted() {
    this.showBackButton();
    this.setStickyPosition();
    this.setShapePosition();
    this.setStickyUnstuckOffsetTop();

    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('resize', this.handleResize);
  },
};
</script>
