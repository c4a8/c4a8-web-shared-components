<template>
  <aside class="aside-nav">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <NuxtLink :to="item.href">
          <span>{{ item.text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
<script>
// import Tools from '../utils/tools.js';
// import State from '../utils/state.js';
// import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'aside-nav',
  computed: {},
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
