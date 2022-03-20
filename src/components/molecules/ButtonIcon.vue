<template>
  <Motion
    tag="button"
    class="
      border-none
      bg-none
      outline-none
      transition-opacity
      opacity-60
      hover:opacity-100
      duration-100
      focus:outline-white
      ease-in
      flex
      justify-center
      items-center
    "
    :class="{ 'opacity-100': active }"
    :animate="highlight.animation"
    :transition="highlight.options"
  >
    <Icon :name="name" :size="size" class="text-red-800" />
  </Motion>
</template>

<script setup lang="ts">
import { IconSize, IconsName } from "@/utils/icons";
import { AnimationOptions, MotionKeyframes } from "motion";
import { Motion } from "motion/vue";
import { computed, reactive } from "vue";
import Icon from "../atoms/Icon.vue";
const props = defineProps<{
  name: keyof typeof IconsName;
  size?: IconSize;
  active?: boolean;
  highlight?: boolean;
}>();
const highlight = reactive({
  animation: computed<MotionKeyframes>(() =>
    props.highlight
      ? {
          rotate: [0, 20, 0, -20, 0],
          scale: [1, 1.2, 1],
        }
      : {}
  ),
  options: computed<AnimationOptions>(() =>
    props.highlight
      ? {
          duration: 1.3,
          easing: "ease-out",
          rotate: { offset: [0, 0.08, 0.16, 0.24, 0.32] },
          scale: { offset: [0, 0.5, 0.9], easing: "ease" },
          repeat: Infinity,
        }
      : {}
  ),
});
</script>
