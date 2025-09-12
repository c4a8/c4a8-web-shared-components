<template>
  <div class="event-detail-intro page-detail__intro-content">
    <div class="page-detail__badge page-detail__animation-3" v-if="showBadge && badge">
      <badge
        :text="badge.text"
        :icon="badge.icon"
        :color="badge.color"
        :text-color="badge.textColor"
        :overlapping="true"/>
    </div>
    <div class="page-detail__details mb-2 page-detail__animation-3" v-if="moment || time || price">
       <span class="page-detail__moment font-size-1 bold" v-if="moment">{{ formattedMoment }}</span>
      <span class="page-detail__time font-size-1" v-if="time">{{ time }}</span>
    </div>
    <div v-if="price" class="event-teaser__price font-size-2 bold">{{ price }}</div>
    <headline level="h2" class="bold">{{ headlineText }}</headline>
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
import useFormattedDate from '../composables/useFormattedDate.js';
export default {
  name: 'event-detail-intro',
  setup(props) {
    return {
      formattedMoment: useFormattedDate(props.moment),
    };
  },
  props: {
    badge: {
      type: Object,
      default: null,
    },
    showBadge: Boolean,
    image: {
      type: Object,
      default: null,
    },
    teaserImage: {
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
    price: {
      type: String,
      default: null,
    },
  },
};
</script>
