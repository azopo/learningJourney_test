<template>
  <div>
    <div class="relative">
      <div
        class="absolute inset-y-0 right-[-11px] flex items-center pointer-events-none"
      >
        <p
          v-if="error"
          class="mr-[8px] text-[11px] leading-[11px] text-[#FF0000] font-semibold"
        >
          123123
        </p>
        <svg
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="31" height="21" rx="3.5" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0002 16.0118C14.8382 17.0172 13.3308 17.6242 11.6836 17.6242C8.00826 17.6242 5.02881 14.6023 5.02881 10.8746C5.02881 7.14689 8.00826 4.125 11.6836 4.125C13.3308 4.125 14.8382 4.73196 16.0002 5.73739C17.1623 4.73196 18.6697 4.125 20.3169 4.125C23.9922 4.125 26.9717 7.14689 26.9717 10.8746C26.9717 14.6023 23.9922 17.6242 20.3169 17.6242C18.6697 17.6242 17.1623 17.0172 16.0002 16.0118Z"
            fill="#ED0006"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 16.0118C17.4309 14.7738 18.3382 12.9317 18.3382 10.8746C18.3382 8.81752 17.4309 6.97538 16 5.73739C17.1621 4.73196 18.6695 4.125 20.3166 4.125C23.992 4.125 26.9714 7.14689 26.9714 10.8746C26.9714 14.6023 23.992 17.6242 20.3166 17.6242C18.6695 17.6242 17.1621 17.0172 16 16.0118Z"
            fill="#F9A000"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0003 16.0118C17.4311 14.7738 18.3384 12.9317 18.3384 10.8746C18.3384 8.81757 17.4311 6.97545 16.0003 5.73745C14.5694 6.97545 13.6621 8.81757 13.6621 10.8746C13.6621 12.9317 14.5694 14.7738 16.0003 16.0118Z"
            fill="#FF5E00"
          />
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="21"
            rx="3.5"
            stroke="#F2F4F7"
          />
        </svg>
      </div>
      <input
        :type="type"
        :id="id"
        v-model="item"
        :class="{ 'border-2 border-[#CB3D40]': error }"
        class="block w-[303px] h-[46px] px-[16px] py-[14.5px] border text-[#6C727F] border-[#D2D5DA] rounded-[8px] appearance-none focus:outline-none focus:border-[#00CA14] focus:ring-0 peer"
        placeholder="••••  ••••  ••••  ••••"
      />
      <label
        :for="id"
        :class="{ 'text-[#CB3D40]': error }"
        class="font-bold absolute bg-white rounded-[30px] z-10 origin-[0] text-[12px] top-[15%] -translate-y-4 left-[12px] leading-[15px] px-[5px]"
        >{{ label }}</label
      >
    </div>
    <p
      v-if="error"
      :class="{ 'text-[#CB3D40]': error }"
      class="leading-[14px] text-[12px] text-[#7E7E7E] mt-[4px] ml-[17px] max-w-[294px] line-clamp-4"
    >
      {{ errorText }}
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const id = Math.random().toString(36);
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  errorText: {
    type: String,
    default: "",
  },
  validator: {
    type: Object,
    default: () => {},
  },
});
const error = ref("");
const item = ref("");
// const isValid = computed(() => {
//   const aaa = props.validator.isValidSync(item.value);
//   console.log(aaa);
//   return aaa;
// });
</script>
