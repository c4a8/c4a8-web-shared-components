<template>
  <svg-shape
    v-if="svgShape"
    :align="svgShape.align"
    :peak="svgShape.peak"
    spacing="mt-8 mt-lg-10"
    color="var(--color-bg-grey)"
  />
  <div :class="classList" :style="styleObject" v-if="contact">
    <div :class="contactContainerClass">
      <div :class="contactRowClass">
        <div :class="['contact__form', contactFormClass]" v-if="!collapsed" data-utility-animation-step="1">
          <headline :text="contact.headline" :classes="contact.headlineClasses" :level="level" />
          <span class="contact__subline font-weight-bold font-size-2">{{ contact.subline }}</span>
          <div class="d-flex align-items-center justify-content-center">
            <div class="contact__form-wrapper">
              <formular
                v-if="contact.form"
                :form="contact.form"
                :ajax="contact.form.ajax || ajax"
                uncentered="false"
                :odoo="contact.form.odoo"
                :showLoader="contact.form.showLoader"
              />
              <div v-if="contact.buttons" class="pt-4 pt-lg-6 pb-6">
                <cta-list :list="contact.buttons" />
              </div>
            </div>
          </div>
        </div>

        <div :class="['contact__box', contactBoxClass]" data-utility-animation-step="1">
          <div :class="['contact__person', contactLight]">
            <template v-if="quote">
              <div :class="['contact__person-quote', contactPersonClass]">
                <div class="contact__icon">
                  <icon icon="quote" :color="quoteColor" />
                </div>
                <div class="contact__image-quote" v-if="!small">
                  <div class="contact__image-spacer">
                    <v-img
                      :img="contact.person.image"
                      :cloudinary="contact.person.cloudinary"
                      :alt="contact.person.alt"
                      preset="cardSmall"
                      lazy
                    />
                  </div>
                </div>
                <div class="contact__quote font-size-3 middle font-weight-light">{{ contact.person.quote }}</div>
                <div class="contact__image-spacer w-30 row mr-4 ml-auto" v-if="small">
                  <v-img
                    :img="contact.person.image"
                    :cloudinary="contact.person.cloudinary"
                    :alt="contact.person.alt"
                    preset="cardSmall"
                    lazy
                  />
                </div>
                <div class="d-flex flex-column">
                  <span>{{ contact.person.quotee }}</span>
                  <span class="font-weight-light">{{ contact.person.quoteeTitle }}</span>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="contact__image">
                <v-img
                  :img="contact.person.image"
                  :cloudinary="contact.person.cloudinary"
                  :alt="contact.person.alt"
                  preset="cardSmall"
                  lazy
                />
              </div>
              <div class="contact__name font-size-4 my-6 mx-5">{{ contact.person.name }}</div>
              <div class="contact__details font-size-2 position-relative py-2 d-flex align-items-center flex-wrap">
                <div
                  v-for="(detail, index) in contact.person.details"
                  :key="index"
                  class="contact__detail w-100 px-5 d-flex align-items-center"
                  :class="{ 'mb-3 mb-lg-4': index !== contact.person.details.length - 1 }"
                >
                  <a :href="detail.href" class="d-flex custom">
                    <span class="streamline-sm mr-4">
                      <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                      <site-icons v-else icon="site/phone" />
                    </span>
                    <span class="contact__detail-text">{{ detail.text }}</span>
                  </a>
                  <div v-if="detail.notes" class="contact__notes">
                    <span class="contact__notes-spacing streamline-sm mr-4">
                      <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                      <site-icons v-else icon="site/phone" />
                    </span>
                    {{ detail.notes }}
                  </div>
                </div>
                <div
                  v-if="contact.person.number"
                  class="contact__number w-100 px-5 d-flex align-items-center mb-3 mb-lg-4"
                >
                  <a :href="'tel:' + contact.person.number" class="custom">
                    <site-icons icon="site/phone" />
                    {{ contact.person.number }}
                  </a>
                </div>
                <div v-if="contact.person.mail" class="contact__mail w-100 px-5 d-flex align-items-center">
                  <a :href="'mailto:' + contact.person.mail" class="custom">
                    <site-icons icon="site/mail" />{{ contact.person.mail }}
                  </a>
                </div>
              </div>
            </template>
          </div>

          <div v-if="quote && !small" class="contact__detail-quote">
            <headline :text="contact.person.detailsHeader" level="h4" classes="contact__detail-headline" />
            <div
              v-for="(detail, index) in contact.person.details"
              :key="index"
              class="contact__detail font-size-2 w-100 d-flex align-items-center"
              :class="{ 'mb-3 mb-lg-4': index !== contact.person.details.length - 1 }"
            >
              <a :href="detail.href" class="custom">
                <span class="streamline-sm mr-4">
                  <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                  <site-icons v-else icon="site/phone" />
                </span>
                {{ detail.text }}
              </a>
              <div v-if="detail.notes" class="contact__notes">
                <span class="contact__notes-spacing streamline-sm mr-4">
                  <site-icons v-if="detail.icon === 'site/mail'" icon="site/mail" />
                  <site-icons v-else icon="site/phone" />
                </span>
                {{ detail.notes }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import State from '../utils/state.js';

export default {
  tagName: 'contact',
  props: {
    contact: Object,
    collapsed: Boolean,
    ajax: Boolean,
    spacing: String,
    quote: {
      type: Boolean,
      default: false,
    },
    bgColor: String,
    color: String,
    boxBgColor: String,
    boxColor: String,
    level: String,
    headline: String,
    subline: String,
    form: Object,
    buttons: Array,
    person: Object,
    noTopSpacing: Boolean,
    light: Boolean,
    hasGreyBackground: Boolean,
    svgShape: Object,
    small: { type: Boolean, default: false },
    quoteColor: { type: String, default: 'var(--color-yellow)' },
    onSurface: { type: Boolean, default: false },
  },

  computed: {
    classList() {
      return [
        'contact',
        this.contactVariantClass,
        'vue-component',
        !this.collapsed ? 'space-bottom-2 utility-animation utility-animation--percentage-offset' : '',
        { 'bg-grey': this.hasGreyBackground },
        !(this.noTopSpacing || this.svgShape || this.collapsed) ? this.spacing : '',
        this.small ? 'col-4 col-md-6 col-xl-4' : '',
        this.onSurface ? State.ON_SURFACE : '',
      ];
    },
    contactVariantClass() {
      return [
        this.svgShape && !this.quote ? 'contact--has-shape' : '',
        this.quote ? 'contact--quote' : '',
        this.small ? 'contact--small' : '',
        this.collapsed ? State.COLLAPSED : '',
      ];
    },
    contactLight() {
      return this.light ? 'contact__person--light' : '';
    },
    contactBoxClass() {
      return this.collapsed ? '' : `col-md-10 col-lg-5 offset-lg-1 order-2`;
    },
    contactPersonClass() {
      return this.small ? 'contact__person--small' : ``;
    },
    contactFormClass() {
      return this.collapsed ? '' : 'col-md-10 col-lg-6 order-1';
    },
    contactContainerClass() {
      return ['contact__container', this.collapsed ? '' : 'container pt-8 pt-lg-10'].filter(Boolean).join(' ');
    },
    contactRowClass() {
      return ['contact__row', this.collapsed ? '' : 'row justify-content-center'];
    },
    styleObject() {
      return {
        '--color-contact-background': this.bgColor || this.contact?.bgColor,
        '--color-contact-quote-background': this.bgColor || this.contact?.bgColor,
        '--contact-copy-color': this.color || this.contact?.color,
        '--color-contact-box-background': this.boxBgColor || this.contact?.boxBgColor,
        '--contact-box-copy-color': this.boxColor || this.contact?.boxColor,
      };
    },
  },
};
</script>
<style>
.contact {
  --color-contact-box-background: var(--color-yellow);
  --color-detail-highlight: var(--color-copy-highlight);
  --color-contact-background: var(--color-primary);
  --color-contact-quote-background: var(--color-gigas);
  --contact-spacing-collapsed: 0.75rem;
  --contact-copy-color: var(--color-copy);
  --contact-box-copy-color: var(--contact-copy-color);
  color: var(--contact-copy-color);
}
.contact.utility-animation [data-utility-animation-step] {
  --utility-animation-distance: 10%;
  animation-duration: 0.8s;
}
.contact.utility-animation [data-utility-animation-step] + [data-utility-animation-step] {
  animation-delay: 100ms;
}
.contact .input-label,
.contact .headline {
  color: inherit;
}
.contact.contact--has-shape {
  --color-contact-box-background: var(--color-primary);
}
.contact:not(.contact--has-shape):not(.is-collapsed):not(.contact--quote) {
  background-color: var(--color-contact-background);
}
.contact:not(.contact--has-shape):not(.is-collapsed) {
  background-color: var(--color-contact-quote-background);
}
.contact.contact--quote {
  --contact-copy-color: var(--color-copy-light);
  --color-contact-box-background: var(--color-green-blue);
}
.contact.contact--quote .contact__icon {
  width: 100%;
  height: auto;
  margin-bottom: 1.25rem;
}
.contact.contact--quote .contact__icon svg {
  width: 2.5rem;
  height: 2.5rem;
}
.contact.contact--quote .contact__box {
  margin-top: 5rem;
}
@media (min-width: 992px) {
  .contact.contact--quote .contact__box {
    margin-top: -7rem;
  }
}
.contact.contact--quote .contact__person {
  position: relative;
  height: auto;
  padding: 3rem 2rem 3rem 2.75rem;
}
.contact:not(.is-collapsed) .contact__form .form {
  margin-bottom: 3rem;
}
.contact:not(.is-collapsed) .contact__subline {
  display: block;
}
.contact:not(.is-collapsed) .contact__subline,
.contact:not(.is-collapsed) .contact__healdine {
  text-align: center;
}
@media (min-width: 992px) {
  .contact:not(.is-collapsed) .contact__form .form {
    margin-bottom: 0;
  }
  .contact:not(.is-collapsed) .contact__subline,
  .contact:not(.is-collapsed) .contact__healdine {
    text-align: left;
  }
}
.contact.is-collapsed {
  max-width: 500px;
  overflow: hidden;
  transition: height 0.7s cubic-bezier(0.19, 1, 0.2, 1);
}
.contact.is-collapsed.show .contact__form {
  padding: 0.5rem 1rem 0.5rem;
  opacity: 1;
}
.contact.is-collapsed.show .contact__box {
  opacity: 0;
}
.contact.is-collapsed:not(.show) .contact__form {
  visibility: collapse;
  pointer-events: none;
  opacity: 0;
}
.contact.is-collapsed .contact__form {
  overflow: hidden;
  flex: 0;
  height: 0;
  transition: opacity 0.7s cubic-bezier(0.19, 1, 0.2, 1), height 0.7s cubic-bezier(0.19, 1, 0.2, 1);
}
.contact.is-collapsed .contact__box {
  transition: opacity 0.7s cubic-bezier(0.19, 1, 0.2, 1);
}
.contact.is-collapsed .contact__details {
  font-size: 1rem;
  padding-left: var(--contact-spacing-collapsed);
}
@media (min-width: 992px) {
  .contact.is-collapsed .contact__details {
    font-size: 1.25rem;
  }
}
.contact.is-collapsed .contact__image {
  padding: var(--contact-spacing-collapsed) !important;
}
.contact.is-collapsed .contact__person {
  padding-bottom: var(--contact-spacing-collapsed);
}
.contact.contact--small {
  --contact-spacing-collapsed: 3rem;
  margin-bottom: 2rem;
}
.contact.contact--small.contact--quote .contact__person {
  height: 100%;
}
.contact.contact--small .contact__box,
.contact.contact--small .contact__row,
.contact.contact--small .contact__container {
  height: 100%;
}
.contact.contact--small .contact__person-quote {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.contact.contact--small .contact__quote {
  flex: 1 0 auto;
}
.contact.contact--small .contact__image-spacer {
  flex: 0 0 auto;
  height: auto;
}
.contact.contact--small .contact__box {
  margin-top: 0;
}
@media (min-width: 992px) {
  .contact.contact--small .contact__box {
    margin-top: 0;
  }
}
.contact.on-surface .form .link,
.contact.on-surface .form a {
  --color-primary-on-surface: var(--color-copy);
  text-decoration: underline;
}
.contact.on-surface .form .link:hover,
.contact.on-surface .form a:hover {
  --color-primary-accent-on-surface: var(--color-copy);
  text-decoration: none;
}
.contact + footer {
  margin-top: 0 !important;
}

.contact__detail {
  flex-wrap: wrap;
}

.contact__notes-spacing {
  opacity: 0;
  pointer-events: none;
}

.contact__notes {
  display: flex;
}
.contact__notes {
  font-size: 1rem;
  line-height: 1.6;
}
@media (min-width: 992px) {
  .contact__notes {
    font-size: 1rem;
    line-height: 1.6;
  }
}
@media (min-width: 1200px) {
  .contact__notes {
    font-size: 1rem;
    line-height: 1.6;
  }
}
.contact__notes {
  flex: 1 0 100%;
}

.contact__person {
  background-color: var(--color-contact-box-background);
  color: var(--contact-box-copy-color);
  height: 100%;
  padding-bottom: 5rem;
}
.contact__person.contact__person--light {
  color: var(--color-copy-light);
}

.contact__box {
  z-index: 210;
}

.contact__detail-quote {
  margin-right: 3.5rem;
  margin-top: 4rem;
  margin-bottom: 3rem;
}
.contact__detail-quote .contact__detail-headline {
  margin-bottom: 2rem;
}
@media (min-width: 992px) {
  .contact__detail-quote {
    margin-top: 7.5rem;
    margin-right: 0;
    margin-bottom: 4rem;
  }
}
@media (min-width: 1200px) {
  .contact__detail-quote {
    margin-right: 4.5rem;
  }
}

.contact__details::before {
  content: "";
  display: block;
  height: 100%;
  width: 10px;
  position: absolute;
  background-color: var(--color-detail-highlight);
}
.contact__details .fas {
  font-size: 1.5em;
}

.contact__detail a,
.contact__detail a:visited,
.contact__details a,
.contact__details a:visited {
  color: inherit;
}
.contact__detail a:hover,
.contact__details a:hover {
  text-decoration: underline;
}

.contact__person-quote {
  position: relative;
  overflow: clip;
}

.contact__image-quote {
  float: right;
  width: 8.75rem;
  height: 8.75rem;
  padding-left: 1.25rem;
  padding-bottom: 1.25rem;
  max-width: 200px;
  position: relative;
  pointer-events: none;
}

.contact__image-spacer {
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  clear: both;
  width: 100%;
  height: 100%;
}

.contact__quote {
  width: 100%;
  margin-bottom: 2rem;
}

.page-content > *:last-of-type.contact {
  margin-bottom: -3.5rem !important;
}
@media (min-width: 992px) {
  .page-content > *:last-of-type.contact {
    margin-bottom: -5rem !important;
  }
}
</style>
