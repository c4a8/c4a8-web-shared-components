<template>
  <div :class="classValue" :style="colorStyling">
    <div
      class="list-container__container utility-animation container headline-sticky__target fade-in-bottom"
      data-utility-animation-step="1"
      ref="container"
    >
      <div class="row">
        <div class="col-sm-12">
          <headline :text="headline" :level="level" classes="list-container__headline" />
        </div>
      </div>
    </div>
    <slot-items :items="$slots.default"></slot-items>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'list-container',
  computed: {
    classValue() {
      return [
        'list-container vue-component',
        `${this.spacing ? this.spacing : ''}`,
        `${this.classes ? this.classes : ''}`,
        Tools.isTrue(this.headlineSticky) ? 'list-container--headline-sticky has-headline-sticky' : '',
      ];
    },
    colorStyling() {
      const bgColor = this.bgColor
        ? `--list-container-bg-color: ${this.bgColor}; background-color: var(--list-container-bg-color);`
        : '';
      const headlineColor = this.headlineColor
        ? `--color-headlines: ${this.headlineColor}; color: ${this.headlineColor}`
        : '';
      return [bgColor, headlineColor];
    },
  },
  mounted() {
    if (!this.$refs.container) return;

    UtilityAnimation.init([this.$refs.container]);
  },
  props: {
    classes: String,
    headline: String,
    level: String,
    bgColor: String,
    headlineColor: String,
    headlineSticky: {
      default: false,
    },
    spacing: String,
  },
};
</script>
<style>
.list-container {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}
.list-container.list-container--headline-sticky {
  position: relative;
}
.list-container.list-container--headline-sticky .list-container__container {
  --headline-sticky-bg-color: var(--list-container-bg-color);
}
.list-container.list-container--headline-sticky .list-container__container::after, .list-container.list-container--headline-sticky .list-container__container::before {
  display: block;
}
.list-container .text-image .text-image__img {
  flex: 1 0 100%;
  max-width: 100%;
}
.list-container .text-image .text-image__img img.is-svg {
  width: 40vw;
  margin: 0 auto;
  display: flex;
}
@media (min-width: 768px) {
  .list-container .text-image .text-image__img {
    flex: 1 0 40%;
    max-width: 40%;
  }
  .list-container .text-image .text-image__img img.is-svg {
    max-width: 100%;
  }
}
@media (min-width: 992px) {
  .list-container .text-image .text-image__img {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .list-container .text-image .text-image__img img.is-svg {
    width: 60%;
    padding: 1.5rem;
  }
}
@media (max-width: 991.98px) {
  .list-container .text-image .flex-row-reverse .text-image__first-col {
    order: 1;
    margin-top: 0;
  }
  .list-container .text-image .flex-row-reverse .text-image__second-col {
    order: 2;
  }
}
.list-container .text-image .text-image__second-col {
  display: flex;
  flex-direction: column;
}
@media (min-width: 576px) {
  .list-container .text-image .text-image__second-col {
    display: block;
  }
}
.list-container .text-image .row > div:nth-child(2) {
  flex: 0 1 100%;
  max-width: 100%;
}
.list-container .text-image .row > div:nth-child(2) p {
  display: none;
}
@media (min-width: 768px) {
  .list-container .text-image .row > div:nth-child(2) {
    flex: 0 1 60%;
    max-width: 60%;
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 992px) {
  .list-container .text-image .row > div:nth-child(2) {
    flex: 0 0 50%;
    max-width: 50%;
    display: block;
  }
}
.list-container > div:nth-child(1n+4).text-image {
  padding-top: 0.5rem;
}

.list-container__container::after, .list-container__container::before {
  height: calc(100% + 3.5rem);
}
.list-container__container::before {
  top: calc(-3.5rem);
}
.list-container__container::after {
  bottom: -3.5rem;
  height: 3.5rem;
}
</style>
