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
<style>
.services.services--author {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid var(--color-services-border);
  padding-top: 1rem;
  margin-top: 1rem;
}
@media (min-width: 992px) {
  .services.services--author {
    border-top: none;
    padding-top: 0;
    margin-top: 0;
  }
}
.services.services--author .services__item .cta {
  justify-content: flex-end;
}
.services.services--author .services__footer {
  border-bottom: none;
  padding-bottom: 3.75rem;
  flex-basis: 100%;
}
@media (min-width: 992px) {
  .services.services--author .services__footer {
    padding-bottom: 0;
  }
}
.services.services--author .services__items,
.services.services--author .services__title {
  flex: 1 0 50%;
}
.services:not(.services--author) {
  padding-top: 1rem;
  margin-top: 1.25rem;
  border-top: 2px solid var(--color-services-border);
}
@media (min-width: 992px) {
  .services:not(.services--author) {
    margin-top: 0;
    padding-top: 0;
    border-top-width: 0;
  }
}
.services:not(.services--no-socials) .services__footer {
  border-top: 1px solid var(--color-services-border);
  padding-top: 1rem;
  margin-top: 1rem;
}
.services:not(.services--no-socials) .services__footer, .services:not(.services--author) .services__footer {
  place-items: center;
}
@media (min-width: 768px) {
  .services {
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
  margin-bottom: 1rem;
  flex: 1 1 auto;
}

.services__item .cta {
  width: 100%;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .services__item .cta {
    justify-content: flex-end;
  }
}

@media (min-width: 768px) {
  .services__items {
    flex: 1 0 auto;
  }
}

.services__footer {
  border-bottom: 2px solid var(--color-services-border);
  padding-bottom: 1.25rem;
  flex: 1 0 100%;
}
@media (min-width: 768px) {
  .services__footer {
    display: flex;
    justify-content: space-between;
  }
}
@media (min-width: 992px) {
  .services__footer {
    border-bottom-width: 0;
    padding-bottom: 0;
  }
}

.services__label {
  margin-bottom: 0.75rem;
}
@media (min-width: 768px) {
  .services__label {
    margin-bottom: 0;
  }
}
</style>
