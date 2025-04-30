<template>
  <page-default>
    <content>
      <div class="container space-top-2 space-top-lg-4">
        <div class="w-xl-80 mx-xl-auto">
          <article v-if="post" class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting">
            <header class="post-header">
              <h1 class="post-title p-name" :class="post.titleClass || 'h2-font-size'" itemprop="name headline">
                {{ post.title }}
              </h1>
              <div class="py-4 mt-5">
                <div class="row align-items-md-center">
                  <div class="col-md-7 mb-5 mb-md-0">
                    <div class="media align-items-center">
                      <div v-for="person in post.author" :key="person" class="avatar mr-2">
                        <!-- <author-avatar
                      v-if="site.data.authors[person]?.avatar"
                      :img-url="site.data.authors[person].avatar"
                      :author="site.data.authors[person]"
                    /> -->
                      </div>
                      <div class="media-body font-size-1 ml-3">
                        {{ post.author }}
                        <authors :authors="post.author" />
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
              <p class="post__sticky-excerpt">{{ post.excerpt }}</p>
              <div v-if="post.blogTitleImages" class="post__title-images">
                <slider hide-background="true">
                  <v-img
                    v-for="(postTitleImage, index) in post.blogTitleImages"
                    :key="index"
                    :cloudinary="postTitleImage.cloudinary"
                    :img="postTitleImage.img"
                  />
                </slider>
              </div>
              <div v-else-if="post.blogtitlepic">
                <div class="post__intro-img">
                  <!-- <img-component
                :img="site.blog_image_path + post.blogtitlepic"
                :cloudinary="true"
                :alt="post.title"
              /> -->
                </div>
                <figcaption v-if="post.blogtitlepicsubline">{{ post.blogtitlepicsubline }}</figcaption>
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
              <main class="richtext">
                <ContentDoc />
              </main>
              <div id="js-sticky-block-end"></div>
              <div class="mt-5">
                <tag v-for="(tag, index) in post.tags" :key="index" :tag="tag" variant="small" />
              </div>
            </div>
          </article>
          <div v-else>
            <h1>Post not found</h1>
          </div>
        </div>
      </div>
    </content>
  </page-default>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const route = useRoute();

const { locale } = useI18n();

definePageMeta({
  footer: {
    noMargin: true,
  },
});

const path = route.path;
const dataKey = 'post-' + path;

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + locale.value;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

const formattedDate = computed(() => {
  if (!post.value?.date) return '';

  const date = new Date(post.value.date);

  return date.toLocaleDateString('de-DE');
});

const formattedDateXml = computed(() => {
  if (!post.value?.date) return '';

  const date = new Date(post.value.date);

  return date.toISOString();
});
</script>
