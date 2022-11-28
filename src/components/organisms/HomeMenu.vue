<template>
  <div class="
      flex flex-col
      items-stretch
      md:grid md:grid-rows-2 md:grid-cols-2
      w-full
      justify-items-center
      md:items-center
      gap-4
      lg:gap-y-40
      md:gap-y-28 md:gap-x-56
      lg:gap-x-96
      md:max-h-menu
      lg:max-h-menuLg
    ">
    <div class="md:flex md:content-center md:items-center">
      <PageButton icon="puzzle" direction="left" :label="t('games.header')" class="self-start justify-self-start"
        instrument="drum" @open="openPage(Page.Games, Unlockable.drum)" />
    </div>
    <div class="md:flex md:content-center md:items-center">
      <PageButton icon="music" direction="right" :label="t('music.header')" class="self-start justify-self-end"
        instrument="rhodes" @open="openPage(Page.Music, Unlockable.rhodes)" />
    </div>
    <div class="md:flex md:content-center md:items-center">
      <PageButton icon="film" direction="left" :label="t('videos.header')" class="self-end justify-self-start"
        instrument="clarinet" @open="openPage(Page.Videos, Unlockable.clarinet)" />
    </div>
    <div class="md:flex md:content-center md:items-center">
      <PageButton icon="user" direction="right" :label="t('about.header')" class="self-end justify-self-end"
        instrument="synth" @open="openPage(Page.About, Unlockable.synth)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Unlockable } from "@/store";
import Page from "@/utils/pages";
import { useAction } from "@/utils/vuex-hooks";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import PageButton from "../atoms/PageButton.vue";

const { t } = useI18n();
const router = useRouter()
const unlock = useAction("unlock");

const openPage = (page: Page, unlocked: Unlockable) => {
  router.push({ name: page });
  unlock(unlocked);
};
</script>
