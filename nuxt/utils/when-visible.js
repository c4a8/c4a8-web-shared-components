export function whenVisible(el, onVisible, rootMargin = '100% 0px') {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      onVisible();
    },
    { rootMargin }
  );
  observer.observe(el);
  return observer;
}
