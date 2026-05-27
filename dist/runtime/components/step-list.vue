<template>
  <div
    ref="root"
    class="step-list utility-animation"
    :class="[sticky ? 'is-sticky-scroller' : '', variant ? 'step-list--' + variant : '']"
    :style="
      !variant
        ? {
            '--step-list-background': background,
            '--step-list-color': color,
          }
        : null
    "
  >
    <div class="container">
      <div v-if="headline" class="step-list__header row fade-in-bottom" data-utility-animation-step="1">
        <div class="col" :class="!variant ? 'col-lg-8' : ''">
          <headline
            :text="headline.text"
            :level="headline.level"
            :classes="headline.classes + ' step-list__headline'"
          />
          <div class="step-list__subline font-size-2">
            {{ subline }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="step-list__list">
            <template v-for="(element, index) in list" :key="index">
              <li
                class="step-list__list-element font-size-2 fade-in-bottom"
                data-utility-animation-step="1"
                :style="`--utility-animation-index: ${index + 1};
                color: ${accentColor}`"
              >
                <div
                  class="step-list__counter"
                  :class="[
                    element.step || element.img ? 'step-list__counter--manual' : '',
                    element.overlapping ? 'step-list__counter--overlapping' : '',
                  ]"
                  :data-content="element.step || ''"
                >
                  <div v-if="element.img" class="step-list__counter-icon">
                    <img-filter
                      v-if="element.tint"
                      :img="element.img"
                      :cloudinary="element.cloudinary"
                      :alt="element.alt"
                    />
                    <v-img v-else :src="element.img" :alt="element.alt" />
                  </div>
                </div>
                <div class="step-list__title step-list__title--no-small">
                  {{ element.title }}
                </div>
                <div class="step-list__content font-size-1" :class="!variant ? 'light' : ''">
                  <div class="step-list__title step-list__title--no-default">
                    {{ element.title }}
                  </div>
                  <div v-html="element.content" />
                  <cta
                    v-if="element.ctaText"
                    :text="element.ctaText"
                    :href="element.ctaHref"
                    :link="element.link"
                    :target="element.target"
                    :type="element.type"
                  />
                </div>
              </li>
              <li
                v-if="index < list.length - 1"
                class="step-list__icon fade-in-bottom"
                data-utility-animation-step="1"
                :style="`--utility-animation-index: ${index + 2}`"
              >
                <icon icon="arrow-narrow" :color="accentColor || 'var(--color-step-list-highlight)'" />
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'step-list',
  props: {
    background: {
      type: String,
      default: 'var(--color-primary-accent)',
    },
    color: {
      type: String,
      default: 'var(--color-copy-light)',
    },
    accentColor: String,
    accentLightText: {
      type: Boolean,
      default: false,
    },
    headline: {
      type: Object,
      default: null,
    },
    subline: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      default: null,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
    if (this.accentColor) {
      this.$refs.root.style.setProperty('--color-step-list-highlight', this.accentColor);
    }
    this.$refs.root.style.setProperty(
      '--color-step-list-highlight-copy',
      this.accentLightText ? 'var(--color-copy-light)' : 'var(--color-copy)'
    );
  },
  methods: {
    animationIndex(index, isIcon = false) {
      return index * 2 + (isIcon ? 2 : 1);
    },
  },
};
</script>
<style>
.step-list {
  padding: 6rem 0;
  background-color: var(--step-list-background);
  color: var(--step-list-color);
}
.step-list [data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 200ms);
}
.step-list [data-utility-animation-step].is-starting.step-list__header {
  animation-delay: calc(var(--utility-animation-index) * 100ms);
}
.step-list:not(.step-list--small) .step-list__counter {
  font-size: 1.625rem;
  line-height: 1.3847em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .step-list:not(.step-list--small) .step-list__counter {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .step-list:not(.step-list--small) .step-list__counter {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}
.step-list:not(.step-list--small) .step-list__counter {
  font-weight: 100 !important;
}
.step-list:not(.step-list--small) .step-list__counter strong {
  font-weight: inherit;
}
.step-list.step-list--small {
  --step-list-color: var(--color-copy);
  --color-step-list-highlight: var(--color-primary-accent-light);
  --color-step-list-highlight-copy: var(--color-primary-accent);
}
.step-list.step-list--small .step-list__counter-icon {
  width: 3.25rem;
  height: 3.25rem;
}
.step-list.step-list--small .step-list__title {
  padding-left: 0;
}
.step-list.step-list--small .step-list__list-element {
  position: relative;
}
.step-list.step-list--small .step-list__counter {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .step-list.step-list--small .step-list__counter {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .step-list.step-list--small .step-list__counter {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.step-list.step-list--small .step-list__counter {
  font-weight: bold !important;
}
.step-list.step-list--small .step-list__counter::before {
  width: 3.25rem;
  height: 3.25rem;
}
.step-list.step-list--small .step-list__counter::after {
  content: "";
  position: absolute;
  border-top: 2px solid var(--color-step-list-border);
  width: calc(100% - 3rem);
  height: 2px;
  top: calc(3.25rem / 2);
  transform: translateX(1rem);
}
.step-list.step-list--small .step-list__icon {
  opacity: 0;
  pointer-events: none;
}
.step-list.step-list--small .step-list__icon svg {
  width: 0.5rem;
}
.step-list.step-list--small .step-list__title--no-small {
  display: none;
}
.step-list.step-list--small .step-list__title--no-default {
  display: block;
  margin-bottom: 1rem;
}
.step-list.step-list--small .step-list__title--no-default {
  font-size: 1.5rem;
  line-height: 1.4165em;
  font-weight: normal;
}
@media (min-width: 992px) {
  .step-list.step-list--small .step-list__title--no-default {
    font-size: calc(1.8rem / 1.2);
    line-height: 1.4585em;
  }
}
@media (min-width: 1200px) {
  .step-list.step-list--small .step-list__title--no-default {
    font-size: 1.8rem;
    line-height: 1.4585em;
  }
}
.step-list.step-list--small .step-list__title--no-default {
  font-weight: 100 !important;
}
.step-list.step-list--small .step-list__title--no-default strong {
  font-weight: inherit;
}
@media (min-width: 992px) {
  .step-list .step-list__list {
    display: flex;
  }
  .step-list .step-list__icon {
    padding-right: 1.5rem;
    display: list-item;
  }
  .step-list .step-list__icon svg {
    --icon-rotation: 0deg;
  }
}

.step-list__headline {
  --color-headlines: var(--step-list-color);
}

.step-list__subline {
  margin-top: 2rem;
  margin-bottom: 3.5rem;
}

.step-list__list {
  counter-reset: step-list;
  list-style: none;
  padding-left: 0;
  gap: 6px;
  justify-content: space-between;
}

.step-list__icon {
  display: flex;
  justify-content: center;
}
.step-list__icon svg {
  width: 64px;
  height: 100%;
  --icon-rotation: 90deg;
}

.step-list__list-element {
  color: var(--color-step-list-highlight);
  display: grid;
  grid-template-columns: fit-content(4rem) 1fr;
  grid-template-rows: min-content max-content;
  flex: 1;
}

.step-list__title {
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
}

.step-list__counter {
  grid-row-start: 1;
  grid-row-end: 2;
}
.step-list__counter:not(.step-list__counter--overlapping)::before {
  opacity: 1;
}
.step-list__counter:not(.step-list__counter--overlapping) .step-list__counter-icon {
  padding: 0.75rem;
}
.step-list__counter.step-list__counter--manual::before {
  content: attr(data-content);
}
.step-list__counter::before {
  counter-increment: step-list;
  content: counter(step-list);
  background-color: var(--color-step-list-highlight);
  color: var(--color-step-list-highlight-copy);
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

.step-list__content {
  margin-top: 2rem;
  grid-column-start: 1;
  grid-column-end: 3;
  color: var(--step-list-color);
}
.step-list__content .cta {
  margin-top: 1rem;
}
.step-list__content .cta.link {
  display: flex;
}

.step-list__title--no-default {
  display: none;
}

.step-list__counter-icon {
  position: absolute;
  width: 4rem;
  height: 4rem;
  top: 0;
  left: 0;
}
.step-list__counter-icon img {
  vertical-align: baseline;
}
</style>
