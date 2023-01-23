import { defineStore } from "pinia";

export const windowStore = defineStore("windowStore", {
  state: () => ({
    mdBreakpoint: false,
  }),
  getters: {
    getMdBreakpoint: (state) => state.mdBreakpoint,
  },
  actions: {
    changeMdBreakpoint(value) {
      this.mdBreakpoint = value;
    },
  },
});
