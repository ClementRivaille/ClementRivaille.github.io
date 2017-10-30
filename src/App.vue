<template>
  <div id="app">
    <title-header></title-header>
    <router-view/>
  </div>
</template>

<script>
import TitleHeader from './components/TitleHeader';

export default {
  name: 'app',
  components: { TitleHeader },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
