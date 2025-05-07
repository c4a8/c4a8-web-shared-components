<template>
  <div class="sticky-block" :class="externalClass">
    <div ref="startMarker" class="sticky-block__start pl-xl-2 pt-4">
      <div ref="stickyBlock" class="js-sticky-block" :class="{ 'hs-kill-sticky': isKilled }" :style="stickyStyles">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted, computed } from 'vue';

const props = defineProps({
  stickyOffsetTop: {
    type: Number,
    default: 100,
  },
  stickyOffsetBottom: {
    type: Number,
    default: 20,
  },
  breakpoint: {
    type: String,
    default: 'xl',
  },
  class: {
    type: [String, Object, Array],
    default: '',
  },
  isAtEnd: {
    type: Boolean,
    default: false,
  },
});

const startMarker = ref(null);
const stickyBlock = ref(null);

const scrollPosition = ref(0);
const lastScrollPosition = ref(0);

const isKilled = ref(false);
const stickyStyles = ref({
  position: '',
  top: '',
  bottom: '',
  left: '',
  width: '',
});

const externalClass = computed(() => props.class);

const resolutionsList = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const calculateTopPositionAtEnd = (scrollY = window.scrollY) => {
  return props.stickyOffsetTop + (lastScrollPosition.value - scrollY);
};

const updateStickyBlock = () => {
  if (!stickyBlock.value || !startMarker.value) return;

  const windowOffsetTop = window.scrollY;
  const startPoint = startMarker.value.getBoundingClientRect().top + windowOffsetTop;
  const parentWidth = startMarker.value.offsetWidth;
  const parentPaddingLeft = parseInt(window.getComputedStyle(startMarker.value).paddingLeft);
  const parentOffsetLeft = startMarker.value.getBoundingClientRect().left;
  const stickyHeight = stickyBlock.value.offsetHeight;

  isKilled.value = window.innerWidth <= resolutionsList[props.breakpoint];

  if (isKilled.value) {
    stickyStyles.value = {
      position: '',
      top: '',
      bottom: '',
      left: '',
      width: '',
    };

    startMarker.value.style.height = '';

    return;
  }

  const isInStickyRange = windowOffsetTop >= startPoint - props.stickyOffsetTop;

  const currentPosition = stickyStyles.value.position;
  const currentTop = stickyStyles.value.top;
  const shouldUpdate =
    (currentPosition === '' && isInStickyRange) ||
    (currentPosition === 'fixed' && !isInStickyRange) ||
    (currentPosition === 'fixed' && props.isAtEnd) ||
    (currentPosition === 'fixed' && !props.isAtEnd && currentTop !== `${props.stickyOffsetTop}px`);

  if (shouldUpdate) {
    if (isInStickyRange) {
      let topPosition = `${props.stickyOffsetTop}px`;

      if (props.isAtEnd) {
        if (lastScrollPosition.value === null) {
          lastScrollPosition.value = scrollPosition.value;
        }

        topPosition = `${calculateTopPositionAtEnd()}px`;
      } else {
        lastScrollPosition.value = null;
        scrollPosition.value = windowOffsetTop;
      }

      stickyStyles.value = {
        position: 'fixed',
        left: `${parentOffsetLeft + parentPaddingLeft}px`,
        width: `${parentWidth}px`,
        top: topPosition,
      };

      startMarker.value.style.height = `${stickyHeight}px`;
    } else {
      stickyStyles.value = {
        position: '',
        top: '',
        bottom: '',
        left: '',
        width: '',
      };

      startMarker.value.style.height = '';
    }
  }
};

onMounted(() => {
  window.addEventListener('resize', updateStickyBlock);
  window.addEventListener('scroll', updateStickyBlock);

  updateStickyBlock();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateStickyBlock);
  window.removeEventListener('scroll', updateStickyBlock);
});
</script>
