<template>
  <div :class="classList" :style="style" ref="root">
    <div class="container">
      <div class="timeline__row row">
        <div class="timeline__col col">
          <template v-if="subline">
            <div class="timeline__header">
              <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
              <div class="timeline__subline" v-if="subline">{{ subline }}</div>
            </div>
          </template>
          <template v-else>
            <headline :text="headline?.text" :level="headline?.level" :classes="headlineClasses" />
          </template>

          <div class="timeline__content">
            <div class="timeline__line">
              <div class="timeline__line-start">
                <div class="timeline__line-corner">
                  <span></span>
                </div>
              </div>
              <div
                :class="getEntryContainerClasses(index)"
                v-for="(entry, index) in entries"
                :style="getEntryContainerStyle(index)"
                v-bind:key="index"
              >
                <div class="timeline__entry" :style="getEntryLineStyle(index)">
                  <div class="timeline__entry-inner">
                    <timeline-entry-inner-text :entry="entry" :simple="simpleValue" />
                    <div class="timeline__entry-inner-line">
                      <icon :icon="iconName" class="timeline__entry-inner-line-icon" v-if="simpleValue" />
                    </div>
                    <div class="timeline__entry-vertical-line" v-if="simpleValue"></div>
                  </div>
                </div>
                <div class="timeline__entry-line" :style="getEntryLineStyle(index)" ref="entry-line"></div>
                <div class="timeline__entry-spacer" :style="getEntryLineStyle(index)">
                  <div class="timeline__entry-inner">
                    <timeline-entry-inner-text :entry="entry" :simple="simpleValue" />
                    <div class="timeline__entry-inner-line">
                      <icon :icon="iconName" class="timeline__entry-inner-line-icon" v-if="simpleValue" />
                    </div>
                    <div class="timeline__entry-vertical-line" v-if="simpleValue"></div>
                  </div>
                </div>
              </div>
              <div class="timeline__line-end" :style="lineEndStyle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

const timelineEntryInnerText = {
  tagName: 'timeline-entry-inner-text',
  computed: {},
  template: `
    <div :class="['timeline__entry-inner-text', { 'timeline__entry-inner-text--simple': simple }]">
      <template v-if="entry.title">
        <div class="timeline__entry-title">{{ entry.title }}</div>
        <p class="timeline__entry-text">{{ entry.text }}</p>
      </template>
      <template v-else><span v-html="entry"></span></template>
    </div>
  `,
  props: {
    entry: Object,
    simple: Boolean,
  },
};

export default {
  tagName: 'timeline',
  components: {
    'timeline-entry-inner-text': timelineEntryInnerText,
  },
  computed: {
    classList() {
      return [
        'timeline',
        'has-background',
        'timeline--headline-sticky has-headline-sticky',
        this.isReady ? State.READY : '',
        this.expanded ? State.EXPANDED : '',
        this.spacing,
        this.simpleValue ? 'timeline--simple' : '',
        'vue-component',
      ];
    },
    copyColor() {
      return this.color ? this.color : 'var(--color-copy-light)';
    },
    backgroundColor() {
      return this.bgColor ? this.bgColor : 'var(--color-gk-dark-blue)';
    },
    style() {
      return `--color-timeline-background: ${this.backgroundColor}; --color-timeline-color: ${this.copyColor};`;
    },
    headlineClasses() {
      return `timeline__headline headline-sticky__target h2-font-size light ${
        this.headline?.classes ? this.headline.classes : ''
      }`;
    },
    lineEndStyle() {
      return `--timeline-line-position: ${this.entries?.length}`;
    },
    simpleValue() {
      return Tools.isTrue(this.simple);
    },
    iconName() {
      return 'strategy-split';
    },
  },
  mounted() {
    this.bindEvents();
    this.handleScroll();
  },
  data() {
    return {
      lastIndex: null,
      isReady: false,
      startDelay: 500,
      isVisible: false,
      percentageInViewport: 40,
      minPercentage: -10,
      maxPercentage: 100,
      entryContainerStates: [],
      entryContainerStyles: [],
    };
  },
  methods: {
    bindEvents() {
      document.addEventListener('scroll', this.handleScroll);
    },
    startAnimation() {
      setTimeout(() => {
        this.isReady = true;
      }, this.startDelay);
    },
    getEntryLineStyle(index) {
      return `--timeline-line-position: ${index}`;
    },
    handleScroll() {
      if (this.expanded) {
        this.isInViewport();
      } else {
        this.updateAnimation();
      }
    },
    updateAnimation() {
      const percentage = this.getScrollPercentage();

      if (percentage <= this.minPercentage) return this.setAnimationStart();
      if (percentage >= this.maxPercentage) return this.setAnimationEnd();

      if (!this.isReady) {
        this.startAnimation();
      }

      this.showEntryByPercent(percentage);
    },
    setAnimationStart() {
      this.isReady = false;
    },
    setAnimationEnd() {
      const fullPercentage = 0;

      for (let i = 0; i < this.entries.length; i++) {
        this.entryContainerStyles[i] = `${fullPercentage}`;
        this.entryContainerStates[i] = [State.SHOW, State.IS_FULL];
      }
    },
    showEntryByPercent(percentage) {
      const stepSize = this.maxPercentage / this.entries.length;

      for (let i = 0; i < this.entries.length; i++) {
        this.updateNextStep(i, percentage, stepSize);
      }
    },
    updateNextStep(index, percentage, stepSize) {
      this.entryContainerStates[index] = State.SHOW;

      const minPercentage = 0;
      const startPercentage = stepSize * index;
      const endPercentage = stepSize * (index + 1);

      let currentPercentage = 0;

      if (percentage >= startPercentage && percentage <= endPercentage) {
        const end = stepSize;
        const localPercentage = percentage - startPercentage;
        const showThreshold = 60;

        currentPercentage = this.maxPercentage - Math.ceil((localPercentage * 100) / end);

        if (currentPercentage < showThreshold) {
          this.entryContainerStates[index] = [State.SHOW, 'timeline__entry-container--visible'];
        }
      } else if (percentage > endPercentage) {
        currentPercentage = minPercentage;
        this.entryContainerStates[index] = [State.SHOW, State.IS_FULL];
      } else {
        currentPercentage = this.maxPercentage;
      }

      if (this.simpleValue) {
        if (currentPercentage < this.maxPercentage && currentPercentage > minPercentage) {
          currentPercentage = 1;
        } else {
          currentPercentage = 0;
        }
      }

      this.entryContainerStyles[index] = `${currentPercentage}`;
    },
    getEntryContainerClasses(index) {
      return ['timeline__entry-container', this.entryContainerStates[index]];
    },
    getEntryContainerStyle(index) {
      const minPercentage = 0;

      const percentage = this.entryContainerStyles[index]
        ? this.entryContainerStyles[index]
        : this.simpleValue
          ? minPercentage
          : this.maxPercentage;

      return `--timeline-entry-container-percentage: ${percentage}`;
    },
    getScrollPercentage() {
      const root = this.$refs['root'];

      if (!root) return;

      const height = root.getBoundingClientRect().height;
      const heightOffset = window.innerHeight / 3;

      let elementTop = Tools.getScrollTop(root) - heightOffset;

      if (elementTop < 0) {
        elementTop = 0;
      }

      const startPosition = window.scrollY - elementTop;
      const endPosition = height - heightOffset;

      return (startPosition * 100) / endPosition;
    },
    isInViewport() {
      if (this.isVisible) return;

      const root = this.$refs['root'];

      if (!root) return;

      const isInViewport = Tools.isInViewportPercent(root, this.percentageInViewport);

      if (!isInViewport) return;

      this.startAnimation();
    },
  },
  props: {
    headline: Object,
    bgColor: {
      default: null,
    },
    color: {
      default: null,
    },
    entries: Array,
    expanded: {
      default: null,
    },
    spacing: String,
    simple: {
      default: null,
    },
    subline: String,
  },
};
</script>
<style>
.timeline {
  --color-timeline-line: rgba(255, 255, 255, 0.4);
  --color-timeline-dot: var(--color-gk-light-blue);
  --timeline-line-size: 8px;
  --timeline-line-width: 100px;
  --timeline-line-width-lg: 200px;
  --timeline-line-corner-size: calc(2 * var(--timeline-line-size));
  --timeline-animation-step-1-duration: 0.4s;
  --timeline-animation-step-2-duration: 0.2s;
  --timeline-animation-step-3-duration: 0.45s;
  --timeline-animation-timing-function: linear;
  --timeline-animation-scroll-step-duration: 0.9s;
  --timeline-animation-simple-transition-duration: 0.4s;
  background-color: var(--color-timeline-background);
  color: var(--color-timeline-color);
}
.timeline.timeline--simple {
  --timeline-circle-size: 6rem;
}
.timeline.timeline--simple.timeline--headline-sticky .timeline__headline::after, .timeline.timeline--simple.timeline--headline-sticky .timeline__headline::before,
.timeline.timeline--simple .timeline__headline::after,
.timeline.timeline--simple .timeline__headline::before {
  display: none;
}
.timeline.timeline--simple .timeline__header .timeline__headline {
  height: auto;
}
.timeline.timeline--simple .timeline__headline.headline-sticky__target {
  position: inherit;
  top: auto;
}
.timeline.timeline--simple .timeline__entry-text {
  margin-bottom: 0;
}
.timeline.timeline--simple .timeline__entry-line {
  display: none;
}
.timeline.timeline--simple .timeline__headline {
  padding-bottom: 0;
}
.timeline.timeline--simple .timeline__content {
  overflow: visible;
}
.timeline.timeline--simple .timeline__entry-container {
  margin-top: 4rem;
}
.timeline.timeline--simple .timeline__entry-container + .timeline__entry-container {
  margin-top: 0;
}
.timeline.timeline--simple .timeline__entry-container:nth-child(2) .timeline__entry-inner {
  margin-top: 0;
}
.timeline.timeline--simple .timeline__entry-container[style*="--timeline-entry-container-percentage: 0"] .timeline__entry-inner-text.timeline__entry-inner-text--simple {
  color: var(--color-copy-lowlight);
}
.timeline.timeline--simple .timeline__entry-container[style*="--timeline-entry-container-percentage: 0"] .timeline__entry-inner-line {
  border-color: transparent;
}
.timeline.timeline--simple .timeline__entry-container[style*="--timeline-entry-container-percentage: 0"] .timeline__entry-inner-line::before {
  box-shadow: none;
}
.timeline.timeline--simple .timeline__entry-inner-line {
  background-color: transparent;
  height: var(--timeline-circle-size);
  width: var(--timeline-circle-size);
  display: flex;
  place-content: center;
  border: 2px solid var(--color-timeline-dot);
  border-radius: 100%;
  padding: 1.5rem;
  grid-area: circle;
  will-change: border-color;
  transition: border-color var(--timeline-animation-simple-transition-duration) linear;
}
.timeline.timeline--simple .timeline__entry-inner-line[style*="--timeline-entry-container-percentage: 1"] {
  border-color: var(--color-timeline-dot);
}
.timeline.timeline--simple .timeline__entry-inner-line::before {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 2px solid var(--color-timeline-line);
  left: 0;
  top: 0;
  background-color: transparent;
}
.timeline.timeline--simple .timeline__entry-inner-line .icon {
  width: 100%;
  height: 100%;
}
.timeline.timeline--simple .timeline__entry-inner {
  justify-content: normal;
  align-items: flex-start;
  margin-bottom: 0;
  margin-top: 0;
  display: inline-grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  grid-template-areas: "circle text" "line text";
}
.timeline.timeline--simple .timeline__entry {
  display: block;
  transform: none;
  opacity: 1;
  pointer-events: all;
}
.timeline.timeline--simple .timeline__line-end,
.timeline.timeline--simple .timeline__entry-spacer,
.timeline.timeline--simple .timeline__line-start {
  display: none;
}
.timeline.timeline--simple .timeline__entry-inner-text {
  padding-bottom: 0;
  grid-area: text;
}
@media (min-width: 992px) {
  .timeline.timeline--simple {
    --timeline-circle-size: 7rem;
  }
  .timeline.timeline--simple .timeline__entry-container {
    margin-top: 0;
  }
  .timeline.timeline--simple .timeline__row {
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
  }
  .timeline.timeline--simple .timeline__entry,
  .timeline.timeline--simple .timeline__entry-spacer {
    width: auto;
  }
  .timeline.timeline--simple .timeline__col {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .timeline.timeline--simple .timeline__line {
    transform: none;
  }
  .timeline.timeline--simple .timeline__entry-line,
  .timeline.timeline--simple .timeline__line-end {
    margin-left: 5rem;
  }
  .timeline.timeline--simple .timeline__content {
    padding-left: 5rem;
  }
  .timeline.timeline--simple .timeline__entry-inner:first-of-type {
    margin-top: 0;
  }
  .timeline.timeline--simple .timeline__headline {
    height: 50vh;
  }
  .timeline.timeline--simple .timeline__headline.headline-sticky__target {
    position: sticky;
    top: var(--scroll-top);
  }
  .timeline.timeline--simple .timeline__header .timeline__headline {
    height: auto;
  }
  .timeline.timeline--simple .timeline__header .timeline__headline.headline-sticky__target {
    position: inherit;
    top: auto;
  }
}
.timeline.timeline--headline-sticky .timeline__headline {
  --headline-sticky-bg-color: var(--color-timeline-background);
  display: block;
}
.timeline.timeline--headline-sticky .timeline__headline::after, .timeline.timeline--headline-sticky .timeline__headline::before {
  display: block;
}
.timeline .timeline__headline {
  color: inherit;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  display: block;
}
.timeline.is-ready.is-expanded .timeline__line-corner::after,
.timeline.is-ready.is-expanded .timeline__line-start::after {
  width: 0;
}
.timeline.is-ready.is-expanded .timeline__entry-line::after {
  height: 0;
}
.timeline.is-ready.is-expanded .timeline__line-end::before {
  height: 0;
}
.timeline.is-ready.is-expanded .timeline__entry-container .timeline__entry-spacer {
  opacity: 1;
  pointer-events: all;
}
@media (min-width: 992px) {
  .timeline.is-ready.is-expanded .timeline__entry-container:nth-child(even) .timeline__entry {
    opacity: 1;
    pointer-events: all;
  }
  .timeline.is-ready.is-expanded .timeline__entry-container:nth-child(even) .timeline__entry-spacer {
    opacity: 0;
    pointer-events: none;
  }
  .timeline.is-ready.is-expanded .timeline__entry-container:nth-child(odd) .timeline__entry-spacer {
    opacity: 1;
    pointer-events: all;
  }
}
.timeline:not(.is-expanded) .timeline__entry-container .timeline__entry-line::after {
  transition-duration: 0s;
  transition-delay: 0s;
}
.timeline:not(.is-expanded) .timeline__line-corner::after, .timeline:not(.is-expanded) .timeline__line-corner::before,
.timeline:not(.is-expanded) .timeline__line-start::after,
.timeline:not(.is-expanded) .timeline__line-start::before {
  transition-duration: 0s;
  transition-delay: 0s;
}
.timeline:not(.is-expanded) .timeline__line-start {
  opacity: 0;
  transition: opacity 0.3s var(--timeline-animation-timing-function);
}
.timeline:not(.is-expanded).is-ready .timeline__line-corner::after,
.timeline:not(.is-expanded).is-ready .timeline__line-start::after {
  width: 0;
}
.timeline:not(.is-expanded).is-ready .timeline__line-start {
  opacity: 1;
  transition-duration: 0s;
}
.timeline:not(.is-expanded).is-ready .timeline__entry-container.show .timeline__entry,
.timeline:not(.is-expanded).is-ready .timeline__entry-container.show .timeline__entry-spacer {
  transition-delay: 0s;
  transition-duration: 0.3s;
}
.timeline:not(.is-expanded).is-ready .timeline__entry-container.show .timeline__entry-line::after {
  height: calc(var(--timeline-entry-container-percentage) * 1%);
}
.timeline:not(.is-expanded).is-ready .timeline__entry-container.show + .timeline__line-end::before {
  transition-delay: 0s;
  transition-duration: 0s;
}
.timeline:not(.is-expanded).is-ready .timeline__entry-container.show.is-full + .timeline__line-end::before {
  height: 0;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: var(--timeline-animation-scroll-step-duration);
}
.timeline:not(.is-expanded).is-ready .timeline__entry-container.show.is-full .timeline__entry-spacer, .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.timeline__entry-container--visible .timeline__entry-spacer {
  opacity: 1;
  pointer-events: all;
}
@media (min-width: 992px) {
  .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.is-full:nth-child(even) .timeline__entry, .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.is-full:nth-child(odd) .timeline__entry-spacer, .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.timeline__entry-container--visible:nth-child(even) .timeline__entry, .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.timeline__entry-container--visible:nth-child(odd) .timeline__entry-spacer {
    opacity: 1;
    pointer-events: all;
  }
  .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.is-full:nth-child(even) .timeline__entry-spacer, .timeline:not(.is-expanded).is-ready .timeline__entry-container.show.timeline__entry-container--visible:nth-child(even) .timeline__entry-spacer {
    transition-delay: 0s;
    transition-duration: 0s;
    opacity: 0;
    pointer-events: none;
  }
}

.timeline__row {
  padding-top: 4rem;
  padding-bottom: 3.5rem;
}

.timeline__content {
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  overflow: hidden;
}

.timeline__line {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
}
@media (min-width: 768px) {
  .timeline__line {
    padding-left: 2rem;
  }
}
@media (min-width: 992px) {
  .timeline__line {
    align-items: center;
    transform: translateX(calc(-1 * var(--timeline-line-width-lg) / 2));
    padding-left: 0;
  }
}

.timeline__line-start {
  position: relative;
  display: flex;
  height: calc(2 * var(--timeline-line-size));
  overflow: hidden;
}
.timeline__line-start::after, .timeline__line-start::before {
  content: "";
  display: block;
  width: var(--timeline-line-width);
  height: var(--timeline-line-size);
}
@media (min-width: 992px) {
  .timeline__line-start::after, .timeline__line-start::before {
    width: var(--timeline-line-width-lg);
  }
}
.timeline__line-start::before {
  order: 2;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 20%, var(--color-timeline-line) 100%);
}
@media (min-width: 992px) {
  .timeline__line-start::before {
    order: 1;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 20%, var(--color-timeline-line) 100%);
  }
}
.timeline__line-start::after {
  position: absolute;
  background-color: var(--color-timeline-background);
  z-index: 2;
  transition: width var(--timeline-animation-step-1-duration) var(--timeline-animation-timing-function);
  left: var(--timeline-line-corner-size);
}
@media (min-width: 992px) {
  .timeline__line-start::after {
    right: var(--timeline-line-corner-size);
    left: auto;
  }
}

