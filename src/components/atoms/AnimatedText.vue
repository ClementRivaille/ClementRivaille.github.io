<template>
  <div
    :aria-label="msg"
    class="
      max-w-full
      md:max-w-1/3
      text-white
      opacity-70
      font-bold
      text-5xl
      md:text-9xl
      title-font
      text-center
    "
  >
    <span
      aria-hidden
      v-for="(letter, index) in [...msg]"
      :key="index"
      :style="{ color: activeLetter === index ? 'red' : 'white' }"
    >
      {{ letter }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { Events, useSubscribe } from "@/utils/conductor";
import { ref } from "@vue/reactivity";

const msg = "Stuff I Make";
const activeLetter = ref(0);

const updateLetter = () => {
  let newValue = (activeLetter.value + 1) % msg.length;
  while (msg[newValue] === " ") {
    newValue = (newValue + 1) % msg.length;
  }
  activeLetter.value = newValue;
};

useSubscribe(Events.beat, () => updateLetter());
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
.title-font {
  font-family: var(--title-font);
}
</style>
