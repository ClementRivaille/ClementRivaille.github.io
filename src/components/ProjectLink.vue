<template>
  <a :href="url" :title="title" target="_blank">
    <div>
      <h4>{{title}}</h4>
      <img v-if="img" :alt="title" :src="img"/>
      <p>{{description}}</p>
    </div>
  </a>
</template>

<script>

export default {
  name: 'project-link',
  props: [
    'title',
    'url',
    'img',
    'description',
  ],
};

</script>

<style scoped>
* {
  background: #f9f9f9;
}

a {
  color: black;
  text-decoration: none;
}
div {
  display: block;
  padding: 0;
  max-width: 20em;
  margin: 0.5em;
  border: 2px solid black;
  border-radius: 0.5em;
}
h4 {
  border-radius: 0.5em 0.5em 0 0;
  background-color: white;
  margin: 0;
  padding: 0.2em 0.4em;
  font-size: 1.1em;
}
img {
  max-width: 20em;
}
p {
  padding: 0 0.8em;
}
</style>