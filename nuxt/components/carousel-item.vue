<template>
  <component
    :is="item.url ? 'a' : 'span'"
    :href="item.url"
    :target="item.target"
    :class="['carousel__item', component ? `carousel__item--${component}` : '']"
    @click="handleClick"
  >
    <div
      :class="['carousel__item-tile', item.classes]"
      v-if="component == 'tile'"
      :style="{
        '--carousel-item-tile-color': item.color,
        '--carousel-item-tile-text-color': item.textColor,
      }"
    >
      <div class="carousel__item-overline">{{ item.overline }}</div>
      <div class="carousel__item-title">{{ item.title }}</div>
      <icon class="carousel__item-icon" icon="arrow" size="medium" stroke-width="6" />
    </div>
    <v-img :cloudinary="true" v-bind="item" :class="item.classes" v-else></v-img>
  </component>
</template>
<script>
export default {
  tagName: 'carousel-item',
  props: {
    item: Object,
    component: String,
  },
  methods: {
    handleClick(event) {
      if (!this.component) return;

      event.preventDefault();

      this.$emit('click', this.item);
    },
  },
};
</script>
