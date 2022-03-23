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
      text-3xl
      md:text-5xl
      lg:text-8xl
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
        ...(letter === ' ' ? { width: '0.3em' } : {}),
      }"
      :class="{ 'text-red-500': activeLetter === index }"
      :animate="waveAnimation"
      :transition="makeWaveTransition(index)"
    >
      <Motion
        tag="span"
        class="inline-flex"
        :animate="
          activeLetter === index ? { translateY: [-stringStrength, 0] } : {}
        "
        :transition="{
          easing: spring({
            stiffness: 2500,
            mass: 0.6,
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
import { watch } from "vue";
import { isMedium } from "@/utils/utils";

const { t, locale } = useI18n();

const msg = ref(t("home.title"));
watch([locale], () => {
  msg.value = t("home.title");
});
const activeLetter = ref(-1);

const stringStrength = ref(isMedium() ? 20 : 8);

const updateLetter = () => {
  let newValue = (activeLetter.value + 1) % msg.value.length;
  while (msg.value[newValue] === " ") {
    newValue = (newValue + 1) % msg.value.length;
  }
  activeLetter.value = newValue;
};

useSubscribe(Events.beat, () => updateLetter());

const { state } = useStore<StoreData>();
const waveAnimation = computed(() =>
  state.wave
    ? {
        translateY: [0, "35%", 0, "-35%", 0],
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
