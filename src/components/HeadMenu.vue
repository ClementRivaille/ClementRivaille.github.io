<template>
  <ul>
    <li :class="{active: $route.name === 'about' }">
      <router-link to="about">{{ $t('header.menu.about') }}</router-link>
    </li>
    <li :class="{active: $route.name === 'skills' }">
      <router-link to="skills">{{ $t('header.menu.skills') }}</router-link>
    </li>
    <li :class="{active: $route.name === 'creations' }">
      <router-link to="creations">{{ $t('header.menu.creations') }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'head-menu',
  data() {
    return {};
  },
};
</script>

<style scoped>
  ul {
    display: flex;
    justify-content: center;
    list-style: none;

    margin-bottom: 0;
    padding-left: 0;
  }
  li {
    min-width: 2.5em;
    margin: 0;
    padding: 0.2em 1em;
    background-color: #5d88c7;
    border: 1px solid #efefef;
    border-bottom: none;
  }
  li.active {
    background-color: #ab6161;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>