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

const emit = defineEmits(['update:isAtEnd', 'update:endPoint', 'update:distanceToEnd']);

const endMarker = ref(null);

const checkEndPosition = () => {
  if (!endMarker.value) return;

  // console.group();
  const scrollY = window.scrollY;
  const endTopPosition = endMarker.value.getBoundingClientRect().top + scrollY;
  // console.log(
  //   '🚀 ~ checkEndPosition ~ endMarker.value.getBoundingClientRect().top:',
  //   endMarker.value.getBoundingClientRect().top
  // );
  const isAtEnd = scrollY >= endTopPosition - props.stickyOffsetTop - props.stickyOffsetBottom;
  // console.log('🚀 ~ checkEndPosition ~ isAtEnd:', isAtEnd);

  const endPoint = endTopPosition - props.stickyOffsetTop - props.stickyOffsetBottom;
  const distanceToEnd = endTopPosition - props.stickyOffsetTop - props.stickyOffsetBottom - scrollY;
  // console.log('🚀 ~ checkEndPosition ~ scrollY:', scrollY);
  // console.log('🚀 ~ checkEndPosition ~ endPoint:', endPoint);
  // console.log('🚀 ~ checkEndPosition ~ distanceToEnd:', distanceToEnd);

  // console.groupEnd();

  emit('update:isAtEnd', isAtEnd);
  emit('update:endPoint', endPoint);
  emit('update:distanceToEnd', distanceToEnd);
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
