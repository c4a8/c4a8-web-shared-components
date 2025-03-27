<template>
  <div class="container space-bottom-2 space-bottom-lg-3">
    <div class="row justify-content-lg-between align-items-lg-center mb-7">
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
            <div class="d-none d-lg-block">
              {{ highlightPost.author }}
              <card
                :title="highlightPost.title"
                :blogTitlePic="blogImagePath + highlightPost.blogtitlepic"
                :excerpt="highlightPost.excerpt"
                :date="highlightPost.date"
                :url="highlightPost.url"
                :author="highlightPost.author"
                :large="true"
                :hasAnimation="true"
                :aaaaaexternalLanguage="$t('onlyLanguage')"
                spacing="mt-n48"
              /></div
          ></template>
        </markdown-files>
      </template>
    </SharedContentList>
    <!-- <filter-bar :items="paginatorPosts" :maxBlogPosts="blogMaxBlogPosts" /> -->
  </div>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'blog',
  data() {
    return {
      filesValue: [],
    };
  },
  async created() {
    const { data } = await useAsyncData('authors', () => queryContent('/').findOne());
    console.log('🚀 ~ created ~ data:', data);

    const contentQuery = queryContent().findOne();
    console.log('🚀 ~ created ~ contentQuery:', contentQuery);
  },
  computed: {
    blogImagePath() {
      return Tools.getBlogImgPath();
    },
    highlightPost() {
      const firstPostArray = this.filesValue.slice(0, 1);

      return firstPostArray ? firstPostArray[0] : null;
    },
  },
  methods: {
    updateFiles(files) {
      if (!files) return;

      this.filesValue = files;

      return true;
    },
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    // paginatorPosts: {
    //   type: Array,
    //   required: true,
    // },
    blogMaxBlogPosts: {
      type: Number,
      default: 100,
      required: true,
    },
    lang: String,
    paginator_page: Number,
    paginator_total_pages: Number,
    paginator_previous_page: Number,
    paginator_previous_page_path: String,
    paginator_next_page: Number,
    paginator_next_page_path: String,
  },
};
</script>
