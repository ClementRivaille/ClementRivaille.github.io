<template>
  <Motion
    :aria-label="msg"
    class="
      max-w-full
      md:max-w-1/3
      min-w-max
      text-white
      opacity-70
      font-bold
      text-5xl
      md:text-8xl
      title-font
      text-center
    "
    :animate="pivotAnimation"
    :transition="pivotTrans"
  >
    <Motion
      tag="span"
      class="inline-flex"
      aria-hidden
      v-for="(letter, index) in [...msg]"
      :key="index"
      :style="{
        color: activeLetter === index ? 'red' : 'white',
        ...(letter === ' ' ? { width: '0.3em' } : {}),
      }"
      :animate="waveAnimation"
      :transition="makeWaveTransition(index)"
    >
      <Motion
        tag="span"
        class="inline-flex"
        :animate="activeLetter === index ? { translateY: [-20, 0] } : {}"
        :transition="{
          easing: spring({
            stiffness: 3000,
            velocity: 400,
            mass: 0.8,
          }),
        }"
      >
        {{ letter }}
      </Motion>
    </Motion>
  </Motion>
</template>

<script lang="ts" setup>
import { StoreData } from "@/store";
import { Events, useSubscribe } from "@/utils/conductor";
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { Motion } from "motion/vue";
import { spring } from "motion";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const msg = t("home.title");
const activeLetter = ref(0);

const updateLetter = () => {
  let newValue = (activeLetter.value + 1) % msg.length;
  while (msg[newValue] === " ") {
    newValue = (newValue + 1) % msg.length;
  }
  activeLetter.value = newValue;
};

useSubscribe(Events.beat, () => updateLetter());

const { state } = useStore<StoreData>();
const waveAnimation = computed(() =>
  state.wave
    ? {
        translateY: [0, 30, 0, -30, 0],
      }
    : { translateY: 0 }
);
const makeWaveTransition = (index: number) =>
  state.wave
    ? {
        repeat: Infinity,
        delay: index * 0.07,
        duration: 1,
        easing: ["ease-out", "ease-in", "ease-out", "ease-in", "linear"],
      }
    : { duration: 0.3, easing: "ease-out" };

const pivotAnimation = computed(() =>
  state.wave ? { rotate: [0, -5, 0, 5, 0] } : { rotate: 0 }
);
const pivotTrans = computed(() =>
  state.wave
    ? {
        repeat: Infinity,
        duration: 4,
        easing: ["ease-out", "ease-in", "ease-out", "ease-in", "linear"],
      }
    : { duration: 0.5, easing: "ease-out" }
);
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
.title-font {
  font-family: var(--title-font);
}
</style>
