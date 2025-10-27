<template>
    <div :class="classList" ref="root">
        <div :class="isMobile ? '' : 'js-sticky-block'">

     

                <div class="newsletter-modal is-off-screen" ref="modal" :style="modalStyle">
                    <div class="newsletter-close" ref="close">
                        <icon icon="close" :circle="true" :hover="true" size="medium" :color="getContrastColor()" />
                    </div>
                    <newsletter-modal v-bind="modal" :ajax="true" :success="success" :iconColor="iconColor"
                        :bgColor="bgColor" :light="light" />
                </div>
            
        </div>
        <div class="newsletter-banner__wrapper">
            <div class="newsletter-banner mx-auto " ref="icon">
                <div :style="bannerStyle" :class="isMobile ? 'w-80 mx-2' : ''">

                    <div :class="isMobile ? 'py-2 px-3' : 'px-3 py-2 row row-cols-2'" class="d-flex align-items-center">
                        <div v-if="!isMobile" class="d-flex align-items-center font-size-2 light col-9"
                            :class="[light ? 'text-light' : 'text-dark', isMobile ? '' : '']">{{ text }}</div>
                        <div class="d-flex justify-content-center" :class="isMobile ? 'pr-9' : 'col-2'">
                            <cta v-bind="cta" />

                        </div>
                    </div>

                </div>
                <div class="position-relative">
                    <lottie-player class="position-absolute mb-n5 bottom-0" v-if="modal.lottie"
                        :animationData="idle ? modal.lottie.idle : modal.lottie.fly" :autoplay="setAutoplay()"
                        :width="isMobile ? '130' : '180'" :height="isMobile ? '130' : '180'"
                        :style="isMobile ? 'right: 0;' : 'right: -5em'" ref="lottie" />
                </div>
            </div>



        </div>
        <a class="newsletter-trigger" ref="link"></a>
    </div>
</template>
<style>
@keyframes fly{0%{transform:translateX(-100vw)}to{transform:translateX(0)}}@media (prefers-reduced-motion:no-preference){.banner-animation{animation:fly 4.5s 1}}
</style>
<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

import birdIdle from '/Users/lisa.nagl/Code/c4a8-web-shared-components/nuxt/stories/data/BirdieNoFlap.json';
import birdFly from '/Users/lisa.nagl/Code/c4a8-web-shared-components/nuxt/stories/data/BirdieFlap.json';

