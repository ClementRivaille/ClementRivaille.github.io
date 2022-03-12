<template>
  <h1
    class="
      flex
      justify-center
      items-center
      gap-1
      md:gap-3
      text-white text-2xl
      md:text-4xl
      font-semibold
    "
  >
    <Icon :name="icon" size="m" />
    <span>
      <slot />
    </span>
  </h1>
</template>

<script setup lang="ts">
import { IconsName } from "@/utils/icons";
import Icon from "./Icon.vue";

defineProps<{
  icon: keyof typeof IconsName;
}>();
</script>
