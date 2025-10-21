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
  contentHeight: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['update:isAtEnd', 'update:endPoint']);

const endMarker = ref(null);

const checkEndPosition = () => {
  if (!endMarker.value) return;

  const scrollY = window.scrollY;
  const endTopPosition = endMarker.value.getBoundingClientRect().top + scrollY;
  const isAtEnd = scrollY >= endTopPosition - props.contentHeight - props.stickyOffsetBottom;
  const endPoint = endTopPosition - props.contentHeight - props.stickyOffsetBottom;

  emit('update:isAtEnd', isAtEnd);
  emit('update:endPoint', endPoint);
};

onMounted(() => {
  // window.addEventListener('scroll', checkEndPosition);
  // window.addEventListener('resize', checkEndPosition);
  // checkEndPosition();
});

onUnmounted(() => {
  // window.removeEventListener('scroll', checkEndPosition);
  // window.removeEventListener('resize', checkEndPosition);
});
</script>
