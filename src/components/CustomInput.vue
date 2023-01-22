<template>
  <div class="w-full">
    <div class="relative">
      <div
        class="absolute inset-y-0 right-[3%] flex items-center pointer-events-none"
      >
        <p
          v-if="isValid === 2"
          class="mr-[8px] text-[11px] leading-[11px] text-[#FF0000] font-semibold"
        >
          {{ errorText }}
        </p>
        <slot name="after" />
      </div>
      <input
        :type="type"
        @input="onInput"
        :autocomplete="autocomplete"
        :id="id"
        :value="itemValue"
        v-model="item"
        :class="{
          'border-[#D2D5DA]': isValid === 0,
          'border-[#00CA14]': isValid === 1,
          'border-[#FF0000]': isValid === 2,
        }"
        class="block w-full h-[46px] px-[16px] py-[14.5px] border text-[#6C727F] rounded-[8px] appearance-none focus:outline-none focus:ring-0 peer"
        :placeholder="placeholder"
      />
      <label
        :for="id"
        class="font-bold absolute bg-white rounded-[30px] z-10 origin-[0] text-[12px] top-[15%] -translate-y-4 left-[12px] leading-[15px] px-[5px]"
        >{{ label }}</label
      >
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const id = Math.random().toString(36);
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "text",
  },
  autocomplete: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  errorText: {
    type: String,
    default: "",
  },
  length: {
    type: String,
    default: "",
  },
});
const onInput = () => {
  item.value = item.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1")
    .replace(/^0[^.]/, "0");
  item.value = item.value.toString().slice(0, props.length);
};
const item = ref("");
const itemValue = computed(() => {
  if (props.cardNumber) {
    const cardValue = item.value
      .replace(/\D/g, "")
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    if (cardValue) {
      return !cardValue[2]
        ? cardValue[1]
        : `${cardValue[1]} ${cardValue[2]}${`${
            cardValue[3] ? ` ${cardValue[3]}` : ""
          }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ""}`}`;
    } else return item.value;
  } else return item.value;
});
const isValid = computed(() => {
  if (item.value.length === 0) {
    return 0;
  } else {
    if (item.value.toString().length.toString() === props.length) {
      return 1;
    } else return 2;
  }
});
const emit = defineEmits(["valid"]);
watch(isValid, (val) => {
  if (val === 1) {
    emit("valid", true);
  } else {
    emit("valid", false);
  }
});
</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
