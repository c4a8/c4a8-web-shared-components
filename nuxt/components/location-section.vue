<template>
  <slider :hide-background="true" :hideContainer="true" :options="sliderOptions">
    <v-img v-for="img in images" :key="index" :cloudinary="img.cloudinary" :img="img.img" />
  </slider>
  <div class="container">
    <headline level="h4">{{ overline }}</headline>
    <headline level="h2">{{ headline }}</headline>
    <div v-for="entry in contactEntries">
        
      <p>{{ entry.headline }}</p>
      <p>{{ entry.subline }}</p>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'location-section',
  props: {
    headline: String,
    overline: String,
    locationEntries: Object,
    contactEntries: Array,
    images: Array,
  },
  computed: {
    sliderOptions() {
      return {
        dots: false,
        prevArrow: '<span class="slick__arrow-left rounded-circle mx-11 bg-white"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle mx-11 bg-white"></span>',
      };
    },
  },
};
</script>
