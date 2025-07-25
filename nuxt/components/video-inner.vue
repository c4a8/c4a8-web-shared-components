<template>
  <div :class="videoClass" :onclick="onClick" ref="root" data-utility-animation-ref="root">
    <wrapper classes="row align-items-end no-gutters" :hideContainer="!isVariantRow">
      <div
        :class="videoPlayerClass"
        :id="videoId"
        data-utility-animation-step="1"
        data-utility-animation-ref="video-player"
      >
        <template v-if="videoParsed.lightbox">
          <lightbox
            classes="video__lightbox-frame media-viewer"
            :source="dataSrc"
            :source-caption="dataCaption"
            :cloudinary="cloudinary"
            @click="handleLightboxClick"
            @lightbox-close="handleLightboxClose"
          >
            <template #lightbox-content>
              <iframe
                v-if="isPlayed"
                frameborder="0"
                allowfullscreen="1"
                allow="autoplay; fullscreen"
                :src="embedSrc"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
                scrolling="no"
              ></iframe>
            </template>
            <div class="img-fluid">
              <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt" />
            </div>
            <span class="media-viewer-container">
              <span class="video-player-icon">
                <i class="fas fa-play"></i>
              </span>
            </span>
          </lightbox>

          <a
            class="js-video-button media-viewer video-player-btn"
            href="javascript:;"
            :data-src="dataSrc"
            :data-caption="dataCaption"
            :data-hs-fancybox-options="dataOptionsLightBox"
            ref="lightbox"
            @click="handleLightboxClick"
            style="display: none"
          >
            <div class="img-fluid">
              <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt" />
            </div>
            <span class="media-viewer-container">
              <span class="video-player-icon">
                <i class="fas fa-play"></i>
              </span>
            </span>
          </a>
        </template>
        <template v-else>
          <div class="img-fluid video-player-preview">
            <v-img :img="videoParsed.thumb" :cloudinary="true" :alt="videoParsed.alt" />
          </div>
          <template v-if="videoParsed.id">
            <a
              class="js-inline-video-player video__player-btn video-player-btn video-player-centered"
              href="javascript:;"
              :data-hs-video-player-options="dataOptionsRegular"
              ref="video-player"
              :onclick="handleButtonClick"
            >
              <span class="video-player-icon video__player-icon">
                <i class="fas fa-play"></i>
              </span>
            </a>
          </template>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              v-if="isPlayed"
              frameborder="0"
              allowfullscreen="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              width="640"
              height="360"
              :src="embedSrc"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation"
            ></iframe>
          </div>
        </template>
      </div>
      <template v-if="videoParsed.headline">
        <div
          :class="videoContentClass"
          :onclick="onClickVideoContent"
          data-utility-animation-step="1"
          data-utility-animation-ref="video-content"
        >
          <div class="row no-gutters d-flex flex-wrap">
            <template v-if="videoParsed.logo">
              <div class="video__logo col-lg-5 order-lg-2 pb-3 pb-lg-0">
                <v-img :img="videoParsed.logo" :cloudinary="true" :alt="videoParsed.logoAlt" />
              </div>
              <div class="col-lg-7 order-lg-1">
                <headline :level="level" :text="videoParsed.headline" :classes="headlineClasses" />
              </div>
            </template>
            <template v-else>
              <div class="col-lg-12 order-lg-1">
                <headline :level="level" :text="videoParsed.headline" :classes="headlineClasses" />
              </div>
            </template>
            <div :class="videoTextClasses" v-if="videoParsed.text" v-html="videoParsed.text"></div>
            <div class="col-lg-12 pt-2 pt-lg-4 order-lg-3" v-if="videoParsed.date">
              {{ videoParsed.date }}
            </div>
          </div>
          <div class="pt-4 pt-lg-6 pb-6" v-if="videoParsed.ctaText">
            <cta
              :text="videoParsed?.ctaText"
              :href="videoParsed?.ctaHref"
              :link="videoParsed?.link"
              :target="videoParsed?.target"
              :type="videoParsed?.type"
            />
          </div>
        </div>
      </template>
    </wrapper>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';
