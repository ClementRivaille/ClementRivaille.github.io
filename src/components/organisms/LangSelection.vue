<template>
  <div class="flex gap-2 text-white text-sm md:text-base">
    <Toggle
      :active="locale === 'fr'"
      @click="changeLocale('fr')"
      :aria-label="t('options.locale.fr.long')"
    >
      {{ t("options.locale.fr.short") }}
    </Toggle>
    <span>|</span>
    <Toggle
      :active="locale === 'en'"
      @click="changeLocale('en')"
      :aria-label="t('options.locale.en.long')"
    >
      {{ t("options.locale.en.short") }}
    </Toggle>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import Toggle from "@/components/atoms/Toggle.vue";
const { t, locale } = useI18n();

const changeLocale = (lang: string) => {
  locale.value = lang;
};
</script>
