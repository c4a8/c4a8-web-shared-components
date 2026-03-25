<template>
  <svg v-bind="settings" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle opacity="0.4" cx="26.8889" cy="26.8889" r="26.3889" fill="#999BA6" stroke="#000520" />
    <path
      d="M31.1777 39.6178L19.5786 27.1902L31.1777 14.7625"
      stroke="#000520"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  tagName: 'arrow-prev',
  props: {
    settings: Object,
  },
};
</script>
