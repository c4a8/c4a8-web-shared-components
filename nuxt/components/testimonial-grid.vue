<template>
  <section :class="containerClasses" class="col-lg-8 row-mt-4 mx-auto justify-content-center container">
    <component :is="'h' + headlineLevel" v-if="headline" class="space-bottom-1">
      {{ headline }}
    </component>
    <div v-if="subline" class="testimonial-grid__subline">
      {{ subline }}
    </div>
    <div class="row">
      <div v-if="contents" v-for="(testimonial, idx) in contents.slice(0, toggleLimitValue)" :key="idx" :class="columnClass"
        class="testimonial-grid__content-block">
        <testimonial-teaser :href="testimonial.href" :name="testimonial.name" :title="testimonial.title"
          :img="testimonial.img" :video="testimonial.video" :bgColor="testimonial.bgColor" />
      </div>
    </div>
    <div class="testimonial-grid__cta d-flex justify-content-center mx-auto">
      <cta :text="toggleCtaText" :skin="cta.skin" :monochrome="cta.monochrome" @click="toggleLimit" />
    </div>
  </section>
</template>

<script>
export default {
  tagName: 'testimonial-grid',
  props: {
    spacing: { type: String, default: "space-top-2 space-bottom-2" },
    headline: {
      type: String,
      default: null,
    },
    headlineLevel: {
      type: [String, Number],
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
        text: "Show more",
        toggleText: "Show less",
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
    };
  },
  mounted() {
    if (window.screen.width < 768) {
      this.limitValue = 3;
      this.toggleLimitValue = this.limitValue
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
  },
  methods: {
    toggleLimit() {
      this.toggleLimitValue = (this.toggleLimitValue === this.limitValue) ? this.maxLimit : this.limitValue;
    },
  },
};
</script>