export default {
    tagName: 'newsletter',
    props: {
        bgColor: {
            type: String,
            default: "#fcd117",
        },
        icon: {
            type: String,
            default: 'origami-bird',
        },
        modal: {
            type: Object,
            default: null,
        },
        noSticky: {
            type: Boolean,
            default: false,
        },

        iconColor: {
            type: String,
            default: 'var(--color-orange)',
        },
        text: {
            type: String,
        },
        cta: {
            type: Object,
            default: null,
        },
        light: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        classList() {
            return [
                'newsletter font-weight-light',
                { [this.expandedClass]: this.isExpanded },
            ];
        },
        iconStyle() {
            let style = {};
            if (this.bgColor) style = this.bgColor;
            if (this.iconColor) style.color = this.iconColor;

            return style;
        },
        bannerStyle() {
            return {
                backgroundColor: this.bgColor,


            }
        },
      
       modalStyle() {
            return {
                backgroundColor: this.bgColor,
                color: this.contrastColor,
            }
        },

        success() {
            return this.success;
        },

    },
    data() {
        return {
            resetDelay: 300,
            isExpanded: false,
            expandedClass: State.EXPANDED,
            offScreenClass: State.OFF_SCREEN,
            success: false,
            idle: false,
            animationCompleted: false,
            isMobile: Tools.isBelowBreakpoint('lg'),
            flyAnimationDuration: 4500,
        };
    },
    mounted() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const banner = entry.target.querySelector('.newsletter-banner');
                if (entry.isIntersecting) {
                    if (!this.animationCompleted) {
                        this.lottie.play();
                 
                    banner.classList.add('banner-animation');
                    setTimeout(() => {
                        this.animationCompleted = true;
                        banner.classList.remove('banner-animation');
                        this.idle = true;
                        this.lottie.play();
                    }, this.flyAnimationDuration);
   }
                }

            });
        });
        observer.observe(document.querySelector('.newsletter-banner__wrapper'));

        this.iconElement = this.$refs.icon;
        this.linkElement = this.$refs.link instanceof NodeList ? this.$refs.link : [this.$refs.link];
        this.modalElement = this.$refs.modal;
        this.closeElement = this.$refs.close;
        this.lottie = this.$refs.lottie;
        this.root = this.$refs.root;
        this.init();

        if (this.isMobile) {
            this.modal.formular.form.ctaPosition = 'justify-content-start';

        }
    },
    methods: {
        init() {
            this.bindEvents();
            this.hexToRGB();

        },
        bindEvents() {
            if (!this.iconElement || !this.modalElement) return this.bindTriggerEvent();

            this.linkElement.forEach((link) => {
                link.addEventListener('click', this.handleClick);
            });
            this.iconElement.addEventListener('click', this.handleClick);
            this.closeElement?.addEventListener('click', this.handleClose);

            document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
            window.addEventListener('click', this.handleOutsideClick);

            this.modalElement.style.opacity = '1';
            this.modalElement.style.opacity = '';
        },
        bindTriggerEvent() {
            this.iconElement.addEventListener('click', this.handleTriggerClick);
        },
        handleTriggerClick(e) {
            const target = e.currentTarget;
            const triggerId = target.dataset.triggerId;

            document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, { detail: { id: triggerId } }));
        },
        handleOutsideClick(e) {
            if (
                this.root.classList.contains(this.expandedClass) &&
                Tools.isOutsideOf('newsletter', e) &&
                Tools.isOutsideOf('newsletter-trigger', e)
            ) {
                this.handleClose();
            }
            if (!Tools.isOutsideOf('newsletter-trigger', e)) {
                this.handleClick();
            }
        },
        handleClose() {
            this.handleClick();

            setTimeout(() => {
                document.dispatchEvent(
                    new CustomEvent(Events.FAB_BUTTON_CLOSE, {
                        detail: { target: this.root },
                    })
                );
            }, this.resetDelay);
        },
        handleClick() {
            this.isExpanded = !this.isExpanded;
            this.modalElement.classList.toggle(this.offScreenClass);

            if (this.modalElement.classList.contains(this.offScreenClass)) {
                this.modalElement.style.opacity = '';
            }
        },
        getContrastColor() {
            if (this.light) {
                return 'var(--color-white)';
            }
            return 'var(--color-black)';
        },
        hexToRGB() {
            if (!this.iconColor) return null;
            let colorVal = this.iconColor;
            let r, g, b;

            if (colorVal.startsWith('var(')) {
                colorVal = getComputedStyle(this.$refs.root || document.documentElement).getPropertyValue(
                    colorVal.slice(4, -1)
                ).trim();
            }
            let hex = colorVal.replace(/^#/, '');
            const num = parseInt(hex, 16);
            r = (num >> 16) & 255;
            g = (num >> 8) & 255;
            b = num & 255;
            if (r !== undefined && g !== undefined && b !== undefined) {
                birdFly.assets[1].layers[3].shapes[0].it[1].c.k = [r / 255, g / 255, b / 255];
                birdIdle.assets[1].layers[3].shapes[0].it[1].c.k = [r / 255, g / 255, b / 255];
            }
        },
        setAutoplay() {
            if (this.animationCompleted) {
                return true;
            }
            return false;
        }
    },

    beforeDestroy() {
        window.removeEventListener('click', this.handleOutsideClick);
        document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
    },
};
</script>