<template>
  <div class="sidebar" :class="{ [State.READY]: isReady }">
    <nav class="sidebar__nav">
      <div class="sidebar__controls">
        <template v-for="(item, idx) in sections" :key="idx">
          <button
            class="sidebar__button"
            aria-haspopup="dialog"
            :style="{
              '--sidebar-section-color': item.color,
              '--sidebar-section-width': item.width,
              '--sidebar-section-index': idx,
            }"
            @click="openDialog(idx)"
          >
            <div class="sidebar__section-bar"></div>
            <div class="sidebar__section-content">
              <div class="sidebar__section-name">
                <div class="sidebar__section-overline">{{ item.overline }}</div>
                <div class="sidebar__section-title">{{ item.title }}</div>
              </div>
            </div>
          </button>
          <dialog
            class="sidebar__dialog"
            :ref="`dialog${idx}`"
            :style="{
              '--sidebar-dialog-background-color': item.color,
              '--sidebar-dialog-text-color': item.textColor,
            }"
          >
            <icon class="sidebar__dialog-close" icon="close" @click="closeDialog(idx)" :hover="true" :circle="true" />
            <div class="sidebar__dialog-content">
              <div class="sidebar__dialog-wrapper">
                <div class="sidebar__dialog-section">
                  <div class="sidebar__dialog-section-overline">{{ item.overline }}</div>
                  <div class="sidebar__dialog-section-title">
                    {{ item.title }}
                  </div>
                </div>
                <div class="sidebar__dialog-infos">
                  <div class="sidebar__dialog-text" v-html="item.text"></div>
                  <cta class="sidebar__dialog-cta" v-if="item.cta" v-bind="item.cta" />
                </div>
              </div>
            </div>
          </dialog>
        </template>
      </div>
    </nav>
    <wrapper class="sidebar__main" :style="mainStyle">
      <div class="sidebar__row row">
        <div class="col">
          <headline level="h1" class="sidebar__headline font-size-6"><span v-html="headlineText"></span></headline>
        </div>
      </div>
      <div class="sidebar__row sidebar__row--left row">
        <div class="col">
          <div class="sidebar__date">{{ date }}</div>
          <span class="sidebar__location">
            {{ location }}
            <div v-if="hint" class="sidebar__hint">
              {{ hint }}
              <icon icon="arrow-curl" size="medium" direction="left" />
            </div>
          </span>
        </div>
      </div>
    </wrapper>
  </div>
</template>
<script>
import State from '../utils/state.js';
import { useModalStore } from '../stores/modal.js';

export default {
  tagName: 'sidebar',
  props: {
    sections: {
      type: Array,
    },
    headlineText: {
      type: String,
    },
    color: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
    hint: {
      type: String,
    },
  },
  computed: {
    mainStyle() {
      return {
        '--color-headlines': this.color,
      };
    },
  },
  data() {
    return {
      isReady: false,
      State,
      modalStore: null,
    };
  },
  mounted() {
    this.isReady = true;
    this.modalStore = useModalStore();

    this.$nextTick(() => {
      this.registerDialogs();
    });

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    if (this.modalStore && this.sections) {
      this.sections.forEach((section) => {
        this.modalStore.unregisterModal(section.title);
      });
    }

    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    registerDialogs() {
      if (!this.sections || !this.modalStore) return;

      this.sections.forEach((section, index) => {
        this.modalStore.registerModal(section.title, {
          open: () => this.openDialog(index),
          close: () => this.closeDialog(index),
        });
      });
    },
    handleScroll() {
      this.sections.forEach((_, index) => {
        const dialog = this.getDialogByIndex(index);

        if (dialog && dialog.open) {
          dialog.close();
        }
      });
    },
    getDialogByIndex(index) {
      const ref = this.$refs[`dialog${index}`];

      if (!ref) return;

      return ref[0];
    },
    openDialog(index) {
      const dialog = this.getDialogByIndex(index);

      if (!dialog || !dialog.showModal) return;

      dialog.showModal();
    },
    closeDialog(index) {
      const dialog = this.getDialogByIndex(index);

      if (!dialog || !dialog.close) return;

      dialog.close();
    },
  },
};
</script>
<style lang="scss">
.sidebar {
  --sidebar-stagger-delay: 0.1s;
  --sidebar-section-name-width: 0;
  --sidebar-section-content-opacity: 0;
  --sidebar-section-content-delay: 0.4s;
  --sidebar-section-on-off-multiplicator: 0;
  --sidebar-section-gap: 0;
  --sidebar-section-on-gap: #{spacing(4)};
  --sidebar-dialog-background-color: transparent;
  --sidebar-dialog-animation-delay-1: 0.5s;
  --sidebar-dialog-animation-delay-2: 0.85s;
  --sidebar-dialog-animation-delay-3: 1.5s;
  --sidebar-main-animation-delay-1: 1.7s;
  --sidebar-main-animation-delay-2: 2.7s;
  --sidebar-height-lg: 600px;
  --sidebar-height-xs: 500px;
  --sidebar-section-factor: 0.2vw;
  --sidebar-section-scale-factor-min: 0;
  --sidebar-section-scale-factor-max: 3;
  --sidebar-controls-gap: #{spacing(2)};

  --sidebar-height: var(--sidebar-height-xs);
  --sidebar-section-scale: 1;

  width: 100%;
  overflow: clip;
  opacity: 0;
  display: flex;
  align-items: flex-end;
  padding-top: spacing(10);
  padding-bottom: spacing(2);

  .sidebar__section-title,
  .sidebar__section-overline {
    line-height: 1em;
  }

  &.is-ready {
    opacity: 1;

    .sidebar__button {
      --sidebar-animation-delay: calc(var(--sidebar-section-index, 0) * var(--sidebar-stagger-delay, 0.1s) + 0.1s);

      opacity: 1;
      transition: opacity 0s var(--sidebar-animation-delay) $animation-transition;
      animation: sidebar-intro 2s $animation-transition forwards;
      animation-delay: var(--sidebar-animation-delay);

      &:hover {
        .sidebar__section-content {
          transition-delay: 0s;
        }
      }
    }

    .sidebar__headline {
      opacity: 1;
      transform: none;
    }

    .sidebar__row.sidebar__row--left {
      opacity: 1;
    }
  }

  @include media-breakpoint-up('lg') {
    --sidebar-height: var(--sidebar-height-lg);
    --sidebar-section-factor: 1px;
    --sidebar-section-scale-factor-max: 4.2;
    --sidebar-controls-gap: #{spacing(6)};
    --sidebar-section-scale-factor-min: 1;
    --sidebar-main-animation-delay-1: 1s;
    --sidebar-main-animation-delay-2: 2s;

    min-height: var(--sidebar-height);

    .sidebar__dialog-infos,
    .sidebar__dialog-section {
      width: 50%;
    }

    .sidebar__dialog-wrapper {
      flex-direction: row;
    }

    .sidebar__dialog-section {
      text-align: right;
    }

    .sidebar__button {
      &:nth-of-type(1) {
        --sidebar-section-on-off-multiplicator: 1;
      }
    }

    .sidebar__hint {
      right: 0;
      bottom: 5px;
      top: auto;
      transform: translateX(50%) translateX(28px) translateY(-10px);
    }

    .sidebar__row {
      &.sidebar__row--left {
        margin-top: spacing(8);
      }
    }

    &.is-ready {
      .sidebar__button {
        animation-fill-mode: none;
      }
    }
  }
}

.sidebar__nav {
  @include z-index;

  position: fixed;
  top: 0;
  align-items: center;
  height: var(--sidebar-height);
  width: 100%;
  pointer-events: none;
  display: flex;
}

.sidebar__controls {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sidebar-controls-gap);
  pointer-events: all;
}

.sidebar__button {
  display: flex;
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  position: relative;
  opacity: 0;
  gap: var(--sidebar-section-gap);

  &:nth-of-type(1),
  &:hover {
    .sidebar__section-content {
      transform: translateY(0) translateX(0);
    }
  }

  &:hover {
    --sidebar-section-name-width: auto;
    --sidebar-section-gap: var(--sidebar-section-on-gap);

    .sidebar__section-bar {
      --sidebar-section-width: 200;
    }

    .sidebar__section-content {
      --sidebar-section-content-opacity: 1;
    }

    .sidebar__section-name {
      overflow: visible;
    }
  }
}

.sidebar__section-bar {
  width: calc(var(--sidebar-section-factor) * (var(--sidebar-section-width, 50px)) * var(--sidebar-section-scale, 1));
  background-color: var(--sidebar-section-color);
  transition: width 0.75s $animation-transition;
}

.sidebar__section-overline,
.sidebar__section-content {
  text-transform: uppercase;
  white-space: nowrap;
}

.sidebar__dialog-section-overline {
  @include font-size-5;
  @include font-weight('light');
}

.sidebar__dialog-section-title {
  @include font-size-6;
  @include font-weight('bold');
}

.sidebar__dialog-section-title,
.sidebar__dialog-section-overline {
  text-transform: uppercase;
  line-height: 1em;
}

.sidebar__section-overline {
  @include font-size-2;
}

.sidebar__section-title {
  @include font-style('font-size-4', 'bold');
}

