<template>
  <DynamicTheme>
    <div class="w-full h-full">
      <AnimatedBackground />
      <div class="z-10 absolute h-screen w-screen overflow-auto">
        <Transition>
          <HomeContent v-if="state.page === Page.Home" />
          <InfoPage title="Games" v-else-if="state.page === Page.Games">
            <div>GAMES!</div>
          </InfoPage>
          <InfoPage title="Music" v-else-if="state.page === Page.Music">
            <div>Music</div>
          </InfoPage>
          <InfoPage title="Videos" v-else-if="state.page === Page.Videos">
            <div>Youtube</div>
          </InfoPage>
          <InfoPage title="About Me" v-else-if="state.page === Page.About">
            <div>Hello</div>
          </InfoPage>
        </Transition>
      </div>
    </div>
  </DynamicTheme>
</template>

<script lang="ts" setup>
import { useConductorProvider } from "./utils/conductor";
import HomeContent from "./components/pages/HomeContent.vue";
import AnimatedBackground from "./components/organisms/AnimatedBackground.vue";
import DynamicTheme from "./components/atoms/DynamicTheme.vue";
import { useStore } from "vuex";
import { StoreData } from "./store";
import Page from "./utils/pages";
import InfoPage from "./components/templates/InfoPage.vue";

const { instruments, loop } = useConductorProvider();

const { state } = useStore<StoreData>();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
  width: 100vw;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
