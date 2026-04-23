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
<style lang="scss">
.event {
  @include hover-scale;

  container-type: inline-size;
  background-color: var(--color-surface-background);
  overflow: hidden;

  .event__headline {
    margin-bottom: spacing(2);
  }

  &:hover {
    cursor: pointer;
  }

  .event__inner {
    .event__content {
      .headline {
        @include media-breakpoint-down(md) {
          @include font-style($style: 'h3-font-size', $weight: 'normal');
        }
      }
    }
  }

  .event__text {
    @include font-style($style: 'font-size-1', $line: 'thin');

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
  }

  @container (min-width: 740px) {
    .event__inner {
      --event-max-height: 190px;

      flex-direction: row;
      flex-wrap: nowrap;
      max-height: var(--event-max-height);
    }

    .event__content {
      padding: spacing(5) unquote('min(4vw, #{spacing(16)})');
      flex: 1;
      order: 2;
    }

    .event__image-container {
      order: 3;
    }

    .event__date {
      aspect-ratio: 1;
    }

    .event__text {
      @include font-style($style: 'font-size-2', $line: 'thin');

      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }

    .event__headline {
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }

    .event__date,
    .event__image-container {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: unquote('max(16%, var(--event-max-height))');
    }
  }
  &.non-clickable {
    pointer-events: none;
  }
}

.event__date {
  order: 1;
  background-color: var(--color-event-background);
  color: var(--color-event-copy);
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  padding: spacing(9) spacing(5);
}

.event__date,
.event__image-container {
  flex: 1 1 50%;
}

.event__content {
  order: 3;
  background-color: var(--color-surface-background);
  flex: 1 0 100%;
  padding: spacing(5);
}

.event__image-container {
  @include aspect-ratio(1, 1);

  order: 2;
}

.event__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.event__time + .event__category {
  &::before {
    content: ' | ';
    display: inline;
  }
}

.event__meta {
  margin-bottom: spacing(2);
  color: var(--color-event-time);
}

.event__inner {
  display: flex;
  flex-wrap: wrap;
}

.event__date-month,
.event__date-week-day {
  @include font-style($style: 'font-size-1', $line: 'thin');

  @include media-breakpoint-up(sm) {
    @include font-style($style: 'font-size-3', $line: 'thin');
  }

  @include media-breakpoint-up(lg) {
    @include font-style($style: 'font-size-1', $line: 'thin');
  }
}

.event__date-day {
  @include font-style($style: 'font-size-5', $weight: 'bold', $line: 'thin');

  @include media-breakpoint-up(sm) {
    @include font-style($style: 'font-size-6', $weight: 'bold', $line: 'thin');
  }

  @include media-breakpoint-up(lg) {
    @include font-style($style: 'font-size-5', $weight: 'bold', $line: 'thin');
  }
}
</style>
