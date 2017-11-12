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
html, body, #app {
  height: 100%;
}

body {
  background: #39406f;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
}

h2 {
  background-color: #39406f;
  margin-top: 0px;
  margin-bottom: 0.1em;
  padding: 0.1em 0.3em 0.1em 0.3em;
  color: white;
  display: inline-block;
}

#page {
  padding: 0em 0.7em;;
  background: #e4e4e4;
  min-height: 100%;
}

@media screen and (min-width: 800px) {
  #page {
    margin: 0em 10em;
  }
}
</style>
