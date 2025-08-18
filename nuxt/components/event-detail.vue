<template>
  <page-detail
    :style="{
      '--page-detail-color': `var(${detailColor})`,
      '--color-icon-hover-color': `var(${detailColor})`,
      '--color-page-detail-shape': detailShapeColor,
    }"
    :detail-shape-color="detailShapeColor"
    :no-content="!hasContent"
  >
    <template #shape>
      <div class="page-detail__shape-container container">
        <div class="row">
          <div class="col-md-11 col-lg-5">
            <div class="page-detail__shape-spacer">
              <event-detail-intro v-bind="introData"></event-detail-intro>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #body>
      <div v-if="hasContent">
        <event-detail-content
          v-if="content"
          class="page-detail__description has-no-border richtext"
          tag="main"
          v-bind="contentData"
        />
        <ContentRenderer :value="body" tag="main" class="page-detail__description has-no-border richtext" />
      </div>
      <div v-else>
        <headline :level="h3">No Event found</headline>
      </div>
    </template>
    <template #intro>
      <event-detail-intro v-bind="introData"></event-detail-intro>
    </template>
    <template #formular v-if="form">
      <headline level="h3">{{ bottomText }}</headline>
      <formular v-bind="form" :has-animation="true" />
    </template>
  </page-detail>
</template>
<script>
export default {
  tagName: 'event-detail',
  props: {
    detailColor: {
      type: String,
      default: '--color-event-detail',
    },
    detailShapeColor: {
      type: String,
      default: 'var(--color-event-detail-shape)',
    },
    headlineText: String,
    author: Array,
    headlineLevel: {
      type: String,
      default: 'h1',
    },
    headlineClasses: {
      type: String,
      default: 'bold',
    },
    form: Object,
    image: Object,
    teaserImage: Object,
    badge: Object,
    showBadge: {
      type: Boolean,
      default: false,
    },
    moment: String,
    time: String,
    lang: {
      type: String,
      default: 'de',
    },
    body: Object,
    content: Object,
    bottomText: String,
    price: String,
  },
  computed: {
    hasContent() {
      return this.content || this.body;
    },
    introData() {
      return {
        badge: this.badge,
        image: this.image,
        moment: this.moment,
        time: this.time,
        price: this.price,
        headlineText: this.headlineText,
        headlineClasses: this.headlineClassesComputed,
        name: this.author,
        showBadge: this.showBadge,
      };
    },
    contentData() {
      return {
        headline: this.content.headline,
        intro: this.content.intro,
        paragraphs: this.content.paragraphs,
        bulletpoints: this.content.bulletpoints,
        headlineLevel: this.headlineLevelComputed,
        headlineClasses: this.headlineClassesComputed,
      };
    },
    headlineLevelComputed() {
      return this.headlineLevel || 'h1';
    },
    headlineClassesComputed() {
      return `page-detail__headline event-detail__headline ${this.headlineClasses}`;
    },
    stickyOptions() {
      return JSON.stringify({
        parentSelector: '.page-detail__sticky-start',
        breakpoint: 'lg',
        startPoint: '.page-detail__sticky-start',
        endPoint: '.page-detail__sticky-end',
        stickyOffsetTop: 200,
        stickyOffsetBottom: 20,
      });
    },
  },
};
</script>
