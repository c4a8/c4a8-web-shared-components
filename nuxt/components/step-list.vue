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
                <div class="step-list__head">
                  <div
                    class="step-list__counter"
                    :class="[
                      element.step || element.img ? 'step-list__counter--manual' : '',
                      element.overlapping ? 'step-list__counter--overlapping' : '',
                    ]"
                    :data-content="element.step || (element.img ? '' : index + 1)"
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
      this.accentLightText ? 'var(--color-copy-light)' : 'var(--color-step-list-override-copy, var(--color-copy))'
    );
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
    --color-step-list-override-copy: var(--color-override-step-list-copy, var(--color-copy-on-primary-on-surface));
    --step-list-color: var(--color-copy);
    --color-step-list-highlight: var(--color-copy-highlight);

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
      pointer-events: none;

      svg {
        width: spacing(2);
        visibility: hidden;
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

  // In a row of steps, every text starts on one line, however many lines a
  // title wraps to, and the row stays inside the container.
  // - The steps and the arrows between them are the columns of one grid: the
  //   steps share the free width equally, also when a long word would be
  //   wider, and the arrows keep theirs.
  // - Every step lays its head (counter and title), then its text, on the
  //   grid's two rows through subgrid: the tallest head sets the first row
  //   for all steps. Counters and arrows sit at its top.
  // - The head is a container: a step narrower than 16rem has no room for a
  //   title beside its counter (four steps at 992 px), so there the title
  //   goes under the counter and takes the step's full width. Wider steps,
  //   and steps that a page stacks itself, keep the title beside it.
  // - Title and text hyphenate only long words, in the page's language
  //   (twelve letters or more, four on each side), so a long compound in a
  //   narrow step breaks with a hyphen and short words like "Service" never
  //   do. Safari ignores hyphenate-limit-chars and would hyphenate every
  //   word; its own limits (six letters on each side, so also twelve or more
  //   in all, and no more than two hyphenated lines in a row) keep it as
  //   calm. A word with no hyphenation point still breaks rather than leave
  //   the step. A step's link keeps its words whole.
  // :where() keeps the specificity of the rules above, so a page's own rules
  // for its step-list still win. Not the small variant.
  // The class inside :where() is not redundant: PurgeCSS (the sites' purge-css
  // step) drops a rule whose :where() holds a bare :not(), and with it this
  // whole block.
  &:where(.step-list:not(.step-list--small)) {
    @include media-breakpoint-up(lg) {
      .step-list__list {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr) auto;
        grid-template-rows: auto auto;
        row-gap: 0;
      }

      .step-list__list-element {
        grid-row: span 2;
        grid-template-rows: subgrid;
        min-width: 0;
      }

      // The number comes from the markup, not from the CSS counter: the
      // head's container contains style, so the counter would start again
      // in every head (Chrome showed "1" everywhere, Safari "0").
      .step-list__counter::before {
        content: attr(data-content);
      }

      .step-list__head {
        container: step-list-head / inline-size;
        display: grid;
        grid-column: 1 / -1;
        grid-template-columns: fit-content($step-list-counter-width) minmax(0, 1fr);
        align-content: start;
        min-width: 0;
      }

      .step-list__title--no-small {
        min-width: 0;
        -webkit-hyphens: auto;
        hyphens: auto;
        hyphenate-limit-chars: 12 4 4;
        -webkit-hyphenate-limit-before: 6;
        -webkit-hyphenate-limit-after: 6;
        -webkit-hyphenate-limit-lines: 2;
        overflow-wrap: anywhere;
      }

      .step-list__content {
        min-width: 0;
        -webkit-hyphens: auto;
        hyphens: auto;
        hyphenate-limit-chars: 12 4 4;
        -webkit-hyphenate-limit-before: 6;
        -webkit-hyphenate-limit-after: 6;
        -webkit-hyphenate-limit-lines: 2;
        overflow-wrap: break-word;

        .cta {
          -webkit-hyphens: manual;
          hyphens: manual;
        }
      }

      // The image of a step with `img` is placed against its counter.
      .step-list__counter {
        position: relative;
      }

      // As a flex box the arrow is as tall as its picture, not as its line,
      // so it does not make the first row taller than the counters do.
      .step-list__icon {
        grid-row: 1;
        align-self: start;
        display: flex;
        align-items: center;
      }

      @container step-list-head (width < 16rem) {
        .step-list__title--no-small {
          grid-column: 1 / -1;
          grid-row: 2;
          align-items: flex-start;
          margin-top: spacing(4);
          padding-left: 0;
        }
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

// Groups counter and title for the row of steps from 992 px; everywhere else
// it leaves no box, and counter and title sit in the step as before.
.step-list__head {
  display: contents;
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
