<template>
  <button
    class="
      bg-white
      w-10
      h-10
      rounded-full
      flex
      items-center
      content-start
      pl-2
      gap-1
      overflow-hidden
      text-secondary
      hover:w-28
      focus:w-28 focus:outline-none
      close-btn
    "
  >
    <Icon name="close" size="s" />
    <span class="label">Back</span>
  </button>
</template>

<script setup lang="ts">
import Icon from "./Icon.vue";
</script>

<style scoped lang="scss">
.close-btn {
  transition: width 0.1s ease;

  .label {
    width: 0;
    opacity: 0;
    transition: opacity 0.1s ease;
  }

  &:focus,
  &:hover {
    .label {
      opacity: 1;
    }
  }
}
</style>
