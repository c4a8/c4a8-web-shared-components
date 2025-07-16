<template>
  <div v-if="teamCards">
    <div class="team-cards container space-2">
      <div class="row mx-n2 mb-5">
        <div v-for="(item, index) in teamCards.items" :key="index" class="col-sm-6 col-lg-4 px-2 mb-3">
          <!-- Team -->
          <div class="card h-100">
            <div class="card-body has-card-background">
              <div style="margin-bottom:50px;">
                <img v-if="item.img" :src="item.img" :alt="item.alt" class="img-fluid" />
              </div>
              <h3>{{ item.name }}</h3>
              <h4>{{ item.job }}</h4>
              <p>{{ item.description }}</p>
              <br>
              <div style="display: flex; gap: 1rem;">         
                <icon icon="ribbon" size="medium"/>
                <div>{{ item.skills }}</div>
              </div>
            </div>
           
            <div class="card-footer">
              <ul class="list-inline mb-0">
                <li v-if="item.twitter" class="list-inline-item">
                  <a :href="item.twitter">
                    <i class="fab fa-x-twitter" style="font-size:1.5rem;"></i>
                  </a>
                </li>
                <li v-if="item.linkedin" class="list-inline-item">
                  <a :href="item.linkedin">
                    <i class="fab fa-linkedin" style="font-size:1.5rem;"></i>
                  </a>
                </li>
              </ul>
            </div> 
          </div>

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

export default {
  tagName: 'teamCards',

  computed: {
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
    teamCards: {
      type: Object,
      required: true,
    },
    url: String,
    title: String,
    target: String,
    excerpt: String,
    author: {
      type: [String, Array],
    },
    date: String,
    footer: String,
    tag: {
      default: null,
    },
    large: {
      default: null,
    },
    long: {
      default: null,
    },
    product: {
      default: null,
    },
    subPoints: {
      default: null,
    },
    event: {
      default: null,
    },
    webcast: {
      default: null,
    },
    youtubeUrl: String,
    dataAuthors: Object,
    scope: String,
    cta: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
    index: Number,
    externalLanguage: String,
    spacing: String,
    store: {
      default: null,
    },
    row: {
      default: null,
    },
    tags: Array,
  },
  teamCards: {
    type: Object,
    required: true,
  },
};
</script>
