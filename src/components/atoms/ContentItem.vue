<template>
  <a
    class="
      w-52
      h-52
      rounded-full
      grid
      duration-200
      transition-opacity
      overflow-hidden
      focus:outline-none
    "
    :class="{ 'opacity-60': active === false }"
    :href="url"
    target="_blank"
  >
    <img
      class="col-start-1 row-start-1 w-full h-full object-cover overflow-hidden"
      alt=""
      :src="img"
    />
    <span
      class="
        col-start-1
        row-start-1
        w-full
        h-full
        flex
        justify-center
        items-center
        text-center
        font-bold
        transition-opacity
        duration-150
        bg-opacity-30 bg-black
      "
      :class="{ 'opacity-0': !active }"
    >
      {{ title }}
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{ title: string; img: string; url: string; active?: boolean }>();
</script>
