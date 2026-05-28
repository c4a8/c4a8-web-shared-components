<template>
  <section :class="classList" :id="id" role="tabpanel" :aria-labelledby="`${id}-tab`">
    <headline v-if="headlineText" :text="headlineText" :level="headlineLevel" :classes="headlineClassList" />
    <slot />
  </section>
</template>
<script>
export default {
  tagName: 'tab-start',
  props: {
    id: String,
    open: Boolean,
    headlineText: String,
    headlineLevel: { type: String, default: 'h3' },
    headlineClasses: String,
  },
  computed: {
    classList() {
      return ['tab-start tab-pane fade', { 'show active': this.open }];
    },
    headlineClassList() {
      return ['h2-font-size tab-start__headline-small mb-6', this.headlineClasses];
    },
  },
};
</script>
<style lang="scss">
.tab-start {
  .tab-start__headline {
    @include media-breakpoint-up(lg) {
      margin-bottom: spacing(4);
    }
  }
}

.tab-start__headline {
  display: none;

  @include media-breakpoint-up(lg) {
    display: block;
  }
}

.tab-start__headline-small {
  margin: 0 $grid-gutter-half-width;

  @include media-breakpoint-up(lg) {
    display: none;
  }
}
</style>
