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
    <header class="spc__header d-flex align-items-center position-relative">
      <div class="spc__avatar mr-3" v-if="author?.avatarUrl">
        <v-img :img="author.avatarUrl" :cloudinary="false" :lazy="true" />
      </div>
      <div class="spc__meta flex-grow-1">
        <div class="spc__author-name d-flex align-items-center">
          <span>{{ author?.name }}</span>
          <i v-if="author?.verified" class="far fa-check-circle spc__verified-badge ml-1"></i>
        </div>
        <div class="spc__author-handle-time text-muted" v-if="postedAt">
          <time :datetime="postedAt">{{ postedAt }}</time>
        </div>
      </div>
      <div class="spc__linkedin-badge">
        <i class="fab fa-linkedin spc__linkedin-icon"></i>
      </div>
    </header>

    <div class="spc__content mt-3" v-if="contentHtml">
      <div v-html="truncatedContent"></div>
      <a v-if="showReadMore" href="#" class="spc__read-more" @click.stop.prevent="handleReadMore">Read more</a>
    </div>

    <div class="spc__media mt-3" v-if="firstMedia" @click.stop="handleMediaClick">
      <div v-if="firstMedia.type === 'video'" class="spc__video-wrapper">
        <v-img :img="firstMedia.thumbnail || firstMedia.src" :cloudinary="false" :lazy="true" />
        <div class="spc__video-overlay">
          <div class="spc__play-button">
            <i class="far fa-play-circle"></i>
          </div>
        </div>
      </div>
      <v-img v-else :img="firstMedia.src" :cloudinary="false" :lazy="true" />
    </div>

    <footer class="spc__footer d-flex align-items-center justify-content-between mt-3">
      <div class="spc__stats d-flex align-items-center">
        <div class="spc__stat mr-3" v-if="stats?.likes !== undefined">
          <i class="far fa-heart spc__stat-icon"></i>
          <span>{{ stats.likes }}</span>
        </div>
        <div class="spc__stat mr-3" v-if="stats?.comments !== undefined">
          <i class="far fa-comment spc__stat-icon"></i>
          <span>{{ stats.comments }}</span>
        </div>
      </div>
      <button class="spc__share-btn" @click.stop="handleShare">
        <i class="far fa-share-square"></i>
        <span>Share</span>
      </button>
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
    handleShare() {
      if (this.postUrl) {
        if (navigator.share) {
          navigator.share({
            title: this.author?.name || 'LinkedIn Post',
            url: this.postUrl,
          });
        } else {
          window.open(this.postUrl, '_blank', 'noopener');
        }
      }
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
