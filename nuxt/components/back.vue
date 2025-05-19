<template>
  <div class="back back--animated" :class="classes">
    <icon icon="arrow" direction="left" :hover="true" :circle="true" />
  </div>
</template>
<script>
export default {
  name: 'back',
  props: {
    classes: {
      type: String,
      default: '',
    },
  },
};
</script>
