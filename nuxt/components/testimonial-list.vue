<template>

    <div
      v-for="(testimonial, index) in contents"
      :key="index"
      class="testimonial-list__contents"
    >
      <div
        v-if="isOdd(index)"
        class="testimonial-list__content-block row"
      >
       
          <testimonial-teaser
            v-if="!testimonial.hidden"
            :href="testimonial.url"
            :name="testimonial.name"
            :title="testimonial.title"
            :img="testimonial.contentImg"
            :corner-img="testimonial.cornerImg"
            :bg-color="bgColor"
            :bg-color-hover="bgColorHover"
            :aspect-ratio="getAspectRatio(index)"
          />
        
      </div>
      <div
        v-else
        class="testimonial-list__content col-lg-6"
      >
        <testimonial-teaser
          v-if="!testimonial.hidden"
          :href="testimonial.url"
          :name="testimonial.name"
          :title="testimonial.title"
          :img="testimonial.contentImg"
          :corner-img="testimonial.cornerImg"
          :bg-color="bgColor"
          :bg-color-hover="bgColorHover"
          :aspect-ratio="getAspectRatio(index)"
        />
      </div>
    </div>

</template>

<script>
import { get } from 'jquery';
import State from '../utils/state.js';
import Tools from '../utils/tools.js';

export default {
  props: {
    headline: { type: String, default: '' },
    headlineLevel: { type: [String, Number], default: '2' },
    subline: { type: String, default: '' },
    contents: { type: Array, default: () => [] },
    bgColor: { type: String, default: 'var(--color-blue-light)' },
    bgColorHover: { type: String, default: 'var(--color-blue-medium)' },
  },
  computed: {
    listSize() {
      return this.contents.length;
    },
    isEven() {
      return this.listSize % 2 === 0;
    },
  },
  methods: {
    isOdd(index) {
      return (index + 1) % 2 !== 0;
    },
    getAspectRatio(index) {
      const idx = index + 1;
      const wideValue1 = idx % 4;
      const wideValue2 = (idx - 1) % 4;
      let aspectRatio = (wideValue1 === 0 || wideValue2 === 0) ? '16/9' : '4/3';
      if (
        this.isOdd(index) &&
        !this.isEven &&
        idx === this.listSize
      ) {
        aspectRatio = '4/3';
      }
      return aspectRatio;
    },
    handleScrollEvent() {
      
      const hiddenTestimonials = document.querySelectorAll(`.testimonial-list__content:not(.${State.SHOW})`);
      hiddenTestimonials.forEach((testimonial) => {
        if (Tools.isInViewportPercent(testimonial, 30)) {
          testimonial.classList.add(State.SHOW);
        }
      });
      
    },
    currentlyInViewPort() {

      const testimonials = document.querySelectorAll('.testimonial-list__content');
      testimonials.forEach((testimonial) => {
        if (Tools.isInViewportPercent(testimonial, 5)) {
          testimonial.classList.add(State.SHOW);
        }
      });
      
    },
  },
  mounted() {
    this.currentlyInViewPort();
    document.addEventListener('scroll', this.handleScrollEvent);
  },
  beforeUnmount() {
    document.removeEventListener('scroll', this.handleScrollEvent);
  },
};
</script>
