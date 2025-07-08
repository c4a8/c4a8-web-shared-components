<template>
  <div :id="containerId" :class="classList" :style="containerStyle" ref="lottieContainer"></div>
</template>

<script>
// import lottie from 'lottie-web/build/player/esm/lottie.min.js';

// Helper function to deep clone objects
function cloneDeep(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map((item) => cloneDeep(item));
  if (typeof obj === 'object') {
    const clonedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = cloneDeep(obj[key]);
      }
    }
    return clonedObj;
  }
}

export default {
  name: 'LottiePlayer',
  tagName: 'lottie-player',
  data() {
    return {
      animation: null,
      containerId: `lottie-player-${Math.random().toString(36).substr(2, 9)}`,
      isPlaying: false,
      isPaused: false,
      lottie: null,
    };
  },
  computed: {
    classList() {
      return ['lottie-player', 'vue-component'];
    },
    containerStyle() {
      return {
        width: this.getSize(this.width),
        height: this.getSize(this.height),
        background: this.background || 'transparent',
      };
    },
  },
  props: {
    animationData: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      default: '',
    },
    loop: {
      type: [Boolean, Number],
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    width: {
      type: [String, Number],
      default: '100%',
    },
    height: {
      type: [String, Number],
      default: '100%',
    },
    background: {
      type: String,
      default: 'transparent',
    },
    renderer: {
      type: String,
      default: 'svg',
      validator: (value) => ['svg', 'canvas', 'html'].includes(value),
    },
    speed: {
      type: Number,
      default: 1,
    },
    direction: {
      type: Number,
      default: 1,
      validator: (value) => [1, -1].includes(value),
    },
    segments: {
      type: Array,
      default: () => [],
    },
    noMargin: {
      type: Boolean,
      default: true,
    },
  },
  async mounted() {
    if (import.meta.client) {
      const lottieModule = await import('lottie-web/build/player/esm/lottie.min.js');
      this.lottie = lottieModule.default;
      this.initAnimation();
    }
  },
  beforeUnmount() {
    this.destroyAnimation();
  },
  methods: {
    getSize(size) {
      if (!size) return '100%';
      if (typeof size === 'number') return `${size}px`;
      if (size.indexOf('px') !== -1 || size.indexOf('%') !== -1 || size === 'auto') {
        return size;
      }
      return `${size}px`;
    },

    initAnimation() {
      if (!this.$refs.lottieContainer) return;

      const container = this.$refs.lottieContainer;

      // Clear any existing animation
      if (this.animation) {
        this.animation.destroy();
      }

      const animationConfig = {
        container,
        renderer: this.renderer,
        loop: this.loop,
        autoplay: this.autoplay,
        speed: this.speed,
        noMargin: this.noMargin,
      };

      // Use either animationData or path
      if (this.animationData) {
        // Clone the animation data to prevent mutations
        animationConfig.animationData = cloneDeep(this.animationData);
      } else if (this.path) {
        animationConfig.path = this.path;
      } else {
        console.warn('LottiePlayer: Either animationData or path must be provided');
        return;
      }

      // Add segments if provided
      if (this.segments && this.segments.length === 2) {
        animationConfig.initialSegment = this.segments;
      }

      try {
        this.animation = this.lottie.loadAnimation(animationConfig);

        // Set up event listeners
        this.animation.addEventListener('DOMLoaded', this.onDOMLoaded);
        this.animation.addEventListener('data_ready', this.onDataReady);
        this.animation.addEventListener('complete', this.onComplete);
        this.animation.addEventListener('loopComplete', this.onLoopComplete);
        this.animation.addEventListener('enterFrame', this.onEnterFrame);
        this.animation.addEventListener('segmentStart', this.onSegmentStart);
        this.animation.addEventListener('destroy', this.onDestroy);
        this.animation.addEventListener('error', this.onError);

        // Set direction
        if (this.direction === -1) {
          this.animation.setDirection(-1);
        }

        this.isPlaying = this.autoplay;
      } catch (error) {
        console.error('LottiePlayer: Error loading animation', error);
      }
    },

    // Animation control methods
    play() {
      if (this.animation) {
        this.animation.play();
        this.isPlaying = true;
        this.isPaused = false;
      }
    },

    pause() {
      if (this.animation) {
        this.animation.pause();
        this.isPlaying = false;
        this.isPaused = true;
      }
    },

    stop() {
      if (this.animation) {
        this.animation.stop();
        this.isPlaying = false;
        this.isPaused = false;
      }
    },

    setSpeed(speed) {
      if (this.animation) {
        this.animation.setSpeed(speed);
      }
    },

    setDirection(direction) {
      if (this.animation) {
        this.animation.setDirection(direction);
      }
    },

    goToAndPlay(value, isFrame = false) {
      if (this.animation) {
        this.animation.goToAndPlay(value, isFrame);
      }
    },

    goToAndStop(value, isFrame = false) {
      if (this.animation) {
        this.animation.goToAndStop(value, isFrame);
      }
    },

    setSegment(segments) {
      if (this.animation) {
        this.animation.setSegment(segments[0], segments[1]);
      }
    },

    destroyAnimation() {
      if (this.animation) {
        this.animation.removeEventListener('DOMLoaded', this.onDOMLoaded);
        this.animation.removeEventListener('data_ready', this.onDataReady);
        this.animation.removeEventListener('complete', this.onComplete);
        this.animation.removeEventListener('loopComplete', this.onLoopComplete);
        this.animation.removeEventListener('enterFrame', this.onEnterFrame);
        this.animation.removeEventListener('segmentStart', this.onSegmentStart);
        this.animation.removeEventListener('destroy', this.onDestroy);
        this.animation.removeEventListener('error', this.onError);
        this.animation.destroy();
        this.animation = null;
      }
    },

    // Event handlers
    onDOMLoaded() {
      this.$emit('dom-loaded');
    },

    onDataReady() {
      this.$emit('data-ready');
    },

    onComplete() {
      this.isPlaying = false;
      this.$emit('complete');
    },

    onLoopComplete() {
      this.$emit('loop-complete');
    },

    onEnterFrame(event) {
      this.$emit('enter-frame', event);
    },

    onSegmentStart(event) {
      this.$emit('segment-start', event);
    },

    onDestroy() {
      this.$emit('destroy');
    },

    onError(error) {
      console.error('LottiePlayer: Animation error', error);
      this.$emit('error', error);
    },
  },

  watch: {
    animationData: {
      handler() {
        this.$nextTick(() => {
          this.initAnimation();
        });
      },
      deep: true,
    },
    path() {
      this.$nextTick(() => {
        this.initAnimation();
      });
    },
    loop() {
      if (this.animation) {
        this.animation.loop = this.loop;
      }
    },
    autoplay() {
      if (this.animation) {
        if (this.autoplay) {
          this.play();
        } else {
          this.pause();
        }
      }
    },
    speed() {
      this.setSpeed(this.speed);
    },
    direction() {
      this.setDirection(this.direction);
    },
    segments() {
      if (this.segments && this.segments.length === 2) {
        this.setSegment(this.segments);
      }
    },
  },
};
</script>

<style scoped>
.lottie-player{display:block;overflow:hidden;position:relative}.lottie-player canvas,.lottie-player svg{display:block;height:100%;width:100%}
</style>
