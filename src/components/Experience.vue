<template>
  <div class="experience">
    <header>
      <h4>{{ group }}</h4>
      <span class="details">{{ post }} ({{period}}), {{location}}</span>
    </header>
    <div class="description">
      {{description}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'experience',
  props: [
    'group',
    'location',
    'period',
    'post',
    'description',
  ],
};
</script>

<style scoped>
.experience {
  background-color: #aed1e2;
  padding: 0.7em;
  margin: 0;
  max-width: 300px;
  min-width: 120px;
  color: #404040;
}
h4 {
  margin: 0;
}
.details {
  font-size: 0.8em;
  font-style: italic;
}
.description {
  margin-top: 0.6em;
}
</style>

