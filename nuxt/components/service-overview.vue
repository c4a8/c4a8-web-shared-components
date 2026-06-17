<template>
  <div class="service-overview utility-animation" v-if="list && services">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="service-overview__header fade-in-bottom" data-utility-animation-step="1">
            <div class="service-overview__logo">
              <a :href="logo.url" target="_blank" class="service-overview__logo-frame">
                <div class="service-overview__img">
                  <v-img v-bind="logo" :cloudinary="logo.cloudinary || true" v-if="logo.img" />
                </div>
                <icon icon="arrow-external" color="var(--color-primary)" />
              </a>
            </div>
            <div class="service-overview__socials">
              <socials :hide-label="true" :expand="true" />
            </div>
            <span class="service-overview__title h3-font-size">{{ title }}</span>
          </div>
          <div class="service-overview__content">
            <div class="service-overview__list fade-in-bottom" data-utility-animation-step="1">
              <list :title="list.title" :items="list.items" :no-animation="true" />
            </div>
            <div class="service-overview__services fade-in-bottom" data-utility-animation-step="1">
              <services
                :title="services.title"
                :label="services.label"
                :value="services.value"
                :items="services.items"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'service-overview',
  data() {
    return {};
  },
  mounted() {
    UtilityAnimation.init([this.$el]);
  },
  props: {
    list: {
      type: Object,
      required: true,
    },
    logo: {
      type: Object,
      required: true,
    },
    services: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
$service-overview-offset: $grid-gutter-half-width;

.service-overview {
  @include z-index;

  position: relative;
  margin-bottom: spacing(10);

  @include media-breakpoint-up(lg) {
    margin-top: spacing(20);
    margin-bottom: 0;
  }
}

.service-overview__socials {
  flex: 1 0 100%;
  margin-top: spacing(10);
  margin-bottom: spacing(6);
  padding-bottom: spacing(4);
  border-bottom: 1px solid var(--color-service-overview-border);

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.service-overview__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: spacing(4);

  @include media-breakpoint-up(lg) {
    border-bottom: 1px solid var(--color-service-overview-border);
    margin-bottom: spacing(3);
  }
}

.service-overview__logo-frame {
  display: flex;
  align-items: flex-end;

  .icon {
    align-self: center;
  }
}

.service-overview__logo {
  background-color: var(--color-gk-white);
  padding: spacing(3) spacing(4) spacing(3) #{$service-overview-offset};
  transform: translateY(-99%);
  position: absolute;

  &:hover {
    .icon {
      svg {
        @include move-top-right;
      }
    }
  }

  .icon {
    width: spacing(4);
    height: spacing(4);
  }

  @include media-breakpoint-up(lg) {
    order: 2;
    z-index: auto;
    transform: none;
    padding: 0;
    display: flex;
    position: relative;
  }
}

.service-overview__img {
  margin-right: spacing(5);
}

.service-overview__title {
  flex: 1 0 100%;

  @include media-breakpoint-up(lg) {
    line-height: 1em;
    order: 1;
    flex: 1 1 auto;
  }

  @include media-breakpoint-up(xl) {
    line-height: 1.2em;
  }
}

.service-overview__content {
  display: flex;
  flex-wrap: wrap;
}

.service-overview__list {
  width: 100%;

  @include media-breakpoint-up(lg) {
    flex: 1 0 60%;
    padding-right: spacing(16);
  }
}

.service-overview__services {
  @include utility-animation-options($delay: 100ms, $selector: '&');

  width: 100%;

  @include media-breakpoint-up(lg) {
    flex: 1 0 40%;
    width: 40%;
  }
}
</style>
