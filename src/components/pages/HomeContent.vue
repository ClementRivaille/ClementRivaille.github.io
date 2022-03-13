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
          v-if="getters.isUnlocked(Unlockable.drum)"
          :highlight="getters.isNew(Unlockable.drum)"
          name="drum"
          size="m"
          @click="onClickDrum"
          :aria-label="t('home.instruments.drum')"
        />
        <ButtonIcon
          v-if="getters.isUnlocked(Unlockable.rhodes)"
          :highlight="getters.isNew(Unlockable.rhodes)"
          name="piano"
          size="m"
          @click="onClickPiano"
          :aria-label="t('home.instruments.piano')"
        />
        <ButtonIcon
          v-if="getters.isUnlocked(Unlockable.clarinet)"
          :highlight="getters.isNew(Unlockable.clarinet)"
          name="flute"
          size="m"
          @click="onClickFlute"
          :aria-label="t('home.instruments.flute')"
        />
        <ButtonIcon
          v-if="getters.isUnlocked(Unlockable.synth)"
          :highlight="getters.isNew(Unlockable.synth)"
          name="violin"
          size="m"
          @click="onClickViolin"
          :aria-label="t('home.instruments.violin')"
        />
        <ButtonIcon
          v-if="getters.isUnlocked(Unlockable.wave)"
          :highlight="getters.isNew(Unlockable.wave)"
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
    <HomeMenu
      class="
        z-20
        row-start-1 row-span-1
        col-start-1 col-span-1
        justify-self-center
        self-center
      "
    />
  </div>
</template>

<script setup lang="ts">
import { StoreData, Unlockable } from "@/store";
import { useConductor } from "@/utils/conductor";
import { useAction } from "@/utils/vuex-hooks";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import AnimatedText from "../atoms/AnimatedText.vue";
import MusicToolbar from "../atoms/MusicToolbar.vue";
import ButtonIcon from "../molecules/ButtonIcon.vue";
import HomeMenu from "../organisms/HomeMenu.vue";

const { t } = useI18n();

const { playRhodes, playClarinet, playSynth, playDrums, toggleWaveEffect } =
  useConductor();
const { state, getters } = useStore<StoreData>();
const playWith = useAction("playWith");

const onClickPiano = () => {
  playRhodes();
  playWith(Unlockable.rhodes);
};
const onClickViolin = () => {
  playSynth();
  playWith(Unlockable.synth);
};
const onClickFlute = () => {
  playClarinet();
  playWith(Unlockable.clarinet);
};
const onClickDrum = () => {
  playDrums();
  playWith(Unlockable.drum);
};
const onClickWater = () => {
  toggleWaveEffect();
  playWith(Unlockable.wave);
};
</script>
