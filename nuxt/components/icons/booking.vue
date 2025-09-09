<template>
<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_7925_74)">
<path d="M31.3578 42.2375L23.9336 44.3587L26.0548 36.9344L38.745 24.2443C39.0932 23.8961 39.5065 23.6199 39.9615 23.4314C40.4164 23.243 40.904 23.146 41.3965 23.146C41.8889 23.146 42.3765 23.243 42.8315 23.4314C43.2864 23.6199 43.6998 23.8961 44.048 24.2443C44.3962 24.5925 44.6724 25.0059 44.8608 25.4608C45.0493 25.9158 45.1463 26.4034 45.1463 26.8958C45.1463 27.3882 45.0493 27.8758 44.8608 28.3308C44.6724 28.7857 44.3962 29.1991 44.048 29.5473L31.3578 42.2375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M37.1523 25.8369L42.4554 31.1399" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.0547 36.9363L31.3577 42.2394" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.4013 35.5203H6.25986C5.79105 35.5203 5.34143 35.334 5.00993 35.0025C4.67842 34.671 4.49219 34.2214 4.49219 33.7526V9.0051C4.49219 8.53629 4.67842 8.08667 5.00993 7.75517C5.34143 7.42366 5.79105 7.23743 6.25986 7.23743H38.078C38.5469 7.23743 38.9965 7.42366 39.328 7.75517C39.6595 8.08667 39.8457 8.53629 39.8457 9.0051V19.6112" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3262 3.70392V12.5423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.0059 3.70392V12.5423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.49219 16.0776H39.8457" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_7925_74">
<rect width="46" height="46" fill="white"/>
</clipPath>
</defs>
</svg>

</template>
<script>
export default {
  tagName: 'bin',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale)); stroke-linecap:round; stroke-linejoin:round;`;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
