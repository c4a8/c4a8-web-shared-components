<template>
  <div ref="rootElement" class="sticky-block" :style="styles">
    <div class="sticky-block__start">
      <div ref="stickyBlock" class="js-sticky-block pt-2" :class="{ 'pl-xl-2': hasPadding }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed, nextTick } from 'vue';
import Tools from '../utils/tools.js';

const props = defineProps({
  stickyOffsetTop: {
    type: Number,
    default: 100,
  },
  breakpoint: {
    type: String,
    default: null,
  },
  hasPadding: {
    type: Boolean,
    default: true,
  },
  calculateHeight: {
    type: Boolean,
    default: false,
  },
});

const rootElement = ref(null);
const stickyBlock = ref(null);
const rootHeight = ref(0);
const isBreakpointActive = ref(true);

const updateBreakpointState = () => {
  if (!props.breakpoint) {
    isBreakpointActive.value = true;
  } else {
    isBreakpointActive.value = Tools.isAboveBreakpoint(props.breakpoint);
  }
};

const styles = computed(() => {
  if (!isBreakpointActive.value) {
    return {};
  }

  return {
    position: 'sticky',
    top: typeof props.stickyOffsetTop === 'number' ? `${props.stickyOffsetTop}px` : props.stickyOffsetTop,
    height: rootHeight.value > 0 ? `${rootHeight.value}px` : null,
  };
});

const handleResize = () => {
  if (props.calculateHeight) {
    rootHeight.value = 0;

    if (stickyBlock.value) {
      rootHeight.value = stickyBlock.value.offsetHeight;
    }
  }

  updateBreakpointState();
};

onMounted(() => {
  nextTick(() => {
    handleResize();
  });

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
