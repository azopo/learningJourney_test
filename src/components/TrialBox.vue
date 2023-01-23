<template>
  <div
    class="relative w-[320px] flex flex-col items-center justify-center bg-white rounded-[24px] md:shadow-[0_0_0_4px_rgba(0,0,0,0.05)] md:w-[474px] md:h-[515px]"
  >
    <div
      class="absolute w-[202px] h-[80px] top-[-12%] right-[4.05%] z-50 hidden md:block"
    >
      <asteroid />
    </div>
    <div
      class="h-[95px] flex justify-between items-center w-full mb-[24px] px-[16px] rounded-[12px] border border-[#CDCDCD] shadow-[0_4px_4px_rgba(0,0,0,0.06)] md:w-[426px] md:h-[85px] md:shadow-none md:border-0 md:px-0"
    >
      <div
        class="w-[166px] h-[71px] md:flex md:items-start md:flex-col md:justify-center md:w-[238px] md:h-[85px]"
        :class="{
          'w-[288px] flex flex-col items-center justify-center':
            timerCount <= 0,
        }"
      >
        <p
          class="text-black text-[18px] font-extrabold leading-[120%] mb-[8px] md:text-[24px]"
        >
          3-day trial for <span class="text-[#FF8D24]">$0.99</span>
        </p>
        <p
          class="text-black leading-[120%] text-[16px] md:text-[20px] md:font-semibold"
        >
          Then
          <span v-if="timerCount > 0">$9.99</span>
          <span v-else>$39.99/week</span>
        </p>
        <p
          v-if="timerCount > 0"
          class="text-black text-opacity-[.4] text-[14px] font-semibold leading-[140%] line-through md:text-[16px]"
        >
          $39.99/week
        </p>
      </div>
      <custom-timer v-if="timerCount > 0 || !md" />
    </div>
    <slot />
    <div
      class="w-[320px] text-black text-[16px] leading-[120%] mb-[24px] md:w-[421px]"
    >
      <div class="flex items-center mb-[16px] md:mb-[18.5px]">
        <star />
        <p class="ml-[10px]">
          Exclusive access to
          <span class="text-[#FF8D24] font-bold">350+</span> learning programs
        </p>
      </div>
      <div class="flex items-center mb-[16px] md:mb-[18.5px]">
        <star />
        <p class="ml-[10px]">Personalized course plan</p>
      </div>
      <div class="flex items-center mb-[16px] md:mb-[18.5px]">
        <star />
        <p class="ml-[10px]">Comfy learning schedule made by you</p>
      </div>
      <div class="flex items-center mb-[16px] md:mb-[18.5px]">
        <star />
        <p class="ml-[10px]">
          <span class="text-[#FF8D24] font-bold">24/7</span> tutor support in a
          secure chat
        </p>
      </div>
      <div class="flex items-center">
        <star />
        <p class="ml-[10px]">Lifetime access to materials</p>
      </div>
    </div>
    <custom-button
      class="bg-[#FFFFFF] hover:bg-[#000000] transition-all border border-[#E1E1E1] w-[320px] mb-[24px] md:w-[426px]"
    >
      <div class="flex items-center">
        <lock />
        <span class="ml-[8px] text-[#01C120]">Safe & secure payment</span>
      </div>
    </custom-button>
    <div>
      <p
        class="w-[320px] h-[98px] text-[12px] leading-[120%] text-black text-opacity-[.5] text-center md:w-[426px] md:h-[70px]"
      >
        $0.99 charged today. If you don't cancel at least 24 hours before the
        end of the 3-day trial period, you will automatically be charged the
        full price of $19.99/Month . You can cancel your subscription at any
        time. By continuing, you indicate that you've read and agree to our
        Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms
        .
      </p>
    </div>
  </div>
</template>
<script setup>
import CustomTimer from "@/components/CustomTimer.vue";
import CustomButton from "@/components/CustomButton.vue";
import { timerStore } from "@/stores/timer";
import { windowStore } from "@/stores/window";
import { computed } from "vue";
import Star from "@/components/icons/star.vue";
import Lock from "@/components/icons/lock.vue";
import Asteroid from "@/components/icons/asteroid.vue";

const timerMyStore = timerStore();
const windowMyStore = windowStore();
const timerCount = computed(() => timerMyStore.getTimerCount);
const md = computed(() => windowMyStore.getMdBreakpoint);
</script>
