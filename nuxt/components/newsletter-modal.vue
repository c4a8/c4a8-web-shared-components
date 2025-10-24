<template>
     <div class="container" :class="isMobile ? '' : 'd-flex flex-column justify-content-center'" :style="newsletterStyle" ref="root">
        <div v-if="!isMobile" class="d-flex align-items-center p-5 p-lg-10" style="">
            <div class="col-8 col-lg-10">
                <headline :style="{ color: contrastColor }" level="h2">{{ success ? confirmation.headline : headline }}
                </headline>
                <p class="font-size-3 light pt-4 pt-lg-8">{{ success ? confirmation.text : text }}</p>
                <formular v-if="!success" v-bind="formular" :ajax="ajax" ref="form" @success="handleSuccess" />
            </div>
            <div class="col-5 col-lg-4 d-flex align-items-center z-index-1 align-content-center">
                <lottie-player class="iconBird" v-if="lottie" :animationData="idle ? lottie.idle : lottie.fly"
                    :loop="true" :autoplay="true" :onLoopComplete="setIdle" :speed="setSpeed()" />
                <icon class="iconHeart position-absolute" icon="heart" color="var(--color-red)"
                    :strokeColor="contrastColor" size="custom" customSize="20em" style="opacity: 0;" />
            </div>
        </div>
        <!-- mobile-->
        <div v-else class="d-flex flex-column justify-content-between px-5 pt-10 pb-5" style="height: inherit;">
            <div>
                <headline :style="{ color: contrastColor }" level="h2">{{ success ? confirmation.headline : headline }}
                </headline>
                <p class="font-size-3 light pt-4">{{ success ? confirmation.text : text }}</p>
            </div>

            <div><formular v-if="!success" v-bind="formular" :ajax="ajax" ref="form" @success="handleSuccess" /></div>
            <div class="d-flex justify-content-end mt-n11 mr-n11">
                <lottie-player class="iconBird" v-if="lottie" :animationData="idle ? lottie.idle : lottie.fly"
                    :loop="true" :autoplay="true" :onLoopComplete="setIdle" :speed="setSpeed()" width="300"/>
                <icon class="iconHeart position-absolute" icon="heart" color="var(--color-red)"
                    :strokeColor="contrastColor" size="custom" customSize="20em" style="opacity: 0;" />
            </div>

        </div>

    </div>
</template>
<style>
@keyframes fade-out {
    0% {}

    to {
        transform: translateX(100vw) translateY(-100vh)
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
        margin-left: -50%
    }

    to {
        opacity: 100;
    }
}

@media (prefers-reduced-motion:no-preference) {
    .fade-in-animation {
        animation: fade-in 4s 1 forwards
    }

    .fade-out-animation {
        animation: fade-out 8s 1 forwards
    }
}
</style>
<script>
import Tools from '../utils/tools';

export default {
    tagName: 'newsletter-modal',
    props: {
        bgColor: {
            type: String,
        },
        headline: {
            type: String,
        },
        text: {
            type: String,
        },
        formular: {
            type: Object,
        },
        lottie: {
            type: Object,
        },
        iconColor: {
            type: String,
            default: 'var(--color-orange)',
        },
        confirmation: {
            type: Object,
            default: null,
        },
        light: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            success: false,
            contrastColor: this.light ? 'var(--color-white)' : 'var(--color-black)',
            idle: true,
            isMobile: Tools.isBelowBreakpoint('lg')
        }
    },
    computed: {
        newsletterStyle() {
            return {
                backgroundColor: this.bgColor,
                color: this.contrastColor,
                height: '50rem'
            }
        },
    },
    methods: {
        handleSuccess() {
            document.querySelector('.iconBird').classList.add('fade-out-animation');
            document.querySelector('.iconHeart').classList.add('fade-in-animation');
            this.success = true;
        },
        setIdle() {
            if (this.success) {

                this.idle = false;

            }
        },
        setSpeed() {
            return this.success ? '15' : '1.5';
        }

    },
}
</script>