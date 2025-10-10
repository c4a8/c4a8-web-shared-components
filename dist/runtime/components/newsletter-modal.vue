<template>
        <div class="container d-flex flex-column justify-content-center" :style="newsletterStyle" >
            <div class="d-flex p-10">
                <div class="col-10">
                    <headline level="h2">{{ success ? confirmHeadline : headline }}</headline>
                    <p class="font-size-3 pt-8">{{ success ? confirmText : text }}</p>
                    <formular v-if="!success" v-bind="formular" :ajax="ajax" />
                </div>
                <div class="col-4 d-flex align-items-center z-index-1 align-content-center">
                    <v-img v-if="!success" :lottie="lottie" :lazy="true" />
                    <v-img v-if="success" src="https://res.cloudinary.com/c4a8/image/upload/v1760085223/visuals/icon-heart.svg" />
                </div>
            </div>
        </div>
</template>
<script>
export default {
    tagName: 'newsletter',
    props: {
        bgColor: {
            type: String,
            default: "var(--color-yellow)",
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
        confirmHeadline: {
            type: String,
       
        },
        confirmText: {
            type: String,
        },
        success: Boolean,
        ajax: Boolean,
    },
    computed: {
        newsletterStyle() {
            return {
                backgroundColor: this.bgColor,
                height: "50rem",
            }
        },
    },
}
</script>