<template>
  <div>
    <header>
      <h4>{{ group }}</h4>
      <span>{{ post }} ({{period}}), {{location}}</span>
    </header>
    <div>
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

