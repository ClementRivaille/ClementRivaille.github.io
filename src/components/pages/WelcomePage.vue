<template>
  <div class="bg-primary h-screen w-screen flex justify-center items-center">
    <Transition name="quick-fade" mode="out-in">
      <div v-if="!loading" class="flex flex-col items-center gap-6 md:gap-10">
        <div class="text-sm md:text-base text-white text-center w-64 md:w-80">
          {{ t("welcome.message") }}
        </div>
        <div class="flex flex-col items-center gap-2 md:gap-3">
          <Button color="default" @click="validate(true)">
            {{ t("welcome.accept") }}
          </Button>
          <Button color="secondary" small @click="validate(false)">
            {{ t("welcome.deny") }}
          </Button>
        </div>
      </div>
      <Icon v-else-if="loading" name="spinner" size="m" class="animate-spin" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Button from "../atoms/Button.vue";
import Icon from "../atoms/Icon.vue";

const loading = ref(false);
const emit = defineEmits<{
  (e: "validate", value: boolean): void;
}>();
const validate = (value: boolean) => {
  loading.value = true;
  emit("validate", value);
};

const { t } = useI18n();
</script>
