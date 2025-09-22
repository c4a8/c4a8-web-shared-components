<template>
  <div class="service-overview utility-animation">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="service-overview__header fade-in-bottom" data-utility-animation-step="1">
            <div class="service-overview__logo">
              <a :href="logo.url" target="_blank" class="service-overview__logo-frame">
                <div class="service-overview__img">
                  <v-img v-bind="logo" v-if="logo.img" />
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
