<template>
  <div :class="['timeline__entry-inner-text', { 'timeline__entry-inner-text--simple': simple }]">
    <template v-if="entry && entry.title">
      <div class="timeline__entry-title">{{ entry.title }}</div>
      <p class="timeline__entry-text">{{ entry.text }}</p>
    </template>
    <template v-else><span v-html="entry"></span></template>
  </div>
</template>
<script>
export default {
  tagName: 'timeline-entry-inner-text',
  props: {
    entry: [Object, String],
    simple: Boolean,
  },
};
</script>
