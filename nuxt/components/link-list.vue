<template>
  <figure :class="classList" v-if="list" ref="root">
    <figcaption :class="classListTitle" data-utility-animation-step="1" v-if="list?.languages" v-on:click="handleClick">
      {{ list.languages[lang]?.title }}
      <icon class="link-list__icon" icon="expand" size="small" />
    </figcaption>
    <ul :class="classListList" data-utility-animation-step="1">
      <template v-for="(subChild, index) in list.children">
        <li
          class="link-list__item"
          v-if="subChild.languages && subChild.languages[lang]"
          :key="index"
          v-on:mouseover="handleMouseOver(index)"
          v-on:mouseout="handleMouseOut(index)"
          ref="listItem"
        >
          <cta
            :href="subChild.languages[lang].url"
            :text="subChild.languages[lang].title"
            :active="subChild.languages[lang].active"
            :link="true"
            reversed="true"
            monochrome="true"
            :icon="subChild.subchildren ? 'expand' : ''"
            :class="subChild.subchildren ? 'hasSubchildren' : ''"
          />

          <ul
            class="link-sublist"
            :class="hover ? 'd-block' : ''"
            v-if="subChild.subchildren && subChild.subchildren.length > 0"
          >
            <template v-for="subChild in subChild.subchildren">
              <li class="link-sublist__item" v-if="subChild.languages && subChild.languages[lang]">
                <cta
                  :href="subChild.languages[lang].url"
                  :text="subChild.languages[lang].title"
                  :active="subChild.languages[lang].active"
                  :link="true"
                  icon="null"
                  reversed="true"
                  monochrome="true"
                />
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </figure>
</template>
<script>
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import Events from '../utils/events.js';

export default {
  tagName: 'link-list',
  computed: {
    classList() {
      return [
        'link-list',
        this.hasNoAnimation ? '' : 'utility-animation',
        `${this.isExpanded ? State.EXPANDED : ''}`,
        `${this.isExpandable() ? State.EXPANDABLE : ''}`,
        `${this.hasActiveItem ? State.ACTIVE : ''}`,
        `${this.isHidden ? 'link-list--hidden' : ''}`,
        `${this.inTransition ? 'link-list--in-transition' : ''}`,
        this.classes,
        'vue-component',
      ];
    },
    hasNoAnimation() {
      return Tools.isTrue(this.noAnimation);
    },
    classListTitle() {
      return ['link-list__title font-size-8 bold', this.hasNoAnimation ? '' : 'fade-in-bottom'];
    },
    classListList() {
      return ['link-list__list header__list--expanded', this.hasNoAnimation ? '' : 'fade-in-bottom'];
    },
    hasActiveItem() {
      const items = this.list.children;

      if (!items || items === ' ') return;

      return items.filter((item) => item.languages[this.lang]?.active === true).length > 0;
    },
    isHidden() {
      return Tools.isTrue(this.hidden) === true;
    },
  },
  watch: {
    hidden(oldValue, _) {
      if (!oldValue) {
        this.inTransition = true;
      }
    },
  },
  updated() {
    this.updateHeight();

    this.inTransition = false;
  },
  mounted() {
    this.bindEvents();
  },
  methods: {
    bindEvents() {
      this.parentOfParent = this.$refs['root'].parentNode.parentNode;

      this.parentOfParent.addEventListener(Events.CHILD_HAS_UPDATE, this.handleUpdate.bind(this));
    },
    handleUpdate(event) {
      const eventRoot = event.detail.root;

      if (this.isExpanded && this.$refs['root'] !== eventRoot) {
        this.handleClick();
      }
    },
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('md');
    },
    isExpandable() {
      return this.isLowerBreakpoint() && this.list.languages && this.list.languages[this.lang]?.title ? true : false;
    },
    updateHeight() {
      const root = this.$refs['root'];

      if (!root) return;

      const newHeight = this.isHidden ? '' : root.scrollHeight + 'px';

      root.style.height = newHeight;
    },
    handleClick(event) {
      if (!this.isExpandable()) return;

      this.isExpanded = !this.isExpanded;

      const root = this.$refs['root'];

      if (event) {
        const customEvent = new CustomEvent(Events.CHILD_HAS_UPDATE, {
          detail: {
            root,
          },
        });

        this.parentOfParent.dispatchEvent(customEvent);
      }

      if (!root || this.isExpanded) return;

      root.style.height = '';
    },

    handleMouseOver(index) {
      if (this.list.children[index].subchildren && this.list.children[index].subchildren.length > 0) {
        this.hover = true;
        const listItem = this.$refs['listItem'][index];
        listItem.classList.add(State.EXPANDED);
      }
    },

    handleMouseOut(index) {
      if (this.list.children[index].subchildren && this.list.children[index].subchildren.length > 0) {
        this.hover = false;
        const listItem = this.$refs['listItem'][index];
        listItem.classList.remove(State.EXPANDED);
      }
    },
  },

  props: {
    list: Object,
    lang: String,
    classes: String,
    hidden: {
      default: null,
    },
    noAnimation: {
      default: null,
    },
  },
  data() {
    return {
      inTransition: false,
      isExpanded: false,
      parentOfParent: null,
      hover: false,
    };
  },
};
</script>
<style lang="scss">
$link-list-breakpoint: 'lg';

.link-list {
  --link-list-border-size: 1px;

  transition:
    height 0.4s $animation-transition,
    opacity 0.5s 0.15s $animation-transition,
    transform 0.4s 0.15s $animation-transition;

  &.link-list--in-transition,
  &.link-list--hidden {
    @include is-invisible;

    width: 0;
  }

  &.link-list--in-transition {
    width: auto;
  }

  &.active {
    .link-list__title {
      color: var(--color-active);

      @include media-breakpoint-up($link-list-breakpoint) {
        color: inherit;
      }
    }
  }

  &.is-expanded,
  &:last-of-type:not(:first-of-type) {
    .link-list__title {
      border-bottom-width: 0;

      @include media-breakpoint-up($link-list-breakpoint) {
        border-bottom-width: 1px;
      }
    }
  }

  &.is-expanded {
    .link-list__icon {
      --icon-rotation: 180deg !important;

      color: var(--color-link-list-active);
    }

    .link-list__title {
      color: var(--color-link-list-active);
      margin-bottom: 0;

      @include media-breakpoint-up($link-list-breakpoint) {
        margin-bottom: spacing(5);
      }
    }
  }

  &:not(.is-expanded) {
    .link-list__title {
      + .link-list__list {
        display: none;

        @include media-breakpoint-up($link-list-breakpoint) {
          display: flex;
        }
      }
    }
  }
}

.link-list__title {
  color: var(--color-link-list-title);
  padding-bottom: spacing(3);
  margin-bottom: spacing(4);
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  .link-list__icon {
    color: var(--color-link-list-icon);
  }

  @include media-breakpoint-up($link-list-breakpoint) {
    cursor: auto;
    border-bottom: var(--link-list-border-size) solid var(--color-link-list-border);
  }
}

.link-list__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}

.link-list__item {
  flex: 1 0 100%;
  list-style-type: none;
  margin: 0;
  padding: spacing(2) 0;

  @include media-breakpoint-down(md) {
    .cta__text {
      @include font-size-custom($sm: $font-size-13px);
    }
  }

  &.is-expanded .hasSubchildren .icon {
    --icon-rotation: 180deg !important;
  }

  .hasSubchildren:hover.link:not(.cta--external) svg {
    animation: none !important;
  }
}

.link-list__icon {
  margin-right: spacing(2);

  @include media-breakpoint-up($link-list-breakpoint) {
    display: none;
  }
}

.link-sublist__item {
  flex: 1 0 100%;
  list-style-type: none;
  margin: 0;
  padding: 0 0;
}

.link-sublist {
  display: none;
}

.link-sublist__item .cta {
  color: var(--color-header-product-subtitle);
}

@media (max-width: 991.98px) {
  .link-sublist__item .cta__text {
    font-size: 0.8125rem;
  }
}
</style>
