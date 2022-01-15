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
          :active="circle.active"
        ></BackgroundBubble>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Events, useSubscribe } from "@/utils/conductor";
import { ref, reactive, computed } from "vue";
import BackgroundBubble from "../atoms/BackgroundBubble.vue";

interface CircleData {
  active: boolean;
  position: { x: number; y: number };
}
const circles = ref<CircleData[][]>([]);
const activeCircle = reactive({
  set: -1,
  idx: -1,
});

function initCircles() {
  const circlesSet: CircleData[][] = [];
  for (const setIdx of [...Array(4).keys()]) {
    const nbCircles = Math.ceil(Math.random() * 3);
    const cornerCircles: CircleData[] = [];
    for (let circleIdx = 0; circleIdx < nbCircles; circleIdx++) {
      cornerCircles.push(
        reactive({
          active: computed(
            () => activeCircle.set === setIdx && activeCircle.idx === circleIdx
          ),
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

  useSubscribe(Events.clarinet, () => {
    // Pick a random circle
    let circleSetIdx = activeCircle.set;
    let circleIdx = activeCircle.idx;
    while (
      circleSetIdx === activeCircle.set &&
      circleIdx === activeCircle.idx
    ) {
      circleSetIdx = Math.floor(Math.random() * circles.value.length);
      const circleSet = circles.value[circleSetIdx];
      circleIdx = Math.floor(Math.random() * circleSet.length);
    }

    // Set active circle
    activeCircle.set = circleSetIdx;
    activeCircle.idx = circleIdx;
  });
}

initCircles();
</script>
