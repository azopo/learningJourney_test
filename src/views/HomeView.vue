<template>
  <div
    class="relative container mt-[32px] flex flex-col items-center md:flex-row md:justify-center md:items-start"
  >
    <start-learning v-if="!md" />
    <trial-box> <start-learning v-if="md" /></trial-box>
  </div>
</template>
<script setup>
import TrialBox from "@/components/TrialBox.vue";

import { windowStore } from "@/stores/window";
import StartLearning from "@/components/StartLearning.vue";
import { computed } from "vue";

const windowMyStore = windowStore();
const md = computed(() => windowMyStore.getMdBreakpoint);
</script>
