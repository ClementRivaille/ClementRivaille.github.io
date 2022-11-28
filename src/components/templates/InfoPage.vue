<template>
  <div
    class="h-screen w-screen overflow-auto p-3 lg:p-8 bg-secondary flex flex-col text-white"
  >
    <Motion
      class="relative flex lg:pb-12 md:pb-8 pb-4"
      :initial="{
        translateY: -300,
      }"
      :animate="{
        translateY: 0,
      }"
      :transition="{
        duration: 0.8,
        easing: 'ease-out',
      }"
    >
      <CloseButton
        @click="() => router.push({ name: Page.Home })"
        class="top-0 l-0 absolute"
      />
      <Heading class="flex-1" :icon="icon">
        {{ t(`${pageName}.header`) }}
      </Heading>
    </Motion>
    <div class="pl-2 pr-2 md:pl-16 md:pr-16 lg:pl-32 lg:pr-32">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconsName } from "@/utils/icons";
import Page from "@/utils/pages";
import Heading from "../atoms/Heading.vue";
import CloseButton from "../atoms/CloseButton.vue";
import { Motion } from "motion/vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { computed } from "vue";

const router = useRouter();
const pageName = computed(() => (router.currentRoute.value.name as Page) || "");

const { t } = useI18n();

defineProps<{
  icon: keyof typeof IconsName;
}>();
</script>
