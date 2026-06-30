<template>
  <div :class="textImageClass" :style="textImageStyle" ref="root">
    <div class="container">
      <div class="row" :class="{ 'flex-row-reverse': left }">
        <div
          v-if="float"
          :class="[
            'text-image__floating-col',
            'justify-content-end',
            'text-image__floating-img',
            'position-absolute',
            'top-0',
            'right-0',
            'col-lg-' + textImageFirstColWidthComputed,
            'col-xl-' + textImageFirstColWidthXl,
          ]"
          @click="handleClick"
          :style="{ cursor: href ? 'pointer' : undefined }"
        >
          <v-img
            :img="image"
            :cloudinary="cloudinary"
            :alt="alt"
            :imgSrcSets="imagePreset ? imagePreset : 'textImageFloating'"
            :preset="imagePreset ? imagePreset : 'textImageFloating'"
            :lottie="lottie"
          />
        </div>
        <div :class="textImageFirstColClasses" @click="handleClick" :style="{ cursor: href ? 'pointer' : undefined }">
          <div
            class="text-image__first-col-wrapper"
            :class="{ 'fade-in-bottom': !noAnimation }"
            data-utility-animation-step="1"
          >
            <v-img
              :img="image"
              :cloudinary="cloudinary"
              :imgSrcSets="textImageImgSrcSets"
              :preset="textImagePreset"
              :alt="alt"
              :lottie="lottie"
            />
          </div>
        </div>
        <div :class="textImageSecondColClasses" data-utility-animation-step="1">
          <badge
            v-if="badge"
            :text="badge.text"
            :icon="badge.icon"
            :uppercase="!badge.noUppercase"
            classes="text-image__badge"
          />
          <span v-if="overline" class="text-image__overline d-inline-block mb-2 font-size-2">
            {{ overline }}
          </span>
          <headline v-if="headlineText" :level="level" :classes="textImageHeadlineClassesComputed" :text="headlineText">
          </headline>
          <span v-if="subline" class="richtext" v-html="subline"></span>
          <div v-if="subline" class="text-image__img text-image__img--subline mb-5 mt-5">
            <v-img
              :img="image"
              :cloudinary="cloudinary"
              :imgSrcSets="textImageImgSrcSets"
              :preset="textImagePreset"
              :alt="alt"
              :lottie="lottie"
            />
          </div>
          <div v-if="listItems">
            <headline level="h5" :text="listTitle" />
            <ul class="dashed space-bottom-1">
              <li v-for="item in listItems" :key="item" v-html="item"></li>
            </ul>
          </div>
          <div :class="textImageLightTextClass" v-html="copy"></div>
          <slot />
          <div v-if="list" class="pt-4 pt-lg-6 pb-6">
            <cta-list :list="list" />
          </div>
        </div>

        <div v-if="cta" class="text-image__cta col-lg-12">
          <cta :text="cta.text" button :href="cta.href" :trigger="cta.trigger" :trigger-id="cta.triggerId" />
        </div>
      </div>
    </div>
    <modal
      v-if="modal"
      :form="modal.form"
      :success="modal.success"
      :error="modal.error"
      :application="true"
      :clientName="modal.clientName"
      :jobId="modal.jobId"
      :apiUrl="modal.apiUrl"
      :apiKey="modal.apiKey"
    />
  </div>
