<template>
  <!-- Transition here to fix the opacity fade -->
  <Motion
    :animate="{ opacity: 1 }"
    :initial="{ opacity: 0 }"
    :transition="{ duration: 0.5, delay: 0.5 }"
    class="flex md:flex-col gap-4 md:gap-6 items-center justify-center"
  >
    <SocialLink
      :img="mailLogo"
      href="mailto:elucubrations.itooh@gmail.com"
      @mouseover="playNote"
      @focus="playNote"
      :aria-label="t('about.links.mail')"
    />
    <SocialLink
      v-for="item in items"
      :img="item.logo"
      :href="item.url"
      target="_blank"
      :key="item.key"
      @mouseover="playNote"
      @focus="playNote"
      :aria-label="t(`about.links.${item.key}`)"
    />
  </Motion>
</template>

<script setup lang="ts">
import SocialLink from "../atoms/SocialLink.vue";
import githubLogo from "@/assets/logos/github.png";
import itchLogo from "@/assets/logos/itch.png";
import linkedinLogo from "@/assets/logos/linkedin.png";
import mailLogo from "@/assets/logos/mail.png";
import soundcloudLogo from "@/assets/logos/soundcloud.png";
import mastodonLogo from "@/assets/logos/mastodon.png";
import youtubeLogo from "@/assets/logos/youtube.png";
import { Motion } from "motion/vue";
import { useInstruments } from "@/utils/conductor";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

interface SocialItem {
  key: string;
  logo: string;
  url: string;
}

const items: SocialItem[] = [
  {
    key: "github",
    logo: githubLogo,
    url: "https://github.com/ClementRivaille",
  },
  {
    key: "itch",
    logo: itchLogo,
    url: "https://itooh.itch.io/",
  },
  {
    key: "youtube",
    logo: youtubeLogo,
    url: "https://www.youtube.com/channel/UCsP7go1EC0-jQLDPgExIBEw",
  },
  {
    key: "mastodon",
    logo: mastodonLogo,
    url: "https://ludosphere.fr/@Itooh",
  },
  {
    key: "linkedin",
    logo: linkedinLogo,
    url: "https://www.linkedin.com/in/cl%C3%A9ment-rivaille-39424b51/",
  },
  {
    key: "soundcloud",
    logo: soundcloudLogo,
    url: "https://soundcloud.com/itooh-web",
  },
];

const instruments = useInstruments();
const playNote = () => {
  if (instruments) {
    instruments.playSynth();
  }
};
</script>
