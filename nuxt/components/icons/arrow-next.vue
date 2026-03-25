<template>
  <svg v-bind="settings" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      opacity="0.4"
      cx="26.8889"
      cy="26.8889"
      r="26.3889"
      transform="matrix(-1 0 0 1 53.7778 0)"
      fill="#999BA6"
      stroke="#000520"
    />
    <path
      d="M22.6 39.6178L34.1992 27.1902L22.6 14.7625"
      stroke="#000520"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'arrow-next',
  props: {
    settings: Object,
  },
};
</script>
