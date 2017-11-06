<template>
  <a :href="url" :title="title">
    <div>
      <h4>{{title}}</h4>
      <img :alt="title" :src="img"/>
      <p>{{description}}</p>
    </div>
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