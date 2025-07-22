<template>
    <template v-if="img">
        <a class="testimonial-teaser utility-animation fade-in-bottom" :class="[
        ]" :style="bgStyling" :href="href" data-utility-animation-step="1" ref="root">
            <div class="testimonial-teaser__wrapper">
                <div v-if="cornerImg" class="testimonial-teaser__corner" :class="cornerPosition">
                    <img-html :img="cornerImg.img" :alt="cornerImg.alt" :cloudinary="cornerImg.cloudinary" />
                </div>
                <div class="testimonial-teaser__img">
                    <div class="testimonial-teaser__img-wrapper" :style="aspectRatioClass">
                        <v-img :img="img.img" :alt="img.alt" :cloudinary="img.cloudinary" :imgSrcSets="imgSrcSet"
                            class="testimonial-teaser-vimg"  :style="imgObjectPositionClass"/>
                    </div>
                </div>
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
        </a>
    </template>
    <template v-if="video">
        <a class=" utility-animation fade-in-bottom testimonial-video-teaser" :class="[
        ]" :style="bgStyling" :href="href" data-utility-animation-step="1" ref="root">
            <div class="testimonial-teaser-video">
                <video-frame ref="video-frame" :thumb="video.thumb" :alt="video.alt" :id="video.id"
                    :fullWidth="video.fullWidth" @click="getVideoState" />
            </div>
            <div>
                <a class="testimonial-teaser__content" @click="setVideoPlayed">
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
        </a>
    </template>
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
        imgPosition: {
            type: String,
            default: '50% 50%',
        },
        cloudinary: {
            type: Boolean,
            default: true,
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
            default: '16/9',
        },
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
        aspectRatioClass() {
            return `--testimonial-teaser-aspect-ratio: ${this.aspectRatio};`;
        },
        imgObjectPositionClass() {
            return `--testimonial-teaser-img-object-position: ${this.imgPosition};`;
        },
        cornerPosition() {
            return this.cornerImg?.position === 'left'
                ? 'testimonial-teaser__corner--left'
                : 'testimonial-teaser__corner--right';
        },
        bgStyling() {
            return `--color-testimonial-teaser-background: ${this.bgColor}; --color-testimonial-teaser-background-hover: ${this.bgColorHover}; width: 100%;`;
        },
        nameReplaced() {
            return this.name
                .split(' ')
                .map(word => `<div class="testimonial-teaser__name-background">${word}</div>`)
                .join('<br/>');
        },
        imgSrcSet() {
            if (!this.aspectRatio) return false;
            const key = `testimonialTeaser${this.aspectRatio}`;
            return this.$site?.data?.imgSrcSets?.[key] || false;
        },
    },
};
</script>
