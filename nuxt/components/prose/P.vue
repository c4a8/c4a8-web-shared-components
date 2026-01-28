<template>
  <p :class="paragraphClasses">
    <slot />
  </p>
</template>

<script setup>
import { useSlots, computed } from 'vue';

const slots = useSlots();

const hasImage = computed(() => {
  const defaultSlot = slots.default?.();
  if (!defaultSlot) return false;

  return defaultSlot.some((vnode) => {
    return vnode?.type?.tag === 'img';
  });
});

const paragraphClasses = computed(() => {
  const classes = ['prose-p'];

  if (hasImage.value) {
    classes.push('has-img');
  }

  return classes;
});
</script>
