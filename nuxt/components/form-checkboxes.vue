<template>
  <label class="form__label input-label" :data-msg="message">{{ field?.label }}</label>
  <template v-for="checkbox in field?.checkboxes">
    <form-checkbox
      :checkbox="checkbox"
      :group="groupId"
      :id="getCheckboxId(checkbox)"
      :name="getCheckboxName(checkbox)"
    />
  </template>
</template>
<script>
import Form from '../utils/components/form.js';

export default {
  tagName: 'form-checkboxes',
  methods: {
    getCheckboxId(checkbox) {
      return Form.getScopedId(this.formId, this.getCheckboxName(checkbox));
    },
    getCheckboxName(checkbox) {
      return this.field.id + checkbox.id;
    },
  },
  computed: {
    required() {
      return this.checkbox?.required ? 'required' : null;
    },
    message() {
      return this.field.required ? this.field.requiredMsg : null;
    },
    groupId() {
      return this.field.id;
    },
  },
  props: {
    field: Object,
    id: {
      default: null,
    },
    formId: {
      default: null,
    },
  },
};
</script>
