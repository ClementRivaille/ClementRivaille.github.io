<template>
  <header>
    <h1>Clément Rivaille</h1>
    <div>Software Ingineer - Front-End Developer</div>
    <head-menu></head-menu>
  </header>
</template>

<script>
import HeadMenu from './HeadMenu';

export default {
  name: 'title-header',
  data() {
    return {};
  },
  components: { HeadMenu },
};
</script>

<style>
</style>