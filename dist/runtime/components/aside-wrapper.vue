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
<style scoped>
.aside-wrapper {
  display: flex;
  gap: 3.5rem;
}
.aside-wrapper p:last-of-type {
  margin-bottom: 0;
}
.aside-wrapper .aside-wrapper__content {
  margin-top: 3rem;
  flex: 1 1 60%;
}
.aside-wrapper .aside-wrapper__aside {
  margin-top: 3rem;
  flex: 1 1 40%;
}
.aside-wrapper .aside-wrapper__aside img {
  width: 100%;
  margin-bottom: 3rem;
}
@media (max-width: 1339.98px) {
  .aside-wrapper {
    flex-direction: row;
  }
}
@media (max-width: 991.98px) {
  .aside-wrapper {
    flex-direction: column;
  }
}
</style>
