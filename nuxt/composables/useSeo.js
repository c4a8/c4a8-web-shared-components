import { useSeoMeta } from '#imports';

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
