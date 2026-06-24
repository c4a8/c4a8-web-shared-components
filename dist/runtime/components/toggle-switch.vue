<template>
  <div :class="toggleSwitchClasses" data-utility-animation-step="1" ref="root">
    <span class="font-size-1 text-muted toggle-switch__text" :class="toggleSwitchLimitLeftClass">{{
      toggleSwitchTextLeft
    }}</span>
    <label class="mx-2" :for="toggleSwitchId">
      <input
        type="checkbox"
        class="js-toggle-switch toggle-switch-input"
        :id="toggleSwitchId"
        :checked="toggleSwitchActive"
        :data-toggle-switch-options="JSON.stringify({ targetSelector: toggleSwitchTargetSelector })"
      />
      <span class="toggle-switch-label">
        <span class="toggle-switch-indicator"></span>
      </span>
    </label>
    <span class="font-size-1 position-relative text-muted toggle-switch__text">
      <div v-if="toggleSwitchHint" class="position-absolute row toggle-switch__hint">
        <icon :icon="'arrow-curl'" :size="'small'"></icon>
        <span class="badge-pill toggle-switch__hint-text" :style="{ backgroundColor: toggleSwitchHintBgColor }">
          <span class="small" :style="{ color: toggleSwitchHintColor }">{{ toggleSwitchHintText }}</span>
        </span>
      </div>
      {{ toggleSwitchTextRight }}
    </span>
  </div>
</template>
<script>
// TODO move this inside the vue component
import ToggleSwitch from '../utils/toggle-switch.js';

export default {
  props: {
    toggleSwitch: {
      type: Object,
      default: () => ({}),
    },
    toggleSwitchHasAnimation: {
      type: Boolean,
      default: false,
    },
    products: {
      type: Object,
    },
  },
  mounted() {
    if (!this.$refs.root) return;

    new ToggleSwitch(this.$refs.root);
  },
  computed: {
    toggleSwitchTextLeft() {
      return this.toggleSwitch.textLeft || 'Monthly';
    },
    toggleSwitchTextRight() {
      return this.toggleSwitch.textRight || 'Annual';
    },
    toggleSwitchHint() {
      return this.toggleSwitch.hint || null;
    },
    toggleSwitchHintText() {
      return (this.toggleSwitchHint && this.toggleSwitchHint.text) || 'Save up to 10%';
    },
    toggleSwitchHintBgColor() {
      return (this.toggleSwitchHint && this.toggleSwitchHint.bgColor) || 'var(--color-secondary)';
    },
    toggleSwitchHintColor() {
      return (this.toggleSwitchHint && this.toggleSwitchHint.color) || 'var(--color-gk-white)';
    },
    toggleSwitchId() {
      return this.toggleSwitch.id || 'customToggleSwitch';
    },
    toggleSwitchTargetSelector() {
      return this.toggleSwitch.targetSelector || '#pricingCount1, #pricingCount2, #pricingCount3';
    },
    toggleSwitchLimit() {
      return this.toggleSwitch.limit || false;
    },
    defaultPlan() {
      return this.products && this.products.pricing && this.products.pricing.defaultPlan;
    },
    toggleSwitchActive() {
      return this.toggleSwitch.active || this.defaultPlan === 'annual';
    },
    toggleSwitchLimitLeftClass() {
      return this.toggleSwitchLimit ? 'toggle-switch__text--right' : '';
    },
    toggleSwitchClasses() {
      return [
        'toggle-switch',
        'overflow-hidden',
        'd-flex',
        'justify-content-center',
        'align-items-center',
        'pt-6',
        'mb-5',
        this.toggleSwitchHasAnimation ? 'utility-animation fade-in-bottom' : '',
      ];
    },
  },
};
</script>
<style scoped>
.toggle-switch {
  cursor: default;
  display: flex;
  margin-bottom: 0;
}
.toggle-switch[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
}
.toggle-switch .toggle-switch-label,
.toggle-switch .toggle-switch-input:checked + .toggle-switch-label {
  background: var(--color-primary);
  cursor: pointer;
}
.toggle-switch .toggle-switch-indicator {
  background-color: var(--color-toggle-switch-indicator);
}
.toggle-switch .toggle-switch__text {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .toggle-switch .toggle-switch__text {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .toggle-switch .toggle-switch__text {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.toggle-switch .toggle-switch__text {
  line-height: 1.2em !important;
}
.toggle-switch .toggle-switch__text--right {
  text-align: right;
}
.toggle-switch .toggle-switch__hint {
  top: -150%;
  left: 33%;
  min-width: 140px;
}
.toggle-switch .toggle-switch__hint-text {
  margin-left: 0.125rem;
  margin-bottom: 0.5rem;
}

.toggle-switch__hint-text {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.toggle-switch-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.toggle-switch-content {
  flex: 1;
  margin-left: 0.5rem;
}

.toggle-switch-label {
  position: relative;
  display: block;
  width: 3rem;
  height: 2rem;
  background-color: #e7eaf3;
  background-clip: content-box;
  border: 0.125rem solid transparent;
  border-radius: 6.1875rem;
  transition: 0.3s;
}

.toggle-switch-indicator {
  position: absolute;
  left: 0.125rem;
  bottom: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  transform: initial;
  box-shadow: 0 3px 6px 0 rgba(140, 152, 164, 0.25);
  border-radius: 50%;
  transform: translate3d(0, 50%, 0);
  transition: 0.3s;
}

.toggle-switch-input:checked + .toggle-switch-label {
  background-color: #377dff;
}

.toggle-switch-input:checked + .toggle-switch-label .toggle-switch-indicator {
  transform: translate3d(1.025rem, 50%, 0);
}

.toggle-switch-input:disabled + .toggle-switch-label {
  background-color: rgba(231, 234, 243, 0.5);
}

.toggle-switch-input:checked:disabled + .toggle-switch-label {
  background-color: rgba(55, 125, 255, 0.5);
}
</style>
