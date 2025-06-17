<template>
  <div class="awards mt-8 mt-lg-10 space-bottom-2">
    <div class="container">
      <div class="row">
        <div :class="awardsColsValue">
          <div class="awards__header d-flex">
            <headline :level="level" :text="awards.headline" :classes="headlineClasses" />
          </div>
          <p class="my-2 font-size-2" v-if="!visualOnly">
            {{ awards.subline }}
          </p>
          <p class="mt-6 w-lg-75" v-if="!visualOnly">
            {{ awards.text }}
          </p>
        </div>
        <div class="col-lg-6 pt-8" v-if="!visualOnly">
          <div class="mb-3 ml-lg-4 w-md-75" v-for="(image, index) in awards.images" :key="index">
            <v-img :img="image.image" :alt="image.alt" :cloudinary="true" />
          </div>
        </div>
      </div>
      <div class="row" v-if="visualOnly">
        <div :class="`col-lg-${awardsCol} pt-8`" v-for="(image, index) in awards.images" :key="index">
          <div class="mb-3 ml-1">
            <v-img :img="image.image" :alt="image.alt" :cloudinary="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  tagName: 'awards',
  props: {
    awards: {
      type: Object,
      required: true,
    },
    level: {
      type: String,
      default: 'h3',
    },
    visualOnly: {
      type: Boolean,
      default: false,
    },
    cols: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    awardsColsValue() {
      return this.visualOnly ? 'col-lg-12 justify-content-center' : 'col-lg-6';
    },
    awardsCol() {
      return Math.floor(12 / this.cols);
    },
    headlineClasses() {
      const base = this.awards.headlineClasses || 'h2-font-size';
      return `${base} awards__headline`;
    },
  },
};
</script>
