export default {
  tagName: 'magnifier',
  computed: {
    style() {
      return `transform: rotate(var(--icon-rotation)) scale(var(--icon-scale));`;
    },
    fill() {
      return this.color;
    },
  },
  props: {
    settings: Object,
    color: String,
  },
  template: `
  <svg v-bind="settings" :style="style" viewBox="0 0 21 21" fill="none">
    <path d="M15.1186 13.027H14.2152L13.895 12.7182C15.0157 11.4146 15.6903 9.72223 15.6903 7.88118C15.6903 3.77598 12.3627 0.448364 8.25753 0.448364C4.15232 0.448364 0.824707 3.77598 0.824707 7.88118C0.824707 11.9864 4.15232 15.314 8.25753 15.314C10.0986 15.314 11.791 14.6393 13.0946 13.5187L13.4033 13.8389V14.7422L19.1209 20.4484L20.8247 18.7445L15.1186 13.027ZM8.25753 13.027C5.41018 13.027 3.11173 10.7285 3.11173 7.88118C3.11173 5.03384 5.41018 2.73539 8.25753 2.73539C11.1049 2.73539 13.4033 5.03384 13.4033 7.88118C13.4033 10.7285 11.1049 13.027 8.25753 13.027Z" :fill="fill"/>
  </svg>
  `,
};
