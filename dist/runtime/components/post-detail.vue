<template>
  <div class="post-detail container space-top-2 space-top-lg-4">
    <div class="w-xl-80 mx-xl-auto">
      <article v-if="normalizedPost" class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting">
        <header class="post-header">
          <h1 class="post-title p-name" :class="normalizedPost.titleClass || 'h2-font-size'" itemprop="name headline">
            {{ normalizedPost.title }}
          </h1>
          <div class="py-4 mt-5">
            <div class="row align-items-md-center">
              <div class="col-md-7 mb-5 mb-md-0">
                <div class="media align-items-center" aaav-if="post.author">
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
              <div class="col-md-5 align-self-end pr-lg-0">
                <div class="text-muted text-right font-size-1">
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
          <div v-else-if="normalizedPost.blogtitlepic">
            <div class="post__intro-img">
              <v-img
                :img="blogImagePath + normalizedPost.blogtitlepic"
                :cloudinary="true"
                :alt="normalizedPost.title"
              />
            </div>
            <figcaption v-if="normalizedPost.blogtitlepicsubline">{{ normalizedPost.blogtitlepicsubline }}</figcaption>
          </div>
          <div class="post__sticky-bar">
            <div id="js-sticky-block-start" class="post__sticky-socials pl-xl-2 pt-4">
              <div
                class="js-sticky-block"
                :data-hs-sticky-block-options="{
                  parentSelector: '#js-sticky-block-start',
                  breakpoint: 'xl',
                  startPoint: '#js-sticky-block-start',
                  endPoint: '#js-sticky-block-end',
                  stickyOffsetTop: 100,
                  stickyOffsetBottom: 20,
                }"
              >
                <!-- <socials :vertical="true" :hide-label="true" :author="null" /> -->
              </div>
            </div>
          </div>
          <ContentRenderer :value="post" tag="main" class="richtext" />
          <div id="js-sticky-block-end"></div>
          <div class="mt-5">
            <tag v-for="(tag, index) in normalizedPost.tags" :key="index" :tag="tag" variant="small" />
          </div>
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

export default {
  tagName: 'post-detail',
  setup() {
    const { authors } = useAuthors();

    return {
      authors,
    };
  },
  computed: {
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
  methods: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
