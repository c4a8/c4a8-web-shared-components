<template>
  <div :class="classList" ref="root">
    <div :class="rowClassList">
      <div :class="wrapperClassList" v-if="form">
        <div v-if="form.headline" :class="headlineClassList" data-utility-animation-step="1" ref="headline">
          <div class="row">
            <div class="col-sm-12">
              <headline :text="form.headline" :level="form.level" :id="form.id" classes="text-center" />
              <p :class="sublineClassList" v-html="form.subline"></p>
            </div>
          </div>
        </div>
        <form
          class="form__form mt-6"
          :method="method"
          :action="formAction"
          :novalidate="novalidate"
          @submit="handleSubmit"
        >
          <template v-for="block in preparedBlocks">
            <div :class="getBlockClassList(block[0])" v-if="block.length > 0">
              <div :class="getFieldClassList(field)" v-for="field in block">
                <form-fields
                  :field="field"
                  :options="getOptions(field)"
                  :replace-value="replaceValue"
                  :id="getId(field)"
                  :has-animation="hasAnimationValue"
                  @action-changed="updateAction"
                  :has-error="hasError(field)"
                  @form-field-updated="handleFormFieldUpdate($event)"
                />
              </div>
            </div>
          </template>
          <div :class="formClassList">
            <cta
              :text="getTranslatedText(form.ctaText)"
              type="submit"
              :button="true"
              :skin="form.cta.skin"
              :width="form.cta.width"
              :analytics="analytics"
            />
          </div>
          <input type="text" class="form__super-field" name="_gotcha" />
          <input v-if="reCaptchaField" name="g-recaptcha-response" type="text" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { useHead } from '#imports';

import useConfig from '../composables/useConfig';
import State from '../utils/state.js';
import Tools from '../utils/tools.js';
import Form from '../utils/components/form.js';
import UtilityAnimation from '../utils/utility-animation.js';

export default {
  tagName: 'formular',
  data() {
    return {
      originalAction: '',
      formAction: '',
      formInstance: null,
      novalidateValue: null,
      errors: [],
    };
  },
  setup() {
    const config = useConfig();

    return {
      config,
    };
  },
  computed: {
    classList() {
      return [
        'form',
        `${Tools.isTrue(this.light) === true ? 'is-light' : ''}`,
        `${Tools.isTrue(this.ajax) === true ? 'form--ajax' : ''}`,
        `${Tools.isTrue(this.container) === true ? 'container' : ''}`,
        `${Tools.isTrue(this.customValidation) === true ? 'form--custom-validation' : ''}`,
        this.form?.noCustomSubmit === true ? Form.noCustomSubmitClass : '',
        'vue-component',
      ];
    },
    reCaptchaField() {
      return this.formInstance?.reCaptchaField;
    },
    novalidate() {
      return this.novalidateValue;
    },
    hasAnimationValue() {
      return Tools.isTrue(this.hasAnimation);
    },
    rowClassList() {
      return ['form__row', `${this.container ? 'row' : ''}`];
    },
    wrapperClassList() {
      return [`${this.container ? 'col-md-11 col-lg-10' : ''}`];
    },
    headlineClassList() {
      return [
        'container headline-row',
        `${this.space ? this.space : 'space-top-2'}`,
        this.hasAnimationValue ? 'utility-animation fade-in-bottom' : '',
      ];
    },
    sublineClassList() {
      return ['text-center', `${this.form.sublineClasses ? this.form.sublineClasses : ''}`];
    },
    formClassList() {
      return ['form__submit mt-5', `${this.positionValue}`];
    },
    positionValue() {
      return this.form.ctaPosition ? this.form.ctaPosition : Tools.isTrue(this.uncentered) ? '' : 'justify-content-end';
    },
    method() {
      return this.form.method ? this.form.method : 'post';
    },
    preparedBlocks() {
      const blocks = [];

      let index = 0;
      let tempBlock = [];

      this.form.fields.forEach((field) => {
        if (this.useTranslation) {
          if (field.label) {
            field.label = this.$t(field.label);
          }

          if (field.requiredMsg) {
            field.requiredMsg = this.$t(field.requiredMsg);
          }
        }

        if (field.rowStart || field.rowEnd) {
          if (field.rowStart) {
            blocks[index] = tempBlock;

            tempBlock.push(field);

            if (field.rowEnd) {
              tempBlock = [];
              index++;
            }
          } else if (field.rowEnd) {
            tempBlock.push(field);

            tempBlock = [];
            index++;
          }
        } else {
          tempBlock.push(field);

          if (blocks[index]) return;

          blocks[index] = tempBlock;

          tempBlock = [];
          index++;
        }
      });

      return blocks;
    },
  },
  mounted() {
    this.originalAction = this.formAction = this.form?.action;
    this.formInstance = new Form(this.$refs.root, null, this.validate.bind(this));

    this.novalidateValue = 'novalidate';

    if (!this.$refs.headline) return;

    UtilityAnimation.init([this.$refs.headline]);
  },
  created() {
    if (!this.hasRecaptcha) return;

    this.loadRecaptchaScript();
  },
  methods: {
    loadRecaptchaScript() {
      const siteKey = this.config?.public?.recaptchaSiteKey;
      console.log('🚀 ~ loadRecaptchaScript ~ siteKey:', siteKey);

      if (siteKey) {
        useHead({
          script: [
            {
              src: `https://www.google.com/recaptcha/api.js?render=${siteKey}`,
              async: true,
              defer: true,
            },
          ],
        });
      }
    },
    getTranslatedText(text) {
      return this.useTranslation ? this.$t(text) : text;
    },
    hasError(field) {
      return this.errors[field.id];
    },
    getOptions(field) {
      if (!field.options) return null;

      if (typeof field.options === 'string') {
        console.error('Invalid options format for field' + field.id);

        return null;
      }

      return typeof field.options === 'object' && field.options.list ? field.options.list : field.options;
    },
    getBlockClassList(block) {
      return ['row mx-n3', `${block?.rowClass ? block.rowClass : ''}`];
    },
    getFieldClassList(field) {
      return ['px-3', `${field.col ? 'col-md-' + field.col : 'col-md-12'}`];
    },
    getId(field) {
      const groupField = field?.radios || field?.checkboxes;
      const fieldId = groupField ? groupField[0].id : field?.id;

      if (!Tools.isTrue(this.hasUuid)) return fieldId;

      return Form.getId(fieldId);
    },
    updateAction(newAction) {
      if (newAction) {
        this.formAction = newAction;
      } else {
        this.formAction = this.originalAction;
      }
    },
    handleSubmit(e) {
      console.log('handle sub');

      // this.handleRecaptcha().then(() => {

      // });

      if (!this.validate()) {
        e.preventDefault();
      } else {
        if (this.formInstance.hasSubmitHandling) return;

        e.preventDefault();

        this.formInstance.handleRecaptcha().then((response) => {
          console.log('🚀 ~ handleSubmit ~ response:', response);
        });

        console.log('TELL ME', this.formInstance.hasSubmitHandling);

        console.log('Validation passed, submitting form');
      }
    },
    handleFormFieldUpdate(e) {
      if (!e.id) return;

      const field = document.getElementById(e.id);

      if (!field) return;

      this.validateField(field);
    },
    // async handleRecaptcha() {
    //   console.log('🚀 ~ Form ~ handleRecaptcha ~ grecaptcha:', grecaptcha);
    //   return new Promise((resolve) => {
    //     if (!this.hasRecaptcha) {
    //       resolve(true);
    //     } else {
    //       if (!window.grecaptcha) return resolve(true);

    //       window.grecaptcha.ready(function () {
    //         console.log('recpatcha ready');
    //       });
    //     }
    //   });
    // },
    validateField(field) {
      const value = field.value;
      const type = field.getAttribute('type');
      const isRequired = field.hasAttribute('required');

      this.removeFieldError(field);

      if (type === 'checkbox') {
        const isChecked = field.checked;

        if (isRequired && !isChecked) {
          this.addFieldError(field);

          return false;
        }
      } else {
        if (isRequired && !value) {
          this.addFieldError(field);

          return false;
        }

        const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

        if (type === 'email' && !isValidEmail(value)) {
          this.addFieldError(field);

          return false;
        }
      }

      this.addFieldValid(field);

      return true;
    },
    addFieldValid(field) {
      field.classList.add(State.VALID);
    },
    removeFieldError(field) {
      delete this.errors[field.id];

      field.classList.remove(State.ERROR);
    },
    addFieldError(field) {
      this.errors[field.id] = true;

      field.classList.remove(State.VALID);
      field.classList.add(State.ERROR);
    },
    validate() {
      console.log('validate');

      const formFields = this.$refs.root.querySelectorAll(
        `.form-field:not(.${State.HIDDEN}) .form-control[required],
        .form-field:not(.${State.HIDDEN}) .form__checkbox[required]`
      );

      let allValid = true;

      for (const formField of formFields) {
        if (!this.validateField(formField)) {
          allValid = false;
        }
      }

      return allValid;
    },
  },
  props: {
    form: Object,
    light: {
      default: null,
    },
    analytics: {
      default: null,
    },
    space: String,
    container: {
      default: null,
    },
    ajax: {
      default: null,
    },
    uncentered: {
      default: null,
    },
    replaceValue: {
      default: null,
    },
    customValidation: {
      default: null,
    },
    options: Object,
    hasUuid: {
      default: null,
    },
    hasAnimation: {
      default: null,
    },
    useTranslation: {
      type: Boolean,
      default: false,
    },
    hasRecaptcha: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
