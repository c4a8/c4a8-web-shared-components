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
      <div class="social-post-card__avatar mr-3">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 0H0V11.0071H22V0Z" fill="#5CBBFF" />
          <path d="M22 10.9648H0V22.0003H22V10.9648Z" fill="#0072C6" />
        </svg>
      </div>
      <div class="social-post-card__meta flex-grow-1">
        <div class="social-post-card__author-handle-time" v-if="formattedPostedAt">
          <time :datetime="formattedPostedAt">{{ formattedPostedAt }}</time>
        </div>
      </div>
      <div class="social-post-card__linkedin-badge">
        <i class="fab fa-linkedin social-post-card__linkedin-icon"></i>
      </div>
    </header>

    <div class="social-post-card__content mt-3" v-if="contentHtml">
      <span v-html="truncatedContent"></span>
      <span v-if="showReadMore" class="social-post-card__read-more">... {{ $t('readMore') }}</span>
    </div>

    <div class="social-post-card__repost" v-if="resharedPost">
      <header class="social-post-card__repost-header d-flex align-items-center position-relative">
        <div class="social-post-card__repost-avatar mr-3">
          <v-img :img="resharedPost.author.avatarUrl" :cloudinary="false" :lazy="true" />
        </div>
        <div class="social-post-card__repost-author">{{ resharedPost.author.name }}</div>
      </header>
      <div class="social-post-card__content" v-if="resharedPost.contentHtml">
        <span v-html="truncatedRepostContent"></span>
        <span v-if="showRepostReadMore" class="social-post-card__read-more">... {{ $t('readMore') }}</span>
      </div>
      <div
        class="social-post-card__repost-media"
        v-if="resharedPost.media && resharedPost.media[0].src"
        @click.stop="handleMediaClick"
      >
        <v-img :img="resharedPost.media[0].src" :cloudinary="false" :lazy="true" />
      </div>
    </div>
    <div class="social-post-card__media mt-3" v-else-if="firstMedia" @click.stop="handleMediaClick">
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
        <div class="social-post-card__stat" v-if="stats?.likes !== undefined">
          <icon icon="outline-heart" class="social-post-card__stat-icon" />
          <span>{{ stats.likes }}</span>
        </div>
        <div class="social-post-card__stat" v-if="stats?.comments !== undefined">
          <icon icon="outline-comment" class="social-post-card__stat-icon" />
          <span>{{ stats.comments }}</span>
        </div>
        <div class="social-post-card__stat" v-if="stats?.reposts !== undefined">
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
      return ['social-post-card', this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '', 'vue-component'];
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
    formattedPostedAt() {
      return this.formatDate(this.postedAt);
    },
    truncatedContent() {
      return this.truncateContent(this.contentHtml);
    },
    truncatedRepostContent() {
      return this.truncateContent(this.resharedPost.contentHtml);
    },
    showReadMore() {
      return this.hasReadMore(this.contentHtml);
    },
    showRepostReadMore() {
      return this.hasReadMore(this.resharedPost.contentHtml);
    },
  },
  mounted() {
    if (!this.hasAnimationValue) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    hasReadMore(content) {
      if (!content) return false;

      const maxLength = this.maxContentLength || 200;
      const textOnly = content
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      return textOnly.length > maxLength;
    },
    truncateContent(content) {
      if (!content) return '';

      const maxLength = this.maxContentLength || 200;
      const textOnly = content
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();

      if (textOnly.length <= maxLength) return content;

      let truncated = textOnly.substring(0, maxLength).trim();
      const lastSpace = truncated.lastIndexOf(' ');

      if (lastSpace > maxLength * 0.8) {
        truncated = truncated.substring(0, lastSpace);
      }

      const firstTagMatch = content.match(/^<[^>]+>/);
      const lastTagMatch = content.match(/<\/[^>]+}$/);
      const prefix = firstTagMatch ? firstTagMatch[0] : '';
      const suffix = lastTagMatch ? lastTagMatch[0] : '';

      return prefix + truncated + suffix;
    },
    formatDate(date) {
      return Tools.getFormattedDate(date, 'de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    },
    handleClick() {
      if (!this.postUrl) return;
      window.open(this.postUrl, '_blank', 'noopener');
    },
    handleMediaClick() {
      if (!this.postUrl) return;
      window.open(this.postUrl, '_blank', 'noopener');
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
    resharedPost: {
      type: Object,
      default: null,
    },
    index: Number,
    maxContentLength: {
      type: Number,
      default: 130,
    },
    companyPageUrl: {
      type: String,
    },
  },
};
</script>