</template>
<script>
//import { str } from 'storybook/internal/docs-tools';
import StickyScroller from '../utils/sticky-scroller.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'text-image',
  props: {
    spacing: { type: String, default: 'space-top-2' },
    image: String,
    imageClasses: String,
    imagePreset: String,
    lottie: Object,
    float: Boolean,
    overline: String,
    headlineText: String,
    subline: String,
    left: Boolean,
    alt: String,
    cloudinary: Boolean,
    offset: Boolean,
    white: Boolean,
    copy: String,
    list: Array,
    bgColor: String,
    copyClasses: String,
    copyLight: String,
    background: String,
    firstColWidth: Number,
    secondColWidth: Number,
    reduceSpacing: { type: Boolean, default: false },
    cta: Object,
    modal: Object,
    href: String,
    badge: Object,
    sticky: Boolean,
    noAnimation: Boolean,
    index: Number,
    noGutters: { type: Boolean, default: false },
    level: { type: String, default: 'h3' },
    headlineClasses: String,
    listTitle: String,
    listItems: Array,
  },
  computed: {
    textImageLightText() {
      return this.copyLight ? 'text-light' : '';
    },
    textImageFirstColWidthXl() {
      return this.firstColWidth || 4;
    },
    textImageFirstColWidthComputed() {
      return this.firstColWidth || 6;
    },
    textImageSecondColWidthXl() {
      return this.secondColWidth || 8;
    },
    textImageSecondColWidthComputed() {
      return this.secondColWidth || 6;
    },
    textImageHeadlineClassesComputed() {
      let classes = `${this.headlineClasses || ''} ${this.textImageLightText} mb-2 mb-lg-4`;

      if (!this.headlineClasses) {
        classes += this.float ? ' h3-font-size' : ' h4-font-size font-weight-normal';
      }

      return classes.trim();
    },
    textImageImgSrcSets() {
      if (this.float) {
        return this.imagePreset ? this.imagePreset : 'textImageFloatingSmall';
      } else {
        return this.imagePreset ? this.imagePreset : null;
      }
    },
    textImagePreset() {
      if (this.float) {
        return this.imagePreset || 'textImageFloatingSmall';
      } else {
        return this.imagePreset || null;
      }
    },
    textImageClass() {
      return [
        'text-image',
        'is-component',
        this.spacing,
        { 'text-image--bg-color': this.bgColor },
        { 'is-sticky-scroller': this.sticky },
        { 'utility-animation utility-animation--enter-exit': !this.noAnimation },
        { 'text-image--float': this.float },
        'vue-component',
      ];
    },
    textImageStyle() {
      return {
        'background-color': this.bgColor,
        '--utility-animation-index': this.index,
        'background-image': this.background ? `url('${this.background}')` : undefined,
      };
    },
    textImageFirstColClasses() {
      const classes = [
        'text-image__first-col',
        'd-flex',
        'text-image__img',
        'justify-content-center',
        this.imageClasses,
        `col-lg-${
          this.float
            ? this.textImageFirstColWidthComputed
            : this.offset
              ? this.textImageFirstColWidthComputed - 1
              : this.textImageFirstColWidthComputed
        }`,
      ];
      if (this.float) {
        classes.push(`col-xl-${this.textImageFirstColWidthXl}`, 'text-image__img--floating');
      } else if (this.offset && !this.left) {
        classes.push('offset-lg-1');
      }
      return classes;
    },
    textImageSecondColClasses() {
      const classes = [
        'text-image__second-col',
        { 'no-gutters': this.noGutters },
        { 'pt-2 pt-lg-4': !this.noGutters },
        `col-lg-${this.textImageSecondColWidthComputed}`,
        { 'fade-in-bottom': !this.noAnimation },
        { 'text-white': this.white },
        { [this.reduceSpacing]: this.reduceSpacing },
      ];

      if (!this.reduceSpacing) {
        classes.push(`${this.left ? 'pr-lg-' : 'pl-lg-'}${this.textImageSecondColWidthComputed}`);
      }

      if (this.float) {
        classes.push(`col-xl-${this.textImageSecondColWidthXl}`);
      } else if (this.left && this.offset) {
        classes.push('offset-lg-1');
      }

      return classes;
    },
    textImageLightTextClass() {
      return [this.copyClasses || '', this.textImageLightText, 'richtext'];
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    if (this.sticky) {
      StickyScroller.init([this.$refs.root]);
    }

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    handleClick() {
      if (this.href) {
        document.location.href = this.href;
      }
    },
  },
};
</script>
<style>
.text-image {
  position: relative;
  background-repeat: no-repeat;
  width: 100%;
}
.text-image[data-utility-animation-in-viewport] + [data-utility-animation-in-viewport] .text-image__second-col[data-utility-animation-step],
.text-image[data-utility-animation-in-viewport] + [data-utility-animation-in-viewport] .text-image__first-col[data-utility-animation-step] {
  animation-delay: 0.2s;
}
.text-image.text-image--bg-color + .sticky-scroller__spacer + *[class*=mt-],
.text-image.text-image--bg-color + *[class*=mt-] {
  margin-top: 0 !important;
}
.text-image.text-image--float {
  overflow: hidden;
}
.text-image.text-image--float .row .text-image__first-col {
  order: 2;
  margin-top: 2rem;
}
.text-image.text-image--float .row .text-image__second-col {
  order: 1;
}
@media (min-width: 992px) {
  .text-image.text-image--float {
    overflow: inherit;
  }
}
@media (min-width: 992px) {
  .text-image .row.flex-row-reverse .text-image__first-col {
    margin-top: 0;
    order: 1;
  }
}
@media (min-width: 992px) {
  .text-image .row.flex-row-reverse .text-image__second-col {
    order: 2;
  }
}
.text-image .img__picture-wrapper.ratio-1x1 {
  position: relative;
  overflow: hidden;
}
.text-image .img__picture-wrapper.ratio-1x1:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: calc(1 / 1 * 100%);
}
.text-image .img__picture-wrapper.ratio-1x1 > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.text-image .img__picture-wrapper.ratio-1x1 > img {
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
}
@media (min-width: 992px) {
  .text-image.text-image--float .text-image__img {
    margin-bottom: -6rem;
    opacity: 0;
    pointer-events: none;
  }
}
.text-image + footer {
  margin-top: 0 !important;
}

