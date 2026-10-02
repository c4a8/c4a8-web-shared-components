<template>
  <template v-if="!isStorybook">
    <slot></slot>
  </template>
  <template v-else>
    storybook
    <slot></slot>
  </template>
</template>

<script>
import Tools from "../utils/tools.js";
export default {
  name: "SharedClientOnly",
  computed: {
    isStorybook() {
      return Tools.isStorybook();
    }
  }
};
</script>
