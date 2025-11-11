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
