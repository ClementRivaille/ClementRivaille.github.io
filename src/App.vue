<template>
  <DynamicTheme>
    <div class="w-full h-full">
      <AnimatedBackground />
      <div class="z-10 absolute h-screen w-screen overflow-auto">
        <Transition :mode="transitionMode">
          <HomeContent v-if="state.page === Page.Home" />
          <InfoPage
            title="Games"
            icon="puzzle"
            v-else-if="state.page === Page.Games"
          >
            <div>Lorem ipsum…</div>
          </InfoPage>
          <InfoPage
            title="Music"
            icon="music"
            v-else-if="state.page === Page.Music"
          >
            <div>Lorem ipsum…</div>
          </InfoPage>
          <InfoPage
            title="Videos"
            icon="film"
            v-else-if="state.page === Page.Videos"
          >
            <div>Lorem ipsum…</div>
          </InfoPage>
          <InfoPage
            title="About Me"
            icon="user"
            v-else-if="state.page === Page.About"
          >
            <div>Lorem ipsum…</div>
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
import { computed } from "vue";

const { instruments, loop } = useConductorProvider();

const { state } = useStore<StoreData>();

async function startConductor() {
  await instruments.load();
  loop.start();
}

startConductor();

const transitionMode = computed(() =>
  [Page.Games, Page.Music, Page.Videos, Page.About].includes(state.page)
    ? "in-out"
    : "default"
);
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
