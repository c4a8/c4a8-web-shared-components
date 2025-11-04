<template>
    <lightbox>
        <slot v-if="variant === 'noImg'" />
        <v-img v-else v-bind="teaser ? teaser : images[0]"/>
        <template #lightbox-content>
                <slider :hide-background="true" :hideContainer="true" :options="sliderOptions" overflow="true"class="col-10">
                    <div v-for="img in images" :key="index">
                        <v-img :cloudinary="img.cloudinary" :img="img.img" class="w-100 mx-auto" />
                        <div class="d-flex justify-content-center text-light font-size-1 py-4" v-if="img.caption">{{ img.caption }}</div>
                    </div>
                </slider>
        </template>
    </lightbox>
</template>
<script>


export default {
    tagName: 'lightbox-slider',
    computed: {
        sliderOptions() {
            return {
                dots: false,
                prevArrow: '<span class="slick__arrow-left rounded-circle bg-white"></span>',
                nextArrow: '<span class="slick__arrow-right rounded-circle bg-white"></span>',
            };
        },
    },
    props: {
        variant: String,
        teaser: Object,
        images: Array,
    },
};
</script>
