<template>
  <div :style="{ backgroundColor: bgColor }" :class="spacing">
    <div class="container" :class="light ? 'text-light' : ''">
      <div class="d-lg-flex">
        <div :class="[hasImg ? 'col-lg-7 mr-lg-5 pr-lg-11' : 'mx-auto ' + width]">
          <headline
            class="odoo-form__headline mb-6 mb-lg-10"
            :level="headline.level"
            :class="light ? 'text-light' : ''"
            >{{ headline.text }}</headline
          >
          <div v-if="!success">
            <div class="d-flex align-items-center justify-content-center">
              <div class="loader position-absolute" v-if="loading"></div>
              <formular
                class="odoo-form_form w-100"
                :form="form"
                :has-animation="true"
                :odoo="true"
                @success="handleFormSuccess"
                @loading="getLoadingStatus"
                :style="{ opacity: loading ? 0.6 : 1, pointerEvents: loading ? 'none' : '' }"
              />
            </div>
          </div>

          <div v-if="success" class="d-lg-flex align-items-center py-9">
            <icon icon="check-mark" class="col-4 col-lg-2" />
            <p class="font-size-3 bolder">{{ formSuccessMessage }}</p>
          </div>
        </div>
        <div v-if="hasImg" class="col-lg-5 ml-lg-5 d-lg-block d-none">
          <v-img class="w-80" :src="img.src" :alt="img.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'odoo-form',
  props: {
    light: { type: Boolean, default: false },
    form: Object,
    width: {
      type: String,
      default: 'w-60',
    },
    headline: Object,
    formSuccessMessage: String,
    bgColor: String,
    img: Object,
    spacing: {
      type: String,
      default: 'space-top-2 space-bottom-2',
    },
  },
  data() {
    return {
      loading: false,
      status: null,
    };
  },
  computed: {
    hasImg() {
      return this.img && this.img.src;
    },
  },
  methods: {
    handleFormSuccess(status) {
      this.success = status;
      if (this.success) {
        this.loading = false;
      }
    },
    getLoadingStatus(loading) {
      this.loading = loading;
    },
  },
};
</script>
<style>
.loader {
  animation: l1 1s steps(4) infinite;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, #000 90%, #0000) 0 /33.33333% 100% space;
  clip-path: inset(0 100% 0 0);
  width: 60px;
}
@keyframes l1 {
  to {
    clip-path: inset(0 -34% 0 0);
  }
}
.odoo-form_form .headline,
.odoo-form_form .input-label {
  color: inherit;
}
.odoo-form_form .cta {
  background-color: var(--color-blue-medium);
  color: #fff;
}
.odoo-form_form .cta:hover {
  background-color: #00508b;
  color: #fff;
}
</style>
