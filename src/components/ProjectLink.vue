<template>
  <a :href="url" :title="title" target="_blank">
    <div>
      <h4>{{title}}</h4>
      <img v-if="img" :alt="title" :src="img"/>
      <p>{{ $t(`creations.${name}.description`)}}</p>
    </div>
  </a>
</template>

<script>

export default {
  name: 'project-link',
  props: [
    'name',
    'title',
    'url',
    'img',
  ],
};

</script>

<style scoped>
* {
  background-color: #aed1e2;
}

a {
  color: black;
  text-decoration: none;
  display: flex;
  align-items: stretch;
}
div {
  display: block;
  padding: 0;
  max-width: 20em;
}
h4 {
  color: white;
  background-color: #39406f;
  margin: 0;
  padding: 0.2em 0.4em;
  font-size: 1.1em;
}
img {
  max-width: 300px;
  min-width: 100%;
}
p {
  padding: 0 0.8em;
  margin-bottom: 0.6em;
}
</style>