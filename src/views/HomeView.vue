<template>
  <div
    class="relative container mt-[32px] flex flex-col items-center md:flex-row md:justify-center md:items-start"
  >
    <!--    <div class="w-[320px] h-[239px] md:w-[473px] md:h-[287px]">-->
    <!--      <p-->
    <!--        class="text-[32px] leading-[120%] font-extrabold text-black mb-[16px] md:text-[48px] md:mb-[24px]"-->
    <!--      >-->
    <!--        Start your learning journey now-->
    <!--      </p>-->
    <!--      <p-->
    <!--        class="text-[24px] leading-[120%] font-semibold text-black mb-[32px] md:w-[375px]"-->
    <!--      >-->
    <!--        Get a-->
    <!--        <span class="font-bold"-->
    <!--          ><span class="text-[#FF8D24]">Planet</span>Learn</span-->
    <!--        >-->
    <!--        plan to rock self-learning-->
    <!--      </p>-->
    <!--      <custom-button-->
    <!--        class="w-[320px] bg-black hover:bg-[#00CA14] text-white transition-all md:w-[273px]"-->
    <!--        @click="modalMyStore.changeModal()"-->
    <!--        >Get my plan-->
    <!--      </custom-button>-->
    <!--    </div>-->
    <trial-box />
  </div>
</template>
<script setup>
import TrialBox from "@/components/TrialBox.vue";
import CustomButton from "@/components/CustomButton.vue";
import { modalStore } from "@/stores/modal";

const modalMyStore = modalStore();
</script>
