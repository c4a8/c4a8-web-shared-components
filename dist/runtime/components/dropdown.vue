<template>
  <div
    :class="{ 'dropdown--opened': isOpen, dropdown: true, 'dropdown--filtering': filterText.length > 0 }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseDown"
  >
    <teleport :to="teleportSelector" v-if="!isStorybook">
      <div :class="{ 'dropdown__background-shim': true, show: isOpen }" @click="toggleDropdown"></div>
    </teleport>
    <div :class="dropdownLabelClasses" @click="handleClick" :style="style" data-utility-animation-step="1" ref="label">
      <span class="dropdown__label-text">{{ label }}</span>
      <span class="dropdown__label-placeholder">{{ label }}</span>
      <span class="dropdown__label-icon">
        <icon icon="arrow-narrow" direction="clockwise" size="xs" />
      </span>
    </div>
    <div class="dropdown__items" v-show="isOpen">
      <div class="dropdown__items-content">
        <div class="dropdown__items-header">
          <span class="dropdown__items-header-text">{{ label }}</span>
          <icon @click="toggleDropdown" class="dropdown__items-close-icon" icon="close" size="medium" />
        </div>
        <div class="dropdown__search-container" v-if="filterableValue">
          <input type="text" class="dropdown__search" v-model="filterText" :placeholder="$t('search')" />
          <icon class="dropdown__search-icon" icon="magnifier" size="small" />
          <icon @click="resetFilterText" class="dropdown__close-icon" icon="close" size="small" />
        </div>
        <div class="dropdown__items-list">
          <div
            :class="toggleIconClasses(item)"
            @click="handleSelection(item)"
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <input
              class="dropdown__checkbox"
              type="checkbox"
              :value="item.value"
              :id="getCheckboxId(item, index)"
              :name="getCheckboxId(item, index)"
              :checked="activeSelection.includes(item)"
            />
            <label class="dropdown__checkbox-label" :for="getCheckboxId(item, index)"></label>
            <span class="dropdown__item-text">{{ item.text }}</span>
            <span class="dropdown__item-count">{{ item.count }}</span>
          </div>
        </div>
        <div class="dropdown__buttons">
          <cta :text="$t('apply')" class="dropdown__apply-button" href="#apply" @click="applySelection" />
          <cta
            :text="$t('reset')"
            class="dropdown__reset-button"
            skin="secondary"
            :button="true"
            href="#reset"
            @click="resetSelection"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import Events from '../utils/events.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'dropdown',
  props: {
    label: String,
    items: Array,
    filterable: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
    index: Number,
  },
  computed: {
    isStorybook() {
      return Tools.isStorybook();
    },
    teleportSelector() {
      return '[id="app"]';
    },
    dropdownLabelClasses() {
      return ['dropdown__label font-size-sm', this.hasAnimation ? 'utility-animation fade-in-bottom' : ''];
    },
    parsedItems() {
      return Tools.getJSON(this.items);
    },
    filteredItems() {
      if (this.filterableValue && this.filterText.length >= this.minCharsToFilter) {
        return this.parsedItems.filter((item) => item.text.toLowerCase().includes(this.filterText.toLowerCase()));
      } else {
        return this.parsedItems;
      }
    },
    filterableValue() {
      return Tools.isTrue(this.filterable) === true;
    },
    style() {
      return this.hasAnimation ? `--utility-animation-index: ${this.index};` : '';
    },
  },
  methods: {
    initActiveSelection() {
      this.activeSelection = this.filteredItems.filter((item) => item.checked);
    },
    updateUtilityAnimation() {
      if (!this.hasAnimation) return;

      UtilityAnimation.observeElementIfNotAlready(this.$refs.label);
    },
    resetSelection() {
      this.activeSelection = [];
    },
    applySelection() {
      this.toggleDropdown();
    },
    handleSelection(selection) {
      if (!this.activeSelection.includes(selection)) {
        this.activeSelection.push(selection);
      } else {
        const index = this.activeSelection.indexOf(selection);

        this.activeSelection.splice(index, 1);
      }

      this.$emit(Events.DROPDOWN_CHANGED, this.activeSelection);
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen;

      if (this.isOpen) {
        this.$emit(Events.DROPDOWN_OPENED, this);
        this.modalOpened();
      } else {
        this.resetFilterText();
        this.modalClosed();
      }
    },
    closeModal() {
      document.body.classList.remove('modal-open');
    },
    modalOpened() {
      if (Tools.isUpperBreakpoint()) return;

      document.body.classList.add('modal-open');
    },
    modalClosed() {
      if (Tools.isUpperBreakpoint()) return;

      this.closeModal();
    },
    toggleIconClasses(selection) {
      return ['dropdown__toggle-icon', this.activeSelection.includes(selection) ? State.ACTIVE : ''];
    },
    handleMouseEnter(e) {
      if (!Tools.isUpperBreakpoint()) return e.preventDefault();

      this.toggleDropdown();
    },
    handleMouseDown(e) {
      if (!Tools.isUpperBreakpoint()) return e.preventDefault();

      this.toggleDropdown();
    },
    handleClick(e) {
      if (Tools.isUpperBreakpoint()) return e.preventDefault();

      this.toggleDropdown();
    },
    getCheckboxId(item, index) {
      return `dropdown-checkbox-${item.value}-${index}`;
    },
    resetFilterText() {
      this.filterText = '';
    },
    resetModal() {
      this.isOpen = false;

      this.closeModal();
    },
    handleResize() {
      this.resetModal();
    },
  },
  beforeMount() {
    this.initActiveSelection();
  },
  mounted() {
    this.updateUtilityAnimation();

    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  data() {
    return {
      activeSelection: [],
      isOpen: false,
      filterText: '',
      minCharsToFilter: 1,
    };
  },
};
</script>
<style>
.dropdown {
  --dropdown-label-border: transparent;
  --dropdown-items-offset: 0.75rem;
  --dropdown-checkbox-size: 1.125rem;
  --dropdown-inner-spacing: 1.75rem;
  position: relative;
  display: inline-block;
  padding-bottom: var(--dropdown-items-offset);
}
.dropdown.dropdown--opened .dropdown__label {
  --dropdown-label-border: var(--color-primary);
}
.dropdown.dropdown--opened .dropdown__label .dropdown__label-text {
  font-weight: bold;
}
.dropdown.dropdown--opened .dropdown__label-icon {
  transform: rotate(-180deg);
}
.dropdown.dropdown--filtering .dropdown__close-icon {
  display: block;
}
.dropdown.dropdown--filtering .dropdown__search-icon {
  display: none;
}
.dropdown .dropdown__close-icon {
  display: none;
}

