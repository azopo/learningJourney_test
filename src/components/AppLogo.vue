<template>
  <div class="flex items-center">
    <div class="w-[40px] h-[40px] mr-[8px]">
      <logo />
    </div>
    <p class="font-bold text-[24px] leading-[29px] w-[131px] h-[29px]">
      <span class="text-[#FF842B]">Planet</span>Learn
    </p>
  </div>
</template>

<script>
import Logo from "@/components/icons/logo.vue";

export default {
  name: "AppLogo",
  components: { Logo },
};
</script>

<style scoped></style>
