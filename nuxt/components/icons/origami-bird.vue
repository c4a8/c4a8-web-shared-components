<template>
    <svg width="252" height="242" viewBox="0 0 252 242" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path
            d="M135.149 76.0783H199.117L234.299 111.203C238.563 115.461 237.497 118.654 231.1 118.654H176.728L135.149 198.484L27.4705 241.059C22.1399 243.188 20.0077 241.059 23.206 235.737L58.3881 185.711L0.817413 32.4382C-1.31483 27.1162 0.817413 24.9874 6.14804 28.1806L60.5204 60.1124V12.2147C60.5204 6.89272 63.7188 4.76393 67.9833 9.02151L135.149 76.0783Z"
            :style="fillStyle"  style="box-shadow: 10px 5px 5px"/>
        <path d="M190.113 114.07H244.486C250.358 114.07 251.767 110.67 247.614 106.524L212.458 71.3826H148.402"
            :style="strokeStyle" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M212.458 71.3826L148.402 193.776M148.402 193.776L40.3401 236.293C34.874 238.425 33.1552 236.293 36.5181 231.465L148.402 71.4359V193.776Z"
            :style="strokeStyle" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M148.401 71.4358L81.2175 4.38233C77.0646 0.236126 73.6696 1.64307 73.6696 7.50531V178.321"
            :style="strokeStyle" stroke="#000520" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M73.6699 55.2133L18.8489 23.5039C13.7671 20.5621 11.3116 22.6512 13.3827 28.1297L71.3319 181.465"
             :style="strokeStyle" stroke="#000520" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

</template>
<script>
export default {
    tagName: 'origami-bird',
    computed: {
        fillStyle() {
                 return `fill: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
        },
        strokeStyle() {
            return `stroke: ${this.strokeColor};`;
        },
    },
    props: {
        settings: Object,
        color: {
            String,
            default: 'var(--color-orange)'
        },
        strokeColor: {
            String,
            default: 'var(--color-black)'
        },
    }
};
</script>
