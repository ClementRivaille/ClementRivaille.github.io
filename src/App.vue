<template>
  <DynamicTheme>
    <div class="w-full h-full">
      <AnimatedBackground />
      <div class="z-10 absolute h-screen w-screen overflow-auto">
        <Transition name="fade-page" :mode="transitionMode">
          <HomeContent v-if="state.page === Page.Home" />
          <InfoPage
            title="Games"
            icon="puzzle"
            v-else-if="state.page === Page.Games"
          >
            <ContentShowcase category="games" instrument="drum" />
          </InfoPage>
          <InfoPage
            title="Music"
            icon="music"
            v-else-if="state.page === Page.Music"
          >
            <ContentShowcase category="music" instrument="rhodes" />
          </InfoPage>
          <InfoPage
            title="Videos"
            icon="film"
            v-else-if="state.page === Page.Videos"
          >
            <ContentShowcase category="videos" instrument="clarinet" />
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
import ContentShowcase from "./components/organisms/ContentShowcase.vue";

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
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
  width: 100vw;
}

.fade-page-enter-from,
.fade-page-leave-to {
  transition: opacity 0.5s ease;

  opacity: 0;
}
</style>
