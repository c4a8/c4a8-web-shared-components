<template>
      <div class="grid has-background utility-animation vue-component" :style="style">
      <div class="grid__container container">
        <div class="grid__row row">
          <div class="grid__col col">
            <headline :text="headline" :level="headlineLevelValue" :classes="headlineClassesValue" />
            <div class="grid__items" ref="root">
              <div class="grid__item fade-in-bottom" v-for="(item, index) in items" :key="index" :style="getItemStyle(index)" data-utility-animation-step="1" >
                <span class="grid__item-title" v-if="item.title">{{ item.title }}</span>
                <v-img class="grid__item-img" :img="item.img" :alt="item.alt" v-if="item.img" :cloudinary="item.cloudinary" />
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
  tagName: "grid",
  computed: {
    headlineLevelValue() {
      return this.headlineLevel ? this.headlineLevel : "h2";
    },
    headlineClassesValue() {
      return `grid__headline ${this.headlineClasses ? this.headlineClasses : "h3-font-size"}`;
    },
    style() {
      const copyColor = Tools.isTrue(this.light)
        ? "var(--color-copy-light)"
        : null;

      return {
        backgroundColor: this.bgColor,
        "--color-copy": copyColor,
        "--color-headlines": copyColor,
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
