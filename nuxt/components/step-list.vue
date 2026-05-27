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
<style lang="scss">
$step-list-counter-width: spacing(16);
$step-list-counter-width-small: spacing(13);
$step-list-counter-icon-padding: spacing(3);
$step-list-color-img-tint: $color-copy;

.step-list {
  @include utility-animation-options($delay: 100ms, $delay-offset: 200ms);

  padding: spacing(24) 0;
  background-color: var(--step-list-background);
  color: var(--step-list-color);

  [data-utility-animation-step] {
    &.is-starting {
      &.step-list__header {
        animation-delay: calc((var(--utility-animation-index) * 100ms));
      }
    }
  }

  &:not(.step-list--small) {
    .step-list__counter {
      @include font-style($style: 'h3-font-size', $weight: 'light');
    }
  }

  &.step-list--small {
    --step-list-color: var(--color-copy);
    --color-step-list-highlight: var(--color-primary-accent-light);
    --color-step-list-highlight-copy: var(--color-primary-accent);

    .step-list__counter-icon {
      width: $step-list-counter-width-small;
      height: $step-list-counter-width-small;
    }

    .step-list__title {
      padding-left: 0;
    }

    .step-list__list-element {
      position: relative;
    }

    .step-list__counter {
      @include font-style($style: 'font-size-1', $weight: 'bold');

      &::before {
        width: $step-list-counter-width-small;
        height: $step-list-counter-width-small;
      }

      &::after {
        content: '';
        position: absolute;
        border-top: 2px solid var(--color-step-list-border);
        width: calc(100% - #{spacing(12)});
        height: 2px;
        top: calc(#{$step-list-counter-width-small} / 2);
        transform: translateX(spacing(4));
      }
    }

    .step-list__icon {
      opacity: 0;
      pointer-events: none;

      svg {
        width: spacing(2);
      }
    }

    .step-list__title--no-small {
      display: none;
    }

    .step-list__title--no-default {
      @include font-style($style: 'h4-font-size', $weight: 'light');

      display: block;
      margin-bottom: spacing(4);
    }
  }

  @include media-breakpoint-up(lg) {
    .step-list__list {
      display: flex;
    }

    .step-list__icon {
      padding-right: spacing(6);
      display: list-item;

      svg {
        --icon-rotation: 0deg;
      }
    }
  }
}

.step-list__headline {
  --color-headlines: var(--step-list-color);
}

.step-list__subline {
  margin-top: spacing(8);
  margin-bottom: spacing(14);
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

  svg {
    width: 64px;
    height: 100%;

    --icon-rotation: 90deg;
  }
}

.step-list__list-element {
  color: var(--color-step-list-highlight);
  display: grid;
  grid-template-columns: fit-content($step-list-counter-width) 1fr;
  grid-template-rows: min-content max-content;
  flex: 1;
}

.step-list__title {
  padding-left: spacing(6);
  display: flex;
  align-items: center;
}

.step-list__counter {
  grid-row-start: 1;
  grid-row-end: 2;

  &:not(.step-list__counter--overlapping) {
    &::before {
      opacity: 1;
    }

    .step-list__counter-icon {
      padding: $step-list-counter-icon-padding;
    }
  }

  &.step-list__counter--manual {
    &::before {
      content: attr(data-content);
    }
  }

  &::before {
    counter-increment: step-list;
    content: counter(step-list);
    background-color: var(--color-step-list-highlight);
    color: var(--color-step-list-highlight-copy);
    width: $step-list-counter-width;
    height: $step-list-counter-width;
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
  }
}

.step-list__content {
  margin-top: spacing(8);
  grid-column-start: 1;
  grid-column-end: 3;
  color: var(--step-list-color);

  .cta {
    margin-top: spacing(4);

    &.link {
      display: flex;
    }
  }
}

.step-list__title--no-default {
  display: none;
}

.step-list__counter-icon {
  position: absolute;
  width: $step-list-counter-width;
  height: $step-list-counter-width;
  top: 0;
  left: 0;

  // &.step-list__counter-icon--tinted {
  //   img {
  //     @include img-to-color($step-list-color-img-tint);
  //   }
  // }

  img {
    vertical-align: baseline;
  }
}
</style>
