<template>
  <div class="post-detail container space-top-2 space-top-lg-4" :class="{ 'post-detail--aside-nav': asideNavValue }">
    <div class="w-xl-80 mx-xl-auto">
      <article v-if="normalizedPost" class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting">
        <header class="post-header">
          <h1 class="post-title p-name" :class="normalizedPost.titleClass || 'h2-font-size'" itemprop="name headline">
            {{ normalizedPost.title }}
          </h1>
          <div class="py-4 mt-5">
            <div class="row align-items-md-center">
              <div class="col-md-7 mb-5 mb-md-0" v-if="post.author">
                <div class="media align-items-center">
                  <div v-for="person in normalizedPost.author" :key="person" class="avatar mr-2">
                    <author-avatar
                      v-if="authors[person]?.avatar"
                      :img-url="authors[person].avatar"
                      :author="authors[person]"
                    />
                  </div>
                  <div class="media-body font-size-1 ml-3">
                    <authors :authors-list="normalizedPost.author" :data-authors="authors" />
                  </div>
                </div>
              </div>
              <div class="col-md-5 align-self-end pr-lg-0" :class="{ 'pl-lg-0': !post.author }">
                <div class="text-muted font-size-1" :class="{ 'text-right': post.author }">
                  <time class="dt-published" :datetime="formattedDateXml" itemprop="datePublished">
                    {{ formattedDate }}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="post-content e-content" itemprop="articleBody">
          <p class="post__sticky-excerpt">{{ normalizedPost.excerpt }}</p>
          <div v-if="post.blogTitleImages" class="post__title-images">
            <slider :hide-background="true">
              <v-img
                v-for="(postTitleImage, index) in normalizedPost.blogTitleImages"
                :key="index"
                :cloudinary="postTitleImage.cloudinary"
                :img="postTitleImage.img"
              />
            </slider>
          </div>
          <div v-else-if="normalizedPost.blogtitlepic" class="post__intro-img">
            <v-img
              :img="blogImagePath + normalizedPost.blogtitlepic"
              :cloudinary="true"
              :alt="normalizedPost.title"
              img-src-sets="postImages"
            />
            <figcaption v-if="normalizedPost.blogtitlepicsubline">{{ normalizedPost.blogtitlepicsubline }}</figcaption>
          </div>
          <sticky-block
            v-if="shouldShowStickyBlocks"
            v-model:is-at-end="isAtEnd"
            class="post__sticky-bar"
            :sticky-offset-top="stickyOffsetTop"
            :sticky-offset-bottom="20"
            :has-padding="!asideNavValue"
            breakpoint="xl"
          >
            <aside-nav v-if="asideNavValue" v-bind="asideNavValue" />
            <socials :vertical="true" :hide-label="true" :author="null" :share-url="shareUrl" v-else />
          </sticky-block>
          <ContentRenderer :value="enhancedPost" tag="main" class="richtext" />
          <sticky-block-end
            v-if="shouldShowStickyBlocks"
            v-model:is-at-end="isAtEnd"
            :sticky-offset-top="stickyOffsetTop"
            :sticky-offset-bottom="20"
          />
          <div class="post-detail__tags mt-5">
            <tag v-for="(tag, index) in normalizedPost.tags" :key="index" :tag="tag" variant="small" />
          </div>
          <aside-nav v-if="!shouldShowStickyBlocks && asideNavValue" v-bind="asideNavValue" />
        </div>
      </article>
      <div v-else>
        <h1>Post not found</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Tools from '../utils/tools.js';
import useAuthors from '../composables/useAuthors.js';
import { ref } from 'vue';

export default {
  tagName: 'post-detail',
  setup() {
    const { authors } = useAuthors();
    const isAtEnd = ref(false);

    return {
      authors,
      isAtEnd,
    };
  },
  data() {
    return {
      shouldShowStickyBlocks: false,
    };
  },
  mounted() {
    this.checkStickyBlocks();

    window.addEventListener('resize', this.checkStickyBlocks);
  },
  unmounted() {
    window.removeEventListener('resize', this.checkStickyBlocks);
  },
  methods: {
    checkStickyBlocks() {
      this.shouldShowStickyBlocks = !this.asideNavValue || !Tools.isBelowBreakpoint('lg');
    },
  },
  computed: {
    stickyOffsetTop() {
      return this.asideNavValue ? 124 : 100;
    },
    asideNavValue() {
      return this.post.meta?.asideNav || null;
    },
    enhancedPost() {
      return {
        ...this.normalizedPost,
        body: {
          ...this.normalizedPost.body,
          value: Tools.applyKramdownAttrs(this.normalizedPost.body.value),
        },
      };
    },
    normalizedPost() {
      return Tools.normalizeMarkdownItem(this.post);
    },
    blogImagePath() {
      return Tools.blogImagePath;
    },
    formattedDate() {
      if (!this.normalizedPost?.date) return '';

      const date = new Date(this.normalizedPost.date);
      return date.toLocaleDateString('de-DE');
    },
    formattedDateXml() {
      if (!this.normalizedPost?.date) return '';

      const date = new Date(this.normalizedPost.date);
      return date.toISOString();
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    shareUrl: {
      type: String,
      default: '',
    },
  },
};
</script>