.text-image__badge {
  margin-bottom: 1rem;
}

.text-image__cta {
  margin-top: 2rem;
  margin-bottom: 6rem;
  order: 3;
  display: flex;
  flex: 1;
  justify-content: center;
}

.text-image__overline {
  color: var(--color-gk-orange);
}

.text-image__floating-img {
  padding-right: 0;
  display: none;
}
@media (min-width: 992px) {
  .text-image__floating-img {
    display: flex;
    max-height: calc(100% + 40px);
  }
  .text-image__floating-img img {
    max-height: 100%;
    display: block;
    height: 100%;
    width: auto;
    margin-left: auto;
    object-fit: contain;
  }
}

.text-image__img.text-image__img--floating {
  width: 100vw;
  left: 100vw;
  transform: translate(-100vw);
}
.text-image__img.text-image__img--floating .img__picture-wrapper {
  width: 100vw;
}
@media (min-width: 992px) {
  .text-image__img.text-image__img--floating .img__picture-wrapper {
    width: auto;
  }
}
@media (min-width: 576px) {
  .text-image__img.text-image__img--floating {
    width: calc(100vw - (100vw - 530px) / 2);
    left: calc(100vw - (100vw - 530px) / 2);
    transform: translateX(-540px);
  }
}
@media (min-width: 768px) {
  .text-image__img.text-image__img--floating {
    width: calc(100vw - (100vw - 710px) / 2);
    left: calc(100vw - (100vw - 710px) / 2);
    transform: translateX(-720px);
  }
}
@media (min-width: 992px) {
  .text-image__img.text-image__img--floating {
    left: 0;
    transform: none;
    width: 100%;
  }
}
@media (min-width: 992px) {
  .text-image__img.text-image__img--subline {
    display: none;
  }
}
.text-image__img.text-image__img--mobile img {
  display: none;
}
@media (min-width: 992px) {
  .text-image__img.text-image__img--mobile img {
    display: block;
  }
}
.text-image__img img {
  object-fit: contain;
  height: intrinsic;
  height: max-content;
}
.text-image__img img.is-svg {
  padding: 1.5rem;
}
.safari .text-image__img img {
  height: auto;
  width: 100%;
}
.safari .text-image__img img.is-svg {
  width: auto;
}

.text-image__first-col[data-utility-animation-step] {
  animation-duration: 0.6s;
}

.text-image__second-col[data-utility-animation-step] {
  animation-duration: 1.2s;
}

.text-image__second-col[data-utility-animation-step],
.text-image__first-col[data-utility-animation-step] {
  --utility-animation-distance: 15%;
}

.text-image__first-col-wrapper {
  width: 100%;
}
</style>
