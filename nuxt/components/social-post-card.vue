<template>
  <article
    :class="classList"
    itemscope
    itemtype="http://schema.org/SocialMediaPosting"
    @click="handleClick"
    :data-utility-animation-step="utilityAnimationStep"
    :style="style"
    ref="root"
  >
    <header class="spc__header d-flex align-items-center">
      <div class="spc__avatar mr-3" v-if="author?.avatarUrl">
        <v-img :img="author.avatarUrl" :cloudinary="false" :lazy="true" />
      </div>
      <div class="spc__meta">
        <div class="spc__author-name">{{ author?.name }}</div>
        <div class="spc__author-handle-time text-muted">
          <span v-if="author?.handle">{{ author.handle }}</span>
          <span v-if="author?.handle && postedAt"> · </span>
          <time v-if="postedAt" :datetime="postedAt">{{ postedAt }}</time>
        </div>
      </div>
    </header>

    <div class="spc__content mt-3" v-if="contentHtml" v-html="contentHtml"></div>

    <div class="spc__media mt-3" v-if="firstImage">
      <v-img :img="firstImage.src" :cloudinary="false" :lazy="true" />
    </div>

    <footer class="spc__footer d-flex align-items-center justify-content-between mt-3">
      <div class="spc__stats d-flex align-items-center">
        <div class="spc__stat mr-3" v-if="stats?.likes !== undefined">
          <strong>{{ stats.likes }}</strong> Likes
        </div>
        <div class="spc__stat mr-3" v-if="stats?.comments !== undefined">
          <strong>{{ stats.comments }}</strong> Comments
        </div>
        <div class="spc__stat" v-if="stats?.reposts !== undefined">
          <strong>{{ stats.reposts }}</strong> Reposts
        </div>
      </div>
      <a
        class="spc__link text-nowrap"
        :href="postUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.stop
      >View on LinkedIn</a>
    </footer>
  </article>
  </template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'social-post-card',
  computed: {
    classList() {
      return [
        'social-post-card',
        'card',
        this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '',
        'vue-component',
      ];
    },
    hasAnimationValue() {
      return Tools.isTrue(this.hasAnimation) === true;
    },
    utilityAnimationStep() {
      return this.hasAnimationValue ? '1' : null;
    },
    style() {
      return this.index !== undefined && this.index !== null
        ? `--utility-animation-index: ${this.index}`
        : null;
    },
    firstImage() {
      if (!this.media || !Array.isArray(this.media)) return null;
      return this.media.find((m) => m?.type === 'image') || null;
    },
  },
  mounted() {
    if (!this.hasAnimationValue) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      if (!this.postUrl) return;
      window.open(this.postUrl, '_blank', 'noopener');
    },
  },
  props: {
    author: {
      type: Object,
    },
    postedAt: {
      type: String,
    },
    contentHtml: {
      type: String,
    },
    media: {
      type: Array,
      default: () => [],
    },
    stats: {
      type: Object,
      default: () => ({}),
    },
    postUrl: {
      type: String,
    },
    hasAnimation: {
      default: null,
    },
    index: Number,
  },
};
</script>
<style>
.social-post-card {
  cursor: pointer;
}
.spc__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.spc__author-name {
  font-weight: 600;
}
.spc__author-handle-time {
  font-size: 0.875rem;
}
.spc__content :where(p) {
  margin-bottom: 0.5rem;
}
.spc__link {
  font-weight: 600;
}
</style>


