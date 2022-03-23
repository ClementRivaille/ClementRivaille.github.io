<template>
  <div :class="`${colorTheme} ${fontTheme}`" class="w-full h-full bg-primary">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Events, useSubscribe } from "@/utils/conductor";
import { ref, computed } from "vue";

function selectRandomIdx(array: string[], previous: number) {
  let next = Math.floor(Math.random() * array.length);
  while (next === previous) {
    next = Math.floor(Math.random() * array.length);
  }
  return next;
}

// Background color
const THEMES = [
  "theme-blue",
  "theme-green",
  "theme-pink",
  "theme-gray",
  "theme-red",
  "theme-yellow",
  "theme-purple",
  "theme-black",
];
const colorIdx = ref(0);
useSubscribe(Events.rhodes, () => {
  colorIdx.value = selectRandomIdx(THEMES, colorIdx.value);
});
const colorTheme = computed(() => THEMES[colorIdx.value]);

// Font
const FONTS = [
  "font-leaguespartan",
  "font-oswald",
  "font-arista",
  "font-ataristocrat",
  "font-bungee",
  "font-geosanslight",
  "font-uroob",
  "font-yrsa",
  "font-comic",
  "font-cheltenham",
];
const fontIdx = ref(0);
useSubscribe(Events.drums, () => {
  fontIdx.value = selectRandomIdx(FONTS, fontIdx.value);
});
const fontTheme = computed(() => FONTS[fontIdx.value]);
</script>
