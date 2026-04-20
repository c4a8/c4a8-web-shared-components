<template>
  <div class="header__spacer" :style="spacerBgColor"></div>
  <header :class="classList" v-on:mouseover="handleHeaderMouseOver" v-on:mouseout="handleHeaderMouseOut">
    <div :class="headerContainerClassList" ref="headerContainer">
      <div class="header__row row">
        <div class="header__col col">
          <div
            :class="secondaryNavigationClassList"
            v-if="secondaryNavigation"
            @transitionend="handleSecondaryNavigationTransitionEnd"
            ref="secondaryNavigation"
          >
            <div
              class="header__secondary-navigation-button"
              ref="secondaryNavigationButton"
              @click="toggleSecondaryNavigation"
            >
              <icon class="header__secondary-navigation-icon" icon="grid" />
              <span class="header__secondary-navigation-text">{{ secondaryNavigation.text }}</span>
            </div>
            <div class="header__secondary-navigation-content">
              <div
                class="header__secondary-navigation-inner-content"
                ref="secondaryNavigationInnerContent"
                v-if="renderMegaMenu"
              >
                <template v-for="(item, index) in secondaryNavigation.children" :key="index">
                  <a
                    :href="getHref(child)"
                    :target="getTarget(child)"
                    class="header__secondary-navigation-item custom"
                    v-for="(child, itemIndex) in item.children"
                    :key="itemIndex"
                  >
                    <v-img
                      :img="child.img"
                      class="header__secondary-navigation-item-img"
                      :cloudinary="true"
                      :alt="child.languages[lowerLang]?.alt || child.languages[lowerLang]?.title"
                    />
                    <span class="header__secondary-navigation-item-text">{{ child.languages[lowerLang]?.title }}</span>
                  </a>
                </template>
              </div>
            </div>
          </div>
          <div class="header__logo" :style="headerLogoStyle">
            <a :href="homeObj?.url">
              <v-img :img="home?.imgLight" class="header__logo-light" :cloudinary="true" alt="logo" />
              <v-img :img="home?.img" class="header__logo-default" :cloudinary="true" alt="logo" />
            </a>
          </div>
          <div class="header__menu" v-on:click="handleCloseClick">
            <icon icon="v-menu" class="header__menu-icon" :closed="closed" />
          </div>
          <nav class="header__nav" v-on:mouseout="handleMouseOut">
            <ul class="header__list" ref="list">
              <v-header-item
                :activeNavigation="activeNavigation"
                :lowerLang="lowerLang"
                :handleMouseOver="handleMouseOver"
                :handleClick="handleClick"
                :getHref="getHref"
                :getTarget="getTarget"
                :linkLists="linkLists"
                :getId="getId"
                :inTransition="inTransition"
                :renderMegaMenu="renderMegaMenu"
                ref="headerItem"
              ></v-header-item>
            </ul>
            <div class="header__footer">
              <link-list
                :list="metaList"
                :lang="lowerLang"
                classes="header__meta-list"
                :no-animation="true"
                v-if="metaList && hasMeta"
              />

              <div class="header__contact header__contact--mobile" v-if="hasContact">
                <a
                  class="header__contact-link custom"
                  :href="contact.languages[lowerLang]?.url"
                  v-if="contact?.languages"
                >
                  <div class="header__contact-text">
                    <icon icon="phone-mail" size="medium" />
                    <span class="header__contact-title">
                      {{ contact.languages[lowerLang]?.title }}
                    </span>
                  </div>
                </a>
              </div>
              <div class="header__button" v-if="button">
                <cta :classes="ctaClassList" :on-surface="onSurfaceCta" v-bind="button" />
              </div>
              <div class="header__language-switch" v-if="hasLangSwitch">
                <a
                  :key="key"
                  v-for="(_, key) in home.languages"
                  :class="{ 'header__language-link custom': true, active: key === lowerLang }"
                  v-on:click="handleLanguageSwitch(key)"
                  >{{ key }}</a
                >
              </div>
            </div>
          </nav>
          <div class="header__button" v-if="button">
            <cta :classes="ctaClassList" :on-surface="onSurfaceCta" v-bind="button" />
          </div>
          <search v-if="searchValue" class="header__search" language="de" placeholder="search" />
          <div
            class="header__language-switch"
            v-on:mouseover="handleLanguageOver"
            v-on:mouseout="handleLanguageOut"
            v-if="hasLangSwitch"
            ref="languageSwitch"
          >
            <span class="header__link-text">{{ lang }}</span>
            <span class="header__link-text-spacer">{{ lang }}</span>
            <icon class="header__link-icon" icon="expand" size="small" />
            <div class="header__language-switch-flyout" ref="languageSwitchFlyout">
              <a
                v-for="(_, key) in home.languages"
                :class="{ 'header__language-link custom': true, 'd-none': key === lowerLang }"
                v-on:click="handleLanguageSwitch(key)"
                :key="key"
                >{{ key }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__flyout" v-on:mouseout="handleMouseOut" v-if="renderMegaMenu">
      <div :class="containerClass">
        <div class="row">
          <div class="col">
            <div
              class="header__flyout-content"
              v-for="(item, itemIndex) in activeNavigation"
              ref="flyout"
              :key="itemIndex"
            >
              <div class="header__flyout-items" v-if="item.children">
                <figure class="header__flyout-block" v-if="showFlyoutBlock(item.children)">
                  <figcaption class="header__flyout-caption">
                    {{ item.languages[lowerLang]?.title }}
                  </figcaption>
                  <div
                    class="header__flyout-description font-size-1 thin"
                    v-html="item.languages[lowerLang]?.description"
                  ></div>
                  <a class="header__link custom" :href="contact.languages[lowerLang]?.url" v-if="hasContactLink(item)">
                    <icon icon="phone-mail" size="medium" />
                    <span class="header__contact-title">
                      {{ contact.languages[lowerLang]?.title }}
                    </span>
                  </a>
                  <div class="header__highlight-cta has-emergency-colors" v-if="item.languages[lowerLang]?.emergency">
                    <cta v-bind="item.languages[lowerLang].emergency" />
                  </div>
                </figure>

                <template v-for="(list, listIndex) in item.children" :key="listIndex">
                  <link-list
                    :list="list"
                    :lang="lowerLang"
                    :no-animation="true"
                    v-if="item.children && !list.products"
                  />
                  <div class="header__product-list is-expanded" v-else>
                    <a
                      :href="subChild.languages[lowerLang]?.url"
                      :target="subChild.target"
                      class="header__product-list-item custom"
                      v-for="(subChild, subchildIndex) in list.children"
                      :key="subchildIndex"
                    >
                      <v-img
                        :img="subChild.img"
                        class="header__product-list-image"
                        :cloudinary="true"
                        :alt="subChild.languages[lowerLang]?.alt || subChild.languages[lowerLang]?.title"
                      />
                      <div class="header__product-list-data">
                        <div class="header__product-list-title font-size-8 bold">
                          {{ subChild.languages[lowerLang]?.title }}
                        </div>
                        <div class="header__product-list-subtitle">{{ subChild.languages[lowerLang]?.subtitle }}</div>
                      </div>
                    </a>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useAppStore } from '../stores/app.js';
