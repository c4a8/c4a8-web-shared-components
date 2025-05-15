<template>
  <div ref="endMarker" class="sticky-block-end"></div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue';

const props = defineProps({
  stickyOffsetTop: {
    type: Number,
    default: 100,
  },
  stickyOffsetBottom: {
    type: Number,
    default: 20,
  },
});

const emit = defineEmits(['update:isAtEnd']);

const endMarker = ref(null);

const checkEndPosition = () => {
  if (!endMarker.value) return;

  const windowOffsetTop = window.scrollY;
  const endPoint = endMarker.value.getBoundingClientRect().top + windowOffsetTop;
  const isAtEnd = windowOffsetTop >= endPoint - props.stickyOffsetTop - props.stickyOffsetBottom;

  emit('update:isAtEnd', isAtEnd);
};

onMounted(() => {
  window.addEventListener('scroll', checkEndPosition);
  window.addEventListener('resize', checkEndPosition);
  checkEndPosition();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkEndPosition);
  window.removeEventListener('resize', checkEndPosition);
});
</script>
