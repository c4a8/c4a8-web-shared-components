<template>
  <svg v-bind="settings" :style="style" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.0002 16.5L1.90354 8.37111C1.19343 7.69207 0.723586 6.81021 0.562112 5.85334C0.400639 4.89648 0.555929 3.91434 1.00547 3.04931C1.35182 2.39385 1.85138 1.82696 2.46384 1.3944C3.0763 0.96184 3.7845 0.675726 4.53127 0.559154C5.27803 0.442581 6.04245 0.498815 6.76282 0.723317C7.48319 0.947818 8.13933 1.3343 8.67828 1.85156L10.0002 3.02675L11.3221 1.85156C11.8611 1.33446 12.5173 0.948126 13.2376 0.723724C13.9579 0.499322 14.7223 0.443137 15.469 0.5597C16.2157 0.676263 16.9239 0.962312 17.5363 1.39477C18.1488 1.82722 18.6484 2.39398 18.9949 3.04931C19.4442 3.9144 19.5993 4.89648 19.4379 5.85328C19.2764 6.81009 18.8067 7.69194 18.0968 8.37111L10.0002 16.5Z"
      :stroke="stroke"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'outline-heart',
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
