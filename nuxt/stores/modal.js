import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', {
  state: () => ({
    registeredModals: new Map(),
  }),
  getters: {
    getModalByTitle: (state) => (title) => {
      return state.registeredModals.get(title);
    },
    getAllModals: (state) => {
      return Array.from(state.registeredModals.entries()).map(([title, modal]) => ({
        title,
        ...modal,
      }));
    },
  },
  actions: {
    registerModal(title, modalData) {
      this.registeredModals.set(title, {
        open: modalData.open,
        close: modalData.close,
      });
    },
    unregisterModal(title) {
      this.registeredModals.delete(title);
    },
    openModal(title) {
      const modal = this.registeredModals.get(title);

      if (modal && modal.open) {
        modal.open();
      }
    },
    closeModal(title) {
      const modal = this.registeredModals.get(title);

      if (modal && modal.close) {
        modal.close();
      }
    },
    closeAllModals() {
      this.registeredModals.forEach((modal) => {
        if (modal.close) {
          modal.close();
        }
      });
    },
  },
});
