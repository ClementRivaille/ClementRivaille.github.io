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
    <Transition mode="out-in">
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
import { Content, ContentCategory, contents } from "@/utils/content";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import ContentItem from "../atoms/ContentItem.vue";

const { t } = useI18n();

const props = defineProps<{ category: keyof typeof ContentCategory }>();

const contentList = contents[props.category];
const displayed = ref<Content | undefined>();
const showDescription = ref(false);

const displayItem = (item: Content) => {
  displayed.value = item;
  if (showDescription.value) {
    showDescription.value = false;
    setTimeout(() => (showDescription.value = true), 100);
  } else {
    showDescription.value = true;
  }
};
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
