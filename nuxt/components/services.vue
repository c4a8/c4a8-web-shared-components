<template>
  <div :class="classValue">
    <template v-if="itemsList">
      <div class="services__title font-size-xs bold">
        {{ title }}
      </div>
      <div class="services__items font-size-1">
        <template v-for="(item, index) in itemsList" :key="index">
          <div class="services__item">
            <cta v-bind="item" :link="true" :external="authorHasSocials" />
          </div>
        </template>
      </div>
    </template>
    <div class="services__footer">
      <template v-if="author">
        <socials :author="author" :expand="true" :share-url="shareUrl" />
      </template>
      <template v-else>
        <div class="services__label font-size-xs bold">{{ label }}</div>
        <div class="services__value">{{ value }}</div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'services',
  computed: {
    classValue() {
      return [
        'services',
        this.author ? `services--author ${this.authorHasSocials ? '' : 'services--no-socials'}` : '',
        'vue-component',
      ];
    },
    authorHasSocials() {
      return this.author?.socials !== undefined;
    },
    itemsList() {
      return this.authorHasSocials ? this.author.socials : this.items;
    },
  },
  methods: {},
  props: {
    items: {
      default: null,
    },
    title: {
      default: null,
    },
    label: {
      default: null,
    },
    value: {
      default: null,
    },
    author: {
      default: null,
    },
    shareUrl: {
      default: null,
    },
  },
};
</script>
<style lang="scss">
.services {
  &.services--author {
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid var(--color-services-border);
    padding-top: spacing(4);
    margin-top: spacing(4);

    @include media-breakpoint-up(lg) {
      border-top: none;
      padding-top: 0;
      margin-top: 0;
    }

    .services__item {
      .cta {
        justify-content: flex-end;
      }
    }

    .services__footer {
      border-bottom: none;
      padding-bottom: spacing(15);
      flex-basis: 100%;

      @include media-breakpoint-up(lg) {
        padding-bottom: 0;
      }
    }

    .services__items,
    .services__title {
      flex: 1 0 50%;
    }
  }

  &:not(.services--author) {
    padding-top: spacing(4);
    margin-top: spacing(5);
    border-top: 2px solid var(--color-services-border);

    @include media-breakpoint-up(lg) {
      margin-top: 0;
      padding-top: 0;
      border-top-width: 0;
    }
  }

  &:not(.services--no-socials) {
    .services__footer {
      border-top: 1px solid var(--color-services-border);
      padding-top: spacing(4);
      margin-top: spacing(4);
    }
  }

  &:not(.services--no-socials),
  &:not(.services--author) {
    .services__footer {
      place-items: center;
    }
  }

  @include media-breakpoint-up(md) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}

.services__label,
.services__title {
  text-transform: uppercase;
  color: var(--color-services-labels);
}

.services__title {
  margin-bottom: spacing(4);
  flex: 1 1 auto;
}

.services__item {
  .cta {
    width: 100%;
    justify-content: space-between;

    @include media-breakpoint-up(md) {
      justify-content: flex-end;
    }
  }
}

.services__items {
  @include media-breakpoint-up(md) {
    flex: 1 0 auto;
  }
}

.services__footer {
  border-bottom: 2px solid var(--color-services-border);

  padding-bottom: spacing(5);
  flex: 1 0 100%;

  @include media-breakpoint-up(md) {
    display: flex;
    justify-content: space-between;
  }

  @include media-breakpoint-up(lg) {
    border-bottom-width: 0;
    padding-bottom: 0;
  }
}

.services__label {
  margin-bottom: spacing(3);

  @include media-breakpoint-up(md) {
    margin-bottom: 0;
  }
}
</style>
