<template>
  <div class="blog container space-bottom-2 space-bottom-lg-3" v-if="showComponent">
    <div class="row justify-content-lg-between align-items-lg-center mb-7 d-lg-none">
      <!-- Search is currently not used -->
    </div>

    <SharedContentList :data-list="posts" :query="query" v-slot="{ list }">
      <template v-if="list">
        <markdown-files
          :list="list"
          v-slot="{ files }"
          :hide-data="hideData"
          :query="query"
          :limit="limit"
          :is-recent="true"
        >
          <template v-if="updateFiles(files)">
            <div class="blog__highlight-post d-none d-lg-block" v-if="highlightPost">
              <card
                :title="highlightPost.title"
                :blogtitlepic="blogTitleUrl(highlightPost)"
                :excerpt="highlightPost.excerpt"
                :date="highlightPost.date"
                :url="highlightPost.url"
                :author="highlightPost.author"
                :large="true"
                :hasAnimation="true"
                :externalLanguage="highlightPostExternalLanguage"
                spacing="mt-n48"
                :dataAuthors="authors"
              /></div
          ></template>
          <filter-bar :items="files" :maxBlogPosts="blogMaxBlogPosts" :dataAuthors="authors" />
        </markdown-files>
      </template>
    </SharedContentList>
  </div>
</template>
<script>
import { useI18n } from '#imports';

import Tools from '../utils/tools.js';
import useConfig from '../composables/useConfig.js';
import useAuthors from '../composables/useAuthors.js';

export default {
  tagName: 'blog',
  data() {
    return {
      filesValue: [],
    };
  },
  setup() {
    const config = useConfig();
    const { locale } = useI18n();
    const { authors } = useAuthors();

    return {
      config,
      locale,
      authors,
    };
  },
  computed: {
    imgUrl() {
      return Tools.getBlogImgPath(this.config);
    },
    highlightPost() {
      const firstPostArray = this.filesValue.slice(0, 1);

      return firstPostArray ? firstPostArray[0] : null;
    },
    highlightPostExternalLanguage() {
      return this.highlightPost.lang !== this.locale ? this.$t('onlyLanguage') : null;
    },
    showComponent() {
      return this.posts?.length > 0 || this.query;
    },
    query() {
      let query = {};

      query.limit = this.blogMaxBlogPosts;
      query.sort = [{ moment: this.reversed ? 1 : -1 }];
      query.reversed = this.reversed;

      query.where = {
        path: { LIKE: ['/posts/%'] },
      };
      query.path = 'posts';

      return query;
    },
  },
  methods: {
    blogTitleUrl(post) {
      if (post.image?.img) {
        return post.image.img;
      } else {
        return this.imgUrl + post.blogtitlepic;
      }
    },
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    posts: {
      type: Array,
      required: [],
    },
    blogMaxBlogPosts: {
      type: Number,
      default: 100,
      required: true,
    },
    paginator_page: Number,
    paginator_total_pages: Number,
    paginator_previous_page: Number,
    paginator_previous_page_path: String,
    paginator_next_page: Number,
    paginator_next_page_path: String,
  },
};
</script>
