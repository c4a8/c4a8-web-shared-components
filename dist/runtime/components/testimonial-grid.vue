<template>


    <section class="testimonial-list col-lg-8 row-mt-4 mx-auto justify-content-center">
    <component :is="'h' + headlineLevel" v-if="headline" class="testimonial-list__headline space-bottom-1">
      {{ headline }}
    </component>
    <div v-if="subline" class="testimonial-list__subline space-bottom-2">
      {{ subline }}
    </div>
    <div class="row row-cols-2 space-between-0">
      <div v-for="(testimonial, idx) in contents.slice(0, limitValue)" :key="idx" :class="columnClass">
        <div class="testimonial-list__content-block">
        <testimonial-teaser :href="testimonial.href" :name="testimonial.name" :title="testimonial.title"
          :img="testimonial.img" :video="testimonial.video" :bgColor="testimonial.bgColor"
          :aspect-ratio="getAspectRatio(idx + 1)" style="width: auto;" />
      </div></div>
      <div class="space-top-2 d-flex justify-content-center mx-auto" v-if="contents.length > limitValue">
        <cta v-if="contents.length > limitValue" :text="cta.text" :href="cta.href" :skin="cta.skin" />    <!-- TODO: CTA action-->
      </div>

    </div>

  </section>

</template>

<script>
export default {
  tagName: 'testimonial-grid',
  props: {
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
    maxLimit: Number,
    gridSize: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    columnClass() {
      return 'col-lg-' + 12 / this.gridSize;
    },
    limitValue() {
      return this.limit ? this.limit : this.defaultLimit;
    },
    maxLimitValue() {
      return this.maxLimit > 0 ? this.maxLimit : this.maxLimitDefault;
    },
  },
  methods: {
    limitValue() {
      return this.limit ? this.limit : this.defaultLimit;
    },
    maxLimitValue() {
      return this.maxLimit > 0 ? this.maxLimit : this.maxLimitDefault;
    },
    getAspectRatio(idx) {
      let aspect =  '4x3';
      return aspect;
    },
  },
};
</script>