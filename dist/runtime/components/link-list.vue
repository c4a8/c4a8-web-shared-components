<template>
  <figure :class="classList" v-if="list" ref="root">
    <figcaption :class="classListTitle" data-utility-animation-step="1" v-if="list?.languages" v-on:click="handleClick">
      {{ list.languages[lang]?.title }}
      <icon class="link-list__icon" icon="expand" size="small" />
    </figcaption>
    <ul :class="classListList" data-utility-animation-step="1">
      <template v-for="(subChild, index) in list.children">
        <li class="link-list__item" v-if="subChild.languages && subChild.languages[lang]" :key="index"
          v-on:mouseover="handleMouseOver(index)" v-on:mouseout="handleMouseOut(index)" ref="listItem">
          <cta :href="subChild.languages[lang].url" :text="subChild.languages[lang].title"
            :active="subChild.languages[lang].active" :link="true" reversed="true" monochrome="true"
            :icon="toggleIcon(index)" ref="cta" />
          <ul>
            <div class="link-list__subchildren" :class="ctaClassList"
              v-if="subChild.subchildren && subChild.subchildren.length > 0">
              <template v-for="subChild in subChild.subchildren">
                <li class="link-list__subitem" v-if="subChild.languages && subChild.languages[lang]">
                  <cta :class="ctaClassList" :href="subChild.languages[lang].url" :text="subChild.languages[lang].title"
                    :active="subChild.languages[lang].active" :link="true" icon="null" reversed="true" monochrome="true"
                    class="test" />
                </li>
              </template>
            </div>
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
    this.setCtaClasses();
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

    resetLinks(index) {
      const link = this.$refs['cta'][index];
      link.classes.remove(State.EXPANDED);

    },

    getLinkRef(refName) {
      return this.getRef('cta', refName);
    },
    getRef(name, refName) {
      let ref = null;

      if (this.$refs[name]) {
        ref = this.$refs[name][refName];
      } else if (this.$refs['listItem'] && this.$refs['listItem'].$refs[name]) {
        ref = this.$refs['listItem'].$refs[name][refName];
      }

      return ref || null;
    },
    handleMouseOver(index) {
      if (this.list.children[index].subchildren && this.list.children[index].subchildren.length > 0) {

        this.hoverChild = true;
        this.setCtaClasses();

        const link = this.$refs['cta'][index];
        if (!link) return;
        link.classList.add(State.EXPANDED);
        console.log('hovering');
      }
    },

    handleMouseOut(index) {
      if (this.list.children[index].subchildren && this.list.children[index].subchildren.length > 0) {
        this.hoverChild = false;
        this.setCtaClasses();


        const link = this.$refs['cta'][index];

        if (!link) return;
        link.classList.remove(State.EXPANDED);
      }

    },

    setCtaClasses() {
      if (this.hoverChild) {
        this.ctaClassList = 'expandedxy';
      } else {
        this.ctaClassList = null;
      }
    },

    toggleIcon(index) {
      if (this.list.children[index].subchildren && this.list.children[index].subchildren.length > 0) {
        return 'expand';
      }
      else {
        return;
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

      hoverChild: false,
      ctaClassList: null,
    };
  },
};
</script>
