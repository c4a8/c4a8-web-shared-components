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
<style lang="scss">
.contact {
  --color-contact-box-background: var(--color-yellow);
  --color-detail-highlight: var(--color-copy-highlight);
  --color-contact-background: var(--color-primary);
  --color-contact-quote-background: var(--color-gigas);
  --contact-spacing-collapsed: #{spacing(3)};
  --contact-copy-color: var(--color-copy);
  --contact-box-copy-color: var(--contact-copy-color);

  color: var(--contact-copy-color);

  &.utility-animation {
    [data-utility-animation-step] {
      --utility-animation-distance: 10%;

      animation-duration: 0.8s;

      + [data-utility-animation-step] {
        animation-delay: 100ms;
      }
    }
  }

  .input-label,
  .headline {
    color: inherit;
  }

  &.contact--has-shape {
    --color-contact-box-background: var(--color-primary);
  }

  &:not(.contact--has-shape):not(.is-collapsed):not(.contact--quote) {
    background-color: var(--color-contact-background);
  }
  &:not(.contact--has-shape):not(.is-collapsed) {
    background-color: var(--color-contact-quote-background);
  }

  &.contact--quote {
    --contact-copy-color: var(--color-copy-light);
    --color-contact-box-background: var(--color-green-blue);

    .contact__icon {
      width: 100%;
      height: auto;
      margin-bottom: spacing(5);

      svg {
        width: spacing(10);
        height: spacing(10);
      }
    }

    .contact__box {
      margin-top: spacing(20);

      @include media-breakpoint-up(lg) {
        margin-top: spacing($size: 28, $negative: true);
      }
    }

    .contact__person {
      position: relative;
      height: auto;
      padding: spacing(12) spacing(8) spacing(12) spacing(11);
    }
  }

  &:not(.is-collapsed) {
    .contact__form {
      .form {
        margin-bottom: spacing(12);
      }
    }

    .contact__subline {
      display: block;
    }

    .contact__subline,
    .contact__healdine {
      text-align: center;
    }

    @include media-breakpoint-up(lg) {
      .contact__form {
        .form {
          margin-bottom: 0;
        }
      }

      .contact__subline,
      .contact__healdine {
        text-align: left;
      }
    }
  }

  &.is-collapsed {
    max-width: 500px;
    overflow: hidden;
    transition: height 0.7s $animation-transition;

    &.show {
      .contact__form {
        padding: spacing(2) spacing(4) spacing(2);
        opacity: 1;
      }

      .contact__box {
        opacity: 0;
      }
    }

    &:not(.show) {
      .contact__form {
        visibility: collapse;
        pointer-events: none;
        opacity: 0;
      }
    }

    .contact__form {
      overflow: hidden;
      flex: 0;
      height: 0;
      transition:
        opacity 0.7s $animation-transition,
        height 0.7s $animation-transition;
    }

    .contact__box {
      transition: opacity 0.7s $animation-transition;
    }

    .contact__details {
      font-size: $font-size-16px;
      padding-left: var(--contact-spacing-collapsed);

      @include media-breakpoint-up(lg) {
        font-size: $font-size-20px;
      }
    }

    .contact__image {
      padding: var(--contact-spacing-collapsed) !important;
    }

    .contact__person {
      padding-bottom: var(--contact-spacing-collapsed);
    }
  }

  &.contact--small {
    --contact-spacing-collapsed: #{spacing(12)};

    margin-bottom: spacing(8);

    &.contact--quote {
      .contact__person {
        height: 100%;
      }
    }

    .contact__box,
    .contact__row,
    .contact__container {
      height: 100%;
    }

    .contact__person-quote {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .contact__quote {
      flex: 1 0 auto;
    }

    .contact__image-spacer {
      flex: 0 0 auto;
      height: auto;
    }

    .contact__box {
      margin-top: 0;

      @include media-breakpoint-up(lg) {
        margin-top: 0;
      }
    }
  }

  &.on-surface {
    .form {
      .link,
      a {
        --color-primary-on-surface: var(--color-copy);

        text-decoration: underline;

        &:hover {
          --color-primary-accent-on-surface: var(--color-copy);

          text-decoration: none;
        }
      }
    }
  }

  + footer {
    margin-top: 0 !important;
  }
}

.contact__detail {
  flex-wrap: wrap;
}

.contact__notes-spacing {
  opacity: 0;
  pointer-events: none;
}

.contact__notes {
  @include font-style('font-size-1');

  & {
    flex: 1 0 100%;
  }
  display: flex;
}

.contact__person {
  background-color: var(--color-contact-box-background);
  color: var(--contact-box-copy-color);
  height: 100%;
  padding-bottom: spacing(20);

  &.contact__person--light {
    color: var(--color-copy-light);
  }
}

.contact__box {
  @include z-index;
}

.contact__detail-quote {
  margin-right: spacing(14);
  margin-top: spacing(16);
  margin-bottom: spacing(12);

  .contact__detail-headline {
    margin-bottom: spacing(8);
  }

  @include media-breakpoint-up(lg) {
    margin-top: spacing(30);
    margin-right: 0;
    margin-bottom: spacing(16);
  }

  @include media-breakpoint-up(xl) {
    margin-right: spacing(18);
  }
}

.contact__details {
  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 10px;
    position: absolute;
    background-color: var(--color-detail-highlight);
  }

  .fas {
    font-size: 1.5em;
  }
}

.contact__detail,
.contact__details {
  a,
  a:visited {
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
}

.contact__person-quote {
  position: relative;
  overflow: clip;
}

.contact__image-quote {
  float: right;
  width: spacing(35);
  height: spacing(35);
  padding-left: spacing(5);
  padding-bottom: spacing(5);
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
  margin-bottom: spacing(8);
}

.page-content {
  > * {
    &:last-of-type {
      &.contact {
        // they must match the footer margin-top
        margin-bottom: -3.5rem !important;

        @include media-breakpoint-up(lg) {
          margin-bottom: -5rem !important;
        }
      }
    }
  }
}
</style>
