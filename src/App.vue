<template>
  <div class="w-full h-full bg-blue-300 flex justify-center items-center">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!-- <router-view /> -->
    <AnimatedText />
  </div>
</template>

<script lang="ts" setup>
import AnimatedText from "./components/atoms/AnimedText.vue";
import { useConductorProvider } from "./utils/conductor";

const { instruments, loop } = useConductorProvider();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();
</script>
