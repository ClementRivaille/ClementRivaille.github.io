<template>
  <button
    class="
      bg-secondary
      rounded-full
      flex flex-col
      justify-center
      items-center
      w-40
      h-40
      hover:w-64 hover:h-64
      focus:w-64 focus:h-64 focus:outline-none
      text-white text-opacity-30
      page-button
    "
  >
    <Icon :name="icon" size="l" />
    <div class="label font-medium font-sans text-3xl">{{ label }}</div>
  </button>
</template>

<script setup lang="ts">
import { IconsName } from "@/utils/icons";
import Icon from "./Icon.vue";

defineProps<{
  icon: keyof typeof IconsName;
  label: string;
}>();
</script>

<style lang="scss" scoped>
.page-button {
  transition: width 300ms ease, height 300ms ease;
  .label {
    opacity: 0;
    height: 0px;
    transition: all 300ms ease;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  &:focus,
  &:hover {
    .label {
      height: 56px;
      opacity: 1;
    }
  }
}
</style>
