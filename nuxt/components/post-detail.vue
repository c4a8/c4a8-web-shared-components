<template>
  <article
    v-if="normalizedPost"
    class="post post-detail h-entry content-grid space-top-2 space-top-lg-4"
    :class="{ 'post-detail--aside-nav': asideNavValue }"
    itemscope
    itemtype="http://schema.org/BlogPosting"
    ref="article"
  >
    <header class="post-header">
      <h1
        class="post-title p-name"
        :class="normalizedPost.titleClass || 'h2-font-size'"
        itemprop="name headline"
        v-html="normalizedPost.title"
      ></h1>
      <div class="py-4 mt-5">
        <div class="row align-items-md-center">
          <div class="col-md-7 mb-5 mb-md-0" v-if="post.author">
            <div class="media align-items-center">
              <div v-for="person in avatars" :key="person" class="avatar mr-2">
                <author-avatar
                  v-if="authors && authors[person]?.avatar"
                  :img-url="authors[person]?.avatar"
                  :author="authors[person]"
                />
              </div>
              <div class="media-body font-size-1" :class="{ 'ml-3': avatars.length > 0 }">
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
    <p class="post__sticky-excerpt" v-html="normalizedPost.customExcerpt || normalizedPost.excerpt"></p>
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
      class="post__sticky-bar"
      :sticky-offset-top="stickyOffsetTop"
      :has-padding="!asideNavValue"
      breakpoint="lg"
      :calculate-height="true"
    >
      <aside-nav v-if="asideNavValue" v-bind="asideNavValue" />
      <socials :vertical="true" :hide-label="true" :author="null" :share-url="shareUrl" v-else />
    </sticky-block>

    <shared-content-renderer
      :value="enhancedPost"
      tag="main"
      :class="contentWidth"
      itemprop="articleBody"
      :components="{ a: ContentRendererLink }"
    />
    <div class="post-detail__tags mt-5">
      <tag v-for="(tag, index) in normalizedPost.tags" :key="index" :tag="tag" variant="small" />
    </div>
    <aside-nav v-if="!shouldShowStickyBlocks && asideNavValue" v-bind="asideNavValue" />
  </article>
  <div v-else>
    <h1>Post not found</h1>
  </div>
</template>

<script>
import Tools from '../utils/tools.js';
import { useAppStore } from '../stores/app';
import useAuthors from '../composables/useAuthors.js';
import { ref } from 'vue';
import ContentRendererLink from './content-renderer-link.vue';

export default {
  tagName: 'post-detail',
  components: {
    ContentRendererLink,
  },
  setup() {
    const { authors } = useAuthors();
    const isAtEnd = ref(false);
    const endPoint = ref(null);
    const stickyContentHeight = ref(0);
    const store = useAppStore();

    return {
      authors,
      isAtEnd,
      endPoint,
      stickyContentHeight,
      store,
      ContentRendererLink,
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

    if (!this.normalizedPost) return Tools.gotoHome();

    this.store.setPageIsLoaded(true);
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
    contentWidth() {
      return [
        'richtext full-width',
        this.asideNavValue ? 'content-grid--side-bar' : 'content-grid',
        this.post?.meta?.maxContent === true ? 'richtext--full-width' : null,
      ];
    },
    stickyOffsetTop() {
      return this.asideNavValue ? 124 : 100;
    },
    asideNavValue() {
      return this.post?.meta?.asideNav || null;
    },
    enhancedPost() {
      if (!this.normalizedPost) return null;

      return {
        ...this.normalizedPost,
        body: {
          ...this.normalizedPost.body,
          value: Tools.applyKramdownAttrs(this.normalizedPost.body.value),
        },
      };
    },
    normalizedPost() {
      return this.post ? Tools.normalizeMarkdownItem(this.post) : null;
    },
    avatars() {
      const authors = this.normalizedPost?.author;

      return authors.filter((person) => this.authors && this.authors[person]?.avatar);
    },
    blogImagePath() {
      return Tools.blogImagePath;
    },
    formattedDate() {
      if (!this.normalizedPost?.date) return '';

      const date = new Date(this.normalizedPost.date);

      return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
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
