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
<style lang="scss">
.fab-button {
  @include z-index;

  --fab-button-icon-size: #{spacing(18)};
  --fab-button-bg-color: var(--color-fab-background);
  --fab-button-icon-color: var(--color-copy);
  --fab-button-bottom-position: 0rem;
  --fab-button-highlight-underline-color: var(--color-orange);

  position: relative;
  width: 100%;
  right: 0;

  &.fab-button--sticky {
    position: sticky;
    top: calc(100vh - var(--fab-button-icon-size) - var(--fab-button-bottom-position));
    height: 0;
    display: flex;
    justify-content: flex-end;

    .fab-button__modal {
      &.is-off-screen {
        transform: translateX(0);
        opacity: 0;
        transition-duration: 0s;
        pointer-events: none;
        width: 0;
      }
    }
  }

  &.is-expanded {
    .fab-button__icon {
      @include is-invisible;
    }

    .fab-button__modal {
      opacity: 1;
      transform: translateX(0%);
    }
  }
}

.fab-button__wrapper {
  position: relative;
  top: -3rem;
  right: spacing(4);
  height: var(--fab-button-icon-size);
}

.fab-button__icon {
  @include shadow;

  position: absolute;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-fab-background);
  border-radius: 100%;
  padding: spacing(3);
  width: var(--fab-button-icon-size);
  height: var(--fab-button-icon-size);
  transform: translateY(100%);
  transform: translateY(0);
  right: 0;
  overflow: hidden;

  .icon--calendar {
    --icon-scale: 0.85;
  }

  svg {
    width: 90%;
  }
}

.fab-button__modal {
  @include shadow('light');

  position: fixed;
  background-color: var(--color-fab-background);
  transition:
    transform 0.7s $animation-transition,
    opacity 0.7s $animation-transition,
    height 0.7s $animation-transition;
  bottom: 0;
  right: 0;
  width: unquote('min(460px, 100vw)');
  overflow: hidden;
  will-change: transform, opacity, height;
  display: flex;
  flex-direction: column;

  &.is-off-screen {
    opacity: 0;
    transform: translateX(120%);
  }

  .contact {
    --color-contact-box-background: var(--color-fab-background);
  }

  @include media-breakpoint-up(lg) {
    flex-direction: row;
  }
}

.fab-button__close {
  position: absolute;
  right: 0;
  z-index: 1;
  width: 78px;
  height: 78px;

  > .icon {
    margin: spacing(5);
    padding: spacing(1);
    cursor: pointer;

    &.icon--circle svg {
      width: 80%;
    }
  }
}

.fab-trigger {
  cursor: pointer;
}
</style>
