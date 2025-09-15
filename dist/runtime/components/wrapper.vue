<template>
  <template v-if="!hideContainer">
    <div :class="classList">
      <div v-if="row" class="wrapper__row row flex-column flex-lg-row">
        <slot></slot>
      </div>
      <slot v-else></slot>
    </div>
  </template>

  <template v-else>
    <slot></slot>
  </template>
</template>
<script>
export default {
  tagName: 'wrapper',
  computed: {
    classList() {
      return ['wrapper vue-component', this.classes ? this.classes : null, this.hideContainerClass ? '' : 'container'];
    },
  },
  props: {
    hideContainer: {
      default: false,
    },
    hideContainerClass: {
      default: false,
    },
    classes: {
      default: '',
    },
    row: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
