<template>
  <button
    class="
      py-2
      px-6
      md:py-3 md:px-8
      text-white text-center
      w-48
      md:w-64
      rounded-full
      transform
      hover:scale-110
      focus:scale-110
      transition-transform
      outline-none
    "
    :class="{
      'bg-secondary': !color || color === ButtonColor.default,
      'border-white border-2': color === ButtonColor.secondary,
      'text-sm md:text-base': !small,
      'text-xs md:text-sm': small,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
enum ButtonColor {
  default = "default",
  secondary = "secondary",
}

defineProps<{
  color?: keyof typeof ButtonColor;
  small?: boolean;
}>();
</script>
