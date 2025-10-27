<template>
    <div v-if="!isMobile" class="d-flex align-items-center container newsletter-modal__content" :style="{ color: contrastColor }">
        <div class="col-10">
            <headline :style="{ color: contrastColor }" level="h2">{{ success ? confirmation.headline : headline }}
            </headline>
            <p class="font-size-3 pt-4 pt-lg-8">{{ success ? confirmation.text : text }}</p>
            <formular v-if="!success" v-bind="formular" :ajax="ajax" ref="form" @success="handleSuccess" />
        </div>
        <div class="col-5 col-lg-4 d-flex align-items-center z-index-1 align-content-center">
            <lottie-player class="iconBird" v-if="lottie" :animationData="idle ? lottie.idle : lottie.fly" :loop="true"
                :autoplay="true" :onLoopComplete="setIdle" :speed="setSpeed()" />
            <icon class="iconHeart position-absolute" icon="heart" color="var(--color-red)" :strokeColor="contrastColor"
                size="custom" customSize="20em" style="opacity: 0;" />
        </div>
    </div>
    <!-- mobile-->
    <div v-else class="d-flex flex-column justify-content-between p-4" :style="newsletterStyle">
        <div class="mb-n2">
            <headline :style="{ color: contrastColor }" level="h3">{{ success ? confirmation.headline : headline }}
            </headline>
            <p>{{ success ? confirmation.text : text }}</p>
        </div>
        <div class="mt-n5 d-flex justify-content-center align-items-center">
            <formular v-if="!success" v-bind="formular" :ajax="ajax" ref="form" @success="handleSuccess"
                :style="{ display: success ? 'none' : '' }" />
            <icon class="iconHeart" icon="heart" color="var(--color-red)" :strokeColor="contrastColor" size="custom"
                customSize="15em" style=" opacity: 0;" :style="{ display: success ? '' : 'none' }" />
        </div>
        <div class="position-fixed d-flex justify-content-center align-items-center"
            style="bottom: 20%; left: 0; right: 0;">
            <lottie-player class="iconBird position-absolute" v-if="lottie"
                :animationData="idle ? lottie.idle : lottie.fly" :loop="true" :autoplay="true" :onLoopComplete="setIdle"
                :speed="setSpeed()" width="220" height="220" style=" right: 0;" />

        </div>

    </div>


</template>
<style>
@keyframes fade-out {
    to {
        transform: translateX(100vw) translateY(-100vh)
    }
}

@keyframes fade-in {
    0% {
        margin-left: -50%;
        opacity: 0
    }

    to {
        opacity: 1
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
            idle: true,
            contrastColor: this.light ? 'var(--color-white)' : 'var(--color-black)',
            isMobile: Tools.isBelowBreakpoint('lg')
        }
    },

    methods: {
        handleSuccess() {
            document.querySelector('.iconBird').classList.add('fade-out-animation');
            document.querySelector('.iconHeart').classList.add('fade-in-animation');
            this.success = true;
        },
        setIdle() {
            return this.success ? this.idle = false : this.idle = true;
        },
        setSpeed() {
            return this.success ? 40 : 1;
        }
    },
}
</script>