<template>
  <div>
    <header>
      <h4>{{ type }}</h4>
    </header>
    <div>
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

