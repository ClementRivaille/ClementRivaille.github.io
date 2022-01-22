<template>
  <div
    class="
      w-full
      h-full
      flex
      justify-center
      items-start
      md:items-center md:pt-0
    "
  >
    <AnimatedBackground />
    <div class="pt-12 z-10">
      <HomeContent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useConductorProvider } from "./utils/conductor";
import HomeContent from "./components/organisms/HomeContent.vue";
import AnimatedBackground from "./components/organisms/AnimatedBackground.vue";

const { instruments, loop } = useConductorProvider();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();
</script>
