<template>
  <slider :hideBackground="true" :hideContainer="true" :options="sliderOptions" class="pb-5" :v2="true">
    <v-img v-for="img in images" :key="index" :cloudinary="img.cloudinary" :img="img.img" />
  </slider>
  <div class="container">
    <headline level="h5">{{ overline }}</headline>
    <headline level="h3">{{ headline }}</headline>
    <div class="d-flex pt-2">
      <div class="d-flex flex-column pr-11">
        <headline level="h5" class="pv-2">Adresse</headline>
        <div v-for="entry in locationEntries" class="font-size-1 py-1">
          <div class="d-flex align-items-start">
            <icon :icon="entry.icon" size="small" class="pr-2" />
            <p v-html="entry.content"></p>
          </div>
        </div>
        <cta
          :link="true"
          :text="locationCta.text"
          :href="locationCta.href"
          :reversed="true"
          class="d-flex justify-content-end"
        />
      </div>
      <div class="d-flex flex-column">
        <headline level="h5" class="pb-2">Kontakt</headline>
        <div v-for="entry in contactEntries" class="font-size-1">
          <div class="d-flex align-items-start my-n1">
            <icon :icon="entry.icon" size="small" class="pr-2" />
            <p v-html="entry.content"></p>
          </div>
        </div>
      </div>
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
    locationCta: Object,
    contactEntries: Array,
    images: Array,
  },
  computed: {
    sliderOptions() {
      return {
        dots: false,
        navigation: true,
        prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
        nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
        breakpoints: {
          320: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
            loopAdditionalSlides: 3,
            spaceBetween: 30,
            rewind: true,
          },
        },
      };
    },
  },
};
</script>

<style>
.swiper {
  border: 4px solid red !important
}
</style>
