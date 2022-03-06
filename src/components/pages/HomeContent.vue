<template>
  <div
    class="
      absolute
      min-h-screen
      w-screen
      grid grid-cols-1 grid-rows-1
      md:overflow-hidden
    "
  >
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
        <ButtonIcon
          name="piano"
          size="m"
          @click="onClickPiano"
          :aria-label="t('home.instruments.piano')"
        />
        <ButtonIcon
          name="violin"
          size="m"
          @click="onClickViolin"
          :aria-label="t('home.instruments.violin')"
        />
        <ButtonIcon
          name="flute"
          size="m"
          @click="onClickFlute"
          :aria-label="t('home.instruments.flute')"
        />
        <ButtonIcon
          name="drum"
          size="m"
          @click="onClickDrum"
          :aria-label="t('home.instruments.drum')"
        />
        <ButtonIcon
          name="water"
          size="m"
          @click="onClickWater"
          :active="state.wave"
          role="switch"
          :aria-checked="state.wave"
          :aria-label="t('home.instruments.wave')"
        />
      </MusicToolbar>
    </div>
    <div
      class="
        z-20
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
          :label="t('games.header')"
          class="self-start justify-self-start"
          @open="setPage(Page.Games)"
        />
      </div>
      <div class="flex content-center items-center">
        <PageButton
          icon="music"
          :label="t('music.header')"
          class="self-start justify-self-end"
          @open="setPage(Page.Music)"
        />
      </div>
      <div class="flex content-center items-center">
        <PageButton
          icon="film"
          :label="t('videos.header')"
          class="self-end justify-self-start"
          @open="setPage(Page.Videos)"
        />
      </div>
      <div class="flex content-center items-center">
        <PageButton
          icon="user"
          :label="t('about.header')"
          class="self-end justify-self-end"
          @open="setPage(Page.About)"
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
import Page from "@/utils/pages";
import { useAction } from "@/utils/vuex-hooks";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const { playRhodes, playClarinet, playSynth, playDrums, toggleWaveEffect } =
  useConductor();
const { state } = useStore<StoreData>();
const setPage = useAction("setPage");

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
