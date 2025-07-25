<template>
  <tracking />
  <div id="app" :class="classList">
    <slot />
  </div>
</template>

<script>
import Anchor from '../utils/anchor.js';
import Modal from '../utils/modal.js';
import Events from '../utils/events.js';
import State from '../utils/state.js';

export default {
  tagName: 'global-app',
  mounted() {
    // initializes JS components
    new Anchor();
    document.querySelectorAll('.modal').forEach((node) => new Modal(node));

    window.addEventListener('resize', () => {
      this.triggerResizeEvent();
    });

    this.captureBodyMutation();
  },
  methods: {
    captureBodyMutation() {
      const observer = new ResizeObserver(this.handleBodyMutation);

      observer.observe(document.body);
    },
    handleBodyMutation(mutations) {
      const heightTolleranceRange = 3;
      let once = false;

      mutations.forEach((mutation) => {
        if (once) return;

        if (
          mutation.contentRect.height > this.lastBodyHeight + heightTolleranceRange ||
          mutation.contentRect.height < this.lastBodyHeight - heightTolleranceRange
        ) {
          this.lastBodyHeight = mutation.contentRect.height;
          once = true;

          this.triggerResizeEvent();

          return;
        }
      });
    },
    triggerResizeEvent() {
      const customEvent = new CustomEvent(Events.WINDOW_RESIZE, {});

      document.dispatchEvent(customEvent);
    },
  },
  computed: {
    classList() {
      return ['global-app', ...this.classes, this.isLoading && State.LOADING];
    },
  },
  props: {
    classes: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lastBodyHeight: null,
    };
  },
};
</script>
<style>
.global-app.is-loading main,
.global-app.is-loading footer {
  opacity: 0;
}
</style>
