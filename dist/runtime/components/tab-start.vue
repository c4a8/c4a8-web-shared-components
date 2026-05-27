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
<style>
@media (min-width: 992px) {
  .tab-start .tab-start__headline {
    margin-bottom: 1rem;
  }
}

.tab-start__headline {
  display: none;
}
@media (min-width: 992px) {
  .tab-start__headline {
    display: block;
  }
}

.tab-start__headline-small {
  margin: 0 15px;
}
@media (min-width: 992px) {
  .tab-start__headline-small {
    display: none;
  }
}
</style>
