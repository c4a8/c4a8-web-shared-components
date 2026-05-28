<template>
  <a :class="['lightbox', classes]" aria-haspopup="dialog" :aria-expanded="isOpen" @click="open">
    <slot />

    <Teleport to="body">
      <dialog v-show="isOpen" class="lightbox__modal" @click.self="close" ref="modal">
        <div class="lightbox__controls">
          <button class="lightbox__close" @click="close">
            <icon name="close" size="24" :hover="true" :circle="true" />
          </button>
        </div>
        <template v-if="$slots['lightbox-content'] && isOpen">
          <slot name="lightbox-content" />
        </template>
        <v-img v-else :img="source" :alt="alt" :cloudinary="cloudinary" class="lightbox__img" />
        <div class="lightbox__caption font-size-1" v-if="sourceCaption">{{ sourceCaption }}</div>
      </dialog>
    </Teleport>
  </a>
</template>
<script>
export default {
  tagName: 'lightbox',
  props: {
    images: {
      type: Array,
      required: true,
    },
    classes: String,
    source: String,
    alt: String,
    cloudinary: {
      type: Boolean,
      default: false,
    },
    sourceCaption: String,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    open() {
      this.isOpen = true;

      const modal = this.$refs['modal'];

      if (!modal) return;

      modal.showModal();
    },
    close() {
      this.isOpen = false;

      const modal = this.$refs['modal'];

      if (!modal) return;

      modal.close();

      this.$emit('lightbox-close');
    },
  },
};
</script>
<style>
.lightbox {
  cursor: pointer;
}

.lightbox__caption {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.15) 65%, rgba(0, 0, 0, 0.075) 75.5%, rgba(0, 0, 0, 0.037) 82.85%, rgba(0, 0, 0, 0.019) 88%, transparent);
  text-align: center;
  padding: 4rem 0 1.5rem;
  color: var(--color-copy-light);
}

.lightbox__caption,
.lightbox__controls {
  flex: 1 1 100%;
}

.lightbox__controls {
  display: flex;
  justify-content: flex-end;
}

.lightbox__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
  z-index: 1000;
  background-color: transparent;
  border: 0;
  padding: 0;
}
.lightbox__modal::backdrop {
  background-color: #1e1e1e;
  opacity: 0.9;
}
.lightbox__modal .media-viewer-container {
  display: none;
}
.lightbox__modal img {
  width: auto;
}
.lightbox__modal iframe {
  margin: 1rem;
  width: 100%;
  aspect-ratio: 16/9;
}

.lightbox__close {
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-top: 1rem;
  margin-right: 1rem;
}
.lightbox__close .icon {
  color: var(--color-copy-light);
}
</style>