.timeline__line-end {
  position: relative;
}
.timeline__line-end::after {
  content: "";
  display: block;
  width: inherit;
  height: 7.5rem;
  background: linear-gradient(to bottom, var(--color-timeline-line) 20%, rgba(255, 255, 255, 0) 100%);
}
.timeline__line-end::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  bottom: 0;
  background-color: var(--color-timeline-background);
  transition: height var(--timeline-animation-step-3-duration) var(--timeline-animation-timing-function) calc(var(--timeline-animation-step-1-duration) + var(--timeline-animation-step-2-duration) + var(--timeline-animation-step-3-duration) * var(--timeline-line-position));
}

.timeline__line-corner {
  position: relative;
  overflow: hidden;
  width: var(--timeline-line-corner-size);
  height: var(--timeline-line-corner-size);
  order: 1;
}
.timeline__line-corner span {
  display: block;
  border-radius: 50%;
  border-color: var(--color-timeline-line);
  border-width: var(--timeline-line-size);
  border-style: solid;
  height: calc(4 * var(--timeline-line-size));
  width: calc(4 * var(--timeline-line-size));
  position: absolute;
}
@media (min-width: 992px) {
  .timeline__line-corner span {
    left: calc(-1 * 2 * var(--timeline-line-size));
  }
}
.timeline__line-corner::after {
  position: absolute;
  width: inherit;
  height: inherit;
  background-color: var(--color-timeline-background);
  content: "";
  display: block;
  transition: width var(--timeline-animation-step-2-duration) var(--timeline-animation-timing-function) var(--timeline-animation-step-1-duration);
}
@media (min-width: 992px) {
  .timeline__line-corner::after {
    right: 0;
  }
}
@media (min-width: 992px) {
  .timeline__line-corner {
    order: 2;
  }
}

