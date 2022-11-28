<template>
  <div class="bg-primary h-screen w-screen flex justify-center items-center">
    <Transition name="quick-fade" mode="out-in">
      <div v-if="!loading" class="flex flex-col items-center gap-6 md:gap-10">
        <LangSelection />
        <div class="text-sm md:text-base text-white text-center w-64 md:w-80">
          {{ t("welcome.message") }}
        </div>
        <div class="flex flex-col items-center gap-2 md:gap-3">
          <Button color="default" @click="validate(true)" fixed-width>
            {{ t("welcome.accept") }}
          </Button>
          <Button color="secondary" small @click="validate(false)" fixed-width>
            {{ t("welcome.deny") }}
          </Button>
        </div>
      </div>
      <Icon v-else-if="loading" name="spinner" size="m" class="animate-spin" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useAction } from "@/utils/vuex-hooks";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Button from "../atoms/Button.vue";
import Icon from "../atoms/Icon.vue";
import LangSelection from "../organisms/LangSelection.vue";

const loading = ref(false);
const selectInitMute = useAction("selectInitMute")
const validate = (value: boolean) => {
  loading.value = true;
  selectInitMute(value)
};

const { t } = useI18n();
</script>
