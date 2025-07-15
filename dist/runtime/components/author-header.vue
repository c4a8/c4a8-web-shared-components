<template>
  <div :class="classList">
    <div class="author-header__back back">
      <icon icon="arrow" direction="left" hover="true" circle="true" />
    </div>
    <author-avatar
      :author="author"
      :imgUrl="imgUrl"
      classes="col-6 col-sm-4 col-lg-2 pl-lg-0 mb-5 mb-lg-0"
    ></author-avatar>
    <div class="author-header__meta col-lg-8 mt-lg-5 mb-2 mb-lg-0">
      <span itemprop="author" itemscope itemtype="http://schema.org/Person">
        <h1 class="author-header__name h2" itemprop="name">{{ author.display_name }}</h1>
      </span>
      <span class="author-header__post-count">{{ postCount }}</span>
      <span class="ml-1">{{ $t('posts') }}</span>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'author-header',
  computed: {
    classList() {
      return ['author-header row mb-4 mb-lg-5 vue-component', this.classes ? this.classes : ''];
    },
  },
  props: {
    author: {
      default: null,
    },
    classes: String,
    imgUrl: String,
    postCount: Number,
  },
};
</script>
