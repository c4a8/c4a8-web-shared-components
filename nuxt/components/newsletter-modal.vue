<template>
    <div class="container d-flex flex-column justify-content-center" :style="newsletterStyle" ref="root">
        <div class="d-flex align-items-center p-10">
            <div class="col-10">
                <headline :style="{ color: contrastColor }" level="h2">{{ success ? confirmation.headline : headline }}
                </headline>

                <p class="font-size-3 light pt-8">{{ success ? confirmation.text : text }}</p>
                <formular v-if="!success" v-bind="formular" :ajax="ajax" ref="form" @success="handleSuccess" />

            </div>
            <div class="col-4 d-flex align-items-center z-index-1 align-content-center">

                <lottie-player class="iconBird" v-if="lottie" :animationData="success ? lottie.fly : lottie.idle" :loop="true" :autoplay="true" />

                <!-- <v-img  v-if="lottie" :lottie="lottie.idle" :lazy="true" style="width: 20em;" />
               <icon  icon="origami-bird" :color="iconColor" :strokeColor="contrastColor" size="custom" 
                    customSize="20em" />-->
                <icon class="iconHeart position-absolute" icon="heart" color="var(--color-red)"
                    :strokeColor="contrastColor" size="custom" customSize="20em" style="opacity: 0;" />
            </div>
        </div>

    </div>
</template>
<style>
@keyframes fade-out {
    from {
        opacity: 100;
    }
    to {
      
        opacity: 0;
        margin-left: 150%
        
    }
}

@keyframes fade-in {
    from {
        opacity: 0;
        margin-left: -100%
    }
    to {
        opacity: 100;
    }
}

@media (prefers-reduced-motion: no-preference) {
    .fade-in-animation {
        animation: fade-in 4s 1 forwards;
    }

    .fade-out-animation {
        animation: fade-out 8s 1 forwards;
    }
}
</style>
<script>

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
        }
    },
    computed: {
        newsletterStyle() {
            return {
                backgroundColor: this.bgColor,
                height: "50rem",
                color: this.contrastColor,
            }
        },
    },
    methods: {
        handleSuccess() {
            document.querySelector('.iconBird').classList.add('fade-out-animation');
            document.querySelector('.iconHeart').classList.add('fade-in-animation');
            this.success = true;
        },
  
    },
}

</script>