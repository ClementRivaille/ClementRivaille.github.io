<template>
  <Motion
    aria-hidden
    class="bubble absolute bg-white bg-opacity-20 rounded-full w-12 h-12 md:w-24 md:h-24"
    :initial="false"
    :animate="animation"
    :transition="transitions"
  />
</template>

<script setup lang="ts">
import { glide } from "motion";
import { Motion } from "motion/vue";
import { computed } from "vue";
interface BubbleCoordinates {
  x: number;
  y: number;
}
const props = defineProps<{ position: BubbleCoordinates }>();

const toPercent = (v: number) => `${(v * 100).toString(10).substring(0, 2)}%`;

const animation = computed(() => ({
  top: toPercent(props.position.y),
  left: toPercent(props.position.x),
}));
const transitions = {
  top: { duration: 0.4, ease: glide() },
  left: { duration: 0.4, ease: glide() },
};
</script>

<style scoped lang="scss">
.bubble {
  transform: translate(-50%, -50%);
}
</style>
