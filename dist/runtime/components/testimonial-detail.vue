<template>
    <div
        :class="[
            'testimonials-detail',
            'page-detail',
            'page-detail--image',
            'is-loading',
            { 'page-detail--light': detailLight }
        ]"
        :style="{
            '--page-detail-color': `var(${detailColor})`,
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
                            :text="detailNameBr"
                            :level="headlineLevel"
                            :classes="headlineClasses"
                        />
                        <span class="testimonials-detail__subline page-detail__subline">{{ detailSubline }}</span>
                        <div class="page-detail__img page-detail__animation-3">
                            <img
                                :img="detailImage?.img"
                                :alt="detailImage?.alt"
                                :cloudinary="detailImageCloudinary"
                                :img-src-sets="imgSrcSets"
                            />
                        </div>
                    </div>
                </div>
                <div class="page-detail__content page-detail__animation-3 col-md-11 offset-lg-1 col-lg-6">
                    <div class="page-detail__description richtext has-no-border">
                        {{ description }}
                    </div>
                </div>
            </div>
        </div>
        <div class="page-detail__sticky-end"></div>
    </div>
</template>

<script>
export default {
    tagName: 'testimonial-detail',
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
        detailLight: {
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
            default: () => ({})
        },
        imageCloudinary: {
            type: Boolean,
            default: true
        },
        imgSrcSets: {
            type: [Object, Array],
            default: null
        }
    },
    computed: {
        detailNameBr() {
            return this.name.replace(/ /g, '<br/>');
        },
        detailSubline() {
            return this.location
                ? `${this.title} | ${this.location}`
                : this.title;
        },
        detailImage() {
            return this.image || {};
        },
        detailImageCloudinary() {
            return this.imageCloudinary;
        }
    }
};
</script>
