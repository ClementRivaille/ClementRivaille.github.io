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
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/echoes-traveler",
    },
    {
      key: "colorful-grid",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/one-colorful-grid",
    },
    {
      key: "hells-vignette",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/hell-vignette",
    },
    {
      key: "desert-vroom",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/desert-vroom-2021",
    },
    {
      key: "octave",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/in-octave",
    },
    {
      key: "sampler",
      img: "https://placekitten.com/g/300/300",
      link: "https://github.com/ClementRivaille/godot-simple-sampler",
    },
  ],
  [ContentCategory.music]: [
    {
      key: "colors-universe",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/colors-of-the-universe",
    },
    {
      key: "echo-night",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/echo-sings-at-night",
    },
    {
      key: "bazza-nava",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/bazza-nava",
    },
    {
      key: "joy-phases",
      img: "https://placekitten.com/g/300/300",
      link: "https://clementrivaille.github.io/joy-phases/",
    },
    {
      key: "blood-not-allowed",
      img: "https://placekitten.com/g/300/300",
      link: "https://itooh.itch.io/blood-not-allowed",
    },
    {
      key: "orchestre-js",
      img: "https://placekitten.com/g/300/300",
      link: "https://clementrivaille.github.io/orchestre-js/",
    },
  ],
  [ContentCategory.videos]: [
    {
      key: "traversees",
      img: "https://placekitten.com/g/300/300",
      link: "https://www.youtube.com/watch?v=KASCk-cPSdE&list=PLBL06fBaMpRNfU2MFLK2tBW_IiKylK0nK",
    },
    {
      key: "side-web",
      img: "https://placekitten.com/g/300/300",
      link: "https://www.youtube.com/watch?v=DUB6eN1G1VQ&list=PLBL06fBaMpRNBPlXwaLkQTVzIBOEIpckf",
    },
    {
      key: "art-random",
      img: "https://placekitten.com/g/300/300",
      link: "https://www.youtube.com/watch?v=8ZjwHW8Ifwo",
    },
    {
      key: "horribles",
      img: "https://placekitten.com/g/300/300",
      link: "https://youtu.be/0o84IzSAFqQ",
    },
  ],
};
