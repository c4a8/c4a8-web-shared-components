<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.5 6.42105C19.4952 7.99 18.8409 9.49338 17.68 10.6028C16.5192 11.7122 14.9461 12.3375 13.3043 12.3421H11.2391L7.93478 15.5V12.3421H6.69565C5.05246 12.3421 3.47657 11.7183 2.31466 10.6079C1.15275 9.49746 0.5 7.99141 0.5 6.42105C0.5 4.85069 1.15275 3.34465 2.31466 2.23424C3.47657 1.12382 5.05246 0.5 6.69565 0.5H13.3043C14.9461 0.504582 16.5192 1.12988 17.68 2.2393C18.8409 3.34872 19.4952 4.8521 19.5 6.42105Z"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'outline-comment',
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