import YoutubePlayer from '../utils/youtube-player.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'video-inner',
  computed: {
    videoClass() {
      return [
        'video',
        this.noAnimation ? '' : 'utility-animation',
        `${this.videoParsed.id ? 'video--has-video' : 'hover__parent'}`,
        `${this.isVariantRow ? 'container' : 'd-flex flex-column'}`,
        `${Tools.isTrue(this.overlapping) ? 'video--is-overlapping' : ''}`,
        `${this.spacing ? this.spacing : 'space-bottom-1 space-bottom-lg-0'}`,
        `${!this.isReversed() ? 'h-100' : ''}`,
        `${this.variant ? 'video--' + this.variant : ''}`,
        this.elementClasses.root,
        'vue-component',
      ];
    },
    videoPlayerClass() {
      return [
        'video__player',
        this.noAnimation ? '' : 'fade-in-bottom',
        `${this.variantClasses}`,
        `${this.isPlayed ? 'video-player-played is-starting' : ''}`,
        `${this.videoParsed.ctaText ? 'video__player--has-link' : ''}`,
        this.elementClasses['video-player'],
        'vue-component',
      ];
    },
    videoContentClass() {
      const paddingHorizontal = this.isCompact ? 'pt-4' : 'py-4 px-3';
      const padding = !this.isReversed() ? ` ${paddingHorizontal} p-lg-5` : 'pb-4';

      return [
        'video__content',
        this.noAnimation ? '' : 'fade-in-bottom',
        `${this.videoParsed.ctaText ? 'hover__parent' : ''}`,
        `${this.isVariantRow ? 'col-md-6 ' : 'flex-grow-1 ' + padding}`,
        this.elementClasses['video-content'],
      ];
    },
    videoTextClasses() {
      return ['video__text col-lg-12 order-lg-3', this.isCompact ? '' : 'pt-2 pt-lg-4'];
    },
    isCompact() {
      return this.variant === 'compact';
    },
    variantClasses() {
      return !this.variant ? 'bg-dark' : this.isVariantRow ? 'col-md-6 order-md-2' : '';
    },
    isVariantRow() {
      return this.variant === 'row';
    },
    videoParsed() {
      return typeof this.video !== 'object' ? JSON.parse(this.video) : this.video;
    },
    onClickVideoContent() {
      return this.videoParsed.ctaText ? `this.querySelector('a').click()` : null;
    },
    onClick() {
      return this.videoParsed.ctaText && this.videoParsed.id ? `this.querySelector('a').click()` : null;
    },
    videoId() {
      return 'video-id__' + this.videoParsed.id;
    },
    videoFrameId() {
      return this.videoId + '-frame';
    },
    headlineClasses() {
      const variantClasses = this.isVariantRow || this.isCompact ? 'mb-0' : '';
      const headlineClasses = this.isCompact ? 'h5-font-size' : 'h4-font-size';

      return `${headlineClasses} ${variantClasses}`;
    },
    dataOptionsLightBox() {
      const options = {
        selector: '#' + `${this.videoId}` + ' .js-video-button',
        speed: 700,
        buttons: ['fullScreen', 'close'],
        media: {
          youtube: {
            url: 'https://www.youtube-nocookie.com/embed/$4',
            params: {
              autoplay: 1,
            },
          },
        },
      };

      return JSON.stringify(options);
    },
    options() {
      return {
        videoId: this.videoParsed.id,
        parentSelector: '#' + this.videoId,
        targetSelector: '#' + this.videoFrameId,
        isAutoplay: true,
      };
    },
    dataOptionsRegular() {
      return JSON.stringify(this.options);
    },
    dataSrc() {
      return 'https://www.youtube-nocookie.com/' + this.videoParsed.id;
    },
    embedSrc() {
      return YoutubePlayer.getEmbedSrc(this.videoParsed.id, this.options.isAutoplay);
    },
    dataCaption() {
      return this.videoParsed.headline;
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    UtilityAnimation.init([this.$refs.root], this);
  },
  methods: {
    isReversed() {
      return this.variant === 'reversed';
    },
    handleButtonClick() {
      this.isPlayed = true;
    },
    handleLightboxClick() {
      this.handleButtonClick();
    },
    handleLightboxClose() {
      this.handleClose();
    },
    handleClose() {
      this.isPlayed = false;
    },
  },
  data() {
    return {
      isPlayed: false,
      elementClasses: {},
    };
  },
  props: {
    video: Object,
    variant: String,
    spacing: String,
    overlapping: String,
    level: {
      default: 'h4',
    },
    noAnimation: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
