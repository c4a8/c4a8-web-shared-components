<template>
  <div class="sidebar" :class="{ [State.READY]: isReady }">
    <nav class="sidebar__nav">
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
            <icon class="sidebar__dialog-close" icon="close" @click="closeDialog(idx)" :hover="true" :circle="true" />
            <div class="sidebar__dialog-content">
              <div class="sidebar__dialog-wrapper">
                <div class="sidebar__dialog-section">
                  <div class="sidebar__dialog-section-overline">{{ item.overline }}</div>
                  <div class="sidebar__dialog-section-title">
                    {{ item.title }}
                  </div>
                </div>
                <div class="sidebar__dialog-infos">
                  <div class="sidebar__dialog-text" v-html="item.text"></div>
                  <cta class="sidebar__dialog-cta" v-if="item.cta" v-bind="item.cta" />
                </div>
              </div>
            </div>
          </dialog>
        </template>
      </div>
    </nav>
    <wrapper class="sidebar__main" :style="mainStyle">
      <div class="sidebar__row row">
        <div class="col">
          <headline level="h1" class="sidebar__headline font-size-6"><span v-html="headlineText"></span></headline>
        </div>
      </div>
      <div class="sidebar__row sidebar__row--left row">
        <div class="col">
          <div class="sidebar__date">{{ date }}</div>
          <span class="sidebar__location">
            {{ location }}
            <div v-if="hint" class="sidebar__hint">
              {{ hint }}
              <icon icon="arrow-curl" size="medium" direction="left" />
            </div>
          </span>
        </div>
      </div>
    </wrapper>
  </div>
</template>
<script>
import State from '../utils/state.js';
import { useModalStore } from '../stores/modal.js';

export default {
  tagName: 'sidebar',
  props: {
    sections: {
      type: Array,
    },
    headlineText: {
      type: String,
    },
    color: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
    hint: {
      type: String,
    },
  },
  computed: {
    mainStyle() {
      return {
        '--color-headlines': this.color,
      };
    },
  },
  data() {
    return {
      isReady: false,
      State,
      modalStore: null,
    };
  },
  mounted() {
    this.isReady = true;
    this.modalStore = useModalStore();

    this.$nextTick(() => {
      this.registerDialogs();
    });

    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    if (this.modalStore && this.sections) {
      this.sections.forEach((section) => {
        this.modalStore.unregisterModal(section.title);
      });
    }

    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    registerDialogs() {
      if (!this.sections || !this.modalStore) return;

      this.sections.forEach((section, index) => {
        this.modalStore.registerModal(section.title, {
          open: () => this.openDialog(index),
          close: () => this.closeDialog(index),
        });
      });
    },
    handleScroll() {
      this.sections.forEach((_, index) => {
        const dialog = this.getDialogByIndex(index);

        if (dialog && dialog.open) {
          dialog.close();
        }
      });
    },
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
