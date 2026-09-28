import { whenVisible } from './when-visible.js';

let swiperRegistered = false;

export function registerSwiperWhenVisible(el, onReady) {
  return whenVisible(el, async () => {
    try {
      if (!swiperRegistered) {
        (await import('swiper/element/bundle')).register();
        swiperRegistered = true;
      }
      onReady?.();
    } catch (e) {
      console.warn('swiper failed to load', e);
    }
  });
}
