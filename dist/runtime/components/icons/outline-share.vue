<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.9145 9.62318V4.64762C17.9145 4.42769 17.8271 4.21676 17.6716 4.06124C17.5161 3.90573 17.3051 3.81836 17.0852 3.81836H0.5"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.81704 7.13409L0.5 3.81704L3.81704 0.5"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.15918 10.4521V15.4277C2.15918 15.6476 2.24655 15.8586 2.40206 16.0141C2.47907 16.0911 2.57049 16.1522 2.6711 16.1938C2.77171 16.2355 2.87954 16.257 2.98844 16.257H19.5737"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.2559 12.9395L19.5729 16.2565L16.2559 19.5735"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'outline-share',
  computed: {
    style() {
      return `transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    stroke() {
      return this.color;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
};
</script>
