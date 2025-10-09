<template>
        <div class="container" :style="newsletterStyle" >
            <div class="d-flex p-10">
                <div class="col-10">
                    <headline level="h2">{{ success ? confirmHeadline : headline }}</headline>
                    <p class="font-size-3 pt-8">{{ success ? confirmText : text }}</p>
                    <formular v-if="!success" v-bind="formular" :ajax="ajax" />
                </div>
                <div class="col-4 d-flex align-items-center z-index-1 align-content-center">
                    <v-img :lottie="lottie" :lazy="true" />
                </div>
            </div>
        </div>
</template>

<script>



export default {
    tagName: 'newsletter',
    props: {
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
                backgroundColor: "var(--color-yellow)",
            }
        },
    },
}

</script>