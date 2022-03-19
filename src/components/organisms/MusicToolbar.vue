<template>
  <ToolsBar>
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
  </ToolsBar>
</template>

<script lang="ts" setup>
import ButtonIcon from "../molecules/ButtonIcon.vue";
import ToolsBar from "../atoms/ToolsBar.vue";
import { useI18n } from "vue-i18n";
import { useConductor } from "@/utils/conductor";
import { useStore } from "vuex";
import { useAction } from "@/utils/vuex-hooks";
import { StoreData, Unlockable } from "@/store";

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
