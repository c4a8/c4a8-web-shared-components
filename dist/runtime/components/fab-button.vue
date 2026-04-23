<template>
  <div :class="classList" ref="root">
    <div class="fab-button__wrapper" :class="['fab-button__wrapper', !noSticky ? 'js-sticky-block' : '']">
      <div
        class="fab-button__icon"
        ref="icon"
        :style="iconStyle"
        v-bind="trigger ? { 'data-trigger-id': trigger } : {}"
      >
        <icon :icon="icon" size="large" />
      </div>
    </div>
    <div v-if="modal" class="fab-button__modal is-off-screen" ref="modal">
      <div class="fab-button__close" ref="close">
        <icon icon="close" :circle="true" :hover="true" size="medium" />
      </div>
      <contact v-if="modal.contact" :contact="modal.contact.infos" :collapsed="true" :ajax="true" />
    </div>
    <a class="fab-trigger" ref="link"></a>
  </div>
</template>

<script>
import State from '../utils/state.js';
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'fab-button',
  props: {
    icon: {
      type: String,
      default: 'phone-mail',
    },
    modal: {
      type: Object,
      default: null,
    },
    noSticky: {
      type: Boolean,
      default: false,
    },
    bgColor: {
      type: String,
      default: null,
    },
    iconColor: {
      type: String,
      default: null,
    },
    trigger: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    classList() {
      return [
        'fab-button',
        !this.noSticky ? 'fab-button--sticky' : '',
        this.trigger ? 'fab-button--has-trigger' : '',
        { [this.expandedClass]: this.isExpanded },
        { [this.hasTriggerClass]: this.hasTrigger },
      ];
    },
    iconStyle() {
      let style = {};

      if (this.bgColor) style['--color-fab-background'] = this.bgColor;
      if (this.iconColor) style.color = this.iconColor;

      return style;
    },
  },
  data() {
    return {
      resetDelay: 300,
      isExpanded: false,
      hasTrigger: false,
      expandedClass: State.EXPANDED,
      offScreenClass: State.OFF_SCREEN,
      hasTriggerClass: 'fab-button--has-trigger',
    };
  },
  mounted() {
    this.iconElement = this.$refs.icon;
    this.linkElement = this.$refs.link instanceof NodeList ? this.$refs.link : [this.$refs.link];
    this.modalElement = this.$refs.modal;
    this.closeElement = this.$refs.close;
    this.root = this.$refs.root;

    this.hasTrigger = this.root.classList.contains(this.hasTriggerClass);

    this.init();
  },
  methods: {
    init() {
      this.bindEvents();
    },
    bindEvents() {
      if (!this.iconElement || !this.modalElement || this.hasTrigger) return this.bindTriggerEvent();

      this.linkElement.forEach((link) => {
        link.addEventListener('click', this.handleClick);
      });
      this.iconElement.addEventListener('click', this.handleClick);
      this.closeElement?.addEventListener('click', this.handleClose);

      document.addEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
      window.addEventListener('click', this.handleOutsideClick);

      this.modalElement.style.opacity = '1';
      this.modalElement.style.opacity = '';
    },
    bindTriggerEvent() {
      this.iconElement.addEventListener('click', this.handleTriggerClick);
    },
    handleTriggerClick(e) {
      const target = e.currentTarget;
      const triggerId = target.dataset.triggerId;

      document.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, { detail: { id: triggerId } }));
    },
    handleOutsideClick(e) {
      if (
        this.root.classList.contains(this.expandedClass) &&
        Tools.isOutsideOf('fab-button', e) &&
        Tools.isOutsideOf('fab-trigger', e)
      ) {
        this.handleClose();
      }
      if (!Tools.isOutsideOf('fab-trigger', e)) {
        this.handleClick();
      }
    },
    handleSubmit() {
      this.handleClose();
    },
    handleClose() {
      this.handleClick();

      setTimeout(() => {
        document.dispatchEvent(
          new CustomEvent(Events.FAB_BUTTON_CLOSE, {
            detail: { target: this.root },
          })
        );
      }, this.resetDelay);
    },
    handleClick() {
      this.isExpanded = !this.isExpanded;
      this.modalElement.classList.toggle(this.offScreenClass);

      if (this.modalElement.classList.contains(this.offScreenClass)) {
        this.modalElement.style.opacity = '';
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener(Events.FORM_AJAX_SUBMIT, this.handleSubmit);
  },
};
</script>
<style>
.fab-button {
  z-index: 240;
  --fab-button-icon-size: 4.5rem;
  --fab-button-bg-color: var(--color-fab-background);
  --fab-button-icon-color: var(--color-copy);
  --fab-button-bottom-position: 0rem;
  --fab-button-highlight-underline-color: var(--color-orange);
  position: relative;
  width: 100%;
  right: 0;
}
.fab-button.fab-button--sticky {
  position: sticky;
  top: calc(100vh - var(--fab-button-icon-size) - var(--fab-button-bottom-position));
  height: 0;
  display: flex;
  justify-content: flex-end;
}
.fab-button.fab-button--sticky .fab-button__modal.is-off-screen {
  transform: translateX(0);
  opacity: 0;
  transition-duration: 0s;
  pointer-events: none;
  width: 0;
}
.fab-button.is-expanded .fab-button__icon {
  visibility: collapse;
  opacity: 0;
  height: 0;
  overflow: hidden;
  margin: 0 !important;
  padding: 0 !important;
  border-width: 0;
  pointer-events: none;
}
.fab-button.is-expanded .fab-button__modal {
  opacity: 1;
  transform: translateX(0%);
}

.fab-button__wrapper {
  position: relative;
  top: -3rem;
  right: 1rem;
  height: var(--fab-button-icon-size);
}

.fab-button__icon {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.45);
  position: absolute;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-fab-background);
  border-radius: 100%;
  padding: 0.75rem;
  width: var(--fab-button-icon-size);
  height: var(--fab-button-icon-size);
  transform: translateY(100%);
  transform: translateY(0);
  right: 0;
  overflow: hidden;
}
.fab-button__icon .icon--calendar {
  --icon-scale: 0.85;
}
.fab-button__icon svg {
  width: 90%;
}

.fab-button__modal {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  background-color: var(--color-fab-background);
  transition: transform 0.7s cubic-bezier(0.19, 1, 0.2, 1), opacity 0.7s cubic-bezier(0.19, 1, 0.2, 1), height 0.7s cubic-bezier(0.19, 1, 0.2, 1);
  bottom: 0;
  right: 0;
  width: min(460px, 100vw);
  overflow: hidden;
  will-change: transform, opacity, height;
  display: flex;
  flex-direction: column;
}
.fab-button__modal.is-off-screen {
  opacity: 0;
  transform: translateX(120%);
}
.fab-button__modal .contact {
  --color-contact-box-background: var(--color-fab-background);
}
@media (min-width: 992px) {
  .fab-button__modal {
    flex-direction: row;
  }
}

.fab-button__close {
  position: absolute;
  right: 0;
  z-index: 1;
  width: 78px;
  height: 78px;
}
.fab-button__close > .icon {
  margin: 1.25rem;
  padding: 0.25rem;
  cursor: pointer;
}
.fab-button__close > .icon.icon--circle svg {
  width: 80%;
}

.fab-trigger {
  cursor: pointer;
}
</style>
