<template>
  <div
    class="z-0 absolute grid grid-rows-2 grid-cols-2 w-screen h-72 md:overflow-hidden md:h-screen"
  >
    <div v-for="(corner, i) in circles" :key="i" class="">
      <div class="relative w-full h-full">
        <BackgroundBubble
          v-for="(circle, ci) of corner"
          :key="ci"
          :position="circle.position"
        ></BackgroundBubble>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Events, useSubscribe } from "@/utils/conductor";
import { ref, reactive } from "vue";
import BackgroundBubble from "../atoms/BackgroundBubble.vue";

interface CircleData {
  active: boolean;
  position: { x: number; y: number };
}
const circles = ref<CircleData[][]>([]);

function initCircles() {
  const circlesSet: CircleData[][] = [];
  for (const _i of Array(4)) {
    const nbCircles = Math.ceil(Math.random() * 3);
    const cornerCircles: CircleData[] = [];
    for (let _c = 0; _c < nbCircles; _c++) {
      cornerCircles.push(
        reactive({
          active: false,
          position: { x: Math.random(), y: Math.random() },
        })
      );
    }
    circlesSet.push(cornerCircles);
  }

  circles.value = circlesSet;

  useSubscribe(Events.synth, () => {
    for (const circleSet of circles.value) {
      for (const circle of circleSet) {
        circle.position = { x: Math.random(), y: Math.random() };
      }
    }
  });
}

initCircles();
</script>
