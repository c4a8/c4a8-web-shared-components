<template>
  <div class="event-detail-intro page-detail__intro-content">
    <div class="page-detail__badge page-detail__animation-3" v-if="badge">
      <badge
        :text="badge.text"
        :icon="badge.icon"
        :color="badge.color"
        :text-color="badge.textColor"
        :overlapping="true"
      />
    </div>
    <div class="page-detail__details mb-2 page-detail__animation-3" v-if="moment || time">
      <span class="page-detail__moment font-size-1 bold" v-if="moment">{{ moment }}</span>
      <span class="page-detail__time font-size-1" v-if="time">{{ time }}</span>
    </div>
    <headline :level="headlineLevel" :classes="headlineClasses">{{ headlineText }}</headline>
    <div class="page-detail__img-wrapper" v-if="image">
      <div class="page-detail__img page-detail__animation-3">
        <v-img :img="image.img" :alt="image.alt" :cloudinary="image.cloudinary ?? true" img-src-sets="event" />
      </div>
      <div class="page-detail__subline page-detail__subline--overlapped font-size-1 bold" v-if="name">
        <div class="page-detail__subline-background"></div>
        <div class="page-detail__subline-foreground">{{ $t('withAuthor') }} {{ name.join(' & ') }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'event-detail-intro',
  props: {
    badge: {
      type: Object,
      default: null,
    },
    image: {
      type: Object,
      default: null,
    },
    moment: {
      type: String,
      default: null,
    },
    time: {
      type: String,
      default: null,
    },
    headlineText: {
      type: String,
      required: true,
    },
    headlineLevel: {
      type: String,
      default: 'h1',
    },
    headlineClasses: {
      type: String,
      default: '',
    },
    name: {
      type: Array,
      default: null,
    },
  },
};
</script>
