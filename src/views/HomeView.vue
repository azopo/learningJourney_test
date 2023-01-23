<template>
  <div
    class="relative container mt-[32px] flex flex-col items-center md:flex-row md:justify-center md:items-start"
  >
    <start-learning v-if="screenWidth >= 992" />
    <trial-box> <start-learning v-if="screenWidth < 992" /></trial-box>
  </div>
</template>
<script setup>
import TrialBox from "@/components/TrialBox.vue";

import { windowStore } from "@/stores/window";
import StartLearning from "@/components/StartLearning.vue";
import { computed } from "vue";

const windowMyStore = windowStore();
const screenWidth = computed(() => windowMyStore.getWindowWidth);
</script>
