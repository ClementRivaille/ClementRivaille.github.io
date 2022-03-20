<template>
  <button
    class="text-white focus:outline-none focus:underline"
    :class="{ ' font-semibold': active, 'opacity-50': !active }"
    :aria-selected="!!active"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean;
}>();
</script>
