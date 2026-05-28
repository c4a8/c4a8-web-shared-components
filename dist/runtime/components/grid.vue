<template>
  <div class="grid has-background utility-animation vue-component" :style="style">
    <div class="grid__container container">
      <div class="grid__row row">
        <div class="grid__col col">
          <headline :text="headline" :level="headlineLevelValue" :classes="headlineClassesValue" />
          <div class="grid__items" ref="root">
            <div
              class="grid__item fade-in-bottom"
              v-for="(item, index) in items"
              :key="index"
              :style="getItemStyle(index)"
              data-utility-animation-step="1"
            >
              <span class="grid__item-title" v-if="item.title">{{ item.title }}</span>
              <v-img
                class="grid__item-img"
                :img="item.img"
                :alt="item.alt"
                v-if="item.img"
                :cloudinary="item.cloudinary"
              />
              <p class="grid__item-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import UtilityAnimation from '../utils/utility-animation.js';

// TODO replace outer container with wrapper when feature "wrapper-background" is finished

export default {
  tagName: 'grid',
  computed: {
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : 'h2';
    },
    headlineClassesValue() {
      return `grid__headline ${this.headlineClasses ? this.headlineClasses : 'h3-font-size'}`;
    },
    style() {
      const copyColor = Tools.isTrue(this.light) ? 'var(--color-copy-light)' : null;

      return {
        backgroundColor: this.bgColor,
        '--color-copy': copyColor,
        '--color-headlines': copyColor,
      };
    },
  },
  mounted() {
    UtilityAnimation.init([this.$refs.root]);
  },
  methods: {
    getItemStyle(index) {
      return UtilityAnimation.getIndexStyle(index);
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    headline: String,
    headlineLevel: String,
    headlineClasses: String,
    light: {
      default: false,
    },
    bgColor: String,
  },
};
</script>
<style>
.grid {
  --grid-spacing: 7.5rem;
  --grid-border-color: var(--color-blue-medium);
  color: var(--color-copy);
  padding: var(--grid-spacing) 0;
}
.grid [data-utility-animation-step] {
  --utility-animation-distance: 15%;
}
.grid [data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
  animation-duration: 0.8s;
}
.grid .grid__headline {
  margin-bottom: 3.5rem;
}
@media (min-width: 992px) {
  .grid .grid__headline {
    margin-bottom: 4.5rem;
  }
}
@media (min-width: 992px) {
  .grid {
    --grid-spacing: 10rem;
    padding: var(--grid-spacing) 0;
  }
}

.grid__items {
  display: grid;
  gap: 1.5rem;
}
.grid__items > *:not(:last-child) {
  border-bottom: 1px solid var(--grid-border-color);
}
@media (min-width: 768px) {
  .grid__items {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid__items > *:not(:last-child) {
    border-bottom: 0;
  }
  .grid__items > *:nth-child(odd) {
    border-right: 1px solid var(--grid-border-color);
  }
}
@media (min-width: 992px) {
  .grid__items {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  }
  .grid__items > *:nth-child(odd) {
    border-right: 0;
  }
  .grid__items > *:not(:last-child) {
    border-right: 1px solid var(--grid-border-color);
  }
}

@media (min-width: 768px) {
  .grid__item {
    padding-right: 1.5rem;
  }
}

.grid__item-title {
  font-size: 1.625rem;
  line-height: 1.3847em;
  font-weight: lighter;
  line-height: 1em;
  display: block;
}
@media (min-width: 992px) {
  .grid__item-title {
    font-size: calc(2.5rem / 1.3);
    line-height: 1.6em;
  }
}
@media (min-width: 1200px) {
  .grid__item-title {
    font-size: 2.5rem;
    line-height: 1.5em;
  }
}

.grid__item-text {
  margin-bottom: 2.5rem;
}
.grid__item-text {
  font-size: 1.125rem;
  line-height: 1.6667em;
}
@media (min-width: 992px) {
  .grid__item-text {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
@media (min-width: 1200px) {
  .grid__item-text {
    font-size: 1.25rem;
    line-height: 1.7em;
  }
}
.grid__item-text {
  font-weight: 100 !important;
}
.grid__item-text strong {
  font-weight: inherit;
}

.grid__item-img,
.grid__item-title {
  margin-bottom: 1rem;
}

.grid__item-img {
  max-width: 25%;
}
@media (min-width: 992px) {
  .grid__item-img {
    max-width: 30%;
  }
}
</style>
