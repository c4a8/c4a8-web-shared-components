<template>
  <main class="page-content" :class="classes" aria-label="Content">
    <slot />
  </main>
  <slot name="below" />
</template>

<script>
export default {
  tagName: 'content',
  props: {
    classes: {
      type: String,
      default: null,
    },
  },
};
</script>
