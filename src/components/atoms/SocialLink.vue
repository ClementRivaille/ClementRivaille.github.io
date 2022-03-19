<template>
  <a
    class="
      opacity-50
      focus:opacity-80
      hover:opacity-80
      transition-all
      duration-100
      ease-in-out
      transform
      focus:-translate-y-1
      hover:-translate-y-1
      md:focus:-translate-y-2 md:hover:-translate-y-2
      filter
      focus:drop-shadow-lg
      hover:drop-shadow-lg
      md:focus:drop-shadow-xl md:hover:drop-shadow-xl
      focus:outline-none
    "
  >
    <img :src="img" class="w-8 md:w-12 object-contain" />
  </a>
</template>

<script setup lang="ts">
defineProps<{ img: string }>();
</script>
