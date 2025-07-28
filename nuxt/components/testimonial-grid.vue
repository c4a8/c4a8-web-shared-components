<template>
  <section :class="containerClasses"
    class="testimonial-list col-lg-8 row-mt-4 mx-auto justify-content-center container">
    <component :is="'h' + headlineLevel" v-if="headline" class="testimonial-list__headline space-bottom-1">
      {{ headline }}
    </component>
    <div v-if="subline" class="testimonial-list__subline space-bottom-2">
      {{ subline }}
    </div>
    <div class="row row-cols-2">
      <div v-for="(testimonial, idx) in contents.slice(0, toggleLimitValue)" :key="idx" :class="columnClass">
        <div class="testimonial-list__content-block">

          <testimonial-teaser :href="testimonial.href" :name="testimonial.name" :title="testimonial.title"
            :img="testimonial.img" :video="testimonial.video" :bgColor="testimonial.bgColor" />

        </div>
      </div>
    </div>
    <div class="space-top-2 d-flex justify-content-center mx-auto">
      <cta :text="toggleCtaText" :skin="cta.skin" :monochrome="cta.monochrome" @click="toggleLimit" />
    </div>
  </section>
</template>

<script>
const localeData = useLocaleData();
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
        text: null,
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
    };
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
      const localeData = useLocaleData();
      if (this.toggleLimitValue == this.limit) {
        return this.cta.text;
      } else {
        return localeData({
          de: "Weniger anzeigen",
          en: "Show less",
          es: "Mostrar menos",
        }).value;
      }
    },
  },
  methods: {
    toggleLimit() {
      if (this.toggleLimitValue == this.limit) {
        this.toggleLimitValue = this.maxLimit;
      } else {
        this.toggleLimitValue = this.limit;
      }
    },
  },
};
</script>