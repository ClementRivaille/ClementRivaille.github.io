<template>
  <div>
    <h2>{{ $t('skills.title') }}</h2>
    <article>
      <h3>{{ $t('skills.technologies') }}</h3>
      <ul class="list-tags">
        <li v-for="technology in technologies">
          <span class="tag">{{technology}}</span>
        </li>
      </ul>
      <h3>{{ $t('skills.languages') }}</h3>
      <ul class="list-tags">
        <li v-for="language in languages">
          <span class="tag">{{language}}</span>
        </li>
      </ul>
      <h3>{{ $t('skills.experiences.header') }}</h3>
      <ul class="list-vignettes">
        <li v-for="experience in experiences" class="experience-item">
          <experience v-bind="experience"></experience>
        </li>
      </ul>
      <h3>{{ $t('skills.formations.header') }}</h3>
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
      languages: ['Javascript', 'HTML5', 'CSS3', 'Typescript', 'ES6', 'Java', 'Python', 'C#', 'LaTeX', 'SQL'],
      technologies: ['AngularJS', 'Node.js', 'Web Audio API', 'git', 'Vue.js', 'React', 'redux', 'WCAG', 'Express', 'Flask'],
      experiences: [
        {
          name: 'mgdis',
          group: 'MGDIS',
          location: 'Vannes, France',
          period: {
            begin: new Date('2014/11/01'),
          },
          post: 'Software developper',
          description: 'Web Front-End developent for decision assisting tools used by public organisms',
        },
        {
          name: 'osytos2',
          group: 'OSYTOS',
          location: 'Rennes, France',
          period: {
            begin: new Date('2014/03/01'),
            end: new Date('2014/08/30'),
          },
          post: 'Internship',
          description: 'Conception of a tool facilitating the creation of web pages for dashboard and configuration panels',
        },
        {
          name: 'osytos1',
          group: 'OSYTOS',
          location: 'Rennes, France',
          period: {
            begin: new Date('2013/06/01'),
            end: new Date('2013/08/30'),
          },
          post: 'Internship',
          description: 'File synchronization between networks, with a web user interface',
        },
        {
          name: 'yvesrocher',
          group: 'Groupe Yves-Rocher',
          location: 'La Gacilly, France',
          period: {
            begin: new Date('2011/04/01'),
            end: new Date('2014/06/30'),
          },
          post: 'Internship',
          description: 'Regression testing of web-services',
        },
      ],
      formations: [
        {
          name: 'rgaa',
          establishment: 'Atalan',
          years: '2018',
        },
        {
          name: 'esir',
          type: 'Master\'s Degree in Engineering',
          establishment: 'Université de Rennes 1',
          formation: 'ESIR, Software engineering',
          years: '2011 - 2014',
        },
        {
          name: 'iut',
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
    align-items: stretch;
    align-content: space-between;
    margin-bottom: 0.2em;
    padding-left: 0.5em;
  }
  .tag {
    background: #23a794;
    color: white;
    padding: 0.3em 0.6em;
    border-radius: 0.5em;
  }
  li {
    margin-right: 0.6em;;
    margin-bottom: 1em;
  }
  .experience-item {
    display: flex;
    align-items: stretch;
  }
</style>