.dropdown__items {
  z-index: 140;
  position: fixed;
  left: 50%;
  bottom: 0;
  background-color: transparent;
  transform: translateX(-50%);
}
@media (min-width: 768px) {
  .dropdown__items {
    position: absolute;
    left: auto;
    bottom: auto;
    padding: var(--dropdown-items-offset);
    transform: translateX(calc(-1 * (var(--dropdown-items-offset))));
  }
}

.dropdown__items-content {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: var(--color-background);
  width: 100vw;
  padding: var(--dropdown-inner-spacing) 0;
}
@media (min-width: 768px) {
  .dropdown__items-content {
    width: 320px;
  }
}

.dropdown__items-list {
  --scrollbar-background-color: var(--color-athens-gray);
  padding: 0 var(--dropdown-inner-spacing) 1rem var(--dropdown-inner-spacing);
  max-height: 45vh;
  overflow-y: auto;
}
.dropdown__items-list::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.dropdown__items-list::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
.dropdown__items-list::-webkit-scrollbar-thumb {
  background: var(--scrollbar-background-color);
  border-radius: 10px;
}
.dropdown__items-list::-webkit-scrollbar-track {
  border-radius: 10px;
}
@media (min-width: 768px) {
  .dropdown__items-list {
    max-height: 460px;
    padding-bottom: 0;
  }
}

.dropdown__label {
  cursor: pointer;
  display: inline-block;
  background-color: var(--color-surface-background);
  padding: 0.625rem 1.25rem;
  position: relative;
  user-select: none;
}
.dropdown__label::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--dropdown-label-border);
}

.dropdown__label-placeholder {
  opacity: 0;
  pointer-events: none;
}
.dropdown__label-placeholder {
  font-weight: bold;
}

.dropdown__label-text {
  position: absolute;
}

.dropdown__label-icon {
  display: inline-block;
  margin-left: 1rem;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.2, 1);
  position: relative;
}
.dropdown__label-icon .icon {
  transform: scaleY(2.2) scale(1.2);
}

.dropdown__toggle-icon {
  font-size: 0.85rem;
  display: flex;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  align-items: center;
}
.dropdown__toggle-icon:hover, .dropdown__toggle-icon.active {
  font-weight: bold;
}
.dropdown__toggle-icon + .dropdown__toggle-icon {
  margin-top: 0.75rem;
}

.dropdown__item-text {
  flex: 1;
  padding-right: 0.75rem;
}

input[type=checkbox].dropdown__checkbox {
  position: absolute;
  left: 0;
  z-index: -1;
  width: var(--dropdown-checkbox-size);
  height: var(--dropdown-checkbox-size);
  opacity: 0;
}
input[type=checkbox].dropdown__checkbox:checked ~ .dropdown__checkbox-label {
  background-color: var(--color-bg-checkbox);
}
input[type=checkbox].dropdown__checkbox:checked ~ .dropdown__checkbox-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}

label.dropdown__checkbox-label {
  position: relative;
  pointer-events: none;
  width: var(--dropdown-checkbox-size);
  height: var(--dropdown-checkbox-size);
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  margin-bottom: 0;
}
label.dropdown__checkbox-label::after {
  background: no-repeat 50%/65% 65%;
}
label.dropdown__checkbox-label::after {
  position: absolute;
  content: "";
  display: block;
  width: var(--dropdown-checkbox-size);
  height: var(--dropdown-checkbox-size);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.dropdown__search {
  font-size: 0.85rem;
  border: 0;
  flex: 1;
}
.dropdown__search::placeholder {
  color: var(--color-input-placeholder);
}

.dropdown__search-container {
  margin: 0 var(--dropdown-inner-spacing);
  display: flex;
  position: relative;
  padding-bottom: 0.5rem;
}
.dropdown__search-container + .dropdown__items-list {
  margin-top: calc(var(--dropdown-inner-spacing) - 0.5rem);
}
.dropdown__search-container:hover .dropdown__search-icon {
  transform: scale(1.2);
}
.dropdown__search-container::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--color-border-default);
  transition: width 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}
.dropdown__search-container:hover::after {
  width: 100%;
}

.dropdown__close-icon,
.dropdown__search-icon {
  color: var(--color-input-placeholder);
  padding: 0 0.25rem 0 0.75rem;
}
.dropdown__close-icon svg,
.dropdown__search-icon svg {
  width: 14px;
  height: 14px;
}

.dropdown__search-icon {
  pointer-events: none;
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}

.dropdown__close-icon {
  cursor: pointer;
}
.dropdown__close-icon svg {
  stroke-width: 5px;
}

.dropdown__buttons {
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border-top: 1px solid var(--color-header-container-border);
  padding: 1.25rem var(--dropdown-inner-spacing) 0;
}

.dropdown__buttons,
.dropdown__items-header {
  display: flex;
}
@media (min-width: 768px) {
  .dropdown__buttons,
  .dropdown__items-header {
    display: none;
  }
}

.dropdown__items-header {
  border-bottom: 1px solid var(--color-header-container-border);
  padding: 0 var(--dropdown-inner-spacing) 1.25rem;
  margin-bottom: 1.25rem;
  justify-content: space-between;
}

.dropdown__background-shim {
  z-index: 120;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 300vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.dropdown__background-shim.show {
  display: block;
}
@media (min-width: 768px) {
  .dropdown__background-shim {
    display: none;
  }
  .dropdown__background-shim.show {
    display: none;
  }
}

.dropdown__items-header-text {
  font-weight: bold;
}
</style>
