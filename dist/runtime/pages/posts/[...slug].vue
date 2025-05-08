<template>
  <page-default>
    <content>
      <post-detail :post="post" :share-url="shareUrl" />
    </content>
  </page-default>
</template>
<script setup>
// {% if page.contactInContent %}
//   {% assign postBlogRecentSpacing = '' %}

//   {%
//     include contact.html
//     infos=page.contactInContent.infos
//     quote=page.contactInContent.quote
//     base=page.contactInContent.infos.base
//     form=page.contactInContent.infos.form
//     modalSuccess=page.contactInContent.infos.modalSuccess
//     spacing="mt-10"
//   %}
// {% else %}
//   {% assign postBlogRecentSpacing = 'mt-10' %}
// {% endif %}

// {% assign headline = site.data.lang[lang].similarPosts %}

// {% if page.textImageTeaser %}
//   {%
//     include text-image.html
//     image=page.textImageTeaser.image
//     left=page.textImageTeaser.left
//     bgColor=page.textImageTeaser.bgColor
//     white=page.textImageTeaser.white
//     copy=page.textImageTeaser.copy
//     copyClasses=page.textImageTeaser.copyClasses
//     firstColWidth=page.textImageTeaser.firstColWidth
//     secondColWidth=page.textImageTeaser.secondColWidth
//     reduceSpacing=page.textImageTeaser.reduceSpacing
//     cta=page.textImageTeaser.cta
//     spacing=page.textImageTeaser.spacing
//     list=page.textImageTeaser.list
//     subline=page.textImageTeaser.subline
//     headline=page.textImageTeaser.headline
//     cloudinary=page.textImageTeaser.cloudinary
//   %}
// {% endif %}

// {%
//   include blog-recent.html
//   tag=page.tags
//   limit=21
//   headline=headline
//   slider=true
//   spacing=postBlogRecentSpacing
// %}

import { useRoute, useAsyncData, queryCollection, useNuxtApp, useRequestURL, useDynamicPageMeta } from '#imports';

const route = useRoute();

const nuxtApp = useNuxtApp();
const currentLocale = nuxtApp.$i18n.locale;

const dynamicMeta = useDynamicPageMeta();

const path = route.path;
const dataKey = 'post-' + path;
const shareUrl = `${useRequestURL().origin}${path}`;

const { data: post } = await useAsyncData(dataKey, () => {
  const collectionName = 'content_' + currentLocale.value;
  const query = queryCollection(collectionName).path(path);

  return query.first();
});

dynamicMeta.value = {
  footer: post.value?.meta?.footer,
};
</script>
