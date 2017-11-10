<template>
  <div id="app">
    <title-header></title-header>
    <router-view id="page"/>
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
body {
  background: #5ee0e0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#page {
  margin: 0em 10em;
  padding: 0.1em 0.7em;;
  background: white;
}
</style>
