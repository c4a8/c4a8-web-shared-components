<template>
  <footer :class="classList" :style="style" ref="root">
    <div class="container">
      <div class="footer__content-row row">
        <div class="d-flex footer__content col-lg-12">
          <div class="footer__address col-12 col-lg-3 pl-0">
            <div :class="['mb-3', logo?.classes]" v-for="logo in dataValue.logos">
              <!--d-block-->
              <a :href="logo.url" :target="logo.target" aria-label="Front">
                <v-img :cloudinary="true" v-bind="logo" class="footer__product-logo w-auto" :lazy="true"></v-img>
              </a>
            </div>

            <ul class="footer__locations nav nav-x-0 nav-white flex-column" v-for="location in locations">
              <li class="nav-item" v-if="location.name">
                {{ location.name }}
              </li>
              <li class="nav-item" v-if="location.over">{{ location.over }}</li>
              <li class="nav-item" v-if="location.street">
                {{ location.street }}
              </li>
              <li
                v-if="location.city"
                :class="['nav-item footer__address-block', location.postalReversed ? 'is-reversed' : '']"
              >
                <span class="footer__postal-code">{{ location.postalCode }}</span>
                <span class="footer__city">{{ location.city }}</span>
                <span class="footer__country">{{ location.country }}</span>
              </li>
              <li class="nav-item" v-if="location.number">
                <a class="nav-link media" :href="'tel:' + location.number">
                  <span class="media">
                    <span class="streamline-xs streamline-site-phone mr-3 d-flex"
                      ><site-icons icon="site/mail" :no-span="true"
                    /></span>
                    <span class="media-body">
                      {{ location.number }}
                    </span>
                  </span>
                </a>
              </li>
              <li v-if="dataValue.offices" class="footer__nav-item nav-item">
                <span class="footer__nav-link nav-link">
                  <icon icon="world" class="footer__nav-icon footer__office-icon" />
                  <div class="footer__offices">
                    <span class="footer__office" v-for="(office, index) in dataValue.offices" v-bind:key="index">
                      {{ office }}<span v-if="index < dataValue.offices.length - 1">,&nbsp;</span>
                    </span>
                  </div>
                </span>
              </li>
              <li :class="['nav-item', locations.length > 1 ? 'pt-4' : '']" v-if="location.mail">
                <a class="footer__nav-link nav-link" :href="'mailto:' + location.mail">
                  <span class="d-flex">
                    <span class="streamline-xs footer__nav-icon streamline-site-mail mr-3 d-flex"
                      ><site-icons icon="site/mail" :no-span="true"
                    /></span>
                    <span class="footer__mail media-body">
                      {{ location.mail }}
                    </span>
                  </span>
                </a>
              </li>
            </ul>

            <template v-if="!isCorporate" v-for="(brandLogo, index) in dataValue.brandLogos">
              <span
                v-if="brandLogo.title"
                class="footer__brand-logo-title d-block space-top-1 mb-n7 w-90 w-lg-100 pr-6"
                >{{ brandLogo.title }}</span
              >
              <a
                :href="brandLogo.url"
                :target="brandLogo.target"
                :class="[
                  'footer__brand-logo-link d-block space-top-1',
                  index === 0 ? 'mt-3' : '',
                  brandLogo.classes ? brandLogo.classes : 'w-90',
                ]"
              >
                <v-img :cloudinary="true" v-bind="brandLogo" :lazy="true"></v-img>
              </a>
            </template>
          </div>

          <div class="footer__highlights col-12 col-lg-9">
            <div class="footer__partners">
              <template v-for="(partner, index) in dataValue.partners">
                <component
                  :is="partner.url ? 'a' : 'span'"
                  :href="partner.url"
                  :target="partner.target"
                  class="footer__partner-images w-100 d-flex justify-content-center"
                >
                  <v-img
                    :cloudinary="true"
                    v-bind="partner"
                    :class="['footer__partner-image', isCorporate ? 'w-100' : '']"
                    :lazy="true"
                  />
                </component>
                <div class="footer__vertical-line" v-if="index < dataValue.partners.length - 1"></div>
              </template>
            </div>
            <v-footer-slider :items="dataValue.highlights" :bg-color="bgColorRgbaValue" v-if="!isCorporate" />
          </div>
        </div>
      </div>

      <div v-if="isCorporate" class="footer__content-row row">
        <div class="footer__content col-lg-12">
          <v-footer-slider :items="dataValue.highlights" :bg-color="bgColorRgbaValue" />
        </div>
      </div>

      <hr class="footer__divider mx-lg-3" />

      <div class="mt-3">
        <div class="row align-items-md-center mb-3">
          <div class="col-md-8 mb-4 mb-md-0">
            <!-- Nav Link -->
            <ul class="nav nav-sm nav-white nav-x-0 align-items-center">
              <li class="nav-item mr-6 footer__links" v-for="link in links">
                <a class="nav-link" :href="link.url" v-bind="link">{{ link.title }}</a>
              </li>
            </ul>
            <!-- End Nav Link -->
          </div>

          <div class="col-md-4 text-md-right">
            <ul class="list-inline mb-0 footer__socials">
              <!-- Social Networks -->
              <li class="list-inline-item" v-for="social in dataValue.socials">
                <a
                  class="btn btn-xs btn-icon btn-soft-light"
                  :title="social.title"
                  :aria-label="social.title"
                  :href="social.url"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    v-if="socialIcon(social.icon)"
                    class="footer__social-icon"
                    :viewBox="socialIcon(social.icon).viewBox"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path :d="socialIcon(social.icon).path" />
                  </svg>
                  <i :class="['fab', social.icon]" v-else></i>
                </a>
              </li>
              <!-- End Social Networks -->
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="row pb-2">
          <div class="col">
            <p class="text-white small">Copyright © {{ dataValue.copyright }}</p>
          </div>
        </div>
        <!-- End Copyright -->
      </div>
    </div>
  </footer>
</template>
<script>
import Tools from '../utils/tools.js';
import FooterData from '../utils/data/footer-data.js';

// The footer's social icons as inline SVG, so the product sites do not load the Font Awesome Brands
// font for them. Same shapes and box as the font glyphs (an unknown icon falls back to the font).
// Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
// License - https://fontawesome.com/license/free (Icons: CC BY 4.0) Copyright 2023 Fonticons, Inc.
const SocialIcons = {
  'fa-x-twitter': {
    viewBox: '0 0 512 512',
    path: 'M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z',
  },
  'fa-youtube': {
    viewBox: '0 0 576 512',
    path: 'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z',
  },
  'fa-linkedin': {
    viewBox: '0 0 448 512',
    path: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
  },
  'fa-github': {
    viewBox: '0 0 496 512',
    path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
  },
};

export default {
  tagName: 'v-footer',
  data() {
    return {
      bgColorRgbaValue: null,
    };
  },
  computed: {
    classList() {
      return [
        'footer text-white',
        this.noMargin === false ? 'mt-8 mt-lg-11' : '',
        this.isCorporate ? 'footer--corporate' : '',
        'vue-component',
      ];
    },
    isCorporate() {
      return !this.dataValue?.brandLogos;
    },
    style() {
      return [this.dataValue?.bgColor ? `background-color: ${this.dataValue.bgColor};` : ''];
    },
    dataValue() {
      return this.data ? { ...FooterData, ...Tools.getJSON(this.data) } : { ...FooterData };
    },
    links() {
      const capitalizedLang = Tools.capitalize(this.lang ?? '');

      return this.dataValue[`links${capitalizedLang}`] ?? this.dataValue.links;
    },
    locations() {
      const newLocations = [];

      newLocations.push({
        name: this.dataValue.name,
        street: this.dataValue.street,
        postalCode: this.dataValue.postalCode,
        city: this.dataValue.city,
        country: this.dataValue.country,
        mail: this.dataValue.mail,
      });

      if (this.dataValue.additionalLocations && this.dataValue.additionalLocations.length) {
        newLocations.push(...this.dataValue.additionalLocations);
      }

      return newLocations;
    },
  },
  mounted() {
    this.bgColorRgbaValue = this.bgColorRgba();
  },
  methods: {
    socialIcon(name) {
      return SocialIcons[name];
    },
    bgColorRgba() {
      const root = this.$refs.root;

      if (!root) return null;

      const bgColor = window.getComputedStyle(this.$refs.root).getPropertyValue('background-color');
      const rgb = bgColor.replace(/[^\d,]/g, '').split(',');

      return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
    },
  },
  props: {
    data: Object,
    noMargin: {
      type: Boolean,
    },
    lang: String,
  },
};
</script>
<style>
@charset "UTF-8";
footer {
  z-index: 80;
  --color-footer-border: var(--color-white-50);
  --footer-spacing: 2.5rem;
  --footer-spacing-large: 3.75rem;
  --footer-partner-spacing: 1.5rem;
  --footer-content-spacing: var(--footer-spacing);
  --footer-icon-width: 22px;
  position: relative;
  padding-top: var(--footer-spacing-large);
}
@media (min-width: 992px) {
  footer.footer--corporate .footer__slider-container {
    margin-top: var(--footer-content-spacing);
  }
}
@media (min-width: 992px) {
  footer.footer--corporate .footer__highlights {
    display: flex;
    align-items: center;
  }
}
@media (min-width: 992px) {
  footer:not(.footer--corporate) .footer__partners {
    margin-bottom: var(--footer-spacing-large);
  }
}
footer .footer__socials .btn {
  color: var(--color-copy-light);
  background-color: rgba(247, 250, 255, 0.1);
}
footer .footer__socials .btn:hover {
  color: var(--color-copy);
  background-color: var(--color-gk-white);
}
footer .footer__socials .fab {
  font-size: 1.6em;
}
footer .footer__socials .footer__social-icon {
  height: 1.6em;
  fill: currentColor;
  overflow: visible;
}
footer .list-inline-item .btn {
  display: inline-flex;
}
footer hr {
  border-color: var(--color-footer-border);
}
footer .footer__nav-link.nav-link {
  display: flex;
  align-items: flex-start;
}
footer .footer__nav-link.nav-link:not(.active) {
  color: var(--color-white-80);
}
footer .footer__nav-link.nav-link:not(.active):not([href]):hover {
  color: var(--color-white-80);
}
footer .footer__nav-link.nav-link:not(.active)[href]:hover {
  color: var(--color-gk-white);
}
footer .streamline-site-phone.streamline-xs .streamline-icon {
  width: 1.3rem;
  height: 1.3rem;
}
footer .footer__office-icon.icon {
  height: var(--footer-icon-width);
  width: var(--footer-icon-width);
  margin-top: 0.25rem;
}
footer .footer__office-icon.icon svg {
  width: 100%;
  height: 100%;
}
footer .streamline-site-mail .streamline-icon {
  width: var(--footer-icon-width);
}
footer .nav + .nav {
  margin-top: 1rem;
}
@media (min-width: 1200px) {
  footer {
    --footer-content-spacing: var(--footer-spacing-large);
    padding-top: 5rem;
  }
}

.footer__links {
  text-decoration: underline;
}

@media (min-width: 992px) {
  .footer__contacts {
    border-right: 1px solid var(--color-white-30);
  }
}

.footer__address-block.is-reversed {
  display: inline-flex;
  flex-wrap: wrap;
}
.footer__address-block.is-reversed > * {
  flex: 0 auto;
}
.footer__address-block.is-reversed .footer__city {
  order: 1;
}
.footer__address-block.is-reversed .footer__city::after {
  content: " ";
  display: inline-block;
}
.footer__address-block.is-reversed .footer__postal-code {
  order: 2;
}
.footer__address-block.is-reversed .footer__postal-code::after {
  display: none;
}
.footer__address-block.is-reversed .footer__country {
  order: 3;
}

.footer__postal-code::after {
  content: " ";
  display: inline-block;
}

.footer__contacts .footer__country {
  display: block;
  flex: 1 100%;
}

.footer__partner-image {
  width: 100%;
}
@media (min-width: 992px) {
  .footer__partner-image {
    width: auto;
    height: 100%;
  }
}

.footer__partners {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
}
@media (min-width: 576px) {
  .footer__partners {
    flex-direction: row;
    gap: 1rem;
  }
}
@media (min-width: 992px) {
  .footer__partners {
    gap: inherit;
    justify-content: space-evenly;
  }
}

.footer__vertical-line {
  height: 1px;
  width: 100%;
  border-bottom: 1px solid var(--color-footer-border);
}
@media (min-width: 576px) {
  .footer__vertical-line {
    flex: 1 0 auto;
    position: relative;
    height: auto;
    width: auto;
    border-bottom: 0;
  }
}
@media (min-width: 992px) {
  .footer__vertical-line {
    flex-grow: 0;
  }
}

.footer__partner-images {
  padding: var(--footer-content-spacing) 0;
}
@media (min-width: 992px) {
  .footer__partner-images {
    padding: 0 var(--footer-partner-spacing);
  }
}

.footer__brand-logo-title {
  color: var(--color-white-50);
}

.footer__brand-logo-link {
  max-width: 110px;
}
.footer__brand-logo-link img {
  width: 100%;
}

.footer__images {
  padding-top: var(--footer-spacing);
}
@media (min-width: 992px) {
  .footer__images {
    padding-top: 0;
  }
}

.footer__content {
  display: flex;
  flex-wrap: wrap;
}
.footer__content > * {
  flex: 0 0 100%;
}
@media (min-width: 992px) {
  .footer__content {
    flex-wrap: nowrap;
  }
  .footer__content > * {
    flex: 0 0 auto;
  }
}

.footer__address {
  border-bottom: 1px solid var(--color-footer-border);
  padding-bottom: var(--footer-content-spacing);
}
@media (min-width: 992px) {
  .footer__address {
    padding-right: var(--footer-content-spacing);
    padding-bottom: 0;
    border-right: 1px solid var(--color-footer-border);
    border-bottom: 0;
    flex-shrink: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
}

@media (min-width: 992px) {
  .footer__locations {
    flex-grow: 1;
  }
}

.footer__divider {
  margin-top: 0;
}
@media (min-width: 992px) {
  .footer__divider {
    margin-top: var(--footer-spacing);
  }
}

.footer__highlights {
  flex: 1 1 auto;
  width: 100%;
  overflow: hidden;
}
@media (min-width: 1200px) {
  .footer__highlights {
    padding-left: var(--footer-content-spacing);
  }
}

.footer__slider-container {
  width: 100%;
  padding-top: var(--footer-content-spacing);
  margin-bottom: var(--footer-content-spacing);
  border-top: 1px solid var(--color-footer-border);
}
@media (min-width: 992px) {
  .footer__slider-container {
    border-top: 0;
    padding-top: 0;
    margin-bottom: 0;
    padding: 0 2.5rem;
  }
}

.footer__slider {
  width: 100%;
  flex: 0 0 100%;
}

.footer__nav-icon {
  margin-right: 1rem;
  display: flex;
}

.footer__offices {
  display: flex;
  flex-wrap: wrap;
  max-width: 140px;
}

@media (min-width: 992px) {
  .footer__logos-link {
    max-width: 220px;
  }
}

.footer__mail {
  white-space: nowrap;
}

.footer__product-logo {
  height: 50px;
}
</style>
