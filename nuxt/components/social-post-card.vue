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
      <div class="spc__meta flex-grow-1">
        <div class="spc__author-name d-flex align-items-center">
          <span>{{ author?.name }}</span>
          <div class="spc__linkedin-badge ml-2">
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
        <div class="spc__author-handle-time text-muted">
          <span v-if="author?.handle">{{ author.handle }}</span>
          <span v-if="author?.handle && postedAt"> · </span>
          <time v-if="postedAt" :datetime="postedAt">{{ postedAt }}</time>
        </div>
      </div>
    </header>

    <div class="spc__content mt-3" v-if="contentHtml" v-html="truncatedContent"></div>

    <div class="spc__media mt-3" v-if="firstMedia" @click.stop="handleMediaClick">
      <div v-if="firstMedia.type === 'video'" class="spc__video-wrapper">
        <v-img :img="firstMedia.thumbnail || firstMedia.src" :cloudinary="false" :lazy="true" />
        <div class="spc__video-overlay">
          <i class="fas fa-play spc__play-icon"></i>
        </div>
      </div>
      <v-img v-else :img="firstMedia.src" :cloudinary="false" :lazy="true" />
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
      <div class="spc__footer-links d-flex align-items-center">
        <a class="spc__link text-nowrap mr-3" :href="postUrl" target="_blank" rel="noopener noreferrer" @click.stop
          >View on LinkedIn</a
        >
        <a
          v-if="companyPageUrl"
          class="spc__company-link text-nowrap"
          :href="companyPageUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          >Company Page</a
        >
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
}
.spc__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}
.spc__author-name {
  font-weight: 600;
}
.spc__linkedin-badge {
  color: #0077b5;
  font-size: 0.875rem;
}
.spc__author-handle-time {
  font-size: 0.875rem;
}
.spc__content {
  line-height: 1.5;
}
.spc__content :where(p) {
  margin-bottom: 0.5rem;
}
.spc__content :where(p:last-child) {
  margin-bottom: 0;
}
.spc__media {
  cursor: pointer;
  position: relative;
  border-radius: 0.25rem;
  overflow: hidden;
}
.spc__video-wrapper {
  position: relative;
  width: 100%;
}
.spc__video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.2s;
}
.spc__media:hover .spc__video-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
.spc__play-icon {
  color: white;
  font-size: 3rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
.spc__footer-links {
  flex-wrap: wrap;
  gap: 0.5rem;
}
.spc__link,
.spc__company-link {
  font-weight: 600;
  color: #0077b5;
  text-decoration: none;
  font-size: 0.875rem;
}
.spc__link:hover,
.spc__company-link:hover {
  text-decoration: underline;
}
</style>
