<template>
  <div
    :class="[
      'highlight-teaser__infos',
      { 'highlight-teaser__infos--fade-out': isFadingOut, 'highlight-teaser__infos--fade-in': isFadingIn },
    ]"
    ref="infos"
  >
    <div
      :class="[
        'highlight-teaser__infos-pagination',
        { 'highlight-teaser__infos-pagination--first': isFirstEntryOrInAnimation },
        { 'highlight-teaser__infos-pagination--last': isLastEntryOrInAnimation },
      ]"
      v-if="pagination"
    >
      <icon class="highlight-teaser__infos-icon-prev" icon="arrow" direction="left" @click="prev" />
      <div class="highlight-teaser__infos-current">{{ currentPage }} / {{ lastPage }}</div>
      <icon class="highlight-teaser__infos-icon-next" icon="arrow" @click="next" />
    </div>
    <div class="highlight-teaser__infos-content" ref="content">
      <v-img v-if="logo" class="highlight-teaser__infos-logo" v-bind="logo" />
      <div class="highlight-teaser__infos-title">{{ currentEntry.title }}</div>
      <p class="highlight-teaser__infos-subline">{{ currentEntry.subline }}</p>
      <cta-list :list="currentEntry.ctaList" classes="highlight-teaser__infos-cta-list" />
    </div>
  </div>
</template>

<script>
export default {
  tagName: 'highlight-teaser-infos',
  data() {
    return {
      isFadingOut: false,
      isFadingIn: false,
      currentIndex: 0,
      timeout: null,
      timeoutDelay: 1600,
      reducedTimeoutDelay: 700,
      skipTransitionEnd: false,
    };
  },
  computed: {
    logo() {
      return this.currentEntry ? this.currentEntry.logo : null;
    },
    currentEntry() {
      return this.entries ? this.entries[this.currentIndex] : this.entry;
    },
    isInAnimation() {
      return this.isFadingOut || this.isFadingIn;
    },
    isFirstEntryOrInAnimation() {
      return this.isInAnimation || this.isFirstEntry;
    },
    isLastEntryOrInAnimation() {
      return this.isInAnimation || this.isLastEntry;
    },
  },
  mounted() {
    const content = this.$refs.content;

    this.currentIndex = this.index;

    if (this.reduceAnimation) {
      this.timeoutDelay = this.reducedTimeoutDelay;
    }

    if (!content) return;

    content.addEventListener('transitionend', this.handleTransitionEnd);
  },
  beforeDestroy() {
    const content = this.$refs.content;

    if (!content) return;

    content.removeEventListener('transitionend', this.handleTransitionEnd);
  },
  methods: {
    emitTransitionEnd() {
      if (!this.isFadingIn && !this.isFadingOut) return;

      this.$emit('transitionsEnd');
    },
    resetTransitions() {
      this.isFadingIn = false;
      this.isFadingOut = false;
    },
    handleTransitionEnd() {
      if (this.skipTransitionEnd) return;

      if (this.isFadingOut) {
        this.isFadingOut = false;
        this.isFadingIn = true;

        this.currentIndex = this.index;
      } else {
        this.emitTransitionEnd();
        this.resetTransitions();
      }
    },
    resetTranstitionsFallback() {
      window.clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.emitTransitionEnd();
        this.resetTransitions();
      }, this.timeoutDelay);
    },
    update(forced = false) {
      this.resetTransitions();

      this.currentIndex = this.lastIndex;

      this.$nextTick(() => {
        this.isFadingOut = true;
        this.isFadingIn = false;

        this.resetTranstitionsFallback();

        if (forced) {
          this.handleTransitionEnd();
        }
      });
    },
  },
  watch: {
    index() {
      window.clearTimeout(this.timeout);

      if (this.isFadingIn || this.isFadingOut) {
        this.skipTransitionEnd = true;

        this.$nextTick(() => {
          this.skipTransitionEnd = false;
          this.update(true);
        });
      } else {
        this.update();
      }
    },
  },
  props: {
    pagination: Boolean,
    lastIndex: Number,
    index: Number,
    currentPage: Number,
    lastPage: Number,
    entry: Object,
    entries: Array,
    prev: Function,
    next: Function,
    isFirstEntry: Boolean,
    isLastEntry: Boolean,
    reducedAnimation: Boolean,
  },
};
</script>
