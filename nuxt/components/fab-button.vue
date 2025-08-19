<template>
  <div :class="fabButtonClass" ref="root">
    <div class='fab-button__wrapper'>
      <div v-if="modal" ref="modal" :style="modalStyle" class="fab-button__modal sticky-bottom">
        <div class="fab-button__close" ref="close" @click="toggleModal">
          <icon icon="close" :circle="true" :hover="true" size="medium" />
        </div>
        <span v-if="modal.content">{{ modal.content }}</span>
        <contact v-if="modal.contact" :contact="modal.contact.infos" :collapsed="true" />
      </div>
      <div class="fab-button__icon sticky-bottom" :style="fabButtonIconStyle" ref="icon" @click="toggleModal">
        <icon :icon="icon" size="large" />
      </div>
    </div>
  </div>
</template>

<script>
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

export default {
  props: {
    icon: {
      type: String,
      default: 'phone-mail'
    },
    modal: {
      type: Object,
      default: null
    },
    bgColor: {
      type: String,
      default: null
    },
    iconColor: {
      type: String,
      default: null
    },
  },
  data() {
    return {
      modalDisplay: 'none',
      buttonDisplay: 'block'
    };
  },
  computed: {
    fabButtonClass() {
      return [
        'fab-button',
      ];
    },
    fabButtonIconStyle() {
      return {
        ...(this.bgColor ? { '--color-fab-background': this.bgColor } : {}),
        ...(this.iconColor ? { color: this.iconColor } : {}),
        display: this.buttonDisplay,
      };
    },
    modalStyle() {
      return {
        display: this.modalDisplay
      };
    },
  },
  mounted() {
    this.resetDelay = 300;
    this.bindEvents();
  },
  beforeDestroy() {
    this.unbindEvents();
  },
  methods: {
    bindEvents() {
      document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
      window.addEventListener('click', this.handleOutsideClick);
    },
    unbindEvents() {
      document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
      window.removeEventListener('click', this.handleOutsideClick);
    },
    onIconClick(e) {
      if (this.hasTrigger()) {
        this.handleTriggerClick(e);
      } else {
        this.toggleModal();
      }
    },
    handleOutsideClick(e) {
      if (
        this.modalDisplay === 'block' &&
        Tools.isOutsideOf('fab-button', e) &&
        Tools.isOutsideOf('fab-trigger', e)
      ) {
        this.handleClose();
      }
    },
    handleClose() {
      this.toggleModal();
      setTimeout(() => {
        document.dispatchEvent(
          new CustomEvent(Events.FAB_BUTTON_CLOSE, {
            detail: { target: this.$refs.root },
          })
        );
      }, this.resetDelay);
    },
    toggleModal() {
      const isOpen = this.modalDisplay === 'block';
      this.modalDisplay = isOpen ? 'none' : 'block';
      this.buttonDisplay = isOpen ? 'block' : 'none';
    }
  }
};
</script>
