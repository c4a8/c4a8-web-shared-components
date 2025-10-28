<template>
    <lightbox>
        <v-img v-bind="teaser ? teaser : images[0]"/>
        <template #lightbox-content>
                <slider :hide-background="true" :hideContainer="true" :options="sliderOptions" overflow="true"class="col-10">
                    <v-img v-for="img in images" :key="index" :cloudinary="img.cloudinary" :img="img.img" class="w-100 mx-auto" />
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
        teaser: Object,
        images: Array,
    },
};
</script>
