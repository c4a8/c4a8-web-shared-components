<template>
  <div :class="classList" :style="style">
    <wrapper class="content-scroller__wrapper">
      <div class="content-scroller__row">
        <div class="content-scroller__grid col">
          <div class="content-scroller__content-wrapper">
            <div class="content-scroller__content">
              <div class="content-scroller__header">
                <headline v-bind="headlineValue" />
                <p v-if="subline" :class="['content-scroller__subline', sublineClasses]">{{ subline }}</p>
              </div>
            </div>
          </div>
          <div class="content-scroller__blocks">
            <div class="content-scroller__blocks-placeholder" ref="placeholder">
              <div class="content-scroller__blocks-frame">
                <section
                  :class="['content-scroller__block', { 'is-left': block.isLeft }]"
                  v-for="(block, index) in blocksValue"
                  :key="index"
                  ref="block"
                  :style="calcBlockStyle(index)"
                >
                  <main>
                    <div class="content-scroller__block-space">
                      <headline
                        v-if="block.headline"
                        v-bind="block.headline"
                        :level="block.headline.level || 'h3'"
                        classes="content-scroller__block-headline"
                      />
                      <p class="content-scroller__block-content">{{ block.content }}</p>
                    </div>
                  </main>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </wrapper>
    <div class="content-scroller__background"></div>
  </div>
</template>

