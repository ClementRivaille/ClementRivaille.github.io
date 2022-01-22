<template>
  <DynamicTheme>
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
      <HomeContent class="pt-12 pb-6 md:pb-10 z-10" />
    </div>
  </DynamicTheme>
</template>

<script lang="ts" setup>
import { useConductorProvider } from "./utils/conductor";
import HomeContent from "./components/organisms/HomeContent.vue";
import AnimatedBackground from "./components/organisms/AnimatedBackground.vue";
import DynamicTheme from "./components/atoms/DynamicTheme";

const { instruments, loop } = useConductorProvider();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();
</script>
