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
<style scoped>
.author__avatar-frame {
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 100%;
}
.author__avatar-frame:before {
  content: "";
  display: block;
  width: 100%;
  padding-top: calc(1 / 1 * 100%);
}
.author__avatar-frame > * {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.author__avatar-frame > * {
  width: 100%;
  height: 100%;
}
.author__avatar-frame img {
  width: calc(100% * 1.6);
  max-width: calc(100% * 1.6);
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
  border-radius: 100%;
  box-shadow: 0 0 0 1px rgba(140, 152, 164, 0.1);
}
</style>
