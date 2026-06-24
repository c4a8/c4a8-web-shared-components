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
<style lang="scss">
.grid {
  @include utility-animation-options($distance: 15%, $delay: 100ms, $duration: 0.8s);

  --grid-spacing: #{spacing(30)};
  --grid-border-color: var(--color-gk-mid-blue);

  color: var(--color-copy);
  padding: var(--grid-spacing) 0;

  .grid__headline {
    margin-bottom: spacing(14);

    @include media-breakpoint-up(lg) {
      margin-bottom: spacing(18);
    }
  }

  @include media-breakpoint-up(lg) {
    --grid-spacing: #{spacing(40)};

    padding: var(--grid-spacing) 0;
  }
}

.grid__items {
  display: grid;
  gap: spacing(6);

  > *:not(:last-child) {
    border-bottom: 1px solid var(--grid-border-color);
  }

  @include media-breakpoint-up(md) {
    grid-template-columns: repeat(2, 1fr);

    > *:not(:last-child) {
      border-bottom: 0;
    }

    > *:nth-child(odd) {
      border-right: 1px solid var(--grid-border-color);
    }
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));

    > *:nth-child(odd) {
      border-right: 0;
    }

    > *:not(:last-child) {
      border-right: 1px solid var(--grid-border-color);
    }
  }
}

.grid__item {
  @include media-breakpoint-up(md) {
    padding-right: spacing(6);
  }
}

.grid__item-title {
  @include h3;

  line-height: 1em;
  display: block;
}

.grid__item-text {
  @include font-style($style: 'font-size-2', $weight: 'light');

  margin-bottom: spacing(10);
}

.grid__item-img,
.grid__item-title {
  margin-bottom: spacing(4);
}

.grid__item-img {
  max-width: 25%;

  @include media-breakpoint-up(lg) {
    max-width: 30%;
  }
}
</style>
