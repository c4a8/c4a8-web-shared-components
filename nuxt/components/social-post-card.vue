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
    <header class="social-post-card__header d-flex align-items-center position-relative">
      <div class="social-post-card__avatar mr-3" v-if="author?.avatarUrl">
        <v-img :img="author.avatarUrl" :cloudinary="false" :lazy="true" />
      </div>
      <div class="social-post-card__meta flex-grow-1">
        <div class="social-post-card__author-name d-flex align-items-center">
          <span>{{ author?.name }}</span>
          <i v-if="author?.verified" class="far fa-check-circle social-post-card__verified-badge ml-1"></i>
        </div>
        <div class="social-post-card__author-handle-time text-muted" v-if="postedAt">
          <time :datetime="postedAt">{{ postedAt }}</time>
        </div>
      </div>
      <div class="social-post-card__linkedin-badge">
        <i class="fab fa-linkedin social-post-card__linkedin-icon"></i>
      </div>
    </header>

    <div class="social-post-card__content mt-3" v-if="contentHtml">
      <div v-html="truncatedContent"></div>
      <a v-if="showReadMore" href="#" class="social-post-card__read-more" @click.stop.prevent="handleReadMore"
        >Read more</a
      >
    </div>

    <div class="social-post-card__media mt-3" v-if="firstMedia" @click.stop="handleMediaClick">
      <div v-if="firstMedia.type === 'video'" class="social-post-card__video-wrapper">
        <v-img :img="firstMedia.thumbnail || firstMedia.src" :cloudinary="false" :lazy="true" />
        <div class="social-post-card__video-overlay">
          <div class="social-post-card__play-button">
            <i class="far fa-play-circle"></i>
          </div>
        </div>
      </div>
      <v-img v-else :img="firstMedia.src" :cloudinary="false" :lazy="true" />
    </div>

    <footer class="social-post-card__footer d-flex align-items-center justify-content-between mt-3">
      <div class="social-post-card__stats d-flex align-items-center">
        <div class="social-post-card__stat mr-3" v-if="stats?.likes !== undefined">
          <icon icon="outline-heart" class="social-post-card__stat-icon" />
          <span>{{ stats.likes }}</span>
        </div>
        <div class="social-post-card__stat mr-3" v-if="stats?.comments !== undefined">
          <icon icon="outline-comment" class="social-post-card__stat-icon" />
          <span>{{ stats.comments }}</span>
        </div>
        <div class="social-post-card__stat mr-3" v-if="stats?.reposts !== undefined">
          <icon icon="outline-share" class="social-post-card__stat-icon" />
          <span>{{ stats.reposts }}</span>
        </div>
      </div>
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
        // 'card',
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
      return this.index !== undefined && this.index !== null ? `--utility-animation-index: ${this.index}` : null;
    },
    firstMedia() {
      if (!this.media || !Array.isArray(this.media)) return null;
      return this.media[0] || null;
    },
    truncatedContent() {
      if (!this.contentHtml) return '';
      if (this.isExpanded) return this.contentHtml;

      const maxLength = this.maxContentLength || 200;

      // Strip HTML tags for length calculation
      const textOnly = this.contentHtml
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (textOnly.length <= maxLength) return this.contentHtml;

      // Truncate text and preserve some HTML structure
      let truncated = textOnly.substring(0, maxLength).trim();
      const lastSpace = truncated.lastIndexOf(' ');
      if (lastSpace > maxLength * 0.8) {
        truncated = truncated.substring(0, lastSpace);
      }

      // Try to preserve the first tag structure if it exists
      const firstTagMatch = this.contentHtml.match(/^<[^>]+>/);
      const lastTagMatch = this.contentHtml.match(/<\/[^>]+>$/);
      const prefix = firstTagMatch ? firstTagMatch[0] : '';
      const suffix = lastTagMatch ? lastTagMatch[0] : '';

      return prefix + truncated + '...' + suffix;
    },
    showReadMore() {
      if (!this.contentHtml) return false;
      const maxLength = this.maxContentLength || 200;
      const textOnly = this.contentHtml
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      return textOnly.length > maxLength;
    },
  },
  data() {
    return {
      isExpanded: false,
    };
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
    handleMediaClick() {
      if (!this.postUrl) return;
      window.open(this.postUrl, '_blank', 'noopener');
    },
    handleReadMore() {
      this.isExpanded = true;
    },
  },
  props: {
    author: {
      type: Object,
      default: () => ({}),
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
    maxContentLength: {
      type: Number,
      default: 200,
    },
    companyPageUrl: {
      type: String,
    },
  },
};
</script>
