<template>
  <div :style="stickyStyles" :class="stickyClassList">
    <div v-if="container" :class="containerClass" :style="rootStyle" ref="root" @click="handleClick">
      <div :class="rowClass">
        <div :id="parentId" :class="mainClass">
          <div :class="playerClass" data-utility-animation-step="1">
            <div class="video-frame__target embed-responsive">
              <div :id="targetId" v-if="openIframe" ref="iframeContainer">
                <iframe
                  class="video-frame__iframe"
                  frameborder="0"
                  allowfullscreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  width="640"
                  height="360"
                  :src="embedSrc"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                ></iframe>
              </div>
            </div>
            <div v-if="headline" class="video-frame__headline-container px-4" :class="headline.alignment">
              <headline :text="headline.text" :level="headline.level" :classes="headlineClasses" />
            </div>
            <div class="video-frame__play-wrapper">
              <span
                :class="[
                  'video-frame__play',
                  'video-frame__player-icon',
                  { 'video-player-icon': !ctaData, 'video-frame__play--cta': ctaData },
                ]"
                :style="fontSize ? { '--cta-custom-font-size': fontSize } : undefined"
              >
                <i v-if="!ctaData" class="fas fa-play"></i>
                <cta v-else v-bind="ctaData" />
              </span>
            </div>
            <v-img :img="thumb" :cloudinary="true" :alt="alt" :preset="preset" :lazy="true" />
          </div>
        </div>
        <div v-if="corner" :class="cornerClass">
          <v-img :img="corner.img" :preset="preset" :cloudinary="corner.cloudinary" :alt="corner.alt" :lazy="true" />
        </div>
      </div>
    </div>
    <template v-else>
      <div :id="parentId" :class="mainClass" :style="rootStyle" ref="root" @click="handleClick">
        <div :class="playerClass" data-utility-animation-step="1">
          <div class="video-frame__target embed-responsive">
            <div :id="targetId" v-if="showIframe" ref="iframeContainer">
              <iframe
                class="video-frame__iframe"
                frameborder="0"
                allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                width="640"
                height="360"
                :src="embedSrc"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
              ></iframe>
            </div>
            <lightbox
              v-else-if="showLightbox"
              classes="video-frame__lightbox-frame media-viewer"
              :source="embedSrc"
              :cloudinary="true"
              @click="handleLightboxClick"
              @lightbox-close="handleLightboxClose"
            >
              <template #lightbox-content>
                <iframe
                  class="video-frame__iframe"
                  frameborder="0"
                  allowfullscreen="1"
                  allow="autoplay; fullscreen"
                  :src="embedSrc"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                  scrolling="no"
                ></iframe>
              </template>

              <div class="video-frame__play-wrapper">
                <span
                  :class="[
                    'video-frame__play',
                    'video-frame__player-icon',
                    { 'video-player-icon': !ctaData, 'video-frame__play--cta': ctaData },
                  ]"
                  :style="fontSize ? { '--cta-custom-font-size': fontSize } : undefined"
                >
                  <i v-if="!ctaData" class="fas fa-play"></i>
                  <cta v-else v-bind="ctaData" />
                </span>
              </div>
            </lightbox>
          </div>
          <div v-if="headline && !lightbox" class="video-frame__headline-container px-4" :class="headline.alignment">
            <headline :text="headline.text" :level="headline.level" :classes="headlineClasses" />
          </div>
          <div class="video-frame__play-wrapper" v-if="!lightbox">
            <span
              :class="[
                'video-frame__play',
                'video-frame__player-icon',
                { 'video-player-icon': !ctaData, 'video-frame__play--cta': ctaData },
              ]"
              :style="fontSize ? { '--cta-custom-font-size': fontSize } : undefined"
            >
              <i v-if="!ctaData" class="fas fa-play"></i>
              <cta v-else v-bind="ctaData" />
            </span>
          </div>
          <v-img :img="thumb" :cloudinary="true" :alt="alt" :preset="preset" :lazy="true" />
        </div>
      </div>
      <div v-if="corner" :class="cornerClass">
        <v-img :img="corner.img" :preset="preset" :cloudinary="corner.cloudinary" :alt="corner.alt" :lazy="true" />
      </div>
    </template>
  </div>
</template>

<script>
import UtilityAnimation from '../utils/utility-animation.js';
import YoutubePlayer from '../utils/youtube-player.js';
import Analytics from '../utils/data-an.js';

