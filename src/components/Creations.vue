<template>
  <div>
    <h2>Creations</h2>
    
    <h3>Games</h3>
    <p>I've started game development in 2016. I'm making short games, mostly for the web. Some have been made during 48 hours jams. You cn find the entire list of them on <a href="https://itooh.itch.io">itch.io</a></p>

    <ul>
      <li v-for="game in games">
        <project-link v-bind="game"></project-link>
      </li>
    </ul>

  </div>
</template>

<script>
import ProjectLink from './ProjectLink';

export default {
  name: 'creations',
  data() {
    return {
      games: [
        {
          title: 'Moog Memories',
          url: 'https://itooh.itch.io/moog-memories',
          description: 'Interactive music in HTML5, made in 48 hours for the Game Music Jam',
        },
        {
          title: 'Tabletop Dance',
          url: 'https://itooh.itch.io/tabletop-dance',
          description: 'Puzzle shooter made during the GMTK Jam',
        },
        {
          title: 'Safe Bots',
          url: 'https://itooh.itch.io/safe-bots',
          description: 'Puzzle game made in one week',
        },
        {
          title: 'Deep Sea School',
          url: 'https://itooh.itch.io/deep-sea-school',
          description: 'Exploration and narration game',
        },
      ],
      experiments: [],
    };
  },
  components: { ProjectLink },
};
</script>

<style>
</style>
