import { defineStore } from "pinia";

export const timerStore = defineStore("timerStore", {
  state: () => ({
    timerCount: 180,
  }),
  getters: {
    getTimerCount: (state) => state.timerCount,
  },
  actions: {
    changeTimerCount(count) {
      this.timerCount = count;
    },
    minusTimerCount() {
      this.timerCount = this.timerCount - 1;
    },
  },
});
