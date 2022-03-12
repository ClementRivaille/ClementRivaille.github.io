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
import { PlayableInstrument } from "@/utils/instruments";
import { useJingle } from "@/utils/jingles";
import { AnimationListOptions, MotionKeyframesDefinition } from "motion";
import { Motion } from "motion/vue";
import { computed, ref } from "vue";
import Icon from "./Icon.vue";

const props = defineProps<{
  icon: keyof typeof IconsName;
  label: string;
  instrument: keyof typeof PlayableInstrument;
}>();
defineEmits(["open"]);

const playJingle = useJingle(props.instrument as PlayableInstrument);

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

  // Play a jingle
  let amount = 0;
  const delays: number[] = [];
  if (props.instrument === PlayableInstrument.drum) {
    amount = 4 + Math.round(Math.random() * 3);
    delays.push((110 / (8 * 60)) * 1000);
  }
  if (props.instrument === PlayableInstrument.rhodes) {
    amount = 2 + Math.round(Math.random() * 1);
    for (let i = 0; i < amount; i++) {
      delays.push(350 + Math.random() * 600);
    }
  }
  if (props.instrument === PlayableInstrument.clarinet) {
    amount = 3 + Math.round(Math.random() * 1);
    delays.push(300 + Math.random() * 300);
  }
  if (props.instrument === PlayableInstrument.synth) {
    amount = 2 + Math.round(Math.random() * 2);
    delays.push(300 + Math.random() * 400);
  }
  playJingle(amount, delays);
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
