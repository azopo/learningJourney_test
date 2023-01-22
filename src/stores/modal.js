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
      console.log(1);
      this.modal = !this.modal;
    },
  },
});
