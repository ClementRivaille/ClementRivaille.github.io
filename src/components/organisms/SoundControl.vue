<template>
  <ButtonIcon
    class="text-white"
    :name="icon"
    :disabled="loading"
    :aria-label="t(`options.sound.${isPlaying ? 'mute' : 'unmute'}`)"
    size="s"
    :class="{ 'animate-spin': loading }"
    @click="toggleAudio()"
  />
</template>

<script setup lang="ts">
import { useConductor } from "@/utils/conductor";
import { IconsName } from "@/utils/icons";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import ButtonIcon from "../molecules/ButtonIcon.vue";

const { t } = useI18n();

const { isPlaying, start, stop } = useConductor();
const loading = ref(false);
const icon = computed<keyof typeof IconsName>(() => {
  if (loading.value) {
    return "spinner";
  }
  return isPlaying?.value ? "volume" : "volumeOff";
});
const toggleAudio = async () => {
  if (isPlaying?.value) {
    stop();
  } else {
    loading.value = true;
    await start();
    loading.value = false;
  }
};
</script>
