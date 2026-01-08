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
<style>
.social-post-card {
  cursor: pointer;
  position: relative;
  padding: 1rem;
  background-color: #f3f2ef;
  box-shadow: none !important;
  border: none;
  border-radius: 0;
  max-width: none !important;
  width: 100%;
}
.spc__header {
  position: relative;
}
.spc__avatar {
  width: 48px;
  height: 48px;
  overflow: hidden;
  flex-shrink: 0;
}
.spc__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.spc__author-name {
  font-weight: 600;
  font-size: 0.9375rem;
  color: #000;
}
.spc__verified-badge {
  color: #0a66c2;
  font-size: 0.875rem;
}
.spc__linkedin-badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background-color: #0077b5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 0;
}
.spc__linkedin-icon {
  font-size: 1rem;
  line-height: 1;
}
.spc__author-handle-time {
  font-size: 0.8125rem;
  color: #666;
}
.spc__content {
  line-height: 1.5;
  font-size: 0.875rem;
  color: #000;
}
.spc__content :where(p) {
  margin-bottom: 0.5rem;
}
.spc__content :where(p:last-child) {
  margin-bottom: 0;
}
.spc__read-more {
  color: #666;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  margin-left: 0.25rem;
}
.spc__read-more:hover {
  text-decoration: underline;
  color: #0077b5;
}
.spc__media {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 0.75rem;
}
.spc__media img {
  width: 100%;
  height: auto;
  display: block;
}
.spc__video-wrapper {
  position: relative;
  width: 100%;
}
.spc__video-overlay {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 48px;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}
.spc__media:hover .spc__video-overlay {
  background-color: rgba(0, 0, 0, 0.8);
}
.spc__play-button {
  color: white;
  font-size: 1.25rem;
  margin-left: 2px;
}
.spc__footer {
  padding-top: 0.75rem;
}
.spc__stats {
  gap: 1.5rem;
}
.spc__stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
}
.spc__stat-icon {
  font-size: 1rem;
}
.spc__share-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #666;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: background-color 0.2s;
}
.spc__share-btn:hover {
  background-color: #f3f2ef;
  color: #000;
}
.spc__share-btn i {
  font-size: 0.875rem;
}
</style>
