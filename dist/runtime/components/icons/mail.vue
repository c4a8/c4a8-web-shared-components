<template>
  <svg xmlns="http://www.w3.org/2000/svg" v-bind="settings" :style="style" viewBox="0 0 300 300">
    <path
      d="M25 56.25H275C275 56.25 293.75 56.25 293.75 75V225C293.75 225 293.75 243.75 275 243.75H25C25 243.75 6.25 243.75 6.25 225V75C6.25 75 6.25 56.25 25 56.25Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      :style="pathStyle"
    />
    <path d="M256.25 106.25L150 175L43.75 106.25" stroke-linecap="round" stroke-linejoin="round" :style="pathStyle" />
    <path d="M43.75 200L87.5 175" stroke-linecap="round" stroke-linejoin="round" :style="pathStyle" />
    <path d="M256.25 200L212.5 175" stroke-linecap="round" stroke-linejoin="round" :style="pathStyle" />
  </svg>
</template>
<script>
export default {
  tagName: 'mail',
  computed: {
    style() {
      return `stroke: ${this.color}; fill: none; transform: rotate(var(--icon-rotation)) scale(1.5);`;
    },
    pathStyle() {
      return `stroke-width: ${this.strokeWidthValue}`;
    },
    strokeWidthValue() {
      return this.strokeWidth * 5;
    },
  },
  props: {
    settings: Object,
    color: String,
    strokeWidth: {
      type: Number,
      default: 2,
    },
  },
};
</script>
