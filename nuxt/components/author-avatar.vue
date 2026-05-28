<template>
  <div :class="classList">
    <div class="author__avatar-frame">
      <div :style="style">
        <v-img :img="imgUrl" :cloudinary="true" preset="avatar" :alt="author.display_name" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'author-avatar',
  data() {
    return {
      defaultImageOffsetLeft: '50%',
      defaultImageOffsetTop: '60%',
    };
  },
  computed: {
    classList() {
      return ['author__avatar vue-component', this.classes ? this.classes : ''];
    },
    style() {
      const imageOffsetLeft = this.author.imageOffsetLeft || this.defaultImageOffsetLeft;
      const imageOffsetTop = this.author.imageOffsetTop || this.defaultImageOffsetTop;

      return `left:${imageOffsetLeft};top:${imageOffsetTop}`;
    },
  },
  methods: {},
  props: {
    author: {
      default: null,
    },
    classes: String,
    imgUrl: String,
  },
};
</script>
<style lang="scss" scoped>
$author-scale: 1.6;
$author-percent: calc(100% * #{$author-scale});

.author__avatar-frame {
  @include aspect-ratio(1, 1);
  @include shadow('super-light');

  overflow: hidden;
  border-radius: 100%;

  > * {
    width: 100%;
    height: 100%;
  }

  img {
    width: $author-percent;
    max-width: $author-percent;
    transform: translateX(-50%) translateY(-50%);
    overflow: hidden;
    border-radius: 100%;
    box-shadow: 0 0 0 1px rgba($gray-600, 0.1);
  }
}
</style>
