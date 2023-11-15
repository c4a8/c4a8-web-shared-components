import Modal from '../modal.js';
import Tools from '../tools.js';
import State from '../state.js';
import Form from '../components/form.js';

export default {
  tagName: 'modal',
  computed: {
    classList() {
      return [
        'modal fade',
        this.slimValue ? 'modal--slim' : '',
        this.notificationValue ? 'modal--notification' : '',
        'vue-component',
      ];
    },
    dialogClassList() {
      return [
        'modal-dialog',
        `${this.slimValue ? 'modal-lg' : 'modal-xl'}`,
        `${this.center ? 'modal-dialog-centered' : ''}`,
      ];
    },
    settings() {
      return {
        'data-client-name': this.clientName ? this.clientName : null,
        'data-api-url': this.apiUrl ? this.apiUrl : null,
        'data-job-id': this.jobId ? this.jobId : null,
        'data-modal-id': this.modalId ? this.modalId : null,
      };
    },
    modal() {
      return this.$refs.modal;
    },
    slimValue() {
      return Tools.isTrue(this.slim);
    },
    notificationValue() {
      return Tools.isTrue(this.notification);
    },
    size() {
      return this.slimValue || this.notificationValue ? 'small' : null;
    },
    circle() {
      return this.notificationValue ? false : true;
    },
    hover() {
      return this.notificationValue ? false : true;
    },
  },
  mounted() {
    this.bindEvents();

    if (this.show !== true) return;

    this.openModal();
  },
  unmounted() {
    this.observer.disconnect();
  },
  methods: {
    isModalOpen() {
      return document.body.classList.contains('modal-open') ? true : false;
    },
    setModalMode(mode) {
      const html = document.querySelector('html');

      if (mode) {
        html.classList.add(State.MODAL_OPEN);
      } else {
        html.classList.remove(State.MODAL_OPEN);

        this.handleClose();
      }
    },
    handleClose() {
      const modal = this.$refs['modal'];
      const form = modal.querySelector(Form.rootSelector);

      if (!form) return;

      const formInstance = Form.getInstance(form);

      Form.reset(formInstance.form);
    },
    bindEvents() {
      this.observer = new MutationObserver(this.handleMutation);

      this.observer.observe(document.body, { attributes: true });
    },
    handleMutation() {
      this.setModalMode(this.isModalOpen());
    },
    openModal() {
      const openDelay = 70;

      setTimeout(() => {
        Modal.open(this.$refs['modal']);
      }, openDelay);
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  props: {
    clientName: String,
    apiUrl: String,
    jobId: String,
    modalId: String,
    slim: {
      default: null,
    },
    show: {
      default: null,
    },
    center: {
      default: null,
    },
    notification: {
      default: null,
    },
  },
  template: `
    <div :class="classList" tabindex="-1" aria-hidden="true" style="--color-icon-hover-color: var(--color-white)" ref="modal"
          v-bind="settings">
      <div :class="dialogClassList">
        <div class="modal__content">
          <div class="modal__header">
            <div class="modal__close">
              <icon icon="close" :hover="hover" :circle="circle" :size="size" />
            </div>
          </div>
          <div class="modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`,
};
