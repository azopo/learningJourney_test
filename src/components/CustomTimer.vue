<template>
  <div
    :class="{
      'shadow-[0_0_30px_-6px_rgba(255,0,0,1)] border-2 border-[#FF0000]':
        timerCount <= 10 && timerCount > 0,
    }"
    class="h-[47px] w-[110px] bg-black overflow-x-hidden group rounded-[12px] relative md:w-[160px] md:h-[60px]"
  >
    <div
      class="absolute text-white text-[24px] leading-[140%] font-semibold z-10 w-full h-full flex items-center justify-center"
    >
      {{ timer }}
    </div>
    <div
      :style="`transform: translateX(${translate})`"
      class="bg-secondary transition-all rounded-[12px] w-full h-full"
    ></div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { timerStore } from "@/stores/timer";

const timerMyStore = timerStore();
const timerCount = computed(() => timerMyStore.getTimerCount);
const timer = computed(() => {
  let minutes = Math.floor(timerCount.value / 60);
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = timerCount.value % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
});
const translate = computed(() => {
  return `${(timerCount.value / 180) * 100 - 100}%`;
});
const startTimer = () => {
  setInterval(() => {
    if (timerCount.value === 0) return;
    timerMyStore.minusTimerCount();
    localStorage.setItem("timerCount", timerCount.value.toString());
  }, 1000);
};
onMounted(() => {
  if (localStorage.getItem("timerCount"))
    timerMyStore.changeTimerCount(parseInt(localStorage.getItem("timerCount")));
  startTimer();
});
</script>
