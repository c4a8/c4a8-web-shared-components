<template>
  <div class="svg-shape-animation">
    <svg
      class="position-absolute"
      :class="cutoff ? 'w-md-60' : ''"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 1440 965"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.0591615"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 0L316 695L1441 965L0 840V0Z"
        fill="url(#paint0_linear)"
      />
      <path
        opacity="0.0339753"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M747 147L1439 965L1440 0H340L747 147Z"
        fill="black"
      />
      <path
        opacity="0.174464"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M646 0L1261 222L1368 685L628 890L646 0Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-327.295"
          y1="767.888"
          x2="135.719"
          y2="1396.04"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-color="white" stop-opacity="0.01" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>
<script>
export default {
  tagName: 'svg-shape-animation',
  props: {
    cutoff: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
