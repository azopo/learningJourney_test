<template>
  <div class="container pt-[77px] flex justify-center">
    <div class="mr-[24px]">
      <p
        class="text-[48px] font-extrabold leading-[120%] text-black mb-[24px] w-[473px]"
      >
        Start your learning journey now
      </p>
      <p
        class="text-[24px] font-semibold leading-[120%] text-black w-[375px] mb-[32px]"
      >
        Get a
        <span class="font-bold"
          ><span class="text-[#FF8D24]">Planet</span>Learn</span
        >
        plan to rock self-learning
      </p>
      <custom-button
        class="bg-black hover:bg-[#00CA14] text-white transition-all px-[92.5px] w-[273px]"
        >Get my plan</custom-button
      >
    </div>
    <trial-box />
  </div>
</template>
<script setup>
import TrialBox from "@/components/TrialBox.vue";
import CustomButton from "@/components/CustomButton.vue";
</script>
