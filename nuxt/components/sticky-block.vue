<template>
  <div ref="rootElement" class="sticky-block" :style="styles">
    <div ref="startMarker" class="sticky-block__start">
      <div ref="stickyBlock" class="js-sticky-block pt-2" :class="{ 'pl-xl-2': hasPadding }">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed, watch } from 'vue';
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
    top: `${props.stickyOffsetTop}px`,
    float: 'left',
    height: `${rootHeight.value}px`,
  };
});

const handleResize = () => {
  if (stickyBlock.value) {
    rootHeight.value = stickyBlock.value.offsetHeight;
  }
  updateBreakpointState();
};

onMounted(() => {
  if (stickyBlock.value) {
    rootHeight.value = stickyBlock.value.offsetHeight;
  }

  updateBreakpointState();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
