import drum from "@/assets/icons/drum.svg?inline";
import flute from "@/assets/icons/flute.svg?inline";
import piano from "@/assets/icons/piano.svg?inline";
import violin from "@/assets/icons/violin.svg?inline";
import water from "@/assets/icons/water.svg?inline";
import { VueElementConstructor } from "vue";

export enum IconsName {
  drum = "drum",
  flute = "flute",
  piano = "piano",
  violin = "violin",
  water = "water",
}

export const iconsMap: { [key in IconsName]: VueElementConstructor<any> } = {
  drum,
  flute,
  piano,
  violin,
  water,
};
