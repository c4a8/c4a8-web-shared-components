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
                :style="`--utility-animation-index: ${index + 1}`"
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
                <icon icon="arrow-narrow" color="var(--color-step-list-highlight)" />
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
  },
  methods: {
    animationIndex(index, isIcon = false) {
      return index * 2 + (isIcon ? 2 : 1);
    },
  },
};
</script>
