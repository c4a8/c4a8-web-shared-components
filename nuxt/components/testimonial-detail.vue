<template>
  <div
    :class="['testimonials-detail', 'page-detail', 'page-detail--image', light ? 'page-detail--light' : '']"
    :style="{
      '--page-detail-color': `var(${detailColor})`,
      '--color-icon-hover-color': 'var(--page-detail-color)',
    }"
  >
    <div class="page-detail__container container">
      <div class="page-detail__start row">
        <div class="page-detail__sticky-start col-md-11 col-lg-5">
          <sticky-block class="page-detail__intro js-sticky-block" :data-hs-sticky-block-options="stickyOptions">
            <icon icon="arrow" direction="left" :hover="true" :circle="true" size="medium" />

            <headline
              :text="computedName"
              :level="headlineLevel"
              :classes="
                'testimonials-detail__headline page-detail__headline pt-5' +
                (headlineClasses ? ` ${headlineClasses}` : ' h2-font-size bold')
              "
            />
            <span class="testimonials-detail__subline page-detail__subline">{{ computedSubline }}</span>
            <div class="page-detail__img page-detail__animation-3">
              <v-img v-bind="image" :cloudinary="!cloudinary ? true : image.cloudinary" />
            </div>
          </sticky-block>
        </div>
        <div class="page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
          <div class="page-detail__description richtext has-no-border">
            <p>{{ introText }}</p>
            <ContentRenderer v-if="body" :value="body" tag="div" />
            <template v-else>{{ description }}</template>
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
      default: '--color-testimonials',
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    light: {
      type: Boolean,
      default: false,
    },
    headlineLevel: {
      type: String,
      default: 'h1',
    },
    headlineClasses: {
      type: String,
      default: 'h2-font-size bold',
    },
    introText: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => ({ img: '', alt: '' }),
    },
    imgSrcSets: {
      type: Object,
      default: () => ({}),
    },
    body: {
      type: Object,
      default: null,
    },
  },
  computed: {
    computedName() {
      return this.name.replace(/ /g, '<br/>');
    },
    computedSubline() {
      if (this.title) {
        return `${this.title} | ${this.location}`;
      }
      return this.title;
    },
    stickyOptions() {
      return JSON.stringify({
        parentSelector: '.page-detail__sticky-start',
        breakpoint: 'lg',
        startPoint: '.page-detail__sticky-start',
        endPoint: '.page-detail__sticky-end',
        stickyOffsetTop: 200,
        stickyOffsetBottom: 20,
      });
    },
  },
};
</script>
