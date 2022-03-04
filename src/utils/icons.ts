import drum from "@/assets/icons/drum.svg?inline";
import flute from "@/assets/icons/flute.svg?inline";
import piano from "@/assets/icons/piano.svg?inline";
import violin from "@/assets/icons/violin.svg?inline";
import water from "@/assets/icons/water.svg?inline";
import film from "@/assets/icons/film.svg?inline";
import user from "@/assets/icons/user.svg?inline";
import music from "@/assets/icons/music.svg?inline";
import puzzle from "@/assets/icons/puzzle.svg?inline";
import { VueElementConstructor } from "vue";

export enum IconsName {
  drum = "drum",
  flute = "flute",
  piano = "piano",
  violin = "violin",
  water = "water",
  film = "film",
  user = "user",
  music = "music",
  puzzle = "puzzle",
}

export type IconSize = "s" | "m" | "l" | "xl";

export const iconsMap: { [key in IconsName]: VueElementConstructor<any> } = {
  drum,
  flute,
  piano,
  violin,
  water,
  film,
  user,
  music,
  puzzle,
};
