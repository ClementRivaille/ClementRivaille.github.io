<template>
  <Motion
    aria-hidden
    class="bubble absolute"
    :animate="posAnim"
    :transition="posTrans"
  >
    <Motion
      class="bg-white opacity-20 rounded-full w-12 h-12 md:w-24 md:h-24"
      :animate="activeAnim"
      :transition="activeTrans"
      @motioncomplete="onActivAnimationEnd"
    />
  </Motion>
</template>

<script setup lang="ts">
import { glide } from "motion";
import { Motion } from "motion/vue";
import { computed, ref, watch } from "vue";
interface BubbleCoordinates {
  x: number;
  y: number;
}
const props = defineProps<{ position: BubbleCoordinates; active?: boolean }>();

const toPercent = (v: number) => `${(v * 100).toString(10).substring(0, 2)}%`;

const posAnim = computed(() => ({
  top: toPercent(props.position.y),
  left: toPercent(props.position.x),
}));
const posTrans = { duration: 0.4, easing: glide({ velocity: 8 }) };

const activeAnimActive = ref(false);
// Start animation once active
watch(
  () => props.active,
  (active) => {
    if (active) {
      if (!activeAnimActive.value) {
        activeAnimActive.value = true;
      } else {
        // Force restart
        activeAnimActive.value = false;
        setTimeout(() => (activeAnimActive.value = true), 5);
      }
    }
  }
);
const onActivAnimationEnd = () => {
  activeAnimActive.value = false;
};

const activeAnim = computed(() =>
  activeAnimActive.value
    ? { opacity: [1, 0.2], transform: ["scale(1.2)", "scale(1)"] }
    : {}
);
const activeTrans = {
  duration: 1.4,
  easing: "ease-out",
};
</script>

<style scoped lang="scss">
.bubble {
  transform: translate(-50%, -50%);
}
</style>
