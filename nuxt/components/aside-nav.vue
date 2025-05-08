<template>
  <aside class="aside-nav">
    <ul class="aside-nav__list none">
      <li v-for="(item, index) in menuItems" :key="index" class="aside-nav__list-item font-size-1 bold">
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
  </aside>
</template>

<script setup>
import Tools from '../utils/tools';

const props = defineProps({
  menuItems: {
    type: Array,
    required: true,
  },
});

const isAnchorLink = (href) => href.startsWith('#');

const handleAnchorClick = (href) => {
  const id = href.substring(1);
  const idTarget = document.querySelector(`#${id}`);

  if (idTarget) {
    Tools.scrollIntoView(idTarget, true);
  }
};
</script>
