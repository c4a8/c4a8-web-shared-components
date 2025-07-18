<template>
    <a v-if="img" :class="[
        'testimonial-teaser',
        'testimonialTeaserAspectRatioClass',
        'utility-animation',
        'fade-in-bottom',
        'testimonialTeaserBgStyling',
        'testimonialTeaserAspectRatioStyling'
    ]" data-utility-animation-step="1" ref="root">
        <div class="testimonial-teaser__wrapper">
            <div v-if="cornerImg" class="testimonial-teaser__corner" :class="cornerImg.position">
            </div>
            <div class="testimonial-teaser__img">
                <div class="testimonial-teaser__img-wrapper">
                    <v-img :img="img.img" :alt="img.alt" :cloudinary="img.cloudinary" />
                </div>
            </div>
            <div class="testimonial-teaser__content">
                <div class="testimonial-teaser__name font-size-4 bold">

                    <div class="testimonial-teaser__name-background">
                        <div class="testimonial-teaser__name-background bg">{{ name }}</div>
                        <div class="testimonial-teaser__name-icon">
                            <icon icon="arrow" classes="testimonial-teaser__icon" size="large" />
                        </div>
                    </div>

                </div>
                <div class="testimonial-teaser__title font-size-1 bg">{{ title }}</div>
            </div>
        </div>
    </a>
    <a v-if="video" class="testimonialTeaserAspectRatioStyling testimonialTeaserAspectRatioClass" :style="{ ...testimonialTeaserBgStyling, }">
        <div @click="setVideoPlayed">
            <div class="testimonial-teaser-video-wrapper">
                <video-frame ref="video-frame" :thumb="video.thumb" :alt="video.alt" :id="video.id"
                    :fullWidth="video.fullWidth" :preset="fullscreen4k" @click="getVideoState" />
            </div>
            <div class="testimonial-teaser">
                <a class="testimonial-teaser__content"> 
                    <div class="testimonial-teaser__name font-size-4 bold">
                        <span v-for="(part, idx) in name.split(' ')" :key="idx">
                            <div class="testimonial-teaser__name-background">
                                {{ part }}
                                <template v-if="idx === name.split(' ').length - 1">
                                    <div class="testimonial-teaser__name-icon">
                                        <icon icon="arrow" classes="testimonial-teaser__icon" size="large" />
                                    </div>
                                </template>
                            </div>
                            <template v-if="idx !== name.split(' ').length - 1"><br /></template>
                        </span>
                    </div>
                    <div class="testimonial-teaser__title font-size-1 bg">{{ title }}</div>
                </a>
            </div>
        </div>
    </a>

</template>

<script>
import { noConflict } from 'jquery';
import UtilityAnimation from '../utils/utility-animation.js';
import { normalizeNewlines } from 'storybook/internal/docs-tools';
export default {
    tagName: 'testimonial-teaser',
    props: {
        href: {
            type: String,

        },
        name: {
            type: String,

        },
        title: {
            type: String,

        },
        img: {
            type: Object,
            required: false,
        },
        video: {
            type: Object,
            required: false,
        },
        cornerImg: {
            type: Object,
            default: null,
        },
        bgColor: {
            type: String,
            default: 'var(--color-primary)',
        },
        bgColorHover: {
            type: String,
            default: 'var(--color-blue-medium)',
        },
        aspectRatio: {
            type: String,
            default: '4x3',
        },
    },
    data() {
        return {
            videoPlaying: false,
        }

    },
    mounted() {
        if (!this.$refs.root) return;
        UtilityAnimation.init([this.$refs.root]);
    },

    methods: {
        getVideoState() {
            this.videoPlaying = this.$refs['video-frame'].isPlayed;
        },
        setVideoPlayed() {
            this.$refs['video-frame'].handleClick();
            this.getVideoState();
        },
    },
    computed: {
        testimonialTeaserImg() {
            return this.img || {};
        },
        testimonialTeaserImgCloudinary() {
            return this.img?.cloudinary !== undefined ? this.img.cloudinary : true;
        },
        testimonialTeaserCornerImg() {
            return this.cornerImg || null;
        },
        testimonialTeaserCornerPosition() {
            return this.cornerImg?.position === 'left'
                ? 'testimonial-teaser__corner--left'
                : 'testimonial-teaser__corner--right';
        },
        testimonialTeaserBgStyling() {
            return {
                '--color-testimonial-teaser-background': this.bgColor,
                '--color-testimonial-teaser-background-hover': this.bgColorHover,
                width: '100%',
            };
        },
        testimonialTeaserAspectRatioStyling() {
            if (this.aspectRatio && this.aspectRatio.split('x').length === 2) {
                const [width, height] = this.aspectRatio.split('x');
                return {
                    '--width-testimonial-teaser-aspect-ratio': width,
                    '--height-testimonial-teaser-aspect-ratio': height,
                };
            }
            return {};
        },
        testimonialTeaserAspectRatioClass() {
            return this.aspectRatio ? `testimonial-teaser--${this.aspectRatio}` : '';
        },
        testimonialTeaserSrcSet() {
            if (this.aspectRatio) {
                const srcSetName = `testimonialTeaser${this.aspectRatio}`;
                return this.$root.$options.site?.data?.imgSrcSets?.[srcSetName] || null;
            }
            return null;
        },
    },
};
</script>