export default {
  tagName: 'video-frame',
  props: {
    thumb: String,
    alt: String,
    id: String,
    preset: {
      type: String,
      default: 'fullscreen4k',
    },
    container: {
      type: Boolean,
      default: false,
    },
    corner: {
      type: [Object, Boolean],
      default: false,
    },
    spacingTop: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    headline: {
      type: [Object, Boolean],
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    ctaData: {
      type: Object,
    },
    playlist: {
      type: Boolean,
      default: false,
    },
    subtitles: {
      type: String,
      default: null,
    },
    color: {
      type: String,
    },
    fontSize: {
      type: String,
    },
    cover: {
      type: Boolean,
      default: false,
    },
    lightbox: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  beforeDestroy() {
    this._videoTracker?.destroy();
    this._videoTracker = null;
  },
  computed: {
    headlineClasses() {
      let classes = this.headline?.classes || '';
      let classList = [classes, 'video-frame__headline'];

      if (classes && classes.includes('font-size')) {
        classList.push('video-frame__headline--custom');
      }

      return classList.join(' ');
    },
    hasVideo() {
      return !!this.id;
    },
    parentId() {
      return `video-frame__parent-id-${this.id}`;
    },
    targetId() {
      return `video-frame__target-id-${this.id}`;
    },
    stickyClassList() {
      return [
        'video-frame__sticky',
        {
          'video-frame--cover': this.cover,
        },
      ];
    },
    rootClassList() {
      return [
        {
          'video-frame--played': this.isPlayed,
          // 'video-frame--cover': this.cover,
        },
      ];
    },
    containerClass() {
      return [
        'container',
        'utility-animation',
        'has-background',
        'video-frame__container',
        {
          'video-frame__container--spacing': this.spacingTop,
          //'is-sticky-scroller': this.sticky,
          'video-frame--top-overflow': this.corner && this.corner.topOverflow,
        },
        ...this.rootClassList,
      ];
    },
    rowClass() {
      return ['row', 'justify-content-center', { 'position-relative': this.corner }];
    },
    mainClass() {
      return [
        'video-frame',
        this.hasVideo ? 'video-frame--has-video' : 'hover__parent',
        this.container ? 'video-frame--container' : 'has-background utility-animation',
        {
          'video-frame--full-width': this.fullWidth,
          //'is-sticky-scroller': !this.container && this.sticky,
        },
        ...this.rootClassList,
      ];
    },
    stickyStyles() {
      return this.sticky ? { position: 'sticky', top: '0' } : {};
    },
    playerClass() {
      return ['video-frame__player', 'fade-in-bottom', this.hasVideo ? 'js-inline-video-player' : ''];
    },
    cornerClass() {
      return [
        'video-frame__corner-img',
        {
          'video-frame__corner-img--top-overflow': this.corner && this.corner.topOverflow,
        },
        this.corner && this.corner.classes ? this.corner.classes : '',
      ];
    },
    rootStyle() {
      const style = {};

      if (this.color) {
        style['--video-frame-color'] = this.color;
      }

      if (this.headline && this.headline.color) {
        style['--video-frame-headline-color'] = `var(${this.headline.color})`;
      }

      return style;
    },
    videoPlayerOptions() {
      if (!this.id) return {};

      return {
        videoId: this.id,
        parentSelector: `#${this.parentId}`,
        targetSelector: `#${this.targetId}`,
        isAutoplay: true,
        classMap: {
          toggle: 'video-frame--played',
        },
      };
    },
    embedSrc() {
      return YoutubePlayer.getEmbedSrc(
        this.videoPlayerOptions.videoId,
        this.videoPlayerOptions.isAutoplay,
        this.playlist,
        this.subtitles
      );
    },
    showIframe() {
      return this.openIframe && !this.lightbox;
    },
    showLightbox() {
      return this.lightbox;
    },
  },
  methods: {
    handleClick() {
      if (!this.id) return;

      this.setPlayed();
      this.openIframe = true;

      this.$nextTick(() => {
        if (!this._videoTracker) {
          this._videoTracker = Analytics.createVideoTracker(this.id, () => this.$refs.iframeContainer);
        }
        this._videoTracker.bind();
      });
    },
    setPlayed() {
      this.isPlayed = true;
    },
    handleLightboxClose() {
      this.isPlayed = false;
    },
  },
  data() {
    return {
      isPlayed: false,
      options: {},
      openIframe: false,
    };
  },
};
</script>
<style>
.video-frame.video-frame--has-video:hover {
  cursor: pointer;
}
.video-frame.video-frame--has-video:hover .video-frame__player-icon {
  transform: scale(1.1);
  color: var(--color-primary-accent);
}

.video-frame__sticky.video-frame--cover {
  height: 100%;
  width: 100%;
}
.video-frame__sticky.video-frame--cover .video-frame img,
.video-frame__sticky.video-frame--cover .video-frame__player,
.video-frame__sticky.video-frame--cover .video-frame,
.video-frame__sticky.video-frame--cover .video-frame__container {
  height: inherit;
  width: inherit;
}
.video-frame__sticky.video-frame--cover .video-frame img {
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.video-frame__sticky.video-frame--cover .video-frame__play-wrapper {
  top: auto;
  bottom: 10%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
}

.video-frame {
  display: inline-block;
}
.video-frame.video-frame--played {
  pointer-events: none;
}
.video-frame.video-frame--played + .video-frame__corner-img:not(.video-frame__corner-img--top-overflow),
.video-frame.video-frame--played .video-frame__headline-container {
  display: none;
}
.video-frame.video-frame--played .video-frame__player-icon {
  animation: scaleOut 0.4s ease-in-out forwards;
}
.video-frame.video-frame--played .video-frame__target {
  pointer-events: all;
}
.video-frame:not(.video-frame--played) + .video-frame__corner-img:not(.video-frame__corner-img--top-overflow) {
  bottom: 0;
  right: 0;
  width: 23%;
}
@media (min-width: 768px) {
  .video-frame:not(.video-frame--played) .video-frame__headline-container {
    display: block;
    position: absolute;
    top: 25%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  .video-frame:not(.video-frame--played) .video-frame__headline-container.align-items-end {
    display: flex;
    bottom: 1rem;
    height: 100%;
    left: auto;
    top: auto;
    transform: none;
  }
  .video-frame:not(.video-frame--played) .video-frame__headline-container.align-items-end.text-center {
    justify-content: center;
  }
}
.video-frame.video-frame--has-video .video-frame__play-wrapper {
  display: inline-block;
}
.video-frame.video-frame--container {
  width: 100%;
}
.video-frame.video-frame--full-width {
  width: 100%;
}
.video-frame img {
  width: 100%;
}
.video-frame .video-frame__headline-container {
  display: none;
}
.video-frame .video-frame__headline-container .video-frame__headline {
  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.35));
  color: var(--video-frame-headline-color);
}
.video-frame .video-frame__headline-container .video-frame__headline:not(.video-frame__headline--custom) {
  font-size: calc(3.75rem / 1.8);
  line-height: 1.2em;
  font-weight: lighter;
}
@media (min-width: 992px) {
  .video-frame .video-frame__headline-container .video-frame__headline:not(.video-frame__headline--custom) {
    font-size: calc(3.75rem / 1.3);
    line-height: 1.2em;
  }
}
@media (min-width: 1200px) {
  .video-frame .video-frame__headline-container .video-frame__headline:not(.video-frame__headline--custom) {
    font-size: 3.75rem;
    line-height: 1.2em;
  }
}
.video-frame .video-frame__headline-container .video-frame__headline:not(.video-frame__headline--custom) {
  font-weight: bold !important;
}
.video-frame .video-frame__headline-container .video-frame__headline:not(.video-frame__headline--custom) {
  line-height: 1.2em !important;
}
@media (min-width: 768px) {
  .video-frame .video-frame__headline-container {
    display: block;
    position: absolute;
    top: 25%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
}

.video-frame__player,
.video-frame {
  position: relative;
}

.video-frame__target {
  position: absolute;
  width: 100%;
  height: 100%;
}

.video-frame__play-wrapper {
  position: absolute;
  display: none;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.video-frame__container {
  z-index: 100;
  position: relative;
}
.video-frame__container.video-frame__container--spacing:not(.video-frame--top-overflow) {
  margin-top: -6.25rem;
}
@media (min-width: 768px) {
  .video-frame__container.video-frame__container--spacing:not(.video-frame--top-overflow) {
    margin-top: -6.25rem;
  }
}
@media (min-width: 992px) {
  .video-frame__container.video-frame__container--spacing {
    margin-top: -17.5rem;
  }
}
.video-frame__container.video-frame--top-overflow .video-frame {
  order: 2;
}
.video-frame__container.video-frame--top-overflow .video-frame__corner-img {
  order: 1;
}
@media (min-width: 992px) {
  .video-frame__container.video-frame--top-overflow .video-frame {
    order: 1;
  }
  .video-frame__container.video-frame--top-overflow .video-frame__corner-img {
    order: 2;
  }
}

.video-frame__corner-img {
  position: absolute;
  height: auto;
}
.video-frame__corner-img.video-frame__corner-img--top-overflow {
  position: relative;
  width: 80vw;
  max-height: 43vw;
  overflow: hidden;
  margin: 0 0 0 auto;
  bottom: 0;
  right: 0;
  z-index: -1;
}
@media (min-width: 576px) {
  .video-frame__corner-img.video-frame__corner-img--top-overflow {
    width: 80vw;
    max-width: 440px;
    max-height: 238px;
  }
}
@media (min-width: 992px) {
  .video-frame__corner-img.video-frame__corner-img--top-overflow {
    position: absolute;
    max-width: none;
    max-height: none;
    top: 0;
    bottom: auto;
    right: 0;
    width: 60%;
    height: auto;
    transform: translateY(-61%) translateX(27%);
  }
}

.video-frame__play.video-frame__play--cta {
  --color-link: var(--video-frame-color);
  --color-primary-accent: var(--color-link);
}

.video-frame__lightbox-frame {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
