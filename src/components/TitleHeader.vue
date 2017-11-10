<template>
  <header>
    <h1>Clément Rivaille</h1>
    <div>Software Engineer - Front-End Developer</div>
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

<style scoped>
* {
  background: #db70a5;
  color: white;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  padding-top: 0.1em;
  margin: 0;
  font-size: 2.5em;
}
</style>