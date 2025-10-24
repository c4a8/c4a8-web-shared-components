<template>
    <div :class="classList" ref="root">
            <div class="js-sticky-block container">
                <div class="newsletter-modal" ref="modal"> <!-- is-off-screen -->
                    <div class="newsletter-close" ref="close">
                        <icon icon="close" :circle="true" :hover="true" size="medium" :color="getContrastColor()" />
                    </div>
                    <newsletter-modal v-bind="modal" :ajax="true" :success="success" :iconColor="iconColor"
                        :bgColor="bgColor" :light="light" />
                </div>
            </div>
        <div class="newsletter-banner__wrapper">
            <div class="newsletter-banner d-flex align-items-center mx-auto" ref="icon">
                <div class="p-3" :style="bannerStyle">
                    <div class="d-flex align-items-center pr-11">
                        <span class="mx-2 font-size-2 light" :class="light ? 'text-light' : 'text-dark'">{{ text
                        }}</span>
                        <cta v-bind="cta" class="mx-2" />
                    </div>
                </div>
                <div class="ml-n11">
                    <lottie-player v-if="modal.lottie" :animationData="idle ? modal.lottie.idle : modal.lottie.fly"
                        :loop="true" :onLoopComplete="setIdle" :speed="setSpeed()" width="170" />
                </div>
            </div>
        </div>
        <a class="newsletter-trigger" ref="link"></a>
    </div>
</template>
<style>
@keyframes fly {
    0% {
        transform: translateX(-100vw)
    }

    to {
        transform: translateX(0)
    }
}

@media (prefers-reduced-motion:no-preference) {
    .banner-animation {
        animation: fly 4s 1
    }
}
</style>
<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

export default {
    tagName: 'newsletter',
    props: {
        bgColor: {
            type: String,
            default: "var(--color-yellow)",
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
            default: null,
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
                'newsletter',
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
        };
    },
    mounted() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const banner = entry.target.querySelector('.newsletter-banner');
                if (entry.isIntersecting) {
                    banner.classList.add('banner-animation');
                    return;
                }
                banner.classList.remove('banner-animation');
            });
        });
        observer.observe(document.querySelector('.newsletter-banner__wrapper'));

        this.iconElement = this.$refs.icon;
        this.linkElement = this.$refs.link instanceof NodeList ? this.$refs.link : [this.$refs.link];
        this.modalElement = this.$refs.modal;
        this.closeElement = this.$refs.close;
        this.root = this.$refs.root;
        this.init();
    },
    methods: {
        setIdle() {
            this.idle = true;
        },
        setSpeed() {
            return '1.5';
        },

        init() {
            this.bindEvents();
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
    },
    beforeDestroy() {
        window.removeEventListener('click', this.handleOutsideClick);
        document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
    },
};
</script>