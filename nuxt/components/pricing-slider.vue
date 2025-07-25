<template>
  <div :class="['pricing-slider', { 'pricing-slider--loading': loading, 'pricing-slider--light': light }]" ref="root">
    <div
      v-if="pricingSliderRange"
      class="js-slider-data"
      :data-range="JSON.stringify(pricingSliderRange)"
      :data-products="JSON.stringify(products?.list)"
    >
      <input
        class="pricing-slider__slider js-ion-range-slider"
        type="text"
        :data-hs-ion-range-slider-options="JSON.stringify(hsIonRangeSliderOptions)"
        ref="slider"
      />
    </div>
    <div class="product-stage__result-container">
      <div class="text-center text-midnight">
        <span class="font-size-5 js-result-price">0</span>
        <span class="pricing-slider__info font-size-5">
          <icon icon="info" size="small"></icon>
        </span>
        <span v-if="pricingSliderRange && pricingSliderRange.resultPer">| {{ pricingSliderRange.resultPer }}</span>
      </div>
      <div class="text-center text-midnight">
        <strong class="js-result-product"></strong>
        <span class="js-result-extra"></span>
      </div>
      <modal :slim="true" :center="true" class="pricing-slider__modal" :modal-id="modalId">
        <div class="container">
          <div class="row">
            <div class="col" v-html="tooltip"></div>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import Events from '../utils/events.js';
import PricingSlider from '../utils/components/pricing-slider.js';

export default {
  tagName: 'pricing-slider',
  props: {
    slider: Object,
    tooltip: String,
    modalId: String,
    products: Object,
    light: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: true,
      options: {
        type: 'single',
        hide_min_max: !0,
        foreground_target_el: null,
        secondary_target_el: null,
        secondary_val: { steps: null, values: null },
        result_max_target_el: null,
        hide_from_to: false,
        result_min_target_el: '.js-result-price',
        extra_classes: 'range-slider-custom',
      },
    };
  },
  mounted() {
    this.pollForJQuery();
  },
  computed: {
    pricingSliderRange() {
      return this.slider && this.slider.range ? this.slider.range : {};
    },
    hsIonRangeSliderOptions() {
      return {
        extra_classes: 'range-slider-custom',
        hide_from_to: false,
        min: this.pricingSliderRange.min,
        max: this.pricingSliderRange.max,
        from: this.pricingSliderRange.from,
        step: this.pricingSliderRange.step,
        result_min_target_el: '.js-result-price',
      };
    },
  },
  methods: {
    handleRangeSliderStart(slider) {
      // TODO move JS inside the vue component
      if (!window.prepareSlider || !window.handleChange) return;

      window.prepareSlider(slider);
      window.handleChange(slider);
    },
    handleRangeSliderChange(slider) {
      if (!window.handleChange) return;

      window.handleChange(slider);
    },
    bindEvents() {
      document.addEventListener(Events.CLIENT_ONLY_LIB_LOADED, this.initRangeSlider);
    },
    initRangeSlider() {
      if (!this.$refs.slider || !window.$) return;

      this.loading = false;

      // TODO get rid of ionRangeSlider overall!!
      window.$(this.$refs.slider).ionRangeSlider(this.options);
    },
    init() {
      const { min, max, from, step, unit } = this.pricingSliderRange;

      Object.assign(this.options, { min, max, from, step, postfix: ` ${unit}` });

      this.options.onStart = this.handleRangeSliderStart;
      this.options.onChange = this.handleRangeSliderChange;

      if (this.$refs.root) {
        new PricingSlider(this.$refs.root, null, this.products?.pricing);
      }

      if (Tools.isClientOnlyLibLoaded()) {
        this.initRangeSlider();
      } else {
        this.bindEvents();
      }
    },
    pollForJQuery() {
      const maxAttempts = 30;

      let attempts = 0;

      const checkJQuery = () => {
        if (window.$) {
          this.init();

          return;
        }

        attempts++;

        if (attempts < maxAttempts) {
          setTimeout(checkJQuery, 100);
        }
      };

      checkJQuery();
    },
  },
};
</script>
