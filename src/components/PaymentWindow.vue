<template>
  <form
    class="w-[336px] h-[554px] flex flex-col items-center justify-center bg-white shadow-[0_0_0_4px_rgba(0,0,0,0.05)] rounded-[12px] px-[16px] pt-[24px] pb-[18px] md:w-[400px] md:h-[552px] md:mb-[16px]"
  >
    <p
      class="font-extrabold text-[21px] leading-[120%] text-[#000000] mb-[24px]"
    >
      Payment method
    </p>
    <custom-button
      class="bg-primary-0 hover:bg-primary-1 transition-all mb-[16px]"
    >
      <pay-pal />
      <span class="uppercase ml-[10px]">Buy now</span>
    </custom-button>
    <custom-button
      class="bg-[#FFFFFF] hover:bg-[#000000] hover:text-white transition-all border border-[#E1E1E1] mb-[16px]"
    >
      <google-pay />
      <span class="uppercase ml-[6px] font-dm">pay</span>
    </custom-button>
    <custom-divider class="mb-[16px]" />
    <custom-input
      class="mb-[30px]"
      label="Card number"
      cardNumber
      autocomplete="cc-number"
      placeholder="••••  ••••  ••••  ••••"
      error-text="Invalid number"
      length="16"
      @valid="isItemValid('cardNumber', $event)"
    >
      <template #after>
        <mastercard />
      </template>
    </custom-input>
    <div class="flex justify-between w-full mb-[40px]">
      <custom-select
        class="w-[94.67px] md:w-[116px]"
        label="Month"
        @valid="isItemValid('cardMonth', $event)"
        :items="[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]"
      />
      <custom-select
        class="w-[94.67px] md:w-[116px]"
        label="Year"
        @valid="isItemValid('cardYear', $event)"
        :items="selectYear"
      />
      <custom-input
        class="w-[94.67px] md:w-[116px]"
        label="CVC"
        autocomplete="cc-csc"
        type="password"
        placeholder="•••"
        error-text="Invalid"
        length="3"
        @valid="isItemValid('cardCVC', $event)"
      />
    </div>
    <custom-button
      class="w-[300px] bg-black hover:bg-[#00CA14] transition-all text-white"
      :disabled="!formValid"
    >
      Submit
    </custom-button>
    <button
      class="mt-[12px] w-[300px] text-[16px] font-bold leading-[140%] text-black text-opacity-[.4] hover:text-opacity-100 transition-all"
      @click="modalMyStore.changeModal()"
    >
      Close
    </button>
  </form>
</template>
<script setup>
import CustomButton from "@/components/CustomButton.vue";
import CustomDivider from "@/components/CustomDivider.vue";
import CustomInput from "@/components/CustomInput.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import { computed, ref } from "vue";
import { modalStore } from "@/stores/modal";
import PayPal from "@/components/icons/payPal.vue";
import GooglePay from "@/components/icons/googlePay.vue";
import Mastercard from "@/components/mastercard.vue";
const modalMyStore = modalStore();
const selectYear = computed(() => {
  const currentYear = new Date().getFullYear() + 5;
  return Array.from({ length: 10 }, (_, i) => currentYear - i);
});
const itemsValid = ref({
  cardNumber: false,
  cardYear: false,
  cardMonth: false,
  cardCVC: false,
});
const isItemValid = (item, value) => {
  itemsValid.value[item] = value;
};
const formValid = computed(() => {
  return Object.values(itemsValid.value).every((value) => value === true);
});
</script>
