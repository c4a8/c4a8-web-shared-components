<template>
  <figure :class="classList" ref="root">
    <div :class="containerClasses">
      <div v-if="headline" class="row mb-9 mt-9">
        <div :class="['col', headlineClasses, 'fade-in-bottom']" data-utility-animation-step="1">
          <headline :text="headline" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p
            :class="['intro-text__copy fade-in-bottom richtext', copyClasses]"
            data-utility-animation-step="1"
            v-html="copy"
          ></p>
        </div>
      </div>
    </div>
  </figure>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'intro-text',
  computed: {
    classList() {
      return ['intro-text', 'utility-animation', 'vue-component', this.variant, this.spacing];
    },
    containerClasses() {
      return ['container', this.containerSpacing || 'space-lg-2'];
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  props: {
    copy: String,
    variant: String,
    headline: String,
    spacing: String,
    containerSpacing: {
      type: String,
      default: 'space-lg-2',
    },
    headlineClasses: {
      type: String,
      default: 'text-center',
    },
    copyClasses: String,
  },
};
</script>
<style>
@media (min-width: 992px) {
  .intro-text.intro-text--large .intro-text__copy {
    font-size: 2.5rem;
    line-height: 1.6;
  }
  .intro-text.intro-text--large .intro-text__copy {
    font-weight: 100 !important;
  }
  .intro-text.intro-text--large .intro-text__copy strong {
    font-weight: inherit;
  }
}
.intro-text .highlight {
  background-position-x: 1em;
  background-position-y: 0.6em;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  background-image: linear-gradient(to bottom, var(--color-highlight-underline) 0%, var(--color-highlight-underline) 100%);
  background-repeat: repeat-x;
}

.intro-text__copy[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
}
.intro-text__copy {
  font-size: 1.375rem;
  line-height: 1.6365em;
}
@media (min-width: 992px) {
  .intro-text__copy {
    font-size: 1.5625rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .intro-text__copy {
    font-size: 1.95313rem;
    line-height: 1.7em;
  }
}
.intro-text__copy {
  line-height: 1.7em !important;
}
</style>
