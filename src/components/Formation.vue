<template>
  <div class="formation">
    <header>
      <h4>{{ type }}</h4>
    </header>
    <div class="details">
      <span>{{establishment}}</span><br/>
      <span>{{formation}}</span><br/>
      <span>({{years}})</span><br/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'formation',
  props: [
    'type',
    'establishment',
    'formation',
    'years',
  ],
};
</script>

<style scoped>
.formation {
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
  margin-top: 0.6em;
  font-size: 0.8em;
  font-style: italic;
}
</style>