import Tools from '../utils/tools.js';
import State from '../utils/state.js';
import Events from '../utils/events.js';
import SecondaryNavigation from '../utils/data/secondary-navigation.js';

export default {
  tagName: 'v-header',
  setup() {
    const store = useAppStore();

    return { store };
  },
  computed: {
    classList() {
      return [
        'header',
        this.isScrolled ? State.IS_SCROLLED : '',
        this.isLight ? 'header--light' : '',
        Tools.isTrue(this.hover) ? State.HOVERING : '',
        Tools.isTrue(this.product) ? 'header--product' : '',
        !Tools.isTrue(this.closed) ? State.EXPANDED : '',
        Tools.isTrue(this.blendMode) ? 'header--blending' : '',
        this.onSurface ? State.ON_SURFACE : '',
        this.inUpdate ? 'is-updating' : '',
        'vue-component',
      ];
    },
    secondaryNavigationClassList() {
      return [
        'header__secondary-navigation',
        this.secondaryNavigationInTransition ? State.IN_TRANSITION : '',
        this.secondaryNavigationDimensions ? State.READY : '',
        this.secondaryNavigationIsExpanded ? State.IS_EXPANDED : '',
      ];
    },
    secondaryNavigation() {
      if (!this.showSecondaryNavigation) return null;

      return {
        ...SecondaryNavigation,
        children: SecondaryNavigation.children.map((item) => ({
          ...item,
          children: item.children.filter((child) => child.name !== this.theme),
        })),
      };
    },
    headerLogoStyle() {
      if (!this.secondaryNavigation || !this.logoOffsetPosition) return;

      return `padding-left: ${this.logoOffsetPosition}px;`;
    },
    headerContainerClassList() {
      return ['header__container', this.containerClass];
    },
    containerClass() {
      return Tools.isTrue(this.product) ? 'container' : 'container-xxl';
    },
    homeObj() {
      return this.home?.languages[this.lowerLang];
    },
    lowerLang() {
      return this.lang ? this.lang.toLowerCase() : this.defaultLang;
    },
    searchValue() {
      return Tools.isTrue(this.search);
    },
    metaList() {
      if (!this.meta || typeof this.meta !== 'object') return null;

      return {
        ...this.meta,
        children: this.meta,
      };
    },
    spacerBgColor() {
      const color = this.bgColor ? this.bgColor : 'var(--color-header-background)';

      return `--color-header-spacer-background: ${color}; background-color: var(--color-header-spacer-background);`;
    },
    clonedNavigation() {
      const clonedNavigation = JSON.parse(JSON.stringify(this.navigation));

      if (this.secondaryNavigation) {
        this.secondaryNavigation.isMobile = true;

        clonedNavigation.push(this.secondaryNavigation);
      }

      return clonedNavigation;
    },
    isLight() {
      return this.light === true;
    },
    hasLangSwitch() {
      return Object.keys(this.home?.languages).length > 1;
    },
    hasContact() {
      return this.contact;
    },
    hasMeta() {
      return this.meta && this.meta.length > 0;
    },
    headerState() {
      return this.store.getHeader;
    },
    onSurfaceCta() {
      return this.hoverHeader || this.isScrolled ? null : this.onSurface || (this.isLight && this.onSurface);
    },
  },
  created() {
    this.setActiveNavigation();

    this.store.setHeader({
      isScrolled: this.isScrolled,
      isLight: this.isLight,
      isHovering: this.hover,
      isProduct: this.product,
      isExpanded: !this.closed,
      isBlending: this.blendMode,
      isUpdating: this.inUpdate,
    });
  },
  watch: {
    secondaryNavigationDimensions(newVal) {
      if (newVal !== null && newVal.width >= 0) {
        this.$nextTick(() => {
          this.calculateLogoOffsetPosition();
        });
      }
    },
    isScrolled(newVal) {
      this.store.setHeader({ ...this.headerState, isScrolled: newVal });
    },
    hover(newVal) {
      this.store.setHeader({ ...this.headerState, isHovering: newVal });
    },
    closed(newVal) {
      this.store.setHeader({ ...this.headerState, isExpanded: !newVal });
    },
    blendMode(newVal) {
      this.store.setHeader({ ...this.headerState, isBlending: newVal });
    },
    inUpdate(newVal) {
      this.store.setHeader({ ...this.headerState, isUpdating: newVal });
    },
  },
  mounted() {
    this.bindEvents();

    this.setCtaClasses();
    this.setLinkWidth();
    this.handleScroll();

    if (this.secondaryNavigation) {
      this.getSecondaryNavigationDimensions();
    }

    this.initEvents.forEach((event) =>
      window.addEventListener(event, this.initMegaMenu, { once: true, passive: true })
    );
  },
  updated() {
    if (this.inUpdate) {
      this.updateProductListHeight();

      this.inUpdate = false;
      this.inTransition = false;
    }
  },
  methods: {
    initMegaMenu() {
      if (this.renderMegaMenu) return;

      this.renderMegaMenu = true;

      this.initEvents.forEach((event) => window.removeEventListener(event, this.initMegaMenu));
    },
    getSecondaryNavigationDimensions() {
      if (!this.secondaryNavigation) return;

      const secondaryNavigation = this.$refs.secondaryNavigation;

      secondaryNavigation.dataset.updating = true;

      this.secondaryNavigationDimensions = null;

      secondaryNavigation.style.width = null;
      secondaryNavigation.style.height = null;
      secondaryNavigation.removeAttribute('data-width-expanded');
      secondaryNavigation.removeAttribute('data-height-expanded');

      this.secondaryNavigationDimensions = {
        width: secondaryNavigation.offsetWidth,
      };

      secondaryNavigation.removeAttribute('data-updating');
    },
    closeSecondaryNavigation() {
      if (!this.secondaryNavigation || !this.secondaryNavigationIsExpanded) return;

      this.secondaryNavigationInTransition = !this.secondaryNavigationInTransition;
      this.secondaryNavigationIsExpanded = !this.secondaryNavigationIsExpanded;

      const secondaryNavigation = this.$refs.secondaryNavigation;

      secondaryNavigation.removeAttribute('data-height-expanded');
      secondaryNavigation.removeAttribute('data-width-expanded');
      secondaryNavigation.style.height = null;
      secondaryNavigation.style.width = null;

      this.secondaryNavigationTransitionState = null;
    },
    toggleSecondaryNavigation() {
      if (!this.secondaryNavigation) return;

      const secondaryNavigation = this.$refs.secondaryNavigation;
      const secondaryNavigationButton = this.$refs.secondaryNavigationButton;

      if (!secondaryNavigation || !secondaryNavigationButton) return;

      clearTimeout(this.secondaryNavigationTimeout);

      this.secondaryNavigationInTransition = !this.secondaryNavigationInTransition;
      this.secondaryNavigationIsExpanded = !this.secondaryNavigationIsExpanded;

      if (this.secondaryNavigationIsExpanded) return this.expandWidthSecondaryNavigation(secondaryNavigation);

      this.shrinkSecondaryNavigation(secondaryNavigation, secondaryNavigationButton);
    },
    shrinkWidthSecondaryNavigation() {
      const secondaryNavigation = this.$refs.secondaryNavigation;

      if (!secondaryNavigation) return;

      secondaryNavigation.removeAttribute('data-height-expanded');
      secondaryNavigation.style.height = null;

      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonHeight = buttonDimensions.height;

      secondaryNavigation.style.width = `${buttonHeight}px`;

      secondaryNavigation.removeAttribute('data-width-expanded');
      this.secondaryNavigationTransitionState = null;
    },
    shrinkSecondaryNavigation(secondaryNavigation) {
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonHeight = buttonDimensions.height;

      secondaryNavigation.style.height = `${buttonHeight}px`;

      this.secondaryNavigationTransitionState = this.secondaryNavigationTransitionStates.SHRINKING_HEIGHT;
    },
    expandWidthSecondaryNavigation(secondaryNavigation) {
      if (!this.secondaryNavigationInTransition) return;

      const dimensions = this.secondaryNavigationDimensions;
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonWidth = buttonDimensions.width;

      secondaryNavigation.style.width = `${buttonWidth}px`;

      this.secondaryNavigationTimeout = setTimeout(() => {
        secondaryNavigation.style.width = `${dimensions.width}px`;

        this.expandSecondaryNavigation();
      }, this.secondaryNaivgationTransitionDelay);
    },
    expandSecondaryNavigation() {
      const secondaryNavigation = this.$refs.secondaryNavigation;

      if (!secondaryNavigation) return;

      secondaryNavigation.dataset.widthExpanded = true;

      const secondaryNavigationInnerContent = this.$refs.secondaryNavigationInnerContent;
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonHeight = buttonDimensions.height;

      secondaryNavigation.style.height = `${buttonHeight}px`;

      this.secondaryNavigationTimeout = setTimeout(() => {
        this.secondaryNavigationDimensions['height'] = secondaryNavigationInnerContent.offsetHeight;

        const dimensions = this.secondaryNavigationDimensions;

        secondaryNavigation.dataset.heightExpanded = true;

        secondaryNavigation.style.height = `${buttonHeight + dimensions.height}px`;
      }, this.secondaryNaivgationTransitionDelay * 4);
    },
    handleSecondaryNavigationTransitionEnd(event) {
      if (
        this.secondaryNavigationTransitionState &&
        (event?.propertyName !== 'height' || event?.propertyName !== 'width')
      )
        return;

      if (this.secondaryNavigationTransitionState === this.secondaryNavigationTransitionStates.SHRINKING_HEIGHT) {
        this.shrinkWidthSecondaryNavigation();
      }
    },
    calculateLogoOffsetPosition() {
      this.logoOffsetPosition = 0;

      if (!Tools.isUpperBreakpoint()) return;

      const headerContainer = this.$refs.headerContainer;

      if (!headerContainer) return { leftSpace: 0 };

      const style = window.getComputedStyle(headerContainer);
      const containerWidth = parseFloat(style.width);
      const windowWidth = window.innerWidth;
      const offsetCorrection = 20;

      const margin = (windowWidth - containerWidth) / 2;
      const buttonDimensions = this.getSecondaryNavigationButtonDimensions();
      const buttonWidth = buttonDimensions.width;

      const leftSpace = margin < buttonWidth ? buttonWidth - margin - offsetCorrection : 0;

      this.logoOffsetPosition = leftSpace;
    },
    getSecondaryNavigationButtonDimensions() {
      const secondaryNavigationButton = this.$refs.secondaryNavigationButton;

      return { width: secondaryNavigationButton.offsetWidth, height: secondaryNavigationButton.offsetHeight };
    },
    setActiveNavigation() {
      this.setActiveLinks();

      this.activeNavigation = this.clonedNavigation;
    },
    setLinkWidth() {
      const headerItems = this.$refs['headerItem'];
      const links = headerItems?.$refs['link'];

      if (!links) return;

      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        const textWidth = link?.querySelector('.header__link-text-spacer')?.clientWidth;

        link.style.setProperty('--header-link-text-width', textWidth + 'px');
      }
    },
    showFlyoutBlock(children) {
      return children.length > this.maxLinkListsInFlyout ? false : true;
    },
    isLowerBreakpoint() {
      return Tools.isBelowBreakpoint('md');
    },
    bindEvents() {
      window.addEventListener('scroll', this.handleScroll.bind(this));

      document.addEventListener(Events.WINDOW_RESIZE, this.handleResize.bind(this));
    },
    handleResize() {
      this.reset();
      this.setLinkWidth();
      this.closeSecondaryNavigation();
      this.getSecondaryNavigationDimensions();
    },
    handleScroll() {
      this.isScrolled = window.scrollY > this.scrollThreshold;

      this.setCtaClasses();
    },
    reset() {
      this.resetFlyouts();
      this.updateProductListHeight();

      this.closed = true;
    },
    handleCloseClick() {
      if (this.initMegaMenu) this.initMegaMenu();

      this.closed = !this.closed;

      if (this.closed) {
        this.reset();
      }
    },
    resetFlyouts() {
      Object.keys(this.linkLists).forEach((linkListKey) => {
        this.linkLists[linkListKey] = false;
      });
    },
    handleClick(item, index) {
      if (!this.isLowerBreakpoint()) return;

      const id = this.getId(item, index);

      this.linkLists[id] = !this.linkLists[id];

      if (this.linkLists[id]) {
        this.inTransition = true;
      }

      this.inUpdate = true;

      this.closeAllSiblings(id);
      this.closeAllChildren();
    },
    closeAllSiblings(id) {
      const keys = Object.keys(this.linkLists);

      keys.forEach((key) => {
        if (key !== id) {
          this.linkLists[key] = false;
        }
      });
    },
    closeAllChildren() {
      const customEvent = new CustomEvent(Events.CHILD_HAS_UPDATE, {
        detail: {},
      });

      this.$refs['list'].dispatchEvent(customEvent);
    },
    getId(item, index) {
      return `${item.name}_${index}`;
    },
    handleHeaderMouseOver() {
      if (this.initMegaMenu) this.initMegaMenu();

      this.hoverHeader = true;

      this.setCtaClasses();
    },
    handleHeaderMouseOut() {
      this.hoverHeader = false;

      this.setCtaClasses();
    },
    setCtaClasses() {
      if (!this.isLight) return;

      if (this.hoverHeader || this.isScrolled) {
        this.ctaClassList = null;
      } else {
        this.ctaClassList = 'is-light-lg';
      }
    },
    handleMouseOver(item, index) {
      if (!item.children) return;

      this.resetAllFlyouts();

      this.hover = true;

      const link = this.getLinkRef(index);

      if (!link) return;

      link.classList.add(State.EXPANDED);

      const flyout = this.getFlyoutRef(index);

      if (!flyout) return;

      this.flyoutIndex = index;

      flyout.classList.add(State.EXPANDED);
    },
    handleMouseOut(event) {
      if (event.relatedTarget?.closest('.header__flyout')) return;

      this.hover = false;

      const link = this.getLinkRef(this.flyoutIndex);

      if (!link) return;

      link.classList.remove(State.EXPANDED);

      const ref = this.getFlyoutRef(this.flyoutIndex);

      if (!ref) return;

      ref.classList.remove(State.EXPANDED);
    },
    handleLanguageOver() {
      this.resetAllFlyouts();

      this.hover = true;

      const languageSwitch = this.$refs['languageSwitch'];

      if (!languageSwitch) return;

      languageSwitch.classList.add(State.EXPANDED);
    },
    handleLanguageOut(event) {
      if (event.relatedTarget?.closest('.header__flyout')) return;

      this.hover = false;

      const languageSwitch = this.$refs['languageSwitch'];

      if (!languageSwitch) return;

      languageSwitch.classList.remove(State.EXPANDED);
    },
    resetAllFlyouts() {
      const headerItems = this.$refs['headerItem'];
      const links = headerItems?.$refs['link'];

      links?.forEach((link) => {
        link.classList.remove(State.EXPANDED);
      });

      this.$refs['flyout']?.forEach((flyout) => {
        flyout.classList.remove(State.EXPANDED);
      });
    },
    getFlyoutRef(refName) {
      return this.getRef('flyout', refName);
    },
    getLinkRef(refName) {
      return this.getRef('link', refName);
    },
    getRef(name, refName) {
      let ref = null;

      if (this.$refs[name]) {
        ref = this.$refs[name][refName];
      } else if (this.$refs['headerItem'] && this.$refs['headerItem'].$refs[name]) {
        ref = this.$refs['headerItem'].$refs[name][refName];
      }

      return ref || null;
    },
    getHref(item) {
      return item.children ? 'javascript:void(0);' : item.languages[this.lowerLang]?.url;
    },
    getTarget(item) {
      if (!item || !item.languages) return null;

      const target = item?.languages[this.lowerLang]?.target || item.target;

      return target ? target : null;
    },
    getNextLanguage() {
      const languages = this.home.languages;

      if (!languages) return;

      const keys = Object.keys(languages);

      if (!keys.length) return;

      const nextLang = keys.filter((lang) => lang !== this.lowerLang);

      if (!nextLang.length) return;

      return nextLang[0];
    },
    handleLanguageSwitch(nextLang) {
      const activeUrl = this.getActiveUrlByLang(nextLang);
      const gotoUrl = activeUrl ? activeUrl : this.home.languages[nextLang]?.url;

      Tools.storageSave('preferedLanguage', nextLang, false);

      document.location.href = gotoUrl;
    },
    getActiveUrlByLang(lang, update) {
      const currentPath = Tools.getCurrentPath();
      const lastCharacter = '/';

      const matcher = (obj, parentKey) => {
        if (!obj?.title) return;

        let url = obj?.url;

        if (currentPath[currentPath?.length - 1] === lastCharacter && url && url[url?.length - 1] !== lastCharacter) {
          url = url + lastCharacter;
        }

        const condition = url === currentPath || url === currentPath + lastCharacter;
        const parentLink = this.getParentLink(parentKey);

        if (update && condition) {
          obj.active = true;

          if (parentLink) parentLink.active = true;
        } else {
          obj.active = false;

          if (parentLink) parentLink.active = false;
        }

        return condition;
      };

      const callback = (_, parent) => {
        return parent;
      };

      let parent = Tools.findRecursive(this.clonedNavigation, matcher, callback);

      if (!parent) {
        parent = Tools.findRecursive(this.meta, matcher, callback);
      }

      if (!parent) {
        parent = Tools.findRecursive(this.contact, matcher, callback);
      }

      if (!parent) {
        const hrefLang = this.getHrefLang(lang);

        return hrefLang ? hrefLang : this.getTranslatedUrl(currentPath, lang);
      }

      return parent[lang]?.url;
    },
    getTranslatedUrl(currentPath, lang) {
      if (this.isBlogTagsUrl(currentPath)) return this.getBlogTagsUrl(lang, currentPath);

      const segment = this.getFolderSwitchSegment(currentPath);

      if (segment) return this.getFolderSwitchUrl(lang, currentPath, segment);

      return null;
    },
    getFolderSwitchSegment(currentPath) {
      const folderSwitch = this.home.folderSwitch;

      if (!folderSwitch) return null;

      const foundSegment = folderSwitch.find((segment) => currentPath.includes(segment));

      return foundSegment || null;
    },
    getFolderSwitchUrl(lang, currentPath, segment) {
      if (!segment) return currentPath;

      const langPrefix = new RegExp(`^/${this.lowerLang}/`);

      return currentPath.replace(langPrefix, `/${lang}/`);
    },
    isBlogTagsUrl(currentPath) {
      const regex = /\/blog\/tags/;

      return regex.test(currentPath);
    },
    getBlogTagsUrl(lang, currentPath) {
      let newPath;

      const tagsIdentifier = 'tags';

      switch (lang) {
        case 'en':
          newPath = currentPath.replace(tagsIdentifier, `${tagsIdentifier}-${lang}`);
          break;
        default:
        case this.defaultLang:
          const regex = new RegExp(`${tagsIdentifier}-..`);

          newPath = currentPath.replace(regex, tagsIdentifier);
          break;
      }

      return newPath + document.location.search;
    },
    getHrefLang(lang) {
      const hrefLang = document?.querySelector(`link[hreflang=${lang}]`);

      if (!hrefLang) return;

      return hrefLang.getAttribute('href');
    },
    getParentLink(key) {
      const navi = this.clonedNavigation[key];

      return navi?.languages[this.lowerLang];
    },
    setActiveLinks() {
      this.getActiveUrlByLang(this.lowerLang, true);
    },
    updateProductListHeight() {
      const headerItems = this.$refs['headerItem'];
      const productList = headerItems?.$refs['product-list'];

      if (!productList) return;

      for (let i = 0; i < productList.length; i++) {
        const list = productList[i];
        const isExpanded = list.classList.contains(State.EXPANDED);
        const newHeight = !isExpanded || list.style.height !== '' ? '' : list.scrollHeight + 'px';

        list.style.height = newHeight;
      }
    },
    hasContactLink(item) {
      return this.contact?.languages && !item.languages[this.lowerLang]?.emergency;
    },
  },
  props: {
    home: Object,
    navigation: Object,
    meta: Object,
    light: {
      default: null,
    },
    search: {
      default: null,
    },
    lang: String,
    contact: Object,
    bgColor: String,
    product: {
      default: null,
    },
    button: {
      default: null,
    },
    blendMode: {
      default: null,
    },
    showSecondaryNavigation: {
      default: false,
      type: Boolean,
    },
    theme: String,
    onSurface: Boolean,
  },
  data() {
    return {
      hoverHeader: false,
      inUpdate: false,
      inTransition: false,
      defaultLang: 'de',
      closed: true,
      hover: false,
      headerHover: false,
      flyoutIndex: null,
      linkLists: {},
      scrollThreshold: 10,
      isScrolled: false,
      ctaClassList: null,
      maxLinkListsInFlyout: 3,
      activeNavigation: {},
      logoOffsetPosition: null,
      secondaryNavigationInTransition: false,
      secondaryNavigationIsExpanded: false,
      secondaryNavigationDimensions: null,
      secondaryNavigationTimeout: null,
      secondaryNaivgationTransitionDelay: 100,
      secondaryNavigationTransitionState: null,
      secondaryNavigationTransitionStates: {
        SHRINKING_HEIGHT: 0,
        SHRINKING_WIDTH: 1,
      },
      initEvents: ['mousemove', 'scroll', 'touchstart', 'click'],
      renderMegaMenu: false,
    };
  },
};
</script>

<style>
:root {
  --color-black: #000000;
  --color-black-85: #262626;
  --color-black-70: #4c4c4c;
  --color-black-50: #7f7f7f;
  --color-black-40: #999;
  --color-black-30: #b2b2b2;
  --color-black-15: #d9d9d9;
  --color-black-4: #f5f5f5;
  --color-black-2: #fbfbfb;
  --color-white-30: rgba(255, 255, 255, 0.3);
  --color-white-50: rgba(255, 255, 255, 0.5);
  --color-white-80: rgba(255, 255, 255, 0.8);
  --color-manatee: #999ba6;
  --color-blue-dark: #000520;
  --color-blue-medium: #0072c6;
  --color-blue-light: #5cbbff;
  --color-blue-lighter: #77c6ff;
  --color-blue-jeans: #24a1fa;
  --color-celery: #9fc54f;
  --color-ziggurat: #bfdfe1;
  --color-conifer: #acd653;
  --color-green: #acd653;
  --color-frost: #edf5db;
  --color-sushi: #809f3e;
  --color-green-blue: #008187;
  --color-yellow-medium: #dab61d;
  --color-yellow: #fcd116;
  --color-orange: #f8842c;
  --color-red: #e44418;
  --color-french-rose: #ed4c78;
  --color-trout: #4c5062;
  --color-porcelain: #f3f5f6;
  --color-bon-jour: #e5e2e2;
  --color-deep-sea: #008774;
  --color-mint-green: #80f785;
  --color-midnight: #011e33;
  --color-regent-grey: #808e99;
  --color-geyser: #d1d9dd;
  --color-macaroni-and-cheese: #fcb975;
  --color-nevada: #60727f;
  --color-edgewater: #c2deda;
  --color-link-water: #cce3f4;
  --color-summer-green: #8ebeb2;
  --color-ripe-lemon: #f7cb0b;
  --color-sunglow: #ffd233;
  --color-cold-purple: #a09edb;
  --color-biloba-flower: #bd90ea;
  --color-lavender: #ad76e5;
  --color-perfume: #ddc3f7;
  --color-varden: #fff8dc;
  --color-sahara: #bd9d11;
  --color-gigas: #543b9c;
  --color-portage: #9898f9;
  --color-sahara-sand: #f6ee8c;
  --color-sunflower: #e1d429;
  --color-piper: #c66a23;
  --color-cream-can: #f5c663;
  --color-cyprus: #004144;
  --color-wax-flower: #ffbb9a;
  --color-manhatten: #f3b394;
  --color-jacarta: #19122f;
  --color-wistful: #b2a7d2;
  --color-lochmara: #007ac8;
  --color-denim: #1476bf;
  --color-polar: #f6f9fd;
  --color-ghost: #cccdd2;
  --color-athens-gray: #e5e6e9;
  --color-bombay: #b3b4bc;
  --color-cornflower-blue: #6195ed;
  --color-shuttle-gray: #666979;
  --color-waterloo: #80828f;
  --color-anakiwa: #97d4ff;
  --color-butterfly-bush: #524fa3;
  --color-kimberly: #716fa7;
  --color-white: #fff;
  --color-headlines: var(--color-blue-dark);
  --color-copy: var(--color-blue-dark);
  --color-copy-light: var(--color-white);
  --color-copy-lowlight: var(--color-black-30);
  --color-copy-reduced: var(--color-black-50);
  --color-copy-hover: var(--color-black-70);
  --color-active: var(--color-primary);
  --color-surface-background: var(--color-black-4);
  --color-background: var(--color-white);
  --color-border-default: var(--color-black-30);
  --color-border-light: var(--color-black-15);
  --color-service-overview-border: var(--color-border-default);
  --color-services-border: var(--color-service-overview-border);
  --color-services-labels: var(--color-trout);
  --color-page-detail-border: var(--color-border-default);
  --color-page-detail-copy: var(--color-black-85);
  --color-page-detail-shape: var(--color-yellow);
  --color-page-detail-details: var(--color-orange);
  --color-job-list-border: var(--color-border-default);
  --color-job-list-detail: var(--color-yellow);
  --color-job-list-detail-copy: var(--color-black-85);
  --color-person-quote-detail: var(--color-yellow);
  --color-icon-hover-background: var(--color-black-85);
  --color-icon-hover-color: var(--color-white);
  --color-icon-check-background: var(--color-link-water);
  --color-modal-background: var(--color-white);
  --color-form-background: var(--color-porcelain);
  --color-form-background-light: var(--color-white);
  --color-form-error: var(--color-red);
  --color-form-success: var(--color-deep-sea);
  --color-form-border: var(--color-bon-jour);
  --color-form-border-hover: var(--color-border-default);
  --color-google-maps-popup-background: var(--color-blue-dark);
  --color-hero-icon: var(--color-yellow);
  --color-hero-study-background: var(--color-primary);
  --color-hero-study-copy: var(--color-copy);
  --color-hero-image-content-grid-overline-text: var(--color-blue-dark);
  --color-hero-text-overline-text: var(--color-orange);
  --color-people-square-copy: var(--color-white);
  --color-step-list-highlight: var(--color-yellow);
  --color-step-list-highlight-copy: var(--color-copy);
  --color-step-list-border: var(--color-border-light);
  --color-career-background: var(--color-blue-dark);
  --color-text-image-background: var(--color-career-background);
  --color-pricing-product-border: var(--color-manatee);
  --color-fab-background: var(--color-yellow);
  --color-testimonials: var(--color-blue-jeans);
  --color-event-teaser-timing: var(--color-manatee);
  --color-event-teaser-timing-highlight: var(--color-orange);
  --color-event-teaser-background: var(--color-black-2);
  --color-event-teaser-teaser-background: var(--color-green-blue);
  --color-event-teaser-teaser-copy: var(--color-white);
  --color-event-detail: var(--color-surface-background);
  --color-event-detail-shape: var(--color-yellow);
  --color-badge-icon: var(--color-white);
  --color-badge-background: var(--color-orange);
  --color-card-background: var(--color-surface-background);
  --color-card-highlight: var(--color-orange);
  --color-back-to-top-border: var(--color-border-default);
  --color-back-to-top-hover-background: var(--color-blue-dark);
  --color-back-to-top-hover-foreground: var(--color-white);
  --color-faq-border: var(--color-trout);
  --color-modal-error-title: var(--color-red);
  --color-modal-error-contact: var(--color-black);
  --color-letter-switcher-highlight: var(--color-lochmara);
  --color-letter-switcher-copy: var(--color-copy-light);
  --color-letter-switcher-overline: var(--color-yellow);
  --color-letter-switcher-underline: var(--color-orange);
  --color-scroll-arrow: var(--color-orange);
  --color-header-background: var(--color-white);
  --color-header-border: var(--color-ghost);
  --color-header-container-border: var(--color-athens-gray);
  --color-header-contact-background: var(--color-polar);
  --color-header-active: var(--color-active);
  --color-header-product-subtitle: var(--color-shuttle-gray);
  --color-link-list-border: var(--color-ghost);
  --color-link-list-icon: var(--color-bombay);
  --color-link-list-title: var(--color-trout);
  --color-link-list-active: var(--color-active);
  --color-toggle-switch-indicator: var(--color-midnight);
  --color-accordion-hover-background: var(--color-surface-background);
  --color-table-mark: var(--color-yellow);
  --color-emergency: var(--color-orange);
  --color-emergency-accent: var(--color-piper);
  --color-input-placeholder: var(--color-bombay);
  --color-highlight-underline: var(--color-highlight-second);
  --color-highlight-animated: var(--color-highlight-second);
  --color-link: var(--color-primary);
  --color-link-hover: var(--color-primary-accent);
}

