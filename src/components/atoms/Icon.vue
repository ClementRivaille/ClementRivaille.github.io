<template>
  <span
    class="icon inline-block"
    :class="{
      ['w-12 md:w-24']: size === 'xl',
      ['w-8 md:w-12 lg:w-16']: size === 'l',
      ['w-6 md:w-10']: size === 'm',
      ['w-4 md:w-6']: size === 's' || !size,
    }"
  >
    <SvgIcon />
  </span>
</template>

<script setup lang="ts">
import { IconSize, iconsMap, IconsName } from "@/utils/icons";
import { computed } from "vue";
const props = defineProps<{
  name?: keyof typeof IconsName;
  size?: IconSize;
}>();

const SvgIcon = computed(() => iconsMap[props.name || "piano"]);
</script>

<style scoped lang="scss">
.icon {
  fill: white;
  > * {
    width: 100%;
  }
}
</style>
