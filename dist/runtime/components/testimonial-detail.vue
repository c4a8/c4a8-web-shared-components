<template>
  <page-detail
    :style="{
      '--page-detail-color': `var(${detailColor})`,
      '--color-icon-hover-color': `var(${detailColor})`,
    }"
  >
    <template #body>
      <div class="page-detail__description has-no-border richtext" tag="main">
        <p>{{ introText }}</p>
        <ContentRenderer v-if="body" :value="body" tag="div" />
        <template v-else>{{ description }}</template>
      </div>
    </template>
    <template #intro>
      <headline
        :text="computedName"
        :level="headlineLevel"
        :classes="
          'testimonials-detail__headline page-detail__headline' +
          (headlineClasses ? ` ${headlineClasses}` : ' h2-font-size bold')
        "
      />
      <span class="testimonials-detail__subline page-detail__subline">{{ computedSubline }}</span>
      <div class="page-detail__img page-detail__animation-3">
        <v-img v-bind="image" :cloudinary="!cloudinary ? true : image.cloudinary" />
      </div>
    </template>
  </page-detail>
</template>

<script>
export default {
  tagName: 'testimonials-detail',
  props: {
    detailColor: {
      type: String,
      default: '--color-testimonials',
    },
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    light: {
      type: Boolean,
      default: false,
    },
    headlineLevel: {
      type: String,
      default: 'h1',
    },
    headlineClasses: {
      type: String,
      default: 'h2-font-size bold',
    },
    introText: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: Object,
      default: () => ({ img: '', alt: '' }),
    },
    body: {
      type: Object,
      default: null,
    },
  },
  computed: {
    computedName() {
      return this.name.replace(/ /g, '<br/>');
    },
    computedSubline() {
      if (this.title) {
        return `${this.title} | ${this.location}`;
      }
      return this.title;
    },
  },
};
</script>
