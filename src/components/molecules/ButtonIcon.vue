<template>
  <button
    class="
      border-none
      bg-none
      outline-none
      transition-opacity
      opacity-60
      hover:opacity-100
      duration-100
      focus:outline-white
      ease-in
    "
    :class="{ 'opacity-100': active }"
  >
    <Icon :name="name" :size="size" />
  </button>
</template>

<script setup lang="ts">
import { IconSize, IconsName } from "@/utils/icons";
import Icon from "../atoms/Icon.vue";
defineProps<{
  name: keyof typeof IconsName;
  size?: IconSize;
  active?: boolean;
}>();
</script>
