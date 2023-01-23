import { defineStore } from "pinia";

export const windowStore = defineStore("windowStore", {
  state: () => ({
    windowWidth: window.screen.width,
  }),
  getters: {
    getWindowWidth: (state) => state.windowWidth,
  },
  actions: {
    changeWindowWidth(size) {
      this.windowWidth = size;
    },
  },
});
