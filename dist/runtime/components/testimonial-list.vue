<template>
  <section class="testimonial-list col-lg-8 col-md-8 mt-6 mt-lg-8 mx-auto">
    <component :is="'h' + headlineLevel" v-if="headline" class="testimonial-list__headline">
      {{ headline }}
    </component>
    <div v-if="subline" class="testimonial-list__subline">
      {{ subline }}
    </div>
    <div v-for="(testimonial, idx) in contents" :key="idx" class="space-top-2">
      <div v-if="isOdd(idx)" class="testimonial-list__content-block row">
        <div class="col-lg-8">
          <testimonial-teaser 
          :href="testimonial.href" 
          :name="testimonial.name"
          :title="testimonial.title" 
          :img="testimonial.img"
          :video="testimonial.video"
          :bgColor="testimonial.bgColor"
          :aspect-ratio="getAspectRatio(idx + 1)" />
        </div>
        <div v-if="hasNext(idx)" class="testimonial-list__content col-lg-6">
          <testimonial-teaser 
          :href="testimonial.href" 
          :name="testimonial.name"
          :title="testimonial.title" 
          :img="testimonial.img"
          :video="testimonial.video"
          :bgColor="testimonial.bgColor"
          :aspect-ratio="getAspectRatio(idx + 1)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  tagName: 'testimonial-list',
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
  },
  computed: {
    isEven() {
      return this.contents.length % 2 === 0;
    },
  },
  methods: {
    isOdd(idx) {
      return idx % 2 === 0;
    },
    hasNext(idx) {
      return idx + 1 < this.contents.length;
    },
    getAspectRatio(idx) {
      const i = idx + 1;
      const wide1 = i % 4 === 0;
      const wide2 = (i - 1) % 4 === 0;
      let aspect = (wide1 || wide2) ? '16x9' : '4x3';
      if (i % 2 !== 0 && !this.isEven && i === this.contents.length) {
        aspect = '4x3';
      }
      return aspect;
    },
  },
};
</script>