<template>
  <section :class="containerClasses" class="col-lg-8 row-mt-4 mx-auto justify-content-center container">
    <headline :level="'h' + headlineLevel" v-if="headline" class="space-bottom-1">{{ headline }}</headline>

    <div v-if="subline" class="testimonial-grid__subline">
      {{ subline }}
    </div>
    <div class="row">
      <div v-if="contents" v-for="(testimonial, idx) in slicedContents" :key="idx"
        :class="columnClass" class="testimonial-grid__content-block">
        <testimonial-teaser v-bind="testimonial" />
      </div>
    </div>
    <div v-if="showCta" class="testimonial-grid__cta d-flex justify-content-center mx-auto">
      <cta :text="toggleCtaText" :skin="cta.skin" :monochrome="cta.monochrome" @click="toggleLimit" />
    </div>
  </section>
</template>

<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'testimonial-grid',
  props: {
    spacing: { type: String, default: "space-top-2 space-bottom-2" },
    headline: {
      type: String,
      default: null,
    },
    headlineLevel: {
      type: Number,
      default: 2,
    },
    subline: {
      type: String,
      default: null,
    },
    contents: {
      type: Array,
      required: true,
    },
    bgColor: {
      type: String,
      default: null,
    },
    bgColorHover: {
      type: String,
      default: null,
    },
    cta: {
      type: Object,
      default: () => ({
        text: null,
        toggleText: null,
        href: null,
      }),
    },
    limit: {
      type: Number,
      default: 4
    },
    maxLimit: {
      type: Number,
      default: 10,
    },
    gridSize: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      toggleLimitValue: this.limit,
      limitValue: this.limit,
      lang: Tools.getLang(),
      isMobile: Tools.isBelowBreakpoint('md'),
    };
  },
  mounted() {
    if (this.isMobile) {
      this.limitValue = 3;
      this.toggleLimitValue = this.limitValue
    }
    const texts = {
      en: { text: 'Show more', toggleText: 'Show less' },
      de: { text: 'Mehr anzeigen', toggleText: 'Weniger anzeigen' },
      es: { text: 'Mostrar más', toggleText: 'Mostrar menos' },
    };
    const langTexts = texts[this.lang] || texts['en'];
    if (this.cta.text == null) {
      this.cta.text = langTexts.text;
    }
    if (this.cta.toggleText == null) {
      this.cta.toggleText = langTexts.toggleText;
    }
  },
  computed: {
    containerClasses() {
      return [
        this.spacing,
      ];
    },
    columnClass() {
      return 'col-lg-' + 12 / this.gridSize;
    },
    toggleCtaText() {
      return this.toggleLimitValue === this.limitValue ? this.cta.text : this.cta.toggleText;
    },
    slicedContents() {
      return this.contents.slice(0, this.toggleLimitValue);
    },
    showCta(){
      if(this.contents.length > this.limitValue){
        return true;
      }
      return false;
    }
  },
  methods: {
    toggleLimit() {
      this.toggleLimitValue = (this.toggleLimitValue === this.limitValue) ? this.maxLimit : this.limitValue;
    },
  },
};
</script>

