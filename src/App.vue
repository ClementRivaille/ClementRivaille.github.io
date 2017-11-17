<template>
  <div id="app">
    <title-header></title-header>
    <locale-setting @changeLocale="changeLocale" :locale="locale" id="locale-setting"></locale-setting>
    <main><router-view id="page"></router-view></main>
  </div>
</template>

<script>
import TitleHeader from './components/TitleHeader';
import LocaleSetting from './components/LocaleSetting';

export default {
  name: 'app',
  components: { TitleHeader, LocaleSetting },
  props: ['defaultLocale'],
  data() {
    return { locale: this.defaultLocale };
  },
  methods: {
    changeLocale(locale) {
      this.$emit('changeLocale', locale);
      this.locale = locale;
    },
  },
};
</script>

<style>
html, body, #app, main {
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

p {
  margin-bottom: 0;
}

#page {
  padding: 0em 0.7em;;
  background: #e4e4e4;
  min-height: 100%;
}

#locale-setting {
  position:absolute;
  right: 0;
  top: 0;
}

@media screen and (min-width: 800px) {
  #page {
    margin: 0em 10em;
  }
}
</style>
