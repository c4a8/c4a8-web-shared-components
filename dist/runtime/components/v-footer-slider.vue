<template>
  <div class="footer__slider-container">
    <carousel :items="items" :bg-color="bgColor" :lazy="true"> </carousel>
  </div>
</template>
<script>
export default {
  tagName: 'v-footer-slider',
  props: {
    items: Array,
    bgColor: String,
  },
};
</script>
