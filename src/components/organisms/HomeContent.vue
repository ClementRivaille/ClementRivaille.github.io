<template>
  <div class="flex flex-col gap-8 md:gap-16 justify-center items-center">
    <AnimatedText />
    <MusicToolbar>
      <ButtonIcon name="piano" size="m" @click="onClickPiano" />
      <ButtonIcon name="violin" size="m" @click="onClickViolin" />
      <ButtonIcon name="flute" size="m" @click="onClickFlute" />
      <ButtonIcon name="drum" size="m" @click="onClickDrum" />
      <ButtonIcon
        name="water"
        size="m"
        @click="onClickWater"
        :active="state.wave"
        role="switch"
        :aria-checked="state.wave"
      />
    </MusicToolbar>
  </div>
</template>

<script setup lang="ts">
import { StoreData } from "@/store";
import { useConductor } from "@/utils/conductor";
import { useStore } from "vuex";
import AnimatedText from "../atoms/AnimatedText.vue";
import MusicToolbar from "../atoms/MusicToolbar.vue";
import ButtonIcon from "../molecules/ButtonIcon.vue";

const { playRhodes, playClarinet, playSynth, playDrums, toggleWaveEffect } =
  useConductor();
const { state } = useStore<StoreData>();

const onClickPiano = () => {
  playRhodes();
};
const onClickViolin = () => {
  playSynth();
};
const onClickFlute = () => {
  playClarinet();
};
const onClickDrum = () => {
  playDrums();
};
const onClickWater = () => {
  toggleWaveEffect();
};
</script>
