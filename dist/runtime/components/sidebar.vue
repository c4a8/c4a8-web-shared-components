<template>
  <nav class="sidebar" :class="{ 'is-ready': isReady }">
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
          @click="openDialog(idx)"
        >
          <div class="sidebar__section-bar"></div>
          <div class="sidebar__section-content">
            <div class="sidebar__section-name">
              <div class="sidebar__section-overline">{{ item.overline }}</div>
              <div class="sidebar__section-title">{{ item.title }}</div>
            </div>
          </div>
        </button>
        <dialog
          class="sidebar__dialog"
          :ref="`dialog${idx}`"
          :style="{
            '--sidebar-dialog-background-color': item.color,
            '--sidebar-dialog-text-color': item.textColor,
          }"
        >
          <icon class="sidebar__dialog-close" name="close" @click="closeDialog(idx)" :hover="true" :circle="true" />
          <div class="sidebar__dialog-content">
            <div class="sidebar__dialog-wrapper">
              <div class="sidebar__dialog-section">
                <div class="sidebar__dialog-section-overline">{{ item.overline }}</div>
                <div class="sidebar__dialog-section-title">{{ item.title }}</div>
              </div>
              <div class="sidebar__dialog-text" v-html="item.text"></div>
            </div>
          </div>
        </dialog>
      </template>
    </div>
  </nav>
</template>
<script>
import State from '../utils/state.js';

export default {
  tagName: 'sidebar',
  props: {
    sections: {
      type: Array,
    },
  },
  data() {
    return {
      isReady: false,
    };
  },
  mounted() {
    this.isReady = true;
  },
  methods: {
    getDialogByIndex(index) {
      const ref = this.$refs[`dialog${index}`];

      if (!ref) return;

      return ref[0];
    },
    openDialog(index) {
      const dialog = this.getDialogByIndex(index);

      if (!dialog || !dialog.showModal) return;

      dialog.showModal();
    },
    closeDialog(index) {
      const dialog = this.getDialogByIndex(index);

      if (!dialog || !dialog.close) return;

      dialog.close();
    },
  },
};
</script>
