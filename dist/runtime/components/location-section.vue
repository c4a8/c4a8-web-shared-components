<template>
  <div :class="[classList, 'location-section']" :style="{ backgroundColor: backgroundColor }">
    <div class="location-section__slider-container d-flex align-items-center justify-content-center">
      <div
        class="location-section__slider-controls position-absolute d-flex align-items-center justify-content-center col-10 col-xxl-11 mx-auto z-index-2"
      >
        <div class="slick__arrow-left rounded-circle" :class="`prev-element-${instanceId}`"></div>
        <div class="slick__arrow-right rounded-circle" :class="`next-element-${instanceId}`"></div>
      </div>
      <slider v-bind="sliderConfig" class="" :v2="true">
        <v-img v-for="(img, index) in images" :key="index" :cloudinary="img.cloudinary" :img="img.img" />
      </slider>
    </div>
    <div class="location-section__content container pt-5">
      <div class="row row-cols-2 pb-5">
        <div><headline level="h5" :text="overline" /> <headline level="h3" :text="headline" /></div>
        <div v-if="landingpageCta" class="d-flex align-items-center justify-content-end">
          <cta v-bind="landingpageCta" />
        </div>
      </div>
      <div class="d-flex pt-2 row row-cols-3">
        <div class="d-flex flex-column">
          <headline level="h5" class="pv-2" :text="locationHeadline" />
          <div v-for="entry in locationEntries" class="font-size-1 py-1">
            <div class="d-flex align-items-start">
              <icon :icon="entry.icon" size="small" class="pr-2 pt-1" />
              <p v-html="entry.content"></p>
            </div>
          </div>
          <cta
            v-bind="locationCta"
            v-if="locationCta"
            :class="locationCta.classes ? locationCta.classes : 'd-flex justify-content-end'"
          />
        </div>
        <div class="d-flex flex-column">
          <headline level="h5" class="pb-2" :text="contactHeadline" />
          <div v-for="entry in contactEntries" class="font-size-1">
            <div class="d-flex align-items-start my-n1">
              <icon :icon="entry.icon" size="small" class="pr-2 pt-1" />
              <p v-html="entry.content"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let instanceCounter = 0;

export default {
  tagName: 'location-section',
  data() {
    return {
      instanceId: ++instanceCounter,
    };
  },
  props: {
    classes: String,
    overline: String,
    headline: String,
    locationHeadline: String,
    contactHeadline: String,
    locationEntries: Object,
    locationCta: Object,
    contactEntries: Array,
    landingpageCta: Object,
    images: Array,
    backgroundColor: {
      type: String,
      default: 'var(--color-surface-background)',
    },
  },
  computed: {
    classList() {
      return this.classes ? this.classes : 'mb-7 pb-11';
    },
    sliderConfig() {
      return {
        hideContainer: true,
        hideBackground: true,
        options: {
          dots: false,
          navigation: {
            enabled: true,
            nextEl: `.next-element-${this.instanceId}`,
            prevEl: `.prev-element-${this.instanceId}`,
          },
          loop: true,
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
            },
          },
        },
      };
    },
  },
};
</script>
