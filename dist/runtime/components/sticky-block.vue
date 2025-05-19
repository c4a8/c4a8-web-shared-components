<template>
  <div class="sticky-block" :class="externalClass">
    <div ref="startMarker" class="sticky-block__start">
      <div
        ref="stickyBlock"
        class="js-sticky-block pt-2"
        :class="{ 'hs-kill-sticky': isKilled, 'pl-xl-2': hasPadding }"
        :style="stickyStyles"
      >
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
    default: null,
  },
  class: {
    type: [String, Object, Array],
    default: '',
  },
  isAtEnd: {
    type: Boolean,
    default: false,
  },
  hasPadding: {
    type: Boolean,
    default: true,
  },
  stickyTopPosition: {
    type: Number,
    default: null,
  },
  endPoint: {
    type: Number,
    default: null,
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
  xl: 1280,
};

const calculateTopPositionAtEnd = (scrollY = window.scrollY) => {
  return props.stickyOffsetTop + (lastScrollPosition.value - scrollY);
};

const updateStickyBlock = () => {
  console.log('updateStickyBlock', props.isAtEnd + '###' + props.endPoint);

  if (!stickyBlock.value || !startMarker.value) return;

  const windowOffsetTop = window.scrollY;
  const startPoint = startMarker.value.getBoundingClientRect().top + windowOffsetTop;
  const parentWidth = startMarker.value.offsetWidth;
  const parentOffsetLeft = startMarker.value.getBoundingClientRect().left;

  const stickyHeight = stickyBlock.value.offsetHeight;

  // if (props.stickyTopPosition !== null) {
  //   stickyStyles.value = {
  //     position: 'fixed',
  //     left: `${parentOffsetLeft}px`,
  //     width: `${parentWidth}px`,
  //     top: props.stickyTopPosition,
  //   };

  //   return;
  // }

  isKilled.value = props.breakpoint ? window.innerWidth <= resolutionsList[props.breakpoint] : false;

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
  const currentLeft = stickyStyles.value.left;
  const shouldUpdate =
    (currentPosition === '' && isInStickyRange) ||
    (currentPosition === 'fixed' && !isInStickyRange) ||
    (currentPosition === 'fixed' && props.isAtEnd) ||
    (currentPosition === 'fixed' && currentLeft !== `${parentOffsetLeft}px`) ||
    (currentPosition === 'fixed' && !props.isAtEnd && currentTop !== `${props.stickyOffsetTop}px`);

  if (shouldUpdate) {
    if (isInStickyRange) {
      let topPosition = `${props.stickyOffsetTop}px`;

      if (props.isAtEnd) {
        console.log(
          '-------------------------- ~ updateStickyBlock ~ lastScrollPosition.value:',
          lastScrollPosition.value
        );
        if (lastScrollPosition.value === null) {
          console.log('############### outside', props.endPoint);

          if (scrollPosition.value === 0) {
            console.log('###############', props.endPoint);

            // scrollPosition.value = windowOffsetTop;
            // scrollPosition.value =
            //   props.endPoint - window.innerHeight - window.scrollY + props.stickyOffsetTop - props.stickyOffsetBottom;
            scrollPosition.value = props.endPoint - window.innerHeight - props.stickyOffsetBottom;
            // scrollPosition.value = props.stickyOffsetTop;
          }

          lastScrollPosition.value = scrollPosition.value;
          console.log('++++++++++++++🚀 ~ updateStickyBlock ~ scrollPosition.value:', scrollPosition.value);
        }

        console.log('SET THE TOOP AT END');
        topPosition = `${calculateTopPositionAtEnd()}px`;
      } else {
        lastScrollPosition.value = null;
        scrollPosition.value = windowOffsetTop;
      }

      stickyStyles.value = {
        position: 'fixed',
        left: `${parentOffsetLeft}px`,
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

// // Add watchers for props changes
// watch(
//   () => props.isAtEnd,
//   () => {
//     updateStickyBlock();
//   }
// );

watch(
  () => props.endPoint,
  () => {
    updateStickyBlock();
  }
);
</script>
