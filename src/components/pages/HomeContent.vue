<template>
  <div
    class="
      absolute
      h-screen
      overflow-y-auto
      w-screen
      md:grid md:grid-cols-1
      mdgrid-rows-1
      md:overflow-hidden md:overflow-y-hidden
    "
  >
    <div
      class="
        md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1
        flex flex-col
        h-home
        md:h-screen
        pb-2
        md:pb-0 md:min-h-full
        overflow-hidden
        items-stretch
        justify-items-stretch
      "
    >
      <div
        class="
          flex
          justify-center
          items-center
          flex-1
          min-h-0
          overflow-hidden
          lg:pb-20
          md:pb-16
        "
      >
        <AnimatedText />
      </div>
    </div>
    <div
      class="
        md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1 md:h-screen
        flex
        md:flex-col
        flex-col-reverse
        gap-2
        md:gap-1
      "
    >
      <HomeMenu class="justify-self-center self-center flex-1" />
      <MusicToolbar />
    </div>
    <OptionsBar class="absolute top-2 left-2" />
  </div>
</template>

<script setup lang="ts">
import AnimatedText from "../atoms/AnimatedText.vue";
import HomeMenu from "../organisms/HomeMenu.vue";
import MusicToolbar from "../organisms/MusicToolbar.vue";
import OptionsBar from "../organisms/OptionsBar.vue";
</script>
