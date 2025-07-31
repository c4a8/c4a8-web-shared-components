<template>
    <svg width="297" height="295" viewBox="0 0 297 295" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M268.935 128.887V248.21C268.948 253.036 268.002 257.818 266.15 262.28C264.298 266.743 261.577 270.8 258.143 274.217C254.709 277.635 250.629 280.346 246.137 282.197C241.645 284.047 236.829 284.999 231.966 284.999H46.9685C37.1639 284.999 27.7608 281.134 20.8278 274.254C13.8949 267.373 10 258.042 10 248.312V64.6208C10 54.8908 13.8949 45.5593 20.8278 38.6792C27.7608 31.799 37.1639 27.9338 46.9685 27.9338H204.227"
            stroke="#000520" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M85.2718 110.67L125.556 166.626C128.431 170.632 132.788 173.338 137.667 174.148C142.547 174.959 147.55 173.809 151.577 170.95C152.868 170.013 154.036 168.92 155.054 167.694L287 10"
            stroke="#000520" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

</template>
<script>
export default {
    tagName: 'checkbox',
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
