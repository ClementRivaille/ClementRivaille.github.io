<template>
  <component
    :is="url ? 'a' : 'button'"
    :href="url"
    target="_blank"
    :class="{
      [`w-24
      h-24
      md:w-44 md:h-44
      lg:w-52 lg:h-52
      rounded-full
      grid
      duration-200
      transition-opacity
      overflow-hidden
      focus:outline-none`]: true,
      'opacity-40 md:opacity-60': active === false,
    }"
  >
    <img
      class="col-start-1 row-start-1 w-full h-full object-cover overflow-hidden"
      alt=""
      :src="img"
    />
    <span
      :class="{
        [`label
        col-start-1
        row-start-1
        w-full
        h-full
        min-w-0
        hidden
        md:flex
        justify-center
        items-center
        text-center
        font-bold
        transition-opacity
        duration-150
        bg-opacity-30 bg-black
        text-base
        md:text-xl
        lg:text-2xl
        p-1`]: true,
        'opacity-0': !active,
      }"
    >
      {{ title }}
    </span>
  </component>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  img: string;
  url?: string;
  active?: boolean;
}>();
</script>

<style scoped lang="scss">
.label {
  text-shadow: 0.1em 0.05em 0.2em rgba(0, 0, 0, 0.7);
}
</style>
