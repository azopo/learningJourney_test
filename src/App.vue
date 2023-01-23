<template>
  <div class="relative h-screen">
    <div
      class="absolute w-full h-full top-0 left-0 bg-[url('src/assets/img/bg.png')] opacity-[0.04] bg-fixed bg-center bg-cover bg-no-repeat z-[-1]"
    />
    <header>
      <app-header />
    </header>
    <main>
      <RouterView />
      <transition name="fade">
        <div
          v-if="modal"
          class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-[.2] z-40"
        >
          <payment-window />
        </div>
      </transition>
    </main>
  </div>
</template>
<script setup>
import AppHeader from "@/components/AppHeader.vue";
import PaymentWindow from "@/components/PaymentWindow.vue";
import { modalStore } from "@/stores/modal";
import { computed } from "vue";

const modalMyStore = modalStore();
const modal = computed(() => modalMyStore.getModal);
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
