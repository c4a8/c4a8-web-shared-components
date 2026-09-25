<template>
  <div class="blur-fade" aria-hidden="true">
    <div v-for="layer in layers" :key="layer.index" class="blur-fade__layer" :style="layer.style"></div>
    <div v-if="tint" class="blur-fade__tint" :style="tintStyle"></div>
  </div>
</template>
<script>
export default {
  tagName: 'blur-fade',
  computed: {
    stepCount() {
      const steps = Number(this.steps);

      return steps >= 2 ? Math.floor(steps) : 4;
    },
    gradientDirection() {
      const directions = {
        right: 'to right',
        left: 'to left',
        top: 'to top',
        bottom: 'to bottom',
      };

      return directions[this.direction] ? directions[this.direction] : directions.right;
    },
    layers() {
      const count = this.stepCount;
      const step = 100 / count;
      const max = Number(this.maxBlur) > 0 ? Number(this.maxBlur) : 16;

      return Array.from({ length: count }, (_, i) => {
        const index = i + 1;
        const blur = Math.round((max / Math.pow(2, i)) * 100) / 100;
        const stops = [];

        // every layer is opaque within its own band and cross-fades into its neighbours,
        // so the doubling blur radii blend into a ramp instead of visible steps
        if (index > 1) stops.push(`transparent ${(index - 2) * step}%`);

        stops.push(`#000 ${(index - 1) * step}%`);

        if (index < count) stops.push(`#000 ${index * step}%`);

        stops.push(`transparent ${Math.min(100, (index + 1) * step)}%`);

        const mask = `linear-gradient(${this.gradientDirection}, ${stops.join(', ')})`;

        return {
          index,
          style: {
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            maskImage: mask,
            WebkitMaskImage: mask,
          },
        };
      });
    },
    tintStyle() {
      if (!this.tint) return null;

      return {
        backgroundImage: `linear-gradient(${this.gradientDirection}, ${this.tint} 0%, transparent 100%)`,
      };
    },
  },
  props: {
    // direction the fade becomes clear in – the blurry end is the opposite edge
    direction: {
      type: String,
      default: 'right',
    },
    maxBlur: {
      type: [Number, String],
      default: 16,
    },
    steps: {
      type: [Number, String],
      default: 4,
    },
    // colour at the blurry edge, fading to transparent towards the clear one
    tint: {
      type: String,
      default: '',
    },
  },
};
</script>
<style>
.blur-fade{pointer-events:none}.blur-fade,.blur-fade__layer,.blur-fade__tint{inset:0;position:absolute}
</style>
