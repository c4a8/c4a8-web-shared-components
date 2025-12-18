<template>
  <div
    class="newsletter-modal d-flex font-size-2"
    :class="containerClasses"
    :style="{ color: contrastColor, height: heightFixed }"
    ref="modalContent"
    role="dialog"
  >
    <div class="newsletter-modal__content" :class="contentClasses" :id="success ? 'newsletterSuccess' : ''">
      <div>
        <headline level="h2" :class="headlineClasses">{{ currentHeadline }} </headline>
        <p>{{ currentText }}</p>
        <formular
          v-if="!success"
          v-bind="formularConfig"
          ref="form"
          :onSuccess="handleSuccess"
          :class="formularClasses"
        />
      </div>
    </div>
    <div
      :class="[
        isMobile
          ? 'd-flex align-items-center position-absolute justify-content-end mx-n2 my-md-8 right-0 bottom-0'
          : 'col-5 col-lg-4 d-flex align-items-center z-index-1 align-content-center',
      ]"
    >
      <lottie-player
        v-if="lottie"
        class="iconBird"
        :class="[birdAnimationClass, isMobile ? 'position-absolute' : '']"
        ref="iconBird"
        :animationData="lottieAnimation"
        :loop="true"
        :autoplay="true"
        :onLoopComplete="setIdle"
        :speed="lottieSpeed"
        :width="isMobile ? lottieSize : undefined"
        :height="isMobile ? lottieSize : undefined"
        aria-label="Origami bird animation"
      />
      <icon
        ref="iconHeart"
        class="iconHeart position-absolute"
        :class="[heartAnimationClass, isMobile ? iconHeartMobileClass : '']"
        icon="heart"
        color="var(--color-red)"
        :strokeColor="contrastColor"
        :size="isMobile ? 200 : 380"
        style="opacity: 0"
        :style="isMobile ? { display: iconHeartDisplay } : {}"
        aria-label="Success heart icon"
      />
    </div>
  </div>
</template>

<script>
import Tools from '../utils/tools';
const SCREEN_XS_THRESHOLD = 750;
const LOTTIE_SIZE_MOBILE = 170;
const LOTTIE_SIZE_DESKTOP = 220;
const LOTTIE_SPEED_SUCCESS = 40;
const LOTTIE_SPEED_NORMAL = 1;
export default {
  tagName: 'newsletter-modal',
  props: {
    bgColor: {
      type: String,
    },
    headline: {
      type: String,
    },
    text: {
      type: String,
    },
    formular: {
      type: Object,
    },
    lottie: {
      type: Object,
    },
    iconColor: {
      type: String,
      default: 'var(--color-orange)',
    },
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
        form: { ...this.formular.form, ctaPosition: 'justify-content-start' },
      };
    },
    contrastColor() {
      return this.light ? 'var(--color-white)' : 'var(--color-black)';
    },
    /*
    isMobile() {
      return Tools.isBelowBreakpoint('lg');
    },
    */
    currentHeadline() {
      return this.success ? this.confirmation?.headline : this.headline;
    },
    currentText() {
      return this.success ? this.confirmation?.text : this.text;
    },
    contentClasses() {
      return [this.isMobile ? 'my-md-4' : 'my-6 col-10', this.success ? 'd-flex align-items-center' : ''];
    },
    headlineClasses() {
      return [this.isMobile ? '' : 'mb-5', this.success ? 'mb-5' : 'mb-2'];
    },
    formularClasses() {
      return this.isMobile ? 'mt-n5 d-flex justify-content-center align-items-center' : '';
    },
    containerClasses() {
      return this.isMobile ? 'flex-column justify-content-between p-2' : 'align-items-center container';
    },
    lottieAnimation() {
      return this.idle ? this.lottie?.idle : this.lottie?.fly;
    },
    lottieSpeed() {
      return this.success ? LOTTIE_SPEED_SUCCESS : LOTTIE_SPEED_NORMAL;
    },
    lottieSize() {
      return this.screenXS ? LOTTIE_SIZE_MOBILE : LOTTIE_SIZE_DESKTOP;
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
    iconHeartMobileClass() {
      return this.screenXS ? '' : 'mb-11';
    },
  },
  data() {
    return {
      success: false,
      idle: true,
      screenXS: false,
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
    setIdle() {
      this.idle = !this.success;
    },

    checkBreakpoint() {
      this.isMobile = Tools.isBelowBreakpoint('lg');
      if (typeof window !== 'undefined' && window.visualViewport) {
        this.screenXS = window.visualViewport.height <= SCREEN_XS_THRESHOLD;
      }
    },
  },
};
</script>
