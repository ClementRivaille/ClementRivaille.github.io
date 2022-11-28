<template>
  <button
    class="
      relative
      bg-secondary
      md:rounded-full
      w-full
      h-12
      md:w-28 md:h-28 md:hover:w-48 md:hover:h-48 md:focus:w-48 md:focus:h-48
      lg:w-40 lg:h-40 lg:hover:w-64 lg:hover:h-64 lg:focus:w-64 lg:focus:h-64
      focus:outline-none
      text-white
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
        md:rounded-full
        transition-bg
        max-w-full
        md:max-w-none
      "
      :animate="transitionAnimation"
      :transition="transitionTransition"
      @motioncomplete="$emit('open')"
    />

    <Motion
      class="
        content
        absolute
        top-0
        w-full
        h-full
        flex
        md:flex-col md:justify-center
        gap-4
        md:gap-0
        justify-start
        items-center
        px-2
        md:px-0
        transition-opacity
        duration-200
        opacity-30
      "
      :animate="contentFadeOut"
      :transition="contentFadeOutOptions"
      :class="{ 'flex-row-reverse': direction === 'right' }"
    >
      <Icon :name="icon" size="l" />
      <div class="label font-medium font-sans lg:text-3xl md:text-2xl text-lg">
        {{ label }}
      </div>
    </Motion>
  </button>
</template>

<script setup lang="ts">
import { IconsName } from "@/utils/icons";
import { PlayableInstrument } from "@/utils/instruments";
import { useJingle } from "@/utils/jingles";
import { AnimationListOptions, MotionKeyframesDefinition } from "@motionone/dom";
import { Motion } from "motion/vue";
import { computed, ref } from "vue";
import Icon from "./Icon.vue";

const props = defineProps<{
  icon: keyof typeof IconsName;
  label: string;
  instrument: keyof typeof PlayableInstrument;
  direction?: "left" | "right";
}>();
defineEmits(["open"]);

const playJingle = useJingle(props.instrument as PlayableInstrument);

const transitioning = ref(false);
const transitionAnimation = computed<MotionKeyframesDefinition>(() =>
  transitioning.value
    ? {
        width: ["100%", "max(200vw, 250vh)"],
        height: ["100%", "max(200vw, 250vh)"],
      }
    : {}
);
const transitionTransition: AnimationListOptions = {
  duration: 0.6,
  easing: "ease-in",
};

const contentFadeOut = computed<MotionKeyframesDefinition>(() =>
  transitioning.value ? { opacity: 0 } : {}
);
const contentFadeOutOptions: AnimationListOptions = {
  delay: 0.3,
  duration: 0.5,
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
  .transition-bg {
    transform: translate(-50%, -50%);
  }

  &:focus,
  &:hover {
    .content {
      opacity: 0.8;
    }
  }
}

@media (min-width: 768px) {
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
        height: 40px;
        opacity: 1;
      }
    }
  }
}
@media (min-width: 1024px) {
  .page-button {
    &:focus,
    &:hover {
      .label {
        height: 56px;
      }
    }
  }
}
</style>