.sidebar__section-content {
  text-align: left;
  opacity: var(--sidebar-section-content-opacity);
  transform: translateY(10px);
  transition-property: transform, opacity;
  transition-duration: 1.15s, 0.9s;
  transition-delay: var(--sidebar-section-content-delay);
  transition-timing-function: $animation-transition;
}

.sidebar__section-name {
  width: var(--sidebar-section-name-width);
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    transform: translateX(-10px) translateY(-10px);
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: var(--color-background);
    z-index: -1;
    filter: blur(60px);
    top: 0;
    left: 0;
    opacity: 0.5;
  }
}

.sidebar__dialog {
  border: 0;
  background-color: transparent;
  color: var(--sidebar-dialog-text-color, var(--color-copy));
  width: 100%;
  height: 100vh;

  &::backdrop {
    background-color: var(--sidebar-dialog-background-color);
    clip-path: inset(0 100% 0 0);
    animation: sidebar-slide-in-background 0.75s cubic-bezier(0.25, 0.46, 0.45, 1.24) forwards;
  }
}

.sidebar__dialog-close {
  position: absolute;
  top: spacing(8);
  right: spacing(8);
  opacity: 0;
  animation: 1.75s $animation-transition var(--sidebar-dialog-animation-delay-3) fadeIn forwards;
}

.sidebar__dialog-content {
  display: flex;
  max-width: 1048px;
  height: 100%;
  align-content: center;
  align-items: center;
  margin: 0 auto;
}

.sidebar__dialog-wrapper {
  display: flex;
  gap: spacing(12);
  flex-direction: column;
}

.sidebar__dialog-section {
  position: relative;
  opacity: 0;
  animation: 1.5s $animation-transition var(--sidebar-dialog-animation-delay-1) fadeIn forwards;
  width: calc(100% - 70px);
}

.sidebar__dialog-infos {
  opacity: 0;
  animation: 1.5s $animation-transition var(--sidebar-dialog-animation-delay-2) fadeIn forwards;
}

.sidebar__dialog-text {
  @include font-size-1;
  @include line-height('extra-wide');
}

.sidebar__dialog-cta {
  margin-top: spacing(8);

  &.cta:hover.link,
  &.cta:hover,
  &.cta {
    --color-link: var(--sidebar-dialog-text-color);
    --cta-copy-color: var(--color-link);
  }
}

.sidebar__row {
  &:not(.sidebar__row--left) {
    justify-content: flex-end;
    text-align: right;
  }

  &.sidebar__row--left {
    margin-top: spacing(14);
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.9s;
    transition-delay: var(--sidebar-main-animation-delay-2);
    transition-timing-function: $animation-transition;
  }
}

.sidebar__headline {
  opacity: 0;
  transform: translateX(10%);
  transition-property: transform, opacity;
  transition-duration: 1.15s, 0.9s;
  transition-delay: var(--sidebar-main-animation-delay-1);
  transition-timing-function: $animation-transition;
}

.sidebar__date,
.sidebar__location {
  @include font-style('font-size-2', 'bold');

  color: var(--color-gk-dark-blue-shade-50);
}

.sidebar__location {
  position: relative;
  display: inline-block;
}

.sidebar__hint {
  @include font-style('font-size-sm', 'normal');

  position: absolute;
  right: 15px;
  top: -15px;
  transform: translateY(-80%) translateX(20px);
  color: var(--color-copy);
  display: flex;
  flex-direction: column;

  .icon {
    color: var(--color-gk-orange);
  }
}

@keyframes sidebar-slide-in-background {
  0% {
    clip-path: inset(0 100% 0 0);
  }
  100% {
    clip-path: inset(0 0% 0 0);
  }
}

@keyframes sidebar-intro {
  0% {
    --sidebar-section-name-width: auto;
    --sidebar-section-content-opacity: calc(1 * var(--sidebar-section-on-off-multiplicator));
    --sidebar-section-gap: calc(var(--sidebar-section-on-gap) * var(--sidebar-section-on-off-multiplicator));
    --sidebar-section-content-delay: 0s;

    transform: translateX(100vw);
    pointer-events: none;
  }

  60% {
    --sidebar-section-name-width: auto;
    --sidebar-section-content-opacity: calc(1 * var(--sidebar-section-on-off-multiplicator));
    --sidebar-section-gap: calc(var(--sidebar-section-on-gap) * var(--sidebar-section-on-off-multiplicator));
    --sidebar-section-scale: var(--sidebar-section-scale-factor-max);
    --sidebar-section-content-delay: 0s;

    pointer-events: none;
  }

  100% {
    --sidebar-section-scale: var(--sidebar-section-scale-factor-min);

    transform: translateX(0);
    pointer-events: none;
  }
}
</style>
