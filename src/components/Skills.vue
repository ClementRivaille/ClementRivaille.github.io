<template>
  <div>
    <h2>Skills &amp; Experiences</h2>
    <article>
      <h3>Technologies</h3>
      <ul class="list-tags">
        <li v-for="technology in technologies">
          <span class="tag">{{technology}}</span>
        </li>
      </ul>
      <h3>Languages</h3>
      <ul class="list-tags">
        <li v-for="language in languages">
          <span class="tag">{{language}}</span>
        </li>
      </ul>
      <h3>Experiences</h3>
      <h3>Formations</h3>
    </article>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data() {
    return {
      languages: ['Javascript', 'HTML5', 'CSS3', 'Java', 'Python', 'C#', 'LaTeX', 'SQL'],
      technologies: ['AngularJS', 'Node.js', 'Web Audio API', 'git', 'Vue.js', 'React', 'Flask'],
    };
  },
};
</script>

<style scoped>
  ul.list-tags {
    display: flex;
    list-style: none;
    flex-direction: row;
  }
  .tag {
    margin: 0 0.3em;
    background: #23a794;
    color: white;
    padding: 0.3em 0.6em;
    border-radius: 0.5em;
  }
</style>