.timeline__entry-line {
  position: relative;
  background-color: var(--color-timeline-line);
}
.timeline__entry-line::after {
  position: absolute;
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  bottom: 0;
  background-color: var(--color-timeline-background);
  transition: height var(--timeline-animation-step-3-duration) var(--timeline-animation-timing-function) calc(var(--timeline-animation-step-1-duration) + var(--timeline-animation-step-2-duration) + var(--timeline-animation-step-3-duration) * var(--timeline-line-position));
}

.timeline__entry-line,
.timeline__line-end {
  width: var(--timeline-line-size);
  flex-shrink: 0;
}
@media (min-width: 992px) {
  .timeline__entry-line,
  .timeline__line-end {
    margin-left: calc(var(--timeline-line-width-lg) + (var(--timeline-line-size)));
  }
}

.timeline__entry-container {
  display: flex;
  width: 100%;
}
.timeline__entry-container:nth-child(2) .timeline__entry-inner {
  margin-top: 10rem;
}

.timeline__entry {
  position: relative;
  pointer-events: none;
  display: none;
  justify-content: flex-end;
  transform: translateX(calc(var(--timeline-line-width-lg) + (var(--timeline-line-size))));
}
.timeline__entry .timeline__entry-inner-text {
  text-align: right;
}
@media (min-width: 992px) {
  .timeline__entry {
    display: flex;
  }
}

