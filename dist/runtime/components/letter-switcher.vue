<template>
  <div :class="classList" ref="root">
    <div class="letter-switcher__overline font-size-5 light" ref="overline">{{ overline }}</div>
    <div class="letter-switcher__container">
      <div :class="letterSwitchAnimationClassList" ref="animation">
        <div class="letter-switcher__container-animation">
          <span>S</span>
          <div class="letter-switcher__group" ref="group">
            <span class="letter-switcher__letter letter-switcher__letter-end">e</span>
            <span class="letter-switcher__letter letter-switcher__middle">d</span>
            <span class="letter-switcher__letter letter-switcher__middle">c</span>
            <span class="letter-switcher__letter letter-switcher__middle">b</span>
            <span class="letter-switcher__letter letter-switcher__middle">a</span>
            <span class="letter-switcher__letter letter-switcher__default">_</span>
          </div>
          cur
          <div class="letter-switcher__group" ref="group">
            <span class="letter-switcher__letter letter-switcher__letter-end">i</span>
            <span class="letter-switcher__letter letter-switcher__middle">h</span>
            <span class="letter-switcher__letter letter-switcher__middle">g</span>
            <span class="letter-switcher__letter letter-switcher__middle">f</span>
            <span class="letter-switcher__letter letter-switcher__middle">e</span>
            <span class="letter-switcher__letter letter-switcher__middle">d</span>
            <span class="letter-switcher__letter letter-switcher__middle">c</span>
            <span class="letter-switcher__letter letter-switcher__middle">b</span>
            <span class="letter-switcher__letter letter-switcher__middle">a</span>
            <span class="letter-switcher__letter letter-switcher__default">_</span>
          </div>
          ty&nbsp;<template v-if="isLower">-<br /></template>
        </div>
        <div class="letter-switcher__container-animation">
          Ga
          <div class="letter-switcher__group" ref="group">
            <span class="letter-switcher__letter letter-switcher__letter-end">p</span>
            <span class="letter-switcher__letter letter-switcher__middle">o</span>
            <span class="letter-switcher__letter letter-switcher__middle">n</span>
            <span class="letter-switcher__letter letter-switcher__middle">m</span>
            <span class="letter-switcher__letter letter-switcher__middle">l</span>
            <span class="letter-switcher__letter letter-switcher__middle">k</span>
            <span class="letter-switcher__letter letter-switcher__middle">j</span>
            <span class="letter-switcher__letter letter-switcher__middle">i</span>
            <span class="letter-switcher__letter letter-switcher__middle">h</span>
            <span class="letter-switcher__letter letter-switcher__middle">g</span>
            <span class="letter-switcher__letter letter-switcher__middle">f</span>
            <span class="letter-switcher__letter letter-switcher__middle">e</span>
            <span class="letter-switcher__letter letter-switcher__middle">d</span>
            <span class="letter-switcher__letter letter-switcher__middle">c</span>
            <span class="letter-switcher__letter letter-switcher__middle">b</span>
            <span class="letter-switcher__letter letter-switcher__middle">a</span>
            <span class="letter-switcher__letter letter-switcher__default">_</span>
          </div>
          !
        </div>
      </div>
      <div :class="letterSwitchEndClassList">
        <div class="letter-switcher__spacer">
          <div class="letter-switcher__end is-collapsed" ref="end">{{ textEnd }}</div>
          <div class="letter-switcher__end-text" ref="end-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';
import Tools from '../utils/tools.js';
import Events from '../utils/events.js';

