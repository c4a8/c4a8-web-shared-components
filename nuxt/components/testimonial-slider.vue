<template>
    <div class="testimonials-slider container" ref="root"
        :class="[testimonialsSliderSpacing, { 'is-sticky-scroller': testimonialsSliderSticky }]">
        <div class="testimonials-slider__header row">
            <div class="col-lg-12 utility-animation fade-in-bottom" data-utility-animation-step="1">
                <headline :text="testimonialsSliderHeadline" :level="testimonialsSliderHeadlineLevel" />
                <div class="testimonials-slider__subline mt-4" v-if="testimonialsSliderSubline">
                    {{ testimonialsSliderSubline }}
                </div>
            </div>
        </div>
        <div class="row mt-6">
            <div class="col-lg-12">
                <div class="testimonials-slider__slides js-slick-carousel"  ref="container"
                    :data-hs-slick-carousel-options="slickOptions">
                    <div v-for="testimonial in filteredSlides">
                        <testimonial-teaser v-if="!testimonial.hidden" :key="testimonial.uid" :href="testimonial.url"
                            :name="testimonial.name" :title="testimonial.title" :img="testimonial.sliderImg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tools from '../utils/tools.js';
export default {
    tagName: 'testimonial-slider',
    props: {
        headline: {
            type: String,
            default: null,
        },
        headlineLevel: {
            type: [String, Number],
            default: null,
        },
        subline: {
            type: String,
            default: null,
        },
        slides: {
            type: Array,
            default: () => [],
        },
        sticky: {
            type: Boolean,
            default: false,
        },
        ignoreLang: {
            type: Boolean,
            default: false,
        },
        spacing: {
            type: String,
            default: 'space-bottom-3',
        },
        lang: {
            type: String,
            default: 'de',
        },
    },
    mounted() {
        Tools.initSlickSlider(this.$refs.container, this.slickOptions);
        if (!this.$refs.root) return;
        UtilityAnimation.init([this.$refs.root]);
    },
    computed: {
        testimonialsSliderHeadline() {
            return this.headline;
        },
        testimonialsSliderHeadlineLevel() {
            return this.headlineLevel;
        },
        testimonialsSliderSubline() {
            return this.subline;
        },
        testimonialsSliderSticky() {
            return this.sticky;
        },
        testimonialsSliderSpacing() {
            return this.spacing;
        },
        sortedSlides() {
            return [...this.slides] //.sort((a, b) => (a.uid > b.uid ? 1 : -1));
        },
        filteredSlides() {
            if (this.ignoreLang) {
                return this.sortedSlides;
            }
            return this.sortedSlides//.filter(item => item.lang === this.lang);
        },
        slickOptions() {
            return {
                dots: true,
                dotsClass: 'slick-pagination is-default mt-8 mb-n6',
                prevArrow: '<span class="slick__arrow-left rounded-circle"></span>',
                nextArrow: '<span class="slick__arrow-right rounded-circle"></span>',
                slidesToScroll: 1,
                slidesToShow: 2,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            variableWidth: false,
                        },
                    },
                    {
                        todobreakpoint: 576,
                        settings: 'unslick',
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                        },
                    },
                ],
            };
        },
    },
};
</script>
