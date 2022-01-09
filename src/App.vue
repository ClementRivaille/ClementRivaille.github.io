<template>
  <div class="w-full h-full bg-blue-300 flex justify-center items-center">
    <HomeContent />
  </div>
</template>

<script lang="ts" setup>
import AnimatedText from "./components/atoms/AnimedText.vue";
import { useConductorProvider } from "./utils/conductor";
import HomeContent from "./components/organisms/HomeContent.vue";

const { instruments, loop } = useConductorProvider();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();
</script>
