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
      <ul class="list-vignettes">
        <li v-for="experience in experiences">
          <experience v-bind="experience"></experience>
        </li>
      </ul>
      <h3>Formations</h3>
      <ul class="list-vignettes">
        <li v-for="formation in formations">
          <formation v-bind="formation"></formation>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import Experience from './Experience';
import Formation from './Formation';

export default {
  name: 'skills',
  data() {
    return {
      languages: ['Javascript', 'HTML5', 'CSS3', 'Java', 'Python', 'C#', 'LaTeX', 'SQL'],
      technologies: ['AngularJS', 'Node.js', 'Web Audio API', 'git', 'Vue.js', 'React', 'Flask'],
      experiences: [
        {
          group: 'MGDIS',
          location: 'Vannes, France',
          period: 'nov. 2014 - today',
          post: 'Software developper',
          description: 'Web Front-End developent for decision assisting tools used by public organisms',
        },
        {
          group: 'OSYTOS',
          location: 'Rennes, France',
          period: 'marsh 2014 - aug. 2014',
          post: 'Internship',
          description: 'Conception of a tool facilitating the creation of web pages for dashboard and configuration panels',
        },
        {
          group: 'OSYTOS',
          location: 'Rennes, France',
          period: 'june 2013 - aug. 2013',
          post: 'Internship',
          description: 'File synchronization between networks, with a web user interface',
        },
        {
          group: 'Groupe Yves-Rocher',
          location: 'La Gacilly, France',
          period: 'april 2011 - june 2011',
          post: 'Internship',
          description: 'Regression testing of web-services',
        },
      ],
      formations: [
        {
          type: 'Master\'s Degree in Engineering',
          establishment: 'Université de Rennes 1',
          formation: 'ESIR, Software engineering',
          years: '2011 - 2014',
        },
        {
          type: 'Associate\'s degree',
          establishment: 'Université Bretagne Sud, Vannes',
          formation: 'IUT, Software development',
          years: '2009 - 2011',
        },
      ],
    };
  },
  components: { Experience, Formation },
};
</script>

<style scoped>
  ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .tag {
    margin: 0 0.3em;
    background: #23a794;
    color: white;
    padding: 0.3em 0.6em;
    border-radius: 0.5em;
  }
</style>
