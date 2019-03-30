<template>
  <div>
    <h2> {{ $t('creations.title') }}</h2>

    <h3> {{ $t('creations.games.title') }}</h3>
    <p v-html="$t('creations.games.summary', {link: 'https://itooh.itch.io' })"></p>
    <ul>
      <li v-for="game in games">
        <project-link v-bind="game"></project-link>
      </li>
    </ul>

    <h3> {{ $t('creations.tools.title') }}</h3>
    <p v-html="$t('creations.tools.summary')"></p>
    <ul>
      <li v-for="tool in tools">
        <project-link v-bind="tool"></project-link>
      </li>
    </ul>

    <h3> {{ $t('creations.experiments.title') }}</h3>
    <p v-html="$t('creations.experiments.summary')"></p>

    <ul>
      <li v-for="experiment in experiments">
        <project-link v-bind="experiment"></project-link>
      </li>
    </ul>

    <h3> {{ $t('creations.videos.title') }}</h3>
    <p v-html="$t('creations.videos.summary', { link: 'https://www.youtube.com/channel/UCsP7go1EC0-jQLDPgExIBEw' })"></p>
  </div>
</template>

<script>
import ProjectLink from './ProjectLink';

import moogImg from '../assets/moog.png';
import tabletopImg from '../assets/tabletop.png';
import botsImg from '../assets/bots.png';
import seaImg from '../assets/sea.png';
import landscape from '../assets/landscape.png';
import harmonitImg from '../assets/harmonit.png';
import onceuponImg from '../assets/onceupon.png';
import terribleImg from '../assets/terrible.png';
import bloodImg from '../assets/blood.png';
import octaveImg from '../assets/in-octave.png';

export default {
  name: 'creations',
  data() {
    return {
      games: [
        {
          title: 'In Octave',
          url: 'https://itooh.itch.io/in-octave',
          img: octaveImg,
          name: 'in-octave',
        },
        {
          title: 'Blood Not Allowed',
          url: 'https://itooh.itch.io/blood-not-allowed',
          img: bloodImg,
          name: 'blood-not-allowed',
        },
        {
          title: 'Moog Memories',
          url: 'https://itooh.itch.io/moog-memories',
          img: moogImg,
          name: 'moog-memories',
        },
        {
          title: 'Tabletop Dance',
          url: 'https://itooh.itch.io/tabletop-dance',
          img: tabletopImg,
          name: 'tabletop-dance',
        },
        {
          title: 'Safe Bots',
          url: 'https://itooh.itch.io/safe-bots',
          img: botsImg,
          name: 'safe-bots',
        },
        {
          title: 'Deep Sea School',
          url: 'https://itooh.itch.io/deep-sea-school',
          img: seaImg,
          name: 'deep-sea-school',
        },
      ],
      experiments: [
        {
          title: 'Landscape of sounds',
          url: 'https://github.com/ClementRivaille/landscape-of-sounds',
          img: landscape,
          name: 'landscape-sounds',
        },
        {
          title: 'Harmon\'it',
          url: 'https://github.com/ClementRivaille/harmon-it',
          img: harmonitImg,
          name: 'harmonit',
        },
        {
          title: 'Once Upon Nothing',
          url: 'https://github.com/ClementRivaille/once-upon-nothing',
          img: onceuponImg,
          name: 'once-upon-nothing',
        },
        {
          title: 'Terrible logos',
          url: 'https://github.com/ClementRivaille/terrible-logos',
          img: terribleImg,
          name: 'terrible-logos',
        },
      ],
      tools: [
        {
          title: 'Orchestre-JS',
          url: 'https://github.com/ClementRivaille/orchestre-js',
          name: 'orchestre-js',
        },
        {
          title: 'Joy Phases',
          url: 'https://github.com/ClementRivaille/joy-phases',
          name: 'joy-phases',
        },
      ],
    };
  },
  components: { ProjectLink },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
}
li {
  display: flex;
  align-items: stretch;
  margin: 0.5em;
}
p {
  margin-bottom: 0;
}
</style>
