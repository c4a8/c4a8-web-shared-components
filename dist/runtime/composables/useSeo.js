import { injectHead, useSeoMeta } from '#imports';

// Sites that let nuxt-seo-utils infer og:title (its "infer-seo-meta" head plugin) get the templated
// title there, the same as <title> ("About us | SCEPman"). useSeo() sets og:title to the bare title,
// and since Unhead 2.1 keeps one og:title, the bare one won and link previews lost the brand. This
// plugin gives the og:title that useSeo() set the templated title instead. Sites that switched the
// inference off (sendman.com) keep the bare title, as before.
const templatedOgTitle = (head) => ({
  key: 'shared-components:templated-og-title',
  hooks: {
    'tags:beforeResolve': (ctx) => {
      if (!head.plugins?.has('infer-seo-meta')) return;

      const bareTitle = head._title;
      const title = ctx.tagMap.get('title')?.textContent;

      if (!bareTitle || typeof title !== 'string' || title === bareTitle) return;

      for (const tag of ctx.tags.flat()) {
        if (tag.tag === 'meta' && tag.props?.property === 'og:title' && tag.props.content === bareTitle) {
          tag.props.content = title;
          tag.processTemplateParams = true;
        }
      }
    },
  },
});

export function imageWithParams(imageUrl) {
  if (!imageUrl) return imageUrl;

  const isCloudinaryUrl = imageUrl.includes('res.cloudinary.com');

  if (!isCloudinaryUrl) return imageUrl;

  const hasWidthParam = /\/w_\d+/.test(imageUrl);
  const hasHeightParam = /\/h_\d+/.test(imageUrl);

  if (hasWidthParam || hasHeightParam) return imageUrl;

  const uploadPattern = /\/upload\//;

  if (uploadPattern.test(imageUrl)) return imageUrl.replace(/\/upload\//, '/upload/w_1200/');

  return imageUrl;
}

export default function useSeo(seoMeta) {
  const { title, description, image } = seoMeta;

  if (title) {
    seoMeta.ogTitle = title;
    seoMeta.twitterTitle = title;

    injectHead()?.use(templatedOgTitle);
  }

  if (description) {
    seoMeta.ogDescription = description;
    seoMeta.twitterDescription = description;
  }

  if (image) {
    const processedImage = imageWithParams(image);

    seoMeta.image = processedImage;
    seoMeta.ogImage = processedImage;
    seoMeta.twitterImage = processedImage;
  }

  useSeoMeta(seoMeta);
}
