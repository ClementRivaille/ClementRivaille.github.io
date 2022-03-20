import artRandomImg from "@/assets/img/art-random.png";
import bazzaNavaImg from "@/assets/img/bazza-nava.png";
import bloodNotAllowedImg from "../assets/img/blood-not-allowed.png";
import colorsUniverseImg from "@/assets/img/colors-universe.png";
import desertVroomImg from "@/assets/img/desert-vroom.png";
import echoSingsNightImg from "@/assets/img/echo-sings-night.png";
import echoesTravelerImg from "@/assets/img/echoes-traveler.png";
import hellsImg from "@/assets/img/hells.png";
import horriblesImg from "@/assets/img/horribles.png";
import joyPhasesImg from "@/assets/img/joy-phases.png";
import octaveImg from "@/assets/img/octave.png";
import oneColorfulGridImg from "@/assets/img/one-colorful-grid.png";
import orchestreJsImg from "@/assets/img/orchestre-js.png";
import sideWebImg from "@/assets/img/side-web.png";
import simpleSamplerImg from "@/assets/img/simple-sampler.png";
import traverseesImg from "@/assets/img/traversees.png";

export enum ContentCategory {
  games = "games",
  music = "music",
  videos = "videos",
}

export interface Content {
  key: string;
  img: string;
  link: string;
}

type Contents = { [key in ContentCategory]: Content[] };

export const contents: Contents = {
  [ContentCategory.games]: [
    {
      key: "echoes-traveler",
      img: echoesTravelerImg,
      link: "https://itooh.itch.io/echoes-traveler",
    },
    {
      key: "colorful-grid",
      img: oneColorfulGridImg,
      link: "https://itooh.itch.io/one-colorful-grid",
    },
    {
      key: "hells-vignette",
      img: hellsImg,
      link: "https://itooh.itch.io/hell-vignette",
    },
    {
      key: "desert-vroom",
      img: desertVroomImg,
      link: "https://itooh.itch.io/desert-vroom-2021",
    },
    {
      key: "octave",
      img: octaveImg,
      link: "https://itooh.itch.io/in-octave",
    },
    {
      key: "sampler",
      img: simpleSamplerImg,
      link: "https://github.com/ClementRivaille/godot-simple-sampler",
    },
  ],
  [ContentCategory.music]: [
    {
      key: "colors-universe",
      img: colorsUniverseImg,
      link: "https://itooh.itch.io/colors-of-the-universe",
    },
    {
      key: "echo-night",
      img: echoSingsNightImg,
      link: "https://itooh.itch.io/echo-sings-at-night",
    },
    {
      key: "bazza-nava",
      img: bazzaNavaImg,
      link: "https://itooh.itch.io/bazza-nava",
    },
    {
      key: "joy-phases",
      img: joyPhasesImg,
      link: "https://clementrivaille.github.io/joy-phases/",
    },
    {
      key: "blood-not-allowed",
      img: bloodNotAllowedImg,
      link: "https://itooh.itch.io/blood-not-allowed",
    },
    {
      key: "orchestre-js",
      img: orchestreJsImg,
      link: "https://clementrivaille.github.io/orchestre-js/",
    },
  ],
  [ContentCategory.videos]: [
    {
      key: "traversees",
      img: traverseesImg,
      link: "https://www.youtube.com/watch?v=KASCk-cPSdE&list=PLBL06fBaMpRNfU2MFLK2tBW_IiKylK0nK",
    },
    {
      key: "side-web",
      img: sideWebImg,
      link: "https://www.youtube.com/watch?v=DUB6eN1G1VQ&list=PLBL06fBaMpRNBPlXwaLkQTVzIBOEIpckf",
    },
    {
      key: "art-random",
      img: artRandomImg,
      link: "https://www.youtube.com/watch?v=8ZjwHW8Ifwo",
    },
    {
      key: "horribles",
      img: horriblesImg,
      link: "https://youtu.be/0o84IzSAFqQ",
    },
  ],
};

export const contentMainLinks: { [key in ContentCategory]: string } = {
  games: "https://itooh.itch.io",
  music: "https://itooh.itch.io",
  videos: "https://www.youtube.com/channel/UCsP7go1EC0-jQLDPgExIBEw",
};
