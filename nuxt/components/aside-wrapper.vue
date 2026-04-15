<template>
  <div class="aside-wrapper vue-component">
    <div class="aside-wrapper__content">
      <slot name="content"></slot>
    </div>
    <aside class="aside-wrapper__aside">
      <slot name="aside"></slot>
    </aside>
  </div>
</template>
<script>
export default {
  tagName: 'aside-wrapper',
  methods: {},
  props: {},
};
</script>
<style lang="scss" scoped>
.aside-wrapper {
  display: flex;
  gap: spacing(14);

  p {
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .aside-wrapper__content {
    margin-top: spacing(12);
    flex: 1 1 60%;
  }

  .aside-wrapper__aside {
    margin-top: spacing(12);
    flex: 1 1 40%;
    img {
      width: 100%;
      margin-bottom: 3rem;
    }
  }

  @include media-breakpoint-down(xl) {
    flex-direction: row;
  }
  @include media-breakpoint-down(md) {
    flex-direction: column;
  }
}
</style>
