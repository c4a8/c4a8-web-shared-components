<template>
  <div class="d-flex align-items-center justify-content-center">
    <div class="d-flex position-absolute justify-content-between w-100 z-index-999">
      <div class="prev-element pl-5">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.4" cx="26.8889" cy="26.8889" r="26.3889" fill="#999BA6" stroke="#000520" />
          <path
            d="M31.1777 39.6178L19.5786 27.1902L31.1777 14.7625"
            stroke="#000520"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="next-element pr-5">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            opacity="0.4"
            cx="26.8889"
            cy="26.8889"
            r="26.3889"
            transform="matrix(-1 0 0 1 53.7778 0)"
            fill="#999BA6"
            stroke="#000520"
          />
          <path
            d="M22.6 39.6178L34.1992 27.1902L22.6 14.7625"
            stroke="#000520"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <slider v-bind="sliderConfig" class="pb-5" :v2="true">
      <v-img v-for="(img, index) in images" :key="index" :cloudinary="img.cloudinary" :img="img.img" />
    </slider>
  </div>
  <div class="container">
    <div class="row row-cols-2 pb-5">
      <div>
        <headline level="h5">{{ overline }}</headline> <headline level="h3">{{ headline }}</headline>
      </div>
      <div class="d-flex align-items-center justify-content-end">
        <cta text="Landingpage" />
      </div>
    </div>
    <div class="d-flex pt-2 row row-cols-3">
      <div class="d-flex flex-column">
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
          :trigger="locationCta.trigger"
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
    sliderConfig() {
      return {
        hideContainer: true,
        hideBackground: true,

        options: {
          dots: false,
          navigation: { enabled: true, nextEl: '.next-element', prevEl: '.prev-element' },
          breakpoints: {
            320: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
              loop: true,
            },
          },
        },
      };
    },
  },
  mounted() {
    const test = 1;
  },
};
</script>
