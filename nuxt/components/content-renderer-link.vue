<template>
  <a :href="href" v-bind="$attrs" @click.prevent="handleClick" class="content-renderer-link">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps(['href']);

// TODO remove this when there are no more static pages in public

const handleClick = (event) => {
  if (props.href) {
    window.location.href = props.href;
  }
};
</script>
