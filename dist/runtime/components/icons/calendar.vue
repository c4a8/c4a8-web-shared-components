<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 44 44" fill="none">
    <path
      d="M28.3578 40.2375L20.9336 42.3587L23.0548 34.9344L35.745 22.2443C36.0932 21.8961 36.5065 21.6199 36.9615 21.4314C37.4164 21.243 37.904 21.146 38.3965 21.146C38.8889 21.146 39.3765 21.243 39.8315 21.4314C40.2864 21.6199 40.6998 21.8961 41.048 22.2443C41.3962 22.5925 41.6724 23.0059 41.8608 23.4608C42.0493 23.9158 42.1463 24.4034 42.1463 24.8958C42.1463 25.3882 42.0493 25.8758 41.8608 26.3308C41.6724 26.7857 41.3962 27.1991 41.048 27.5473L28.3578 40.2375Z"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.1523 23.8369L39.4554 29.1399"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.0547 34.9363L28.3577 40.2394"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.4013 33.5203H3.25986C2.79105 33.5203 2.34143 33.334 2.00993 33.0025C1.67842 32.671 1.49219 32.2214 1.49219 31.7526V7.0051C1.49219 6.53629 1.67842 6.08667 2.00993 5.75517C2.34143 5.42366 2.79105 5.23743 3.25986 5.23743H35.078C35.5469 5.23743 35.9965 5.42366 36.328 5.75517C36.6595 6.08667 36.8457 6.53629 36.8457 7.0051V17.6112"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3262 1.70392V10.5423"
      stroke="white"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.0059 1.70392V10.5423"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.49219 14.0776H36.8457"
      :stroke-width="strokeWidthValue"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'arrow',
  computed: {
    style() {
      return `stroke: ${this.color}; transform: rotate(var(--icon-rotation)) scale(var(--icon-scale))};`;
    },
    strokeWidthValue() {
      return this.strokeWidth / 2;
    },
  },
  props: {
    settings: Object,
    color: String,
    strokeWidth: {
      type: Number,
      default: 4,
    },
  },
};
</script>
