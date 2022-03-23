<template>
  <component
    :is="href ? 'a' : 'button'"
    class="
      py-2
      px-6
      md:py-3 md:px-8
      text-white text-center
      rounded-full
      transform
      focus-visible:scale-110
      hover:font-medium
      transition-transform
      outline-none
      inline-flex
      justify-center
    "
    :class="{
      'bg-secondary': !color || color === ButtonColor.default,
      'border-white border-2': color === ButtonColor.secondary,
      'text-sm md:text-base': !small,
      'text-xs md:text-sm': small,
      'w-52 md:w-64': fixedWidth,
    }"
    :href="href"
    :target="(href && '_blank') || ''"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
enum ButtonColor {
  default = "default",
  secondary = "secondary",
}

defineProps<{
  color?: keyof typeof ButtonColor;
  small?: boolean;
  fixedWidth?: boolean;
  href?: string;
}>();
</script>
