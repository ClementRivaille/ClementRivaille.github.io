<template>
  <div>
    <button v-if="locale === 'fr'" @click="() => changeLocale('en')">EN</button>
    <button v-if="locale === 'en'" @click="() => changeLocale('fr')">FR</button>
  </div>
</template>

<script>
export default {
  name: 'locale-setting',
  props: ['locale'],
  methods: {
    changeLocale(value) {
      this.$emit('changeLocale', value);
    },
  },
};
</script>

<style scoped>
div {
  padding: 0.5em;
}
button {
  background: white;
  opacity: 0.3;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9em;
  border-radius: 4px;
}
button:focus {
  opacity: 0.15;
}
</style>