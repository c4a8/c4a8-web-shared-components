let swiperRegistered = false;

export function registerSwiperWhenVisible(el, onReady) {
  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      try {
        if (!swiperRegistered) {
          (await import('swiper/element/bundle')).register();
          swiperRegistered = true;
        }
        onReady?.();
      } catch (e) {
        console.warn('swiper failed to load', e);
      }
    },
    { rootMargin: '100% 0px' }
  );
  observer.observe(el);
  return observer;
}
