import { defineStore } from "pinia";

export const modalStore = defineStore("modalStore", {
  state: () => ({
    modal: false,
  }),
  getters: {
    getModal: (state) => state.modal,
  },
  actions: {
    changeModal() {
      this.modal = !this.modal;
    },
  },
});
