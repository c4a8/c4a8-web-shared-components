<template>
  <div class="py-10" :style="{ backgroundColor: bgColor }">
    <div
      class="container d-flex align-items-md-center flex-md-row flex-column"
      :id="success ? 'newsletterSuccess' : ''"
      :style="{ height: heightFixed }"
      ref="modalContent"
    >
      <div class="col-md-8">
        <headline level="h2">{{ currentHeadline }} </headline>
        <p>{{ currentText }}</p>
        <formular v-if="!success" v-bind="formularConfig" ref="form" :onSuccess="handleSuccess" />
      </div>
      <div class="col d-flex" :class="isMobile ? 'w-60 mr-0 ml-auto mt-5' : ''">
        <icon
          ref="iconHeart"
          class="iconHeart position-absolute align-self-end align-self-md-center"
          :class="[heartAnimationClass]"
          icon="heart"
          color="var(--color-red)"
          :strokeColor="contrastColor"
          :size="isMobile ? 200 : 380"
          style="opacity: 0"
          :style="isMobile ? { display: iconHeartDisplay } : {}"
          aria-label="Success heart icon"
        />
        <lottie-player
          :animationData="lottieAnimation"
          aria-label="Origami bird animation"
          class="iconBird align-self-end align-self-md-center"
          :class="[birdAnimationClass]"
          ref="iconBird"
          :loop="true"
          :autoplay="true"
          :speed="lottieSpeed"
          :onLoopComplete="setIdle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Tools from '../utils/tools';

const LOTTIE_SPEED_SUCCESS = 40;
const LOTTIE_SPEED_NORMAL = 1;
export default {
  tagName: 'newsletter-section',
  props: {
    bgColor: String,
    headline: String,
    text: String,
    formular: Object,
    lottie: Object,
    confirmation: {
      type: Object,
      default: null,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formularConfig() {
      if (!this.isMobile) return this.formular;
      return {
        ...this.formular,
        form: { ...this.formular.form, ctaWidth: 'justify-content-start' },
      };
    },
    contrastColor() {
      return this.light ? 'var(--color-white)' : 'var(--color-black)';
    },
    currentHeadline() {
      return this.success ? this.confirmation?.headline : this.headline;
    },
    currentText() {
      return this.success ? this.confirmation?.text : this.text;
    },
    lottieAnimation() {
      return this.idle ? this.lottie?.idle : this.lottie?.fly;
    },
    lottieSpeed() {
      return this.success ? LOTTIE_SPEED_SUCCESS : LOTTIE_SPEED_NORMAL;
    },
    iconHeartDisplay() {
      return this.success ? '' : 'none';
    },
    birdAnimationClass() {
      return this.success ? 'fade-out-animation' : '';
    },
    heartAnimationClass() {
      return this.success ? 'fade-in-animation' : '';
    },
  },
  data() {
    return {
      success: false,
      idle: true,
      heightFixed: 'auto',
      isMobile: Tools.isBelowBreakpoint('lg'),
    };
  },
  mounted() {
    this.checkBreakpoint();

    window.addEventListener('resize', this.checkBreakpoint);
    document.addEventListener('form-ajax-submit', this.handleFormSubmit);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkBreakpoint);
    document.removeEventListener('form-ajax-submit', this.handleFormSubmit);
  },

  methods: {
    handleFormSubmit(event) {
      const formElement = this.$refs.form?.$el || this.$refs.form?.$refs?.root;
      if (event.detail?.target === formElement) {
        event.stopImmediatePropagation();
        this.handleSuccess();
      }
    },
    handleSuccess() {
      if (this.$refs.modalContent) {
        this.heightFixed = `${this.$refs.modalContent.clientHeight}px`;
      }
      this.success = true;
    },
    checkBreakpoint() {
      this.isMobile = Tools.isBelowBreakpoint('lg');
    },
    setIdle() {
      this.idle = !this.success;
    },
  },
};
</script>
