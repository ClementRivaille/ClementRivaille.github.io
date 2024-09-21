import artRandomImg from "@/assets/img/art-random.png";
import bazzaNavaImg from "@/assets/img/bazza-nava.png";
import bloodNotAllowedImg from "../assets/img/blood-not-allowed.png";
import colorsUniverseImg from "@/assets/img/colors-universe.png";
import lastPointImg from "@/assets/img/last-point.png";
import lineMomentumImg from "@/assets/img/line-momentum.png";
import echoSingsNightImg from "@/assets/img/echo-sings-night.png";
import echoesTravelerImg from "@/assets/img/echoes-traveler.png";
import horriblesImg from "@/assets/img/horribles.png";
import web3Img from "@/assets/img/web3.png";
import octaveImg from "@/assets/img/octave.png";
import orchestreJsImg from "@/assets/img/orchestre-js.png";
import springsBalletImg from "@/assets/img/springs-ballet.png";
import sideWebImg from "@/assets/img/side-web.png";
import anodyneImg from "@/assets/img/anodyne.png";
import simpleSamplerImg from "@/assets/img/simple-sampler.png";
import traverseesImg from "@/assets/img/traversees.png";
import soundHorizonsImg from "@/assets/img/sound-horizons.png";

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
      key: "sound-horizons",
      img: soundHorizonsImg,
      link: "https://store.steampowered.com/app/3032080/Sound_Horizons/",
    },
    {
      key: "line-momentum",
      img: lineMomentumImg,
      link: "https://itooh.itch.io/line-momentum",
    },
    {
      key: "last-point",
      img: lastPointImg,
      link: "https://itooh.itch.io/last-point",
    },
    {
      key: "echoes-traveler",
      img: echoesTravelerImg,
      link: "https://itooh.itch.io/echoes-traveler",
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
      key: "springs-ballet",
      img: springsBalletImg,
      link: "https://itooh.itch.io/springs-ballet",
    },
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
      key: "web3",
      img: web3Img,
      link: "https://www.youtube.com/watch?v=h7UbytKttEA",
    },
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
      key: "anodyne",
      img: anodyneImg,
      link: "https://www.youtube.com/watch?v=N--qJBYm-9A",
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
  videos: "https://www.youtube.com/@itooh-gamedev",
};