.timeline__entry-inner-line {
  position: relative;
  height: 2px;
  width: 4.5rem;
  background-color: var(--color-timeline-line);
}
.timeline__entry-inner-line::before {
  content: "";
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  background-color: var(--color-timeline-dot);
  border-radius: 50%;
  left: -0.5rem;
  top: -0.5rem;
  box-shadow: 0 0 10px 1px var(--color-timeline-dot);
}

.timeline__entry,
.timeline__entry-spacer {
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--timeline-animation-step-3-duration) var(--timeline-animation-timing-function) calc(var(--timeline-animation-step-1-duration) + var(--timeline-animation-step-2-duration) + var(--timeline-animation-step-3-duration) * var(--timeline-line-position));
}
@media (min-width: 992px) {
  .timeline__entry,
  .timeline__entry-spacer {
    width: calc(50% - var(--timeline-line-size) / 2);
  }
}

.timeline__entry-inner {
  width: 100%;
  display: inline-flex;
  margin: 1.25rem 0 10rem;
  align-items: center;
  justify-content: flex-end;
}

.timeline__entry-inner-text {
  border: 1px solid var(--color-timeline-line);
  border-radius: 4px;
  padding: 1rem 1.5rem;
  min-height: 5rem;
  display: flex;
  align-items: center;
  max-width: 80%;
}
.timeline__entry-inner-text {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .timeline__entry-inner-text {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .timeline__entry-inner-text {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
.timeline__entry-inner-text {
  font-weight: 100 !important;
}
.timeline__entry-inner-text strong {
  font-weight: inherit;
}
.timeline__entry-inner-text.timeline__entry-inner-text--simple {
  border: 0;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0;
  transition: color var(--timeline-animation-simple-transition-duration) linear;
  will-change: color;
}
@media (min-width: 992px) {
  .timeline__entry-inner-text {
    max-width: 17.5rem;
  }
}

.timeline__entry-spacer .timeline__entry-inner {
  justify-content: flex-start;
}
.timeline__entry-spacer .timeline__entry-inner-text {
  order: 2;
}
.timeline__entry-spacer .timeline__entry-inner-line {
  order: 1;
}
.timeline__entry-spacer .timeline__entry-inner-line::before {
  left: auto;
  right: -0.5rem;
}

.timeline__headline::after, .timeline__headline::before {
  height: calc(100% + 4rem);
}
.timeline__headline::before {
  top: calc(-4rem);
}
.timeline__headline::after {
  bottom: -4rem;
  height: 4rem;
}

.timeline__entry-title {
  font-size: 1.25rem;
  line-height: 1.6em;
  margin-bottom: 0.75rem;
}
@media (min-width: 992px) {
  .timeline__entry-title {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .timeline__entry-title {
    font-size: 1.5625rem;
    line-height: 1.6em;
  }
}

.timeline__entry-text {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .timeline__entry-text {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .timeline__entry-text {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}

@media (min-width: 992px) {
  .timeline__header {
    position: sticky;
    height: 50vh;
    top: var(--scroll-top);
  }
}

.timeline__subline {
  font-size: 1.25rem;
  line-height: 1.6em;
}
@media (min-width: 992px) {
  .timeline__subline {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .timeline__subline {
    font-size: 1.5625rem;
    line-height: 1.6em;
  }
}
.timeline__subline {
  font-weight: 100 !important;
}
.timeline__subline strong {
  font-weight: inherit;
}

.timeline__entry-vertical-line {
  height: 100%;
  grid-area: line;
  margin: -1px 0 -1px calc(var(--timeline-circle-size) / 2);
}
.timeline__entry-vertical-line::after {
  content: "";
  display: block;
  width: 3px;
  opacity: 1;
  height: 10rem;
  background-color: var(--color-timeline-line);
  border-radius: 4px;
}
</style>
