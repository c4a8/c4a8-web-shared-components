<template>
  <article :class="['event vue-component', classes ? classes : null]" :style="style" @click="handleClick">
    <div class="event__inner">
      <div class="event__date">
        <div class="event__date-week-day is-uppercase">{{ dateWeekDay }}</div>
        <div class="event__date-day">{{ dateDay }}</div>
        <div class="event__date-month is-uppercase">{{ dateMonth }}</div>
      </div>
      <div class="event__content">
        <div class="event__meta">
          <time class="event__time font-size-1 bold" v-if="timeValue">{{ timeValue }}</time>
          <span class="event__category font-size-1 bold is-uppercase" v-if="category">{{ category }}</span>
        </div>
        <headline class="event__headline" :text="title" level="h4" />
        <p class="event__text">{{ textWithAmpersand }}</p>
      </div>
      <div class="event__image-container is-background" v-if="imageValue">
        <v-img class="event__image" :cloudinary="cloudinary" v-bind="imageValue" :lazy="true" preset="eventThumb" />
      </div>
    </div>
  </article>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'event',
  data() {
    return {
      hasMultipleDays: false,
    };
  },
  computed: {
    style() {
      return `
                --color-event-background: ${this.bgColor ? this.bgColor : 'var(--color-green-blue)'};
                --color-event-copy: ${this.color ? this.color : 'var(--color-copy-light)'};
                --color-event-time: ${this.timeColor ? this.timeColor : 'var(--color-green-blue)'};
            `;
    },
    textWithAmpersand() {
      return this.normalizedText?.replace(/&amp;/g, '&');
    },
    normalizedDate() {
      // TODO after migration we can probably get rid of this normalization

      return this.moment || this.date;
    },
    normalizedText() {
      // TODO after migration we can probably get rid of this normalization

      return this.text || this.excerpt;
    },
    validDate() {
      let date = new Date(this.normalizedDate);

      if (isNaN(date.getTime())) {
        date = Tools.convertToDate(this.normalizedDate);

        this.hasMultipleDays = true;

        if (date && isNaN(date.getTime())) return null;
      }

      return date;
    },
    dateDay() {
      if (!this.validDate) return;

      const day = this.validDate.getDate();

      return day < 10 ? `0${day}` : day;
    },
    dateMonth() {
      if (!this.validDate) return;

      const month = this.validDate.toLocaleDateString(undefined, {
        month: 'short',
      });

      return month.slice(0, 3);
    },
    dateWeekDay() {
      if (!this.validDate) return;

      const weekDay = this.validDate.toLocaleDateString(undefined, {
        weekday: 'short',
      });

      return weekDay.slice(0, 2);
    },
    imageValue() {
      return Tools.getJSON(this.image);
    },
    cloudinary() {
      return this.imageValue && this.imageValue.cloudinary ? this.imageValue.cloudinary : true;
    },
    timeValue() {
      return !this.hasMultipleDays ? Tools.standardizeTimeFormat(this.time) : this.normalizedDate;
    },
  },
  methods: {
    handleClick() {
      if (this.external) return window.open(this.url, '_blank');

      document.location.href = this.url;
    },
  },
  props: {
    title: String,
    date: String,
    moment: String,
    category: String,
    text: String,
    excerpt: String,
    image: Object,
    bgColor: String,
    color: String,
    time: String,
    timeColor: String,
    classes: String,
    url: String,
    external: Boolean,
  },
};
</script>
