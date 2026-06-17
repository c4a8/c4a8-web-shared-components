<template>
  <div :class="classList">
    <wrapper :hide-container="hideContainer">
      <div class="tab-list__controls">
        <div class="tab-list__left" @click="scrollToPrevious" ref="left">
          <div class="tab-list__arrow-icon"></div>
        </div>
        <div class="tab-list__right" @click="scrollToNext">
          <div class="tab-list__arrow-icon"></div>
        </div>
      </div>
      <ul :class="listClassList" role="tablist" ref="tabList" @scroll="handleScroll" class="justify-content-center">
        <li v-for="(tab, index) in list" :class="columnClassList" ref="tab">
          <a v-bind="linkAttributes(tab, index)" :class="tabClassList(index)" @click="handleClick" ref="tabLink">
            <div class="tab-list__content">
              <div :class="boxClassList(tab)">
                <div class="d-flex flex-column align-items-center position-relative z-index-2">
                  <h2 class="tab-list__text mb-4 mb-md-6 text-center" v-if="tab.title">
                    {{ tab.title }}
                  </h2>
                  <p class="mb-6 flex-grow-1" v-if="tab.description">{{ tab.description }}</p>
                  <cta
                    text="tab.cta.text"
                    href="tab.cta.href"
                    target="tab.cta.target"
                    skin="tab.cta.skin"
                    classes="align-self-center z-index-2"
                    v-if="tab.cta != tab.href"
                  ></cta>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </wrapper>
  </div>
</template>
<script>
import Events from '../utils/events.js';
import Tools from '../utils/tools.js';

export default {
  tagName: 'tab-list',
  data() {
    return {
      smallVariant: 'tab-list--small',
      showLeftArrow: false,
      showRightArrow: false,
      currentIndex: 0,
      currentTabId: '',
    };
  },
  mounted() {
    this.handleScroll();

    this.currentTabId = this.list[0].id;
  },
  computed: {
    leftValue() {
      return Tools.isTrue(this.left) === true;
    },
    columnClassList() {
      const maxColumns = 12;
      const breakpointClass = !this.tabs ? 'lg-' : '';
      const columnClass = 'col-' + breakpointClass + maxColumns / this.list.length;

      return [this.tabs ? 'px-2 px-lg-3 nav-item' : 'mb-6 mb-md-8 mb-lg-0', this.isSmall ? '' : columnClass];
    },
    variantClass() {
      return this.variant ? this.variant : this.smallVariant;
    },
    classList() {
      return [
        'tab-list vue-component',
        this.tabs ? 'px-4 px-lg-0' : '',
        this.leftValue ? 'tab-list--left' : '',
        this.variantClass,
        this.showLeftArrow ? 'show-left-arrow' : '',
        this.showRightArrow ? 'show-right-arrow' : '',
      ];
    },
    listClassList() {
      return ['tab-list__list row nav nav-pills'];
    },
    isSmall() {
      return this.variantClass === this.smallVariant;
    },
    hideContainer() {
      return !this.leftValue;
    },
  },
  methods: {
    canScrollLeft() {
      const tabList = this.$refs['tabList'];

      if (!tabList) return;

      return tabList.scrollLeft > 0;
    },
    canScrollRight() {
      const tabList = this.$refs['tabList'];

      if (!tabList) return;

      return tabList.scrollLeft + tabList.clientWidth < tabList.scrollWidth - 2;
    },
    tabClassList(index) {
      return ['tab-list__tab rounded', index === this.currentIndex ? 'active' : ''];
    },
    ariaSelected(index) {
      return index === this.currentIndex ? true : false;
    },
    boxClassList(tab) {
      return ['tab-list__box rounded', !tab.link ? 'bg-white shadow-lg' : ''];
    },
    isLink(tab) {
      return tab.link ? tab.link.href : null;
    },
    linkAttributes(tab, index) {
      const attrs = {};

      if (tab.link) {
        Object.assign(attrs, {
          href: tab.link.href,
          target: tab.link.target,
        });
      }

      if (tab.id) {
        Object.assign(attrs, {
          id: tab.id + '-tab',
          'data-toggle': 'pill',
          role: 'tab',
          'aria-controls': tab.id,
          'aria-selected': this.ariaSelected(index),
        });
      }

      return attrs;
    },
    handleContentSwitch(id) {
      const tab = document.getElementById(id);

      if (!tab) return;

      const oldTab = document.getElementById(this.currentTabId);

      oldTab.classList.remove('active');
      oldTab.classList.remove('show');

      tab.classList.add('active');

      const delay = 50;

      setTimeout(() => {
        tab.classList.add('show');
      }, delay);

      this.currentTabId = id;
    },
    handleClick(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      const current = e.currentTarget;

      if (!current.href) return;

      const tabId = current.href.split('#')[1];
      const tabContent = document.getElementById(tabId);

      const index = Array.prototype.indexOf.call(this.$refs['tabLink'], current);

      this.currentIndex = index;

      if (tabContent === null) return;

      document.dispatchEvent(
        new CustomEvent(Events.REFRESH_ANIMATE_NUMBERS, {
          detail: { target: tabContent },
        })
      );

      this.handleContentSwitch(tabId);
    },
    handleScroll() {
      this.showLeftArrow = this.canScrollLeft();
      this.showRightArrow = this.canScrollRight();
    },
    getArrowOffset() {
      const left = this.$refs['left'];

      if (!left) return 0;

      return left.offsetWidth;
    },
    scrollToTab(index) {
      const tabList = this.$refs['tabList'];
      const activeTab = this.$refs['tab'][this.currentIndex];

      if (!tabList || !activeTab) return;

      const nextTab = this.$refs['tab'][index];

      if (!nextTab) return;

      const arrowOffset = this.getArrowOffset();
      const nextTabPosition = nextTab.offsetLeft - arrowOffset;

      tabList.scrollLeft = index === 0 ? 0 : nextTabPosition;

      nextTab.querySelector('a').click();
    },
    scrollToNext() {
      this.scrollToTab(this.currentIndex + 1);
    },
    scrollToPrevious() {
      this.scrollToTab(this.currentIndex - 1);
    },
  },
  props: {
    list: Array,
    tabs: Boolean,
    left: {
      default: null,
    },
    variant: String,
  },
};
</script>
<style>
.tab-list {
  margin-top: 3.5rem;
  margin-bottom: 3rem;
  width: 100%;
  position: relative;
}
.tab-list.show-right-arrow .tab-list__right, .tab-list.show-left-arrow .tab-list__left {
  opacity: 1;
  pointer-events: all;
}
.tab-list.tab-list--left.tab-list--small .tab-list__list, .tab-list.tab-list--left .tab-list__list {
  flex-wrap: nowrap;
}
@media (min-width: 576px) {
  .tab-list.tab-list--left.tab-list--small .tab-list__list, .tab-list.tab-list--left .tab-list__list {
    justify-content: flex-start;
  }
}
.tab-list.tab-list--small .tab-list__list {
  flex-wrap: nowrap;
}
@media (min-width: 576px) {
  .tab-list.tab-list--small .tab-list__list {
    justify-content: center;
  }
}
.tab-list .tab-list__content .tab-list__text {
  font-size: 1rem;
  position: relative;
  font-weight: normal;
  --color-headlines: var(--color-primary);
}
@media (min-width: 768px) {
  .tab-list .tab-list__content .tab-list__text {
    font-size: 1rem;
  }
}
@media (min-width: 992px) {
  .tab-list .tab-list__content .tab-list__text {
    font-size: 1.25rem;
  }
}
@media (min-width: 1200px) {
  .tab-list .tab-list__content .tab-list__text {
    font-size: 1.25rem;
  }
}

.tab-list__list {
  scroll-behavior: smooth;
  overflow-x: auto;
}
@media (min-width: 992px) {
  .tab-list__list {
    overflow-x: hidden;
  }
}

.tab-list__tab,
.tab-list__content {
  position: relative;
  height: 100%;
}

.tab-list__tab {
  display: block;
}
.tab-list__tab.active .tab-list__text {
  color: var(--color-primary-accent);
}
.tab-list__tab.active .tab-list__text::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary-accent);
  bottom: -0.5rem;
}

.tab-list__text {
  flex: 0 0 auto;
  white-space: nowrap;
}

.tab-list__controls {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 4;
  pointer-events: none;
}

.tab-list__arrow-icon {
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
  position: relative;
}
.tab-list__arrow-icon::before, .tab-list__arrow-icon::after {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.tab-list__arrow-icon::before {
  background-image: url("../../assets/svg/arrow-slider.svg");
  transform: rotate(90deg) translate(-50%, 50%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  left: 50%;
  top: 50%;
  z-index: 1;
  border: 2px solid transparent;
}
.tab-list__arrow-icon::after {
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
}

.tab-list__left,
.tab-list__right {
  display: flex;
  opacity: 0;
  align-items: center;
  position: absolute;
  height: 74%;
  width: auto;
  top: -10%;
  background-color: var(--color-gk-white);
  padding: 0 0.5rem;
  cursor: pointer;
  transition: opacity 0.5s cubic-bezier(0.19, 1, 0.2, 1);
}
.tab-list__left:hover::before,
.tab-list__right:hover::before {
  border-color: var(--color-gk-mid-blue);
}
.tab-list__left:hover::before,
.tab-list__right:hover::before {
  filter: invert(28%) sepia(97%) saturate(1365%) hue-rotate(185deg) brightness(96%) contrast(101%);
}

.tab-list__left {
  left: 0;
}

.tab-list__right {
  right: 0;
}
.tab-list__right .tab-list__arrow-icon::before {
  transform: rotate(-90deg) translate(50%, -50%);
}
</style>
