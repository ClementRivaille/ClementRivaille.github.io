<template>
  <button
    class="
      relative
      bg-secondary
      rounded-full
      w-40
      h-40
      hover:w-64 hover:h-64
      focus:w-64 focus:h-64 focus:outline-none
      text-white text-opacity-30
      page-button
    "
    :class="{ 'z-30': transitioning, 'cursor-default': transitioning }"
    @click="startTransition()"
    :disabled="transitioning"
  >
    <Motion
      class="
        absolute
        z-0
        left-1/2
        top-1/2
        bg-secondary
        rounded-full
        transition-bg
      "
      :animate="transitionAnimation"
      :transition="transitionTransition"
      @motioncomplete="$emit('open')"
    />

    <div
      class="
        absolute
        top-0
        w-full
        h-full
        flex flex-col
        justify-center
        items-center
      "
    >
      <Icon :name="icon" size="l" />
      <div class="label font-medium font-sans text-3xl">{{ label }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { IconsName } from "@/utils/icons";
import Icon from "./Icon.vue";
import { Motion } from "motion/vue";
import { computed, ref } from "vue";
import { AnimationListOptions, MotionKeyframesDefinition } from "motion";

defineProps<{
  icon: keyof typeof IconsName;
  label: string;
}>();
defineEmits(["open"]);

const transitioning = ref(false);
const transitionAnimation = computed<MotionKeyframesDefinition>(() =>
  transitioning.value
    ? {
        width: ["100%", "200vw"],
        height: ["100%", "200vw"],
      }
    : {}
);
const transitionTransition: AnimationListOptions = {
  duration: 0.6,
  easing: "ease-in",
};

const startTransition = () => {
  transitioning.value = true;
};
</script>

<style lang="scss" scoped>
.page-button {
  transition: width 300ms ease, height 300ms ease;
  .label {
    opacity: 0;
    height: 0px;
    transition: all 300ms ease;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }

  &:focus,
  &:hover {
    .label {
      height: 56px;
      opacity: 1;
    }
  }
}

.transition-bg {
  transform: translate(-50%, -50%);
}
</style>
