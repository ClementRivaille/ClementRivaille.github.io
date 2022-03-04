<template>
  <div class="min-h-full min-w-full grid grid-cols-1 grid-rows-1">
    <div
      class="
        row-start-1 row-span-1
        col-start-1 col-span-1
        flex flex-col
        min-h-full
        overflow-hidden
        items-stretch
        justify-items-stretch
      "
    >
      <div
        class="flex justify-center items-center flex-1 min-h-0 overflow-hidden"
      >
        <AnimatedText />
      </div>
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
    <div
      class="
        row-start-1 row-span-1
        col-start-1 col-span-1
        grid grid-rows-2 grid-cols-2
        w-full
        h-5/6
        justify-self-center
        self-center
        justify-items-center
        items-center
        gap-y-40 gap-x-56
      "
    >
      <div class="flex content-center items-center">
        <PageButton
          icon="puzzle"
          label="Games"
          class="self-start justify-self-start"
        />
      </div>
      <div class="flex content-center items-center">
        <PageButton
          icon="music"
          label="Music"
          class="self-start justify-self-end"
        />
      </div>
      <div class="flex content-center items-center">
        <PageButton
          icon="film"
          label="Videos"
          class="self-end justify-self-start"
        />
      </div>
      <div class="flex content-center items-center">
        <PageButton
          icon="user"
          label="About me"
          class="self-end justify-self-end"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { StoreData } from "@/store";
import { useConductor } from "@/utils/conductor";
import { useStore } from "vuex";
import AnimatedText from "../atoms/AnimatedText.vue";
import MusicToolbar from "../atoms/MusicToolbar.vue";
import ButtonIcon from "../molecules/ButtonIcon.vue";
import PageButton from "../atoms/PageButton.vue";

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