.bg-grey {
  background-color: var(--color-bg-grey);
}

@keyframes fade-in-from-bottom {
  0% {
    opacity: 0;
    transform: translate3d(0, var(--utility-animation-distance), 0);
  }
  100% {
    opacity: var(--utility-animation-to-opacity);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fade-in-from-top {
  0% {
    opacity: 0;
    transform: translate3d(0, calc(-1 * var(--utility-animation-distance)), 0);
  }
  100% {
    opacity: var(--utility-animation-to-opacity);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: min(30vw, 150px);
  }
}
@keyframes growFull {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes slideIn {
  0% {
    opacity: 0;
    top: 100px;
  }
  100% {
    opacity: 1;
    top: 0px;
  }
}
@keyframes slideInUp {
  from {
    opacity: 0;
    visibility: visible;
  }
  to {
    opacity: 1;
  }
}
@keyframes moveRightLeft {
  0% {
    transform: translateX(0%);
  }
  30% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes moveTopRight {
  0% {
    transform: scale(1);
    transform-origin: left bottom;
    position: relative;
  }
  100% {
    transform: scale(1.2);
    transform-origin: left bottom;
    position: relative;
    top: 1px;
  }
}
/**
* Animation for Background Shapes
*/
@keyframes svgShape1 {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  100% {
    transform: translateY(50px) rotate(-5deg) scale(1.1);
  }
}
@keyframes svgShape2 {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(50px) rotate(-5deg);
  }
}
@keyframes svgShape3 {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  100% {
    transform: translateY(-50px) rotate(2deg) scale(0.8);
  }
}
@keyframes svgShape4 {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(-50px) rotate(-2deg);
  }
}
.svg-shape-animation path:nth-child(1n) {
  animation: svgShape1 9s ease-in-out alternate infinite;
  transform-origin: center;
}
.svg-shape-animation path:nth-child(2n) {
  animation: svgShape2 10s ease-in-out alternate infinite;
  transform-origin: center;
}
.svg-shape-animation path:nth-child(3n) {
  animation: svgShape3 11s ease-in-out alternate infinite;
  transform-origin: center;
}
.svg-shape-animation path:nth-child(4n) {
  animation: svgShape4 12s ease-in-out alternate infinite;
  transform-origin: center;
}

@keyframes scaleOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(1.3);
  }
}
@keyframes blurry-orbit {
  0% {
    transform: translate(var(--blurry-x1), var(--blurry-y1));
  }
  20% {
    filter: blur(var(--blurry-blur));
    transform: translate(var(--blurry-x2), var(--blurry-y2));
  }
  70% {
    filter: blur(0);
    transform: translate(var(--blurry-x3), var(--blurry-y3));
  }
  100% {
    filter: blur(var(--blurry-blur));
    transform: translate(var(--blurry-x1), var(--blurry-y1));
  }
}
.fade-in-bottom,
.fade-in-top {
  opacity: 0;
}

.fade-in-bottom.is-starting {
  transform: translate3d(0, var(--utility-animation-distance), 0);
  animation: fade-in-from-bottom 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}

.fade-in-top.is-starting {
  transform: translate3d(0, calc(-1 * var(--utility-animation-distance)), 0);
  animation: fade-in-from-top 0.5s forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}

.zoom-in-out.is-starting {
  transform: scale(1);
  animation: zoom-in-out 3s forwards;
}

.bouncing.is-starting {
  transform: translateY(0);
  animation: bouncing 2s forwards;
}

.fill-in-left {
  width: 0%;
  overflow: hidden;
  animation: fill-in-from-left 3s forwards;
}

@keyframes zoom-in-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes fill-in-from-left {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes bouncing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--animation-scroll-width));
  }
}
@keyframes scroll-infinite {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
</style>
