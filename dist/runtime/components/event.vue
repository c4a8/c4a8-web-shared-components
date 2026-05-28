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
                --color-event-background: ${this.bgColor ? this.bgColor : 'var(--color-primary-on-surface)'};
                --color-event-copy: ${this.color ? this.color : 'var(--color-copy-on-primary-on-surface)'};
                --color-event-time: ${this.timeColor ? this.timeColor : 'var(--color-primary-accent-on-surface)'};
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
    bgColor: String,
    color: String,
    timeColor: String,
  },
};
</script>
<style>
.event {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 1.5s cubic-bezier(0.19, 1, 0.2, 1);
  container-type: inline-size;
  background-color: var(--color-surface-background);
  overflow: hidden;
}
.event .is-foreground :is(img, svg, .lottie),
.event .is-background {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
  transition-duration: 0.4s;
}
.event:hover .is-foreground :is(img, svg, .lottie),
.event:hover .is-background {
  transform: scale(1.025);
  transition-duration: 1.3s;
}
.event:hover {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}
.event .event__headline {
  margin-bottom: 0.5rem;
}
.event:hover {
  cursor: pointer;
}
@media (max-width: 991.98px) {
  .event .event__inner .event__content .headline {
    font-size: 1.625rem;
    line-height: 1.3847em;
    font-weight: lighter;
  }
}
@media (max-width: 991.98px) and (min-width: 992px) {
  .event .event__inner .event__content .headline {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (max-width: 991.98px) and (min-width: 1200px) {
  .event .event__inner .event__content .headline {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}
@media (max-width: 991.98px) {
  .event .event__inner .event__content .headline {
    font-weight: 400 !important;
  }
}
.event .event__text {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
}
.event .event__text {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .event .event__text {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .event .event__text {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.event .event__text {
  line-height: 1.2em !important;
}
@container (min-width: 740px) {
  .event .event__inner {
    --event-max-height: 190px;
    flex-direction: row;
    flex-wrap: nowrap;
    max-height: var(--event-max-height);
  }
  .event .event__content {
    padding: 1.25rem min(4vw, 4rem);
    flex: 1;
    order: 2;
  }
  .event .event__image-container {
    order: 3;
  }
  .event .event__date {
    aspect-ratio: 1;
  }
  .event .event__text {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  .event .event__text {
    font-size: 1.125rem;
    line-height: 1.6667em;
  }
  @media (min-width: 992px) {
    .event .event__text {
      font-size: 1.25rem;
      line-height: 1.7em;
    }
  }
  @media (min-width: 1200px) {
    .event .event__text {
      font-size: 1.25rem;
      line-height: 1.7em;
    }
  }
  .event .event__text {
    line-height: 1.2em !important;
  }
  .event .event__headline {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }
  .event .event__date,
  .event .event__image-container {
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: max(16%, var(--event-max-height));
  }
}
.event.non-clickable {
  pointer-events: none;
}

.event__date {
  order: 1;
  background-color: var(--color-event-background);
  color: var(--color-event-copy);
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: 2.25rem 1.25rem;
}

.event__date,
.event__image-container {
  flex: 1 1 50%;
}

.event__content {
  order: 3;
  background-color: var(--color-surface-background);
  flex: 1 0 100%;
  padding: 1.25rem;
}

.event__image-container {
  position: relative;
  order: 2;
}
.event__image-container:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: calc(1 / 1 * 100%);
}
.event__image-container > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.event__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.event__time + .event__category::before {
  content: " | ";
  display: inline;
}

.event__meta {
  margin-bottom: 0.5rem;
  color: var(--color-event-time);
}

.event__inner {
  display: flex;
  flex-wrap: wrap;
}

.event__date-month,
.event__date-week-day {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.event__date-month,
.event__date-week-day {
  line-height: 1.2em !important;
}
@media (min-width: 576px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 576px) and (min-width: 992px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1.25rem;
    line-height: 1.6em;
  }
}
@media (min-width: 576px) and (min-width: 1200px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1.5625rem;
    line-height: 1.6em;
  }
}
@media (min-width: 576px) {
  .event__date-month,
  .event__date-week-day {
    line-height: 1.2em !important;
  }
}
@media (min-width: 992px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 992px) and (min-width: 992px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 992px) and (min-width: 1200px) {
  .event__date-month,
  .event__date-week-day {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 992px) {
  .event__date-month,
  .event__date-week-day {
    line-height: 1.2em !important;
  }
}

.event__date-day {
  font-size: 2rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .event__date-day {
    font-size: 2.5rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .event__date-day {
    font-size: 3rem;
    line-height: 1.6;
  }
}
.event__date-day {
  font-weight: bold !important;
}
.event__date-day {
  line-height: 1.2em !important;
}
@media (min-width: 576px) {
  .event__date-day {
    font-size: 4rem;
    line-height: 1.1em;
  }
}
@media (min-width: 576px) and (min-width: 992px) {
  .event__date-day {
    font-size: 5rem;
    line-height: 1.1em;
  }
}
@media (min-width: 576px) and (min-width: 1200px) {
  .event__date-day {
    font-size: 6rem;
    line-height: 1.1em;
  }
}
@media (min-width: 576px) {
  .event__date-day {
    font-weight: bold !important;
  }
  .event__date-day {
    line-height: 1.2em !important;
  }
}
@media (min-width: 992px) {
  .event__date-day {
    font-size: 2rem;
    line-height: 1.6;
  }
}
@media (min-width: 992px) and (min-width: 992px) {
  .event__date-day {
    font-size: 2.5rem;
    line-height: 1.6;
  }
}
@media (min-width: 992px) and (min-width: 1200px) {
  .event__date-day {
    font-size: 3rem;
    line-height: 1.6;
  }
}
@media (min-width: 992px) {
  .event__date-day {
    font-weight: bold !important;
  }
  .event__date-day {
    line-height: 1.2em !important;
  }
}
</style>
