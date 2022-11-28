<template>
  <DynamicTheme>
    <div class="w-full h-full">
      <AnimatedBackground />
      <div class="z-10 absolute h-screen w-screen overflow-auto">
        <RouterView v-slot="{ Component }">
          <Transition
            :name="state.initMute !== null && 'fade-page'"
            :mode="transitionMode"
          >
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </DynamicTheme>
</template>

<script lang="ts" setup>
import { useConductorProvider } from "./utils/conductor";
import AnimatedBackground from "./components/organisms/AnimatedBackground.vue";
import DynamicTheme from "./components/atoms/DynamicTheme.vue";
import Page from "./utils/pages";
import { computed, watch, watchEffect } from "vue";
import { start as startTone } from "tone";
import { useI18n } from "vue-i18n";
import { RouterView, useRouter } from "vue-router";
import { useStore } from "vuex";
import { StoreData } from "./store";

const { instruments, loop, active } = useConductorProvider();

const router = useRouter();
const currentPage = computed(() => router.currentRoute.value.name as Page);

async function startConductor() {
  await instruments.load();
  startTone();
  loop.start();
}

const { state } = useStore<StoreData>();

async function start(sound: boolean) {
  if (sound) {
    await startConductor();
  } else {
    instruments.setMute(true);
  }
  active.value = sound;
  router.push({ name: Page.Home });
}
watchEffect(() => {
  if (state.initMute !== null && currentPage.value === Page.Welcome) {
    start(state.initMute);
  } else if (state.initMute === null) {
    router.replace({ name: Page.Welcome });
  }
});

const transitionMode = computed(() =>
  [Page.Games, Page.Music, Page.Videos, Page.About].includes(currentPage.value)
    ? "in-out"
    : "default"
);

const { t, locale } = useI18n();
document.title = t("title");
watch([locale], () => {
  document.title = t("title");
});
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
