<template>
  <div
    :class="[
      'testimonials-detail',
      'page-detail',
      'page-detail--image',
      'is-loading',
      testimonialsDetailLight ? 'page-detail--light' : ''
    ]"
    :style="{
      '--page-detail-color': `var(${testimonialsDetailColor})`,
      '--color-icon-hover-color': 'var(--page-detail-color)'
    }"
  >
    <div class="page-detail__container container">
      <div class="page-detail__start row">
        <div class="page-detail__sticky-start col-md-11 col-lg-5">
          <div
            class="page-detail__intro js-sticky-block"
            data-hs-sticky-block-options='{
              "parentSelector": ".page-detail__sticky-start",
              "breakpoint": "lg",
              "startPoint": ".page-detail__sticky-start",
              "endPoint": ".page-detail__sticky-end",
              "stickyOffsetTop": 200,
              "stickyOffsetBottom": 20
            }'
          >
            <div class="testimonials-detail__cta page-detail__back page-detail__animation-3 back back--animated">
              <icon
                icon="arrow"
                direction="left"
                :hover="true"
                :circle="true"
              />
            </div>
            <headline
              :text="testimonialsDetailName"
              :level="headlineLevel"
              :classes="headlineClasses"
            />
            <span class="testimonials-detail__subline page-detail__subline">{{ testimonialsDetailSubline }}</span>
            <div class="page-detail__img page-detail__animation-3">
              <img
                :img="testimonialsDetailImage.img"
                :alt="testimonialsDetailImage.alt"
                :cloudinary="testimonialsDetailImageCloudinary"
                :img-src-sets="imgSrcSets"
              />
            </div>
          </div>
        </div>
        <div class="page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
          <div class="page-detail__description richtext has-no-border">
            {{ testimonialsDetailDescription }}
          </div>
        </div>
      </div>
    </div>
    <div class="page-detail__sticky-end"></div>
  </div>
</template>

<script>
export default {
  tagName: 'testimonials-detail',
  props: {
    detailColor: {
      type: String,
      default: '--color-testimonials'
    },
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    location: {
      type: String,
      default: ''
    },
    light: {
      type: Boolean,
      default: false
    },
    headlineLevel: {
      type: String,
      default: 'h1'
    },
    headlineClasses: {
      type: String,
      default: 'h2-font-size bold'
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: () => ({ img: '', alt: '' })
    },
    imgSrcSets: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    testimonialsDetailColor() {
      return this.detailColor || '--color-testimonials';
    },
    testimonialsDetailTitle() {
      return this.title;
    },
    testimonialsDetailName() {
      return this.name.replace(/ /g, '<br/>');
    },
    testimonialsDetailLocation() {
      return this.location;
    },
    testimonialsDetailLight() {
      return this.light;
    },
    testimonialsDetailHeadlineLevel() {
      return this.headlineLevel;
    },
    testimonialsDetailHeadlineClasses() {
      return this.headlineClasses || 'h2-font-size bold';
    },
    testimonialsDetailDescription() {
      return this.description;
    },
    testimonialsDetailImage() {
      return this.image;
    },
    testimonialsDetailImageCloudinary() {
      return this.image?.cloudinary !== undefined ? this.image.cloudinary : true;
    },
    testimonialsDetailSubline() {
      if (this.testimonialsDetailLocation) {
        return `${this.testimonialsDetailTitle} | ${this.testimonialsDetailLocation}`;
      }
      return this.testimonialsDetailTitle;
    },
    headlineLevel() {
      return this.testimonialsDetailHeadlineLevel || 'h1';
    },
    headlineClasses() {
      return `testimonials-detail__headline page-detail__headline ${this.testimonialsDetailHeadlineClasses}`;
    }
  }
};
</script>
