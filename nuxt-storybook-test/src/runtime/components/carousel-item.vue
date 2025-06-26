<template>
  <component :is="item.url ? 'a' : 'span'" :href="item.url" :target="item.target" class="carousel__item">
    <v-img :cloudinary="true" v-bind="item" :class="item.classes"></v-img>
  </component>
</template>
<script>
export default {
  tagName: 'carousel-item',
  props: {
    item: Object,
  },
};
</script>
