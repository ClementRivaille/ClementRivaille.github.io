<template>
  <div
    class="
      h-screen
      w-screen
      overflow-auto
      p-8
      pt-8
      bg-secondary
      flex flex-col
      text-white
    "
  >
    <div class="flex">
      <button @click="() => setPage(Page.Home)">Back</button>
      <h1 class="flex-1 text-center">{{ title }}</h1>
    </div>
    <div class="flex-1 flex justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Page from "@/utils/pages";
import { useAction } from "@/utils/vuex-hooks";

const setPage = useAction("setPage");

defineProps<{
  title: string;
}>();
</script>
