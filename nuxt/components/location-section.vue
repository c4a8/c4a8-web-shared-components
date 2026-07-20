<template>
  <div :class="[classList, 'location-section']" :style="{ backgroundColor: backgroundColor }">
    <div
      v-if="images && images.length > 0"
      class="location-section__slider-container d-flex align-items-center justify-content-center"
    >
      <div
        class="location-section__slider-controls position-absolute d-flex align-items-center justify-content-center col-10 col-xxl-11 mx-auto z-index-2"
      >
        <div class="slick__arrow-left rounded-circle" :class="`prev-element-${instanceId}`"></div>
        <div class="slick__arrow-right rounded-circle" :class="`next-element-${instanceId}`"></div>
      </div>
      <slider v-bind="sliderConfig" :v2="true">
        <div v-for="(img, index) in sliderImages" class="location-section__slider-image-wrapper">
          <v-img
            :key="index"
            :cloudinary="img.cloudinary"
            :img="img.img"
            :imgSrcSets="img.srcSets || imgSrcSets"
            class="location-section__slider-image"
          />
        </div>
      </slider>
    </div>

    <div class="location-section__content container pt-lg-8 pt-5 ">
      <div class="col-12 pb-5 d-flex justify-content-between">
        <div><headline level="h5" :text="overline" /> <headline level="h3" :text="headline" /></div>
        <div v-if="landingpageCta" class="d-flex align-items-center">
          <cta v-bind="landingpageCta" />
        </div>
      </div>
      <div class="col-12 d-flex pt-2 flex-wrap row-cols-lg-3 row-cols-1">
        <div class="d-flex flex-column">
          <headline level="h5" class="pv-2" :text="locationHeadline" />
          <div v-for="entry in locationEntries" class="font-size-1 py-1">
            <div class="d-flex align-items-start">
              <icon :icon="entry.icon" size="small" class="pr-2 pt-1" />
              <p v-html="entry.content"></p>
            </div>
          </div>
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
      <cta v-bind="locationCta" v-if="locationCta" class=" col-12 pt-3 pt-lg-0"/>
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
      default: 'transparent',
    },
  },
  computed: {
    imgSrcSets() {
      return {
        srcSets: [
          {
            params: 'c_fill,ar_16:10',
          },
        ],
      };
    },
    classList() {
      return this.classes ? this.classes : 'mb-5 pb-11';
    },
    sliderImages() {
      if (!this.images || this.images.length === 0) return [];
      const minRequired = 8;
      if (this.images.length >= minRequired) return this.images;
      const result = [];
      while (result.length < minRequired) {
        result.push(...this.images);
      }
      return result;
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
              slidesPerView: 2.5,
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
<style>
.location-section__slider-image-wrapper {
  aspect-ratio: 4/3;
}
.location-section__slider-image {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

</style>
