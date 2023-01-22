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
    </main>
  </div>
</template>
<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>