<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'content-scroller',
  data() {
    return {
      blockScrollPercentage: [],
      scrollDistancePercentage: 0,
      minHeight: 0,
      blockCount: 0,
      isScrolledUpOut: false,
      isScrolledDownOut: false,
    };
  },
  computed: {
    classList() {
      return [
        'content-scroller vue-component',
        this.overlappingSizeValue,
        this.skin ? `content-scroller--${this.skin}` : '',
      ];
    },

    blocksValue() {
      return Tools.getJSON(this.blocks);
    },
    headlineValue() {
      const headline = Tools.getJSON(this.headline);

      return {
        ...headline,
        level: headline.level || 'h2',
        classes: `content-scroller__headline ${headline.classes || 'h3-font-size'}`,
      };
    },

    overlappingSizeValue() {
      return this.overlappingSize || this.skin || 'mt-md-n10';
    },
    style() {
      return {
        '--content-scroller-min-height': `${this.minHeight}px`,
      };
    },
  },
  props: {
    headline: {
      default: null,
    },
    subline: {
      type: String,
      default: '',
    },
    sublineClasses: {
      type: String,
      default: null,
    },
    blocks: Array,
    overlappingSize: String,
    skin: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.calcBlockCount();

    this.$nextTick(() => {
      this.handleResize();
    });

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleScroll() {
      this.calcScrollDistancePercentage();
      this.updateBlocks();
    },
    handleResize() {
      this.calcMinHeight();
      this.handleScroll();
    },
    resetIsScrolledUpOut() {
      const blocks = this.$refs['block'];

      if (!blocks) return;

      blocks.forEach((_, index) => {
        this.setBlockMinPercentage(index);
      });

      this.isScrolledUpOut = true;
    },
    resetIsScrolledDownOut() {
      const blocks = this.$refs['block'];

      if (!blocks) return;

      blocks.forEach((_, index) => {
        this.setBlockMaxPercentage(index);
      });

      this.isScrolledDownOut = true;
    },
    setBlockMaxPercentage(index) {
      const maxBlockScrollPercentage = 100;

      this.blockScrollPercentage[index] = maxBlockScrollPercentage;
    },
    setBlockMinPercentage(index) {
      const minBlockScrollPercentage = 0;

      this.blockScrollPercentage[index] = minBlockScrollPercentage;
    },
    updateBlocks() {
      const minPercentage = 0;
      const maxPercentage = 100;

      if (!this.isScrolledUpOut && this.scrollDistancePercentage <= minPercentage) return this.resetIsScrolledUpOut();

      if (!this.isScrolledDownOut && this.scrollDistancePercentage >= maxPercentage)
        return this.resetIsScrolledDownOut();

      if (this.scrollDistancePercentage <= minPercentage || this.scrollDistancePercentage >= maxPercentage) return;

      this.isScrolledUpOut = false;
      this.isScrolledDownOut = false;

      const scrollDistanceStep = 100 / this.blockCount;
      const blocks = this.$refs['block'];

      if (!blocks) return;

      blocks.forEach((_, index) => {
        const blockStartPercentage = index * scrollDistanceStep;
        const blockEndPercentage = (index + 1) * scrollDistanceStep;

        if (
          this.scrollDistancePercentage >= blockStartPercentage &&
          this.scrollDistancePercentage <= blockEndPercentage
        ) {
          let blockScrollPercentage =
            ((this.scrollDistancePercentage - blockStartPercentage) / scrollDistanceStep) * 100;

          this.blockScrollPercentage[index] = blockScrollPercentage;
        } else if (this.scrollDistancePercentage < blockStartPercentage) {
          this.setBlockMinPercentage(index);
        } else if (this.scrollDistancePercentage > blockEndPercentage) {
          this.setBlockMaxPercentage(index);
        }
      });
    },
    getViewportHeight() {
      return window.innerHeight;
    },
    calcScrollDistancePercentage() {
      const root = this.$el;
      const scrollPosition = window.scrollY;
      const componentTop = root.getBoundingClientRect().top + window.scrollY;
      const componentHeight = root.offsetHeight;
      const componentHeightHalf = componentHeight / 2;

      let scrollDistancePercentage = 0;

      if (scrollPosition >= componentTop) {
        const scrolledPastComponent = scrollPosition - componentTop;

        scrollDistancePercentage = (scrolledPastComponent / componentHeightHalf) * 100;
      }

      this.scrollDistancePercentage = scrollDistancePercentage;
    },
    calcBlockCount() {
      const blockCount = this.blocks.length;

      if (!blockCount) return;

      this.blockCount = blockCount;
    },
    calcBlockStyle(index) {
      return [
        {
          '--content-scroller-block-scroll-percentage': this.blockScrollPercentage[index],
        },
      ];
    },
    calcMinHeight() {
      const placeholder = this.$refs['placeholder'];

      if (!placeholder) return;

      this.minHeight = placeholder.offsetHeight;
    },
  },
};
</script>
<style>
.content-scroller {
  z-index: 110;
  --content-scroller-spacing: 3.75rem;
  --content-scroller-spacing-small: 2.5rem;
  --content-scroller-background: var(--color-surface-background);
  --content-scroller-top-offset: 20vh;
  --content-scroller-block-offset-xs: 40vh;
  --content-scroller-bottom-spacer: 38vh;
  --content-scroller-content-background: var(--color-white);
  position: relative;
  padding-bottom: var(--content-scroller-bottom-spacer);
  background-color: var(--content-scroller-background);
}
.content-scroller .content-scroller__block-headline {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .content-scroller .content-scroller__block-headline {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .content-scroller .content-scroller__block-headline {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.content-scroller .content-scroller__block-headline {
  font-weight: bold !important;
}
.content-scroller .content-scroller__block-content {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .content-scroller .content-scroller__block-content {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .content-scroller .content-scroller__block-content {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.content-scroller .content-scroller__block-content {
  font-weight: 100 !important;
}
.content-scroller .content-scroller__block-content strong {
  font-weight: inherit;
}
.content-scroller .content-scroller__block-content {
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .content-scroller {
    border-top: 1px solid transparent;
    padding-bottom: 0;
    background-color: transparent;
  }
}

.content-scroller__grid {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  position: relative;
}
@media (min-width: 768px) {
  .content-scroller__grid {
    min-height: calc(200vh + 30px);
    margin-top: var(--content-scroller-spacing);
    grid-template-columns: repeat(2, 1fr);
  }
}

.content-scroller__content {
  margin-top: calc(var(--content-scroller-spacing) * 2);
  position: sticky;
  top: var(--content-scroller-top-offset);
  height: 25vh;
}
@media (min-width: 768px) {
  .content-scroller__content {
    height: max(100vh - var(--content-scroller-top-offset), var(--content-scroller-min-height));
  }
}

.content-scroller__content-wrapper {
  top: 0;
  position: relative;
  display: flex;
  align-self: start;
  justify-content: center;
  align-items: flex-start;
  height: calc(var(--content-scroller-min-height) + 31.75vh);
}
.content-scroller__content-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background-color: var(--content-scroller-content-background);
  z-index: -1;
  grid-column: 1/-1;
}
@media (min-width: 768px) {
  .content-scroller__content-wrapper {
    height: 100%;
    padding: var(--content-scroller-spacing) calc(var(--content-scroller-spacing) * 2) 0 0;
  }
}

.content-scroller__blocks {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 200vh;
  top: 70vh;
}
@media (min-width: 768px) {
  .content-scroller__blocks {
    padding-left: var(--content-scroller-spacing);
    padding-top: 0;
    position: relative;
    min-height: auto;
    top: auto;
  }
}

.content-scroller__blocks-frame {
  position: relative;
}
@media (min-width: 768px) {
  .content-scroller__blocks-frame {
    top: calc(-1 * var(--content-scroller-spacing));
    margin-top: calc(var(--content-scroller-spacing) * 3);
  }
}

.content-scroller__block-space {
  padding-top: var(--content-scroller-spacing-small);
  padding-bottom: var(--content-scroller-spacing-small);
  height: 50vh;
  position: relative;
}
.content-scroller__block-space::after, .content-scroller__block-space::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  background-color: var(--content-scroller-background);
  z-index: -1;
  grid-column: 1/-1;
}
.content-scroller__block-space::before {
  height: 100%;
}
.content-scroller__block-space::after {
  height: 1px;
  background-color: var(--color-primary-accent);
}
@media (min-width: 768px) {
  .content-scroller__block-space {
    height: auto;
    padding-top: 0;
    border-bottom: 1px solid var(--color-primary-accent);
  }
  .content-scroller__block-space::after, .content-scroller__block-space::before {
    display: none;
  }
}

.content-scroller__block {
  opacity: var(--content-scroller-block-scroll-opacity);
  width: 100%;
  will-change: transform, opacity;
  position: sticky;
  background-color: var(--content-scroller-background);
  top: 50vh;
}
@media (min-width: 768px) {
  .content-scroller__block {
    --content-scroller-block-start-position: 10rem;
    --content-scroller-block-position: calc(
      var(--content-scroller-block-start-position) -
        (var(--content-scroller-block-start-position) * (var(--content-scroller-block-scroll-percentage) / 100))
    );
    --content-scroller-block-scroll-opacity: calc(var(--content-scroller-block-scroll-percentage) / 100);
    margin-bottom: calc(var(--content-scroller-spacing-small));
    transform: translate3d(0px, var(--content-scroller-block-position), 0px);
    position: initial;
    background-color: transparent;
    min-height: none;
    height: auto;
  }
  .content-scroller__block:last-of-type {
    margin-bottom: 0;
  }
  .content-scroller__block:last-of-type .content-scroller__block-space {
    border-bottom: 0;
    padding-bottom: 0;
  }
}

.content-scroller__background {
  background-color: var(--content-scroller-background);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: calc(50vw - 2 * (15px));
  height: 100%;
  z-index: -1;
  display: none;
}
@media (min-width: 768px) {
  .content-scroller__background {
    display: block;
  }
}

.content-scroller__blocks-placeholder {
  position: sticky;
  top: auto;
  bottom: 30vh;
}
@media (min-width: 768px) {
  .content-scroller__blocks-placeholder {
    margin-top: calc(var(--content-scroller-spacing) * 3);
    top: calc(var(--content-scroller-top-offset));
    min-height: calc(100vh - var(--content-scroller-top-offset));
    bottom: auto;
  }
}
</style>
