<template>
  <div class="flex flex-col gap-6 md:gap-10 lg:gap-20 items-center">
    <div class="text-base md:text-lg lg:text-xl text-center">
      {{ t(`contents.${category}.description`) }}
    </div>
    <ul class="flex flex-wrap gap-4 md:gap-8 lg:gap-16 justify-center">
      <li v-for="item in contentList" :key="item.key">
        <ContentItem
          :title="t(`contents.${category}.${item.key}.title`)"
          :img="item.img"
          :url="item.link"
          :active="displayed ? displayed.key === item.key : undefined"
          @mouseenter="displayItem(item)"
          @focus="displayItem(item)"
        />
      </li>
    </ul>
    <Transition name="quick-fade" mode="out-in">
      <div
        v-if="showDescription"
        class="text-center text-base md:text-lg lg:text-xl"
      >
        <h2 class="md:hidden text-lg font-semibold mb-2">
          {{ t(`contents.${category}.${displayed?.key}.title`) }}
        </h2>
        <div>{{ t(`contents.${category}.${displayed?.key}.description`) }}</div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useInstruments } from "@/utils/conductor";
import { Content, ContentCategory, contents } from "@/utils/content";
import { PlayableInstrument } from "@/utils/instruments";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ContentItem from "../atoms/ContentItem.vue";

const { t } = useI18n();

const props = defineProps<{
  category: keyof typeof ContentCategory;
  instrument: keyof typeof PlayableInstrument;
}>();

const contentList = contents[props.category];
const displayed = ref<Content | undefined>();
const showDescription = ref(false);

const instruments = useInstruments();

const displayItem = (item: Content) => {
  displayed.value = item;
  if (showDescription.value) {
    showDescription.value = false;
    setTimeout(() => (showDescription.value = true), 100);
  } else {
    showDescription.value = true;
  }

  // Play note
  if (instruments) {
    if (props.instrument === PlayableInstrument.clarinet)
      instruments.playClarinet();
    if (props.instrument === PlayableInstrument.rhodes)
      instruments.playRhodes();
    if (props.instrument === PlayableInstrument.drum) instruments.playDrums();
    if (props.instrument === PlayableInstrument.synth) instruments.playSynth();
  }
};
</script>
