<template>
  <div
    class="w-full h-full bg-blue-300 flex justify-center items-start pt-12 md:items-center md:pt-0"
  >
    <HomeContent />
  </div>
</template>

<script lang="ts" setup>
import { useConductorProvider } from "./utils/conductor";
import HomeContent from "./components/organisms/HomeContent.vue";

const { instruments, loop } = useConductorProvider();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();
</script>