export default {
  tagName: 'letter-switcher',
  data() {
    return {
      show: false,
      end: false,
      overline: '',
      endDelay: 3400,
      startDelay: 900,
      isLower: null,
    };
  },
  computed: {
    classList() {
      return ['letter-switcher', `${this.show ? State.SHOW : ''}`, `${this.end ? State.END : ''}`, 'vue-component'];
    },
    fontSize() {
      return this.isLower ? 'font-size-5' : 'font-size-6 bold';
    },
    letterSwitchEndClassList() {
      return ['letter-switcher__end-animation', this.fontSize];
    },
    letterSwitchAnimationClassList() {
      return [
        'letter-switcher__animation',
        this.fontSize,
        'justify-content-center',
        `${this.isLower ? 'flex-column' : ''}`,
      ];
    },
  },
  mounted() {
    this.overline = this.overlineStart;
    this.isLower = this.isLowerBreakpoint();

    this.bindEvents();

    setTimeout(() => {
      this.setHeight();
      this.startAnimation();
    }, this.startDelay);
  },
  methods: {
    bindEvents() {
      window.addEventListener('resize', () => {
        this.handleResize();
      });
    },
    handleResize() {
      this.isLower = this.isLowerBreakpoint();
      this.setHeight();
    },
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('sm');
    },
    setHeight() {
      this.show = false;

      const animation = this.$refs['animation'];

      if (!animation) return;

      const letter = animation.querySelector('.letter-switcher__letter');
      const newHeight = this.isLower ? letter.offsetHeight * 2 : letter.offsetHeight;

      animation.style.height = newHeight + 'px';

      this.show = true;
    },
    startAnimation() {
      const delay = 0.3;
      const letterDelay = 0.07;

      [].forEach.call(this.$refs['root'].querySelectorAll('.letter-switcher__group'), (group, index) => {
        const stepDelay = index * delay;
        const duration = letterDelay * group.children.length;

        group.style.animation = `letter-switcher ${duration}s ${stepDelay}s ease-out forwards`;
      });

      setTimeout(() => {
        this.end = true;
        this.switchOverline(this.showEndAnimation);
      }, this.endDelay);
    },
    showEndAnimation() {
      const endText = this.$refs['end-text'];
      const end = this.$refs['end'];

      if (!endText || !end) return this.emitEnded();

      endText.style.width = '0px';
      end.classList.remove(State.COLLAPSED);

      this.emitEnded();
    },
    switchOverline(callback) {
      const overline = this.$refs['overline'];

      if (!overline) return;

      overline.addEventListener('transitionend', () => {
        this.overline = this.overlineEnd;
        overline.style.opacity = 1;

        callback();
      });

      overline.style.opacity = 0;
    },
    emitEnded() {
      this.$emit(Events.ENDED);
    },
  },
  props: {
    textStart: String,
    textEnd: String,
    overlineStart: String,
    overlineEnd: String,
  },
};
</script>
<style>
.letter-switcher {
  text-align: center;
  margin-bottom: 2.5rem;
}
.letter-switcher.show .letter-switcher__overline,
.letter-switcher.show .letter-switcher__animation {
  opacity: 1;
}
.letter-switcher.is-end .letter-switcher__animation {
  opacity: 0;
}
.letter-switcher.is-end .letter-switcher__end-animation {
  opacity: 1;
}
@media (min-width: 443px) {
  .letter-switcher {
    margin-bottom: 0;
  }
}
@media (min-width: 768px) {
  .letter-switcher {
    margin-bottom: 2.5rem;
  }
}

.letter-switcher__animation {
  pointer-events: none;
  opacity: 0;
  overflow: hidden;
  letter-spacing: 5px;
  color: var(--color-letter-switcher-copy);
  display: flex;
  height: 0;
}
@media (min-width: 768px) {
  .letter-switcher__animation {
    letter-spacing: 10px;
  }
}

.letter-switcher__overline,
.letter-switcher__animation {
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}

.letter-switcher__group {
  display: inline-flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 30px;
  position: relative;
  bottom: -100%;
  transform: translateY(-100%);
  text-align: center;
}
@media (min-width: 768px) {
  .letter-switcher__group {
    width: 40px;
  }
}
@media (min-width: 992px) {
  .letter-switcher__group {
    width: 60px;
  }
}

.letter-switcher__letter {
  flex: 1 0 auto;
  padding: 10px 0;
}

.letter-switcher__middle {
  color: var(--color-letter-switcher-highlight);
}

.letter-switcher__overline {
  opacity: 0;
  margin-bottom: 1rem;
  color: var(--color-letter-switcher-overline);
}

.letter-switcher__end-animation {
  pointer-events: none;
  position: absolute;
  opacity: 0;
  bottom: 0;
  top: 1rem;
  display: flex;
  place-content: center;
  width: 100%;
  color: var(--color-letter-switcher-copy);
}

.letter-switcher__end::before,
.letter-switcher__end-text {
  width: calc(100% + 1rem);
  transition: width 0.8s cubic-bezier(0.19, 1, 0.2, 1);
}

.letter-switcher__end-text {
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: -0.5rem;
  top: 0;
  background-color: var(--color-gk-violet);
  z-index: 2;
}

.letter-switcher__end {
  position: relative;
  z-index: 1;
}
.letter-switcher__end::before {
  position: absolute;
  content: "";
  display: block;
  height: 1.5rem;
  left: -0.5rem;
  background-color: var(--color-letter-switcher-underline);
  z-index: -1;
  bottom: 5%;
  transition-duration: 1.2s;
}
@media (min-width: 576px) {
  .letter-switcher__end::before {
    height: 40%;
  }
}
@media (max-width: 443px) {
  .letter-switcher__end::before {
    left: 50%;
    transform: translateX(-50%);
    max-width: clamp(320px, 87%, 90vw);
  }
}
.letter-switcher__end.is-collapsed::before {
  width: 0;
}

.letter-switcher__spacer,
.letter-switcher__container {
  position: relative;
}

@media (max-width: 767.98px) {
  .letter-switcher__container-animation {
    overflow: hidden;
    height: 40%;
  }
}

@keyframes letter-switcher {
  0% {
    transform: translateY(-100%);
    bottom: -100%;
  }
  100% {
    transform: translateY(0%);
    bottom: 0;
  }
}
</style>
