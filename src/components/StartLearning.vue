<template>
  <div
    class="w-[320px] h-[239px] mb-[32px] md:w-[473px] md:h-[287px] md:mt-[15px] md:mr-[24px] md:mb-[0px]"
  >
    <p
      class="text-[32px] leading-[120%] font-extrabold text-black mb-[16px] md:text-[48px] md:mb-[24px]"
    >
      Start your learning journey now
    </p>
    <p
      class="text-[24px] leading-[120%] font-semibold text-black mb-[32px] md:w-[375px]"
    >
      Get a
      <span class="font-bold"
        ><span class="text-[#FF8D24]">Planet</span>Learn</span
      >
      plan to rock self-learning
    </p>
    <custom-button
      class="w-[320px] bg-black hover:bg-[#00CA14] text-white transition-all md:w-[273px]"
      @click="modalMyStore.changeModal()"
      >Get my plan
    </custom-button>
  </div>
</template>

<script setup>
import CustomButton from "@/components/CustomButton.vue";
import { modalStore } from "@/stores/modal";
const modalMyStore = modalStore();
</script>
