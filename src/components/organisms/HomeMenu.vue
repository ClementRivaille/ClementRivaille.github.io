<template>
  <div
    class="
      grid grid-rows-2 grid-cols-2
      w-full
      h-5/6
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
        instrument="drum"
        @open="openPage(Page.Games, Unlockable.drum)"
      />
    </div>
    <div class="flex content-center items-center">
      <PageButton
        icon="music"
        :label="t('music.header')"
        class="self-start justify-self-end"
        instrument="rhodes"
        @open="openPage(Page.Music, Unlockable.rhodes)"
      />
    </div>
    <div class="flex content-center items-center">
      <PageButton
        icon="film"
        :label="t('videos.header')"
        class="self-end justify-self-start"
        instrument="clarinet"
        @open="openPage(Page.Videos, Unlockable.clarinet)"
      />
    </div>
    <div class="flex content-center items-center">
      <PageButton
        icon="user"
        :label="t('about.header')"
        class="self-end justify-self-end"
        instrument="synth"
        @open="openPage(Page.About, Unlockable.synth)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Unlockable } from "@/store";
import Page from "@/utils/pages";
import { useAction } from "@/utils/vuex-hooks";
import { useI18n } from "vue-i18n";
import PageButton from "../atoms/PageButton.vue";

const { t } = useI18n();
const setPage = useAction("setPage");
const unlock = useAction("unlock");

const openPage = (page: Page, unlocked: Unlockable) => {
  setPage(page);
  unlock(unlocked);
};
</script>
