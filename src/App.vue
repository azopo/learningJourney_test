<template>
  <div class="relative h-screen">
    <div
      class="absolute w-full h-full top-0 left-0 bg-[url('@/assets/img/bg.webp')] opacity-[0.04] bg-fixed bg-center bg-cover bg-no-repeat z-[-1]"
    />
    <header>
      <app-header />
    </header>
    <main>
      <RouterView />
      <Transition>
        <div
          v-if="modal"
          class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-[.2] z-40"
        >
          <payment-window />
        </div>
      </Transition>
    </main>
  </div>
</template>
<script setup>
import AppHeader from "@/components/AppHeader.vue";
import PaymentWindow from "@/components/PaymentWindow.vue";
import { modalStore } from "@/stores/modal";
import { computed, onBeforeUnmount, onMounted } from "vue";
import { nextTick } from "vue";
import { windowStore } from "@/stores/window";
document.title = "PlanetLearn";
const windowMyStore = windowStore();
const modalMyStore = modalStore();
const modal = computed(() => modalMyStore.getModal);
onMounted(() => {
  windowMyStore.changeMdBreakpoint(
    window.matchMedia("(max-width: 992px)").matches
  );
  nextTick(() => {
    window.addEventListener("resize", onResize);
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
const onResize = () => {
  windowMyStore.changeMdBreakpoint(
    window.matchMedia("(max-width: 992px)").matches
  );
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
