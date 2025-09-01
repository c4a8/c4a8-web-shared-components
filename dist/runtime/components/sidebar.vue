<template>
  <nav class="sidebar">
    <div class="sidebar__controls">
      <template v-for="(item, idx) in sections" :key="idx">
        <button
          class="sidebar__button"
          aria-haspopup="dialog"
          :style="{
            '--sidebar-section-color': item.color,
            '--sidebar-section-width': item.width,
            '--sidebar-section-index': idx,
          }"
        >
          <div class="sidebar__section-bar"></div>
          <div class="sidebar__section-content">
            <div class="sidebar__section-name">
              <div class="sidebar__section-overline">{{ item.overline }}</div>
              <div class="sidebar__section-title">{{ item.title }}</div>
            </div>
          </div>
        </button>
        <dialog>
          <button autofocus>Close</button>
          <p>This modal dialog has a groovy backdrop!</p>
        </dialog>
      </template>
    </div>
  </nav>
</template>
<script>
export default {
  tagName: 'sidebar',
  props: {
    sections: {
      type: Array,
    },
  },
};
</script>
