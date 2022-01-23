<template>
  <Motion
    aria-hidden
    class="bubble absolute"
    :animate="posAnim"
    :transition="posTrans"
  >
    <Motion :animate="waveAnimation" :transition="waveTransition">
      <Motion
        class="bg-white opacity-20 rounded-full w-12 h-12 md:w-24 md:h-24"
        :animate="activeAnim"
        :transition="scaleTrans"
        @motioncomplete="onActivAnimationEnd"
      />
    </Motion>
  </Motion>
</template>

<script setup lang="ts">
import { StoreData } from "@/store";
import { AnimationListOptions, glide, MotionKeyframesDefinition } from "motion";
import { Motion } from "motion/vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
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

const activeAnim = computed<MotionKeyframesDefinition>(() =>
  activeAnimActive.value
    ? {
        opacity: [1, 0.2],
        transform: ["scale(1.2)", "scale(1)"],
      }
    : {}
);
const scaleTrans: AnimationListOptions = {
  duration: 1.4,
  easing: "ease-out",
};

// Wave animation
const { state } = useStore<StoreData>();
const waveAnimation = computed<MotionKeyframesDefinition>(() =>
  state.wave
    ? {
        transform: [
          "scale(1)",
          "scale(0.7)",
          "scale(1)",
          "scale(1.6)",
          "scale(1)",
        ],
      }
    : {}
);
const waveTransition = computed<AnimationListOptions>(() =>
  state.wave
    ? {
        duration: 1.2,
        repeat: Infinity,
        easing: ["ease-out", "ease-in", "ease-out", "ease-in", "linear"],
        delay: Math.random() * 1.2,
      }
    : { duration: 0.4, easing: "ease-out" }
);
</script>

<style scoped lang="scss">
.bubble {
  transform: translate(-50%, -50%);
}
</style>
