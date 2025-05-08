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
          class="aside-nav__list-item"
          :style="{ '--item-index': index }"
        >
          <template v-if="isAnchorLink(item.href)">
            <a :href="item.href" @click.prevent="handleAnchorClick(item.href)">
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
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const isMenuOpen = ref(false);
const isMobile = ref(false);

const checkBreakpoint = () => {
  isMobile.value = Tools.isBelowBreakpoint('xl');

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

onMounted(() => {
  checkBreakpoint();

  window.addEventListener('resize', checkBreakpoint);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkBreakpoint);
});
</script>
