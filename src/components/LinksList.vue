<template>
  <ul role="contact">
    <li v-for="link in links">
      <a :title="link.name" :href="link.url">
        <img :src="link.icon"></img>
      </a>
    </li>
  </ul>
</template>

<script>
import linkedinIcon from '../assets/linkedin.png';
import mailIcon from '../assets/mail.png';
import githubIcon from '../assets/github.png';
import itchIcon from '../assets/itch.png';
import twitterIcon from '../assets/twitter.png';
import youtubeIcon from '../assets/youtube.png';

export default {
  name: 'links-list',
  data() {
    return {
      links: [
        {
          name: 'mail',
          url: 'mailto:rivaille.clement@orange.fr',
          icon: mailIcon,
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/clément-rivaille-39424b51/',
          icon: linkedinIcon,
        },
        {
          name: 'twitter',
          url: 'https://twitter.com/Itooh_',
          icon: twitterIcon,
        },
        {
          name: 'github',
          url: 'https://github.com/ClementRivaille',
          icon: githubIcon,
        },
        {
          name: 'itch.io',
          url: 'https://itooh.itch.io/',
          icon: itchIcon,
        },
        {
          name: 'youtube',
          url: 'https://www.youtube.com/channel/UCsP7go1EC0-jQLDPgExIBEw',
          icon: youtubeIcon,
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin: 1em;
}
img {
  width: 2em;
}
li {
  margin-right: 0.5em;
}
a:focus {
  opacity: 0.5;
}

@media screen and (min-width: 850px) {
  ul {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>