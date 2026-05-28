<template>
  <div :class="classValue" v-if="getList">
    <template v-if="!hideLabel">
      <span class="socials__label mr-4">{{ $t('follow') }}</span>
    </template>

    <template v-for="(listEntry, index) in getList" :key="index">
      <a :href="listEntry.link" target="_blank" rel="noopener" :class="socialItemClass">
        <i :class="listEntry.icon"></i>
      </a>
    </template>
  </div>
</template>
<script>
import Tools from '../utils/tools.js';

export default {
  tagName: 'socials',
  data() {
    return {
      follow: '',
    };
  },
  computed: {
    classValue() {
      return [
        'socials align-items-center',
        Tools.isTrue(this.expand) ? (!this.hideLabel ? 'socials--label-expand' : 'socials--expand') : '',
        Tools.isTrue(this.vertical) ? 'is-vertical-xl mr-5 mr-xl-0 align-items-xl-start mb-xl-4' : '',
        'vue-component',
      ];
    },
    iconClasses() {
      return [Tools.isTrue(this.vertical) ? 'mb-5 mr-xl-0' : ''];
    },
    socialItemClass() {
      return ['socials__item', this.iconClasses];
    },
    getList() {
      const twitterUrl = 'https://www.twitter.com/';
      const linkedinUrl = 'https://www.linkedin.com/in/';
      const diverseSocials = [
        `mailto:?subject=`,
        `https://www.linkedin.com/shareArticle?mini=true&url=`,
        'https://twitter.com/intent/tweet?text=&url=',
      ];
      const diverseIcons = {
        email: 'fas fa-envelope',
        linkedin: 'fab fa-linkedin',
        twitter: 'fab fa-x-twitter',
      };

      const authorSocials = [
        {
          link: this.author?.twitter ? twitterUrl + this.author.twitter : '',
          icon: diverseIcons['twitter'],
        },
        {
          link: this.author?.linkedin ? linkedinUrl + this.author.linkedin : '',
          icon: diverseIcons['linkedin'],
        },
      ];

      const filteredAuthorSocials = authorSocials.filter((obj) => obj.link !== '');

      if (filteredAuthorSocials.length > 0) return filteredAuthorSocials;

      const socialsUrls = diverseSocials.map((item) => item + this.shareUrl);

      return socialsUrls?.map((link, index) => {
        const socialName = Object.keys(diverseIcons)[index];

        return {
          link: link,
          icon: diverseIcons[socialName],
        };
      });
    },
  },
  methods: {},
  props: {
    hideLabel: {
      type: Boolean,
      default: false,
    },
    author: {
      default: null,
    },
    vertical: {
      default: null,
    },
    expand: {
      default: null,
    },
    shareUrl: {
      default: null,
    },
  },
};
</script>
<style lang="scss">
.socials__label {
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--color-trout);
  font-weight: bold;
}

.socials {
  display: inline-flex;

  &.socials--expand {
    width: 100%;

    .socials__item {
      &:first-child {
        flex-grow: 1;
      }

      &:not(:last-child) {
        margin-right: spacing(8);
      }
    }
  }

  &.socials--label-expand {
    width: 100%;

    .socials__label {
      flex-grow: 1;
    }

    .socials__item {
      &:not(:last-child) {
        margin-right: spacing(4);
      }
    }
  }

  .socials__item {
    &:not(:last-child) {
      margin-right: spacing(4);
    }
  }

  .fas,
  .fab {
    font-size: 1.6em;
    color: var(--color-trout);

    &:hover {
      opacity: 0.7;
    }
  }

  &.is-vertical-xl {
    @include media-breakpoint-up(xl) {
      display: flex;
      flex-direction: column;

      .fas,
      .fab {
        font-size: 1.5em;
      }
    }
  }
}
</style>
