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
    <Motion
      class="relative flex"
      :initial="{
        translateY: -300,
      }"
      :animate="{
        translateY: 0,
      }"
      :transition="{
        duration: 0.8,
        easing: 'ease-out',
      }"
    >
      <CloseButton
        @click="() => setPage(Page.Home)"
        class="top-0 l-0 absolute"
      />
      <Heading class="flex-1" :icon="icon">
        {{ title }}
      </Heading>
    </Motion>
    <div class="flex-1 flex justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconsName } from "@/utils/icons";
import Page from "@/utils/pages";
import { useAction } from "@/utils/vuex-hooks";
import Heading from "../atoms/Heading.vue";
import CloseButton from "../atoms/CloseButton.vue";
import { Motion } from "motion/vue";

const setPage = useAction("setPage");

defineProps<{
  title: string;
  icon: keyof typeof IconsName;
}>();
</script>
