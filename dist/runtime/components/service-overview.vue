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
<style>
.service-overview {
  z-index: 200;
  position: relative;
  margin-bottom: 2.5rem;
}
@media (min-width: 992px) {
  .service-overview {
    margin-top: 5rem;
    margin-bottom: 0;
  }
}

.service-overview__socials {
  flex: 1 0 100%;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-service-overview-border);
}
@media (min-width: 992px) {
  .service-overview__socials {
    display: none;
  }
}

.service-overview__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1rem;
}
@media (min-width: 992px) {
  .service-overview__header {
    border-bottom: 1px solid var(--color-service-overview-border);
    margin-bottom: 0.75rem;
  }
}

.service-overview__logo-frame {
  display: flex;
  align-items: flex-end;
}
.service-overview__logo-frame .icon {
  align-self: center;
}

.service-overview__logo {
  background-color: var(--color-gk-white);
  padding: 0.75rem 1rem 0.75rem 15px;
  transform: translateY(-99%);
  position: absolute;
}
.service-overview__logo:hover .icon svg {
  animation: moveTopRight;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.19, 1, 0.2, 1);
}
.service-overview__logo .icon {
  width: 1rem;
  height: 1rem;
}
@media (min-width: 992px) {
  .service-overview__logo {
    order: 2;
    z-index: auto;
    transform: none;
    padding: 0;
    display: flex;
    position: relative;
  }
}

.service-overview__img {
  margin-right: 1.25rem;
}

.service-overview__title {
  flex: 1 0 100%;
}
@media (min-width: 992px) {
  .service-overview__title {
    line-height: 1em;
    order: 1;
    flex: 1 1 auto;
  }
}
@media (min-width: 1200px) {
  .service-overview__title {
    line-height: 1.2em;
  }
}

.service-overview__content {
  display: flex;
  flex-wrap: wrap;
}

.service-overview__list {
  width: 100%;
}
@media (min-width: 992px) {
  .service-overview__list {
    flex: 1 0 60%;
    padding-right: 4rem;
  }
}

.service-overview__services {
  width: 100%;
}
.service-overview__services[data-utility-animation-step].is-starting {
  animation-delay: calc(var(--utility-animation-index) * 100ms + 0ms);
}
@media (min-width: 992px) {
  .service-overview__services {
    flex: 1 0 40%;
    width: 40%;
  }
}
</style>
