<template>
  <aside class="aside-nav font-size-1 bold">
    <a class="aside-nav__toggle" @click="toggleMenu" v-if="isMobile"
      >{{ $t('topicsOnPage') }}<icon icon="plus-minus" class="aside-nav__icon-toggle" :closed="!isMenuOpen"
    /></a>
    <Transition name="slide-fade">
      <ul v-show="isMenuOpen || !isMobile" class="aside-nav__list">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="getListItemClass(item)"
          :style="{ '--item-index': index }"
        >
          <template v-if="isAnchorLink(item.href)">
            <a :href="item.href" @click.prevent="handleAnchorClick(item.href)" class="font-size-1 link">
              <span>{{ item.text }}</span>
            </a>
          </template>
          <template v-else>
            <NuxtLink :to="item.href" :target="item.target">
              <span>{{ item.text }}</span>
            </NuxtLink>
          </template>
        </li>
      </ul>
    </Transition>
  </aside>
</template>

<script setup>
import Tools from '../utils/tools';
import State from '../utils/state';
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const isMenuOpen = ref(false);
const isMobile = ref(false);
const activeSection = ref('');
let observer = null;

const checkBreakpoint = () => {
  isMobile.value = Tools.isBelowBreakpoint('lg');

  if (!isMobile.value) {
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const isAnchorLink = (href) => href.startsWith('#');

const handleAnchorClick = (href) => {
  const id = href.substring(1);
  const idTarget = document.querySelector(`#${id}`);

  if (idTarget) {
    Tools.scrollIntoView(idTarget, true);
  }

  if (isMobile.value) {
    isMenuOpen.value = false;
  }
};

const getListItemClass = (item) => {
  return {
    'aside-nav__list-item': true,
    [State.ACTIVE]: activeSection.value === item.href,
  };
};

const setupIntersectionObserver = () => {
  const headlines = props.menuItems
    .filter((item) => isAnchorLink(item.href))
    .map((item) => {
      const id = item.href.substring(1);
      const element = document.querySelector(`#${id}`);

      return { id: item.href, element };
    })
    .filter((item) => item.element);

  const topOffset = 200;
  const enterTop = -window.innerHeight + topOffset;

  const enterObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top)[0];

      if (visibleEntry) {
        const id = '#' + visibleEntry.target.id;

        activeSection.value = id;
      }
    },
    {
      rootMargin: enterTop + 'px 0px 0px 0px',
      threshold: 1,
    }
  );

  const leaveObserver = new IntersectionObserver(
    (entries) => {
      const leavingEntry = entries
        .filter((entry) => !entry.isIntersecting && entry.boundingClientRect.top > 0)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (leavingEntry) {
        const currentIndex = headlines.findIndex((item) => item.element === leavingEntry.target);
        if (currentIndex > 0) {
          activeSection.value = headlines[currentIndex - 1].id;
        }
      }
    },
    {
      rootMargin: '200px 0px 0px 0px',
      threshold: 1,
    }
  );

  headlines.forEach((item) => {
    enterObserver.observe(item.element);
    leaveObserver.observe(item.element);
  });

  observer = {
    enter: enterObserver,
    leave: leaveObserver,
  };
};

onMounted(() => {
  checkBreakpoint();

  window.addEventListener('resize', checkBreakpoint);

  setupIntersectionObserver();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkBreakpoint);

  if (observer) {
    observer.enter.disconnect();
    observer.leave.disconnect();
  }
});
</script>
<style lang="scss" scoped>
.aside-nav {
  --aside-nav-background-color: var(--color-black-2);

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(15px);
    opacity: 0;
  }

  .slide-fade-enter-to,
  .slide-fade-leave-from {
    transform: translateY(0);
    opacity: 1;
  }

  @include media-breakpoint-down(lg) {
    --aside-nav-bottom-position: #{spacing(4)};
    --aside-nav-shadow-width: 100%;

    @include shadow('super-light');
    @include z-index;

    margin: spacing(8) 0;
    background-color: var(--aside-nav-background-color);
    padding: spacing(4);
    position: sticky;
    bottom: var(--aside-nav-bottom-position);
    width: min(calc(100vw - (2 * var(--grid-gutter-half-width))), 380px);

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: var(--aside-nav-shadow-width);
      left: spacing($size: 4, $negative: true);
      height: var(--aside-nav-bottom-position);
      bottom: calc(-1 * var(--aside-nav-bottom-position));
      background-color: var(--color-background);
    }
  }

  @include media-breakpoint-down(md) {
    --aside-nav-shadow-width: 100vw;
  }
}

.aside-nav__list-item {
  + .aside-nav__list-item {
    margin-top: spacing(3);
  }

  @include media-breakpoint-down(lg) {
    &:first-of-type {
      margin-top: spacing(9);
    }
  }
}

.aside-nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.aside-nav__toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .aside-nav__icon-toggle.icon {
    width: spacing(6);
    height: spacing(6);
  }
}
</style>
