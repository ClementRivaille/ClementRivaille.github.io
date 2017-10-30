<template>
  <ul>
    <li>
      <router-link to="skills">Skills</router-link>
    </li>
    <li>
      <router-link to="creations">Creations</router-link>
    </li>
    <li>
      <router-link to="experiences">Experiences</router-link>
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

<style>
  ul {
    display: flex;
    justify-content: center;
  }
  li {
    min-width: 2.5em;
    margin: 0 0.5em;
  }
</style>