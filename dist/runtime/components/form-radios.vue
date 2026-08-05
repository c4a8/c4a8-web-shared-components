<template>
  <label class="form__label input-label" :data-msg="message">{{ field?.label }}</label>
  <div class="d-flex flex-wrap">
    <template v-for="radio in field?.radios">
      <form-radio
        class="pr-10"
        :radio="radio"
        :group="id"
        :name="name"
        :id="getRadioId(radio)"
        @action-changed="$emit('action-changed', $event)"
      />
    </template>
  </div>
</template>
<script>
import Form from '../utils/components/form.js';

export default {
  tagName: 'form-radios',
  methods: {
    getRadioId(radio) {
      return Form.getScopedId(this.formId, this.field.id + radio.id);
    },
  },
  computed: {
    otherId() {
      return `${this.radio.id}_radio`;
    },
    required() {
      return this.radio?.required ? 'required' : null;
    },
    message() {
      return this.field.required ? this.field.requiredMsg : null;
    },
  },
  props: {
    field: Object,
    id: {
      default: null,
    },
    name: {
      default: null,
    },
    formId: {
      default: null,
    },
  },
};
</script>
