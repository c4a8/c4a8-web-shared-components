<template>
  <div :class="classList">
    <div class="text-icon-animation__animation col-lg-8">
      <text-animation
        :sequence="sequence"
        :fixed="fixed"
        :cta="cta"
        @text-animation-state="handleTextAnimationState"
        @text-animation-ended="handleTextAnimationEnded"
      >
      </text-animation>
    </div>
    <div class="text-icon-animation__icon-container col-lg-4">
      <icon
        :icon="icon"
        :color="iconColor"
        :classes="iconClassList"
        :animation="animationData"
        :step="textAnimationStep"
      ></icon>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'text-icon-animation',
  props: {
    animation: Object,
    icon: String,
    iconColor: String,
    fixed: Boolean,
    cta: Object,
    classes: String,
  },
  data() {
    return {
      textAnimationStep: 0,
      isEnded: false,
      isSecondLast: false,
    };
  },
  computed: {
    animationData() {
      return Tools.getJSON(this.animation);
    },
    sequence() {
      return this.animationData.sequence;
    },
    classList() {
      return [
        'text-icon-animation row vue-component',
        this.classes,
        this.isFixed ? 'text-icon-animation--fixed' : '',
        this.isEnded ? 'text-icon-animation--ended' : '',
        this.isSecondLast ? 'text-icon-animation--is-second-last' : '',
      ];
    },
    isFixed() {
      return Tools.isTrue(this.fixed);
    },
    iconClassList() {
      return `text-icon-animation__icon icon--step-${this.textAnimationStep}`;
    },
  },
  methods: {
    handleTextAnimationState(state) {
      this.textAnimationStep = state?.step;
      this.isSecondLast = state?.isSecondLast;
    },
    handleTextAnimationEnded(event) {
      this.isEnded = event;
    },
  },
};
</script>
<style>
.text-icon-animation {
  --text-icon-animation-icon-color: var(--color-secondary);
  position: relative;
}
@media (min-width: 992px) {
  .text-icon-animation.text-icon-animation--fixed {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
}
@media (max-width: 991.98px) {
  .text-icon-animation.text-icon-animation--is-second-last .text-animation__text,
  .text-icon-animation.text-icon-animation--is-second-last .text-animation__subline,
  .text-icon-animation.text-icon-animation--is-second-last .text-animation__cta {
    opacity: 0;
  }
}
.text-icon-animation.text-icon-animation--ended .text-icon-animation__icon-container {
  animation: text-animation-hide-icon 4s 0s;
  animation-fill-mode: forwards;
}
.text-icon-animation.text-icon-animation--ended .text-animation__text {
  word-wrap: break-word;
  hyphens: auto;
  animation: text-animation-show-text 6s 1s;
  animation-fill-mode: forwards;
}
.text-icon-animation.text-icon-animation--ended .text-animation__subline {
  animation: text-animation-show-text 2s 2s;
  animation-fill-mode: forwards;
}
.text-icon-animation.text-icon-animation--ended .text-animation__cta {
  animation: text-animation-show-text 2s 2.5s;
  animation-fill-mode: forwards;
}
@media (min-width: 992px) {
  .text-icon-animation.text-icon-animation--ended .text-icon-animation__icon-container,
  .text-icon-animation.text-icon-animation--ended .text-animation__text,
  .text-icon-animation.text-icon-animation--ended .text-animation__subline,
  .text-icon-animation.text-icon-animation--ended .text-animation__cta {
    animation: none;
  }
}
.text-icon-animation .text-icon-animation__icon-container .icon {
  height: 100%;
  width: 100%;
  max-width: 300px;
  color: var(--text-icon-animation-icon-color);
}
.text-icon-animation .text-icon-animation__icon-container .icon svg {
  width: inherit;
  height: inherit;
}
@media (min-width: 992px) {
  .text-icon-animation .text-icon-animation__animation {
    order: 1;
  }
  .text-icon-animation .text-icon-animation__icon-container {
    order: 2;
  }
}

@media (min-width: 992px) {
  .text-icon-animation .text-animation {
    margin-right: 4rem;
  }
}

.text-icon-animation__animation {
  order: 2;
}

.text-icon-animation__icon-container {
  order: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
}
@media (min-width: 992px) {
  .text-icon-animation__icon-container {
    justify-content: flex-start;
    margin-bottom: 0;
  }
}

@keyframes text-animation-hide-icon {
  0% {
    opacity: 1;
  }
  10% {
    opacity: 0;
  }
  50%, 100% {
    opacity: 0;
    height: 0;
  }
}
@keyframes text-animation-show-text {
  0% {
    opacity: 0;
  }
  50%, 100% {
    opacity: 1;
  }
}
</style>
