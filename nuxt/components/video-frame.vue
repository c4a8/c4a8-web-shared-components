<template>
  <div :style="stickyStyles" :class="stickyClassList">
    <div v-if="container" :class="containerClass" :style="rootStyle" ref="root" @click="handleClick">
      <div :class="rowClass">
        <div :id="parentId" :class="mainClass">
          <div :class="playerClass" data-utility-animation-step="1">
            <div class="video-frame__target embed-responsive">
              <div :id="targetId" v-if="openIframe">
                <iframe
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
            <v-img :img="thumb" :cloudinary="true" :alt="alt" :preset="preset" />
          </div>
        </div>
        <div v-if="corner" :class="cornerClass">
          <v-img :img="corner.img" :preset="preset" :cloudinary="corner.cloudinary" :alt="corner.alt" />
        </div>
      </div>
    </div>
    <template v-else>
      <div :id="parentId" :class="mainClass" :style="rootStyle" ref="root" @click="handleClick">
        <div :class="playerClass" data-utility-animation-step="1">
          <div class="video-frame__target embed-responsive">
            <div :id="targetId" v-if="showIframe">
              <iframe
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
          <v-img :img="thumb" :cloudinary="true" :alt="alt" :preset="preset" />
        </div>
      </div>
      <div v-if="corner" :class="cornerClass">
        <v-img :img="corner.img" :preset="preset" :cloudinary="corner.cloudinary" :alt="corner.alt" />
      </div>
    </template>
  </div>
</template>

<script>
import UtilityAnimation from '../utils/utility-animation.js';
import YoutubePlayer from '../utils/youtube-player.js';

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
        this.playlist
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
