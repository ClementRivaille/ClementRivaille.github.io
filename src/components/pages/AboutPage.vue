<template>
  <div
    class="
      grid grid-cols-leftMargin
      gap-4
      md:gap-8
      items-center
      gap-y-8
      md:gap-y-10
    "
  >
    <img class="col-start-1 w-20 md:w-32" :src="logoImg" />
    <div class="col-start-2">
      <div class="font-bold text-lg md:text-2xl">{{ t("about.name") }}</div>
      <div class="text-sm md:text-base">{{ t("about.location") }}</div>
      <div class="text-sm md:text-base italic">
        {{ t("about.profession") }}
      </div>
    </div>
    <SocialLinksList class="col-span-2 md:col-span-1" />
    <div
      class="
        md:col-start-2
        col-span-2
        md:col-span-1
        self-start
        gap-4
        flex flex-col
        text-sm
        md:text-base
      "
    >
      <div>{{ t("about.presentation.0") }}</div>
      <div>{{ t("about.presentation.1") }}</div>
      <div>{{ t("about.presentation.2") }}</div>
      <div>{{ t("about.presentation.3") }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logoImg from "@/assets/logo.png";
import { useI18n } from "vue-i18n";
import SocialLinksList from "../organisms/SocialLinksList.vue";

const { t } = useI18n();
</script>
