<template>
  <div class="modal__application">
    <div class="modal__body-default">
      <formular
        :form="form"
        :space="' '"
        :container="true"
        :customValidation="true"
        :hasUuid="form.hasUuid !== undefined ? form.hasUuid : true"
        :hasRecaptcha="hasRecaptcha"
      />
    </div>
    <div class="modal__success container" v-if="success">
      <div class="modal__success-row row">
        <div class="modal__success-content col-lg-8">
          <div class="modal__success-headline" v-if="success.headline">
            <headline :text="success.headline.text" :level="'h2'" :classes="success.headline.classes" />
          </div>
          <div class="modal__success-icon">
            <icon icon="rocket" />
          </div>
          <div class="modal__success-subline">
            {{ success.subline }}
          </div>
          <div class="modal__success-subheadline" v-if="success.subheadline">
            <headline :text="success.subheadline.text" :level="'h4'" :classes="success.subheadline.classes" />
          </div>
          <div class="modal__success-text">
            {{ success.text }}
          </div>
          <div class="modal__success-close" v-if="success.cta">
            <cta :text="success.cta.text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  tagName: 'modal-application',
  computed: {
    hasRecaptcha() {
      return this.form?.hasRecaptcha !== undefined ? this.form.hasRecaptcha : undefined;
    },
  },
  props: {
    form: Object,
    success: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
