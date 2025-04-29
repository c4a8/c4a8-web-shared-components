<template>
  <div class="container space-bottom-2 space-bottom-lg-3" v-if="showComponent">
    <div class="row justify-content-lg-between align-items-lg-center mb-7" v-if="false">
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
            <div class="d-none d-lg-block" v-if="highlightPost">
              <card
                :title="highlightPost.title"
                :blog-title-pic="blogTitleUrl(highlightPost)"
                :excerpt="highlightPost.excerpt"
                :date="highlightPost.date"
                :url="highlightPost.url"
                :author="highlightPost.author"
                :large="true"
                :hasAnimation="true"
                :externalLanguage="highlightPostExternalLanguage"
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
import useConfig from '../composables/useConfig.js';

export default {
  tagName: 'blog',
  data() {
    return {
      filesValue: [],
    };
  },
  setup() {
    const config = useConfig();

    return {
      config,
    };
  },
  // async created() {
  // const { data } = await useAsyncData('authors', () => queryContent('/').findOne());
  // console.log('🚀 ~ created ~ data:', data);
  // const contentQuery = queryContent().findOne();
  // console.log('🚀 ~ created ~ contentQuery:', contentQuery);
  // },
  computed: {
    imgUrl() {
      return Tools.getBlogImgPath(this.config);
    },
    highlightPost() {
      const firstPostArray = this.filesValue.slice(0, 1);

      return firstPostArray ? firstPostArray[0] : null;
    },
    highlightPostExternalLanguage() {
      return this.highlightPost.lang !== lang ? this.$t('onlyLanguage') : null;
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
