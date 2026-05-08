<template>
  <div>
    <div
      :class="classList"
      itemscope
      itemtype="http://schema.org/BlogPosting"
      @click="handleClick"
      :data-utility-animation-step="utilityAnimationStep"
      :style="style"
      ref="root"
      style="width: 500px"
    >
      <div class="">
        <div class="d-flex flex-column justify-content-center">
          <div
            class="position-absolute d-flex w-100"
            style="display: flex; justify-content: center; flex-direction: column; align-items: center"
          >
            <span class="">{{ overline }}</span>
            <span class="h2">{{ title }}</span>
          </div>
          <div class="d-flex flex-column justify-content-end" :style="{ backgroundColor: 'var(--color-primary)' }">
            <svg width="100%" height="100%" viewBox="0 0 557 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.15"
                d="M433.873 -135.547L-158.799 226.994L223.531 550.447L586.316 280.495L433.873 -135.547Z"
                fill="white"
              />
              <path
                opacity="0.15"
                d="M385.808 530.541L611.781 275.164L2.6834 -8.02276L-198.089 112.049L385.808 530.541Z"
                fill="#B5B5B5"
              />
              <path
                opacity="0.15"
                d="M576.705 523L879.764 420.899L924.996 -17L535.996 119.134L576.705 523Z"
                fill="white"
              />
            </svg>
            <svg-shape
              peak="left"
              color="var(--color-bg-grey)"
              style="padding-bottom: 3px"
              class="position-absolute w-100"
            />
          </div>
        </div>
      </div>
      <div class="card__body card-body z-index-2 pr-5 pl-5" style="display: flex; flex-direction: column">
        <p class="text-center">{{ underline }}</p>

        <div v-for="(step, index) in steps" :key="index" class="d-flex align-items-center">
          <Circle :circleContent="`${index + 1}`" />
          <div class="">
            <p class="h3 pt-5">{{ step.title }}</p>
            <p>{{ step.description }}</p>
          </div>
        </div>

        <div class="card__link mt-auto" v-if="cta">
          <cta v-bind="ctaValue" class="font-weight-bold mt-5" style="color: var(--color-primary)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import Events from '../utils/events.js';
import UtilityAnimation from '../utils/utility-animation.js';
import { useBlogStore } from '../stores/blog';
import { type } from 'jquery';

export default {
  tagName: 'card',
  data() {
    return {
      wordsToTruncate: 20,
      activeView: null,
      // TODO pass this down from blog-recent
      imgSrcSets: null,
    };
  },
  computed: {
    datePublished() {
      return Tools.getFormattedISODate(this.date);
    },
    blogView() {
      return this.activeView;
    },
    combinedTitle() {
      return `${this.title} ${this.externalLanguage ? '(' + this.externalLanguage + ')' : ''}`;
    },
    noLink() {
      return this.url === undefined || this.url === '' ? true : false;
    },
    indexValue() {
      return this.index != '' && this.index >= 0 ? this.index : null;
    },
    style() {
      return this.index ? `--utility-animation-index: ${this.index}` : null;
    },
    hasAnimationValue() {
      return Tools.isTrue(this.hasAnimation) === true;
    },
    utilityAnimationStep() {
      return this.hasAnimationValue ? '1' : null;
    },
    rowValue() {
      return Tools.isTrue(this.row) === true;
    },
    variant() {
      if (this.long === true) {
        return 'card--long';
      } else if (this.productValue) {
        return 'card--products';
      } else if (this.event === true || this.webcast === true) {
        return 'card--event';
      } else if (this.rowValue) {
        return 'card--row';
      }

      return 'card--default';
    },
    classList() {
      return [
        'card',
        this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '',
        `${this.noLink ? 'card--no-link' : ''}`,
        `${Tools.isTrue(this.large) === true ? 'card--large mb-11' : 'h-100'}`,
        this.variant,
        this.spacing,
        this.hasNoAspectRatio ? 'card--no-aspect-ratio' : '',
        'vue-component',
      ];
    },
    productValue() {
      return Tools.getJSON(this.product);
    },
    truncatedExcerpt() {
      const excerptValue =
        Tools.isTrue(this.long) === true
          ? this.strippedExcerpt
          : Tools.truncateWords(this.strippedExcerpt, this.wordsToTruncate);

      return Tools.decodeHTML(excerptValue);
    },
    strippedExcerpt() {
      return Tools.stripHtml(this.excerpt);
    },
    cardDate() {
      return this.formatDate(this.date);
    },
    hasExtension() {
      if (this.youtubeUrl) {
        return Tools.getYoutubeThumbnail(this.youtubeUrl);
      } else {
        if (/^.+\.(jpg|webp|png)/.test(this.blogtitlepic)) {
          return this.blogtitlepic;
        } else {
          return this.blogtitlepic + '.jpg';
        }
      }
    },
    hasBlogTitlePic() {
      return this.youtubeUrl ? false : true;
    },
    hasNoLink() {
      return Tools.isTrue(this.webcast) ? true : false;
    },
    ctaValue() {
      const cta = Tools.getJSON(this.cta);

      if (cta && cta.link === undefined) {
        cta.link = true;
      }

      return cta;
    },
    cardFooterData() {
      return {
        date: this.cardDate,
        author: this.author,
        authorsList: this.authorList(this.author),
        hasNoLink: this.hasNoLink,
        dataAuthors: this.dataAuthors,
        isRow: this.rowValue,
        tags: this.tags,
      };
    },
  },
  created() {
    if (Tools.isTrue(this.store) !== true) return;

    const blogStore = useBlogStore();
    this.activeView = blogStore.getBlogView;

    // Subscribe to view changes using watch
    this.$watch(
      () => blogStore.getBlogView,
      (newView) => {
        this.activeView = newView;
      }
    );
  },
  mounted() {
    if (!this.hasAnimationValue) return;

    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    isTags(target) {
      return target.parentElement.classList.contains('tags__btn') ||
        target.parentElement.classList.contains('card__tags')
        ? true
        : false;
    },
    formatDate(date) {
      if (!date) return;

      if (Tools.isGermanDate(date)) return date;

      const splitted = date.split(' ');
      const formatedDate = splitted[0].split('-');
      const year = formatedDate[0];
      const month = formatedDate[1];
      const day = formatedDate[2];

      return `${day}.${month}.${year}`;
    },
    authorList(author) {
      if (author && typeof author === 'object' && author.length > 0) return author;

      if (author && typeof author === 'string') return [author];

      return author;
    },
    subPointsList(subpoints) {
      return Tools.getJSON(subpoints);
    },
    headlineClassValue(index) {
      return index !== 0 ? 'mt-5' : '';
    },
    handleClick(e) {
      if (this.noLink) return;

      const title = this.$refs['title'];
      const target = e.target;

      if (target.classList.contains('card__title')) return;

      const isTags = this.isTags(target);

      if (!target.parentElement.classList.contains('authors__link') && !isTags) {
        e.stopImmediatePropagation();

        title.click();
      } else {
        if (!isTags) return;

        e.stopImmediatePropagation();
        e.preventDefault();

        this.$emit(Events.CARD_TAG_CLICKED, target.dataset.tag);
      }
    },
    isIncluded(include) {
      return Tools.isTrue(include) ? 'check-mark' : 'x-mark';
    },
  },
  props: {
    overline: String,
    title: String,
    underline: String,
    steps: Array,
    cta: Object,
  },
};
</script>
