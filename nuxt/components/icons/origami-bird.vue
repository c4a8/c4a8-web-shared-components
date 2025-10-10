<template>
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1035_30)">
            <path
                d="M163.516 95.9789H239.49L281.275 137.765C286.34 142.83 285.074 146.628 277.477 146.628H212.899L163.516 241.596L35.6259 292.245C29.2948 294.778 26.7623 292.245 30.561 285.914L72.3467 226.401L3.97006 44.0633C1.43759 37.7321 3.97006 35.1997 10.3012 38.9984L74.8792 76.9854V20.0048C74.8792 13.6737 78.6779 11.1412 83.7428 16.2061L163.516 95.9789Z"
                fill="#5CBBFF" />
            <path d="M227.871 139.323H292.45C299.424 139.323 301.097 135.278 296.165 130.345L254.41 88.54H178.331"
                stroke="#000520" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path
                d="M254.411 88.54L178.332 234.143M178.332 234.143L49.987 284.722C43.4949 287.258 41.4534 284.722 45.4476 278.978L178.332 88.6034V234.143Z"
                stroke="#000520" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M178.333 88.6029L98.5388 8.8341C93.6064 3.90164 89.5742 5.57538 89.5742 12.5493V215.756"
                stroke="#000520" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M89.5732 69.3041L24.4623 31.5816C18.4267 28.082 15.5104 30.5672 17.9702 37.0847L86.7964 219.497"
                stroke="#000520" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1035_30">
                <rect width="300" height="300" fill="white" />
            </clipPath>
        </defs>
    </svg>
</template>
<script>
export default {
    tagName: 'origami-bird',
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
