<template>
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M220.84 143.257H286.356C293.431 143.257 295.129 139.154 290.125 134.15L247.764 91.7374H170.581"
            stroke="black" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M247.761 91.7374L170.578 239.453M170.578 239.453L40.3696 290.768C33.7832 293.34 31.7122 290.768 35.7643 284.94L170.578 91.8017V239.453Z"
            stroke="black" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M170.58 91.802L89.6273 10.8752C84.6233 5.87118 80.5326 7.56922 80.5326 14.6444V220.801" stroke="black"
            stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M80.5286 72.2234L14.4725 33.9533C8.34927 30.4029 5.39056 32.9242 7.88616 39.5362L77.7114 224.596"
            stroke="black" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


</template>
<script>
export default {
    tagName: 'ribbon',
    computed: {
        style() {
            return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
        },
    },
    props: {
        settings: Object,
        color: String,
    },
};
</script>
