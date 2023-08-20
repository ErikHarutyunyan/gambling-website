import { FishingIcon, LiveCasinoIcon, LiveSportbookIcon, SlotsIcon } from "../Icons/Icons";
import { v4 } from "uuid";
export const dataLinks = [
  {
    id: v4(),
    url: "/sports",
    icon: LiveSportbookIcon() ,
    name: "Sports",
  },
  {
    id: v4(),
    url: "/casino",
    icon: LiveCasinoIcon(),
    name: "Casino",
  },
  {
    id: v4(),
    url: "/tables",
    icon: LiveCasinoIcon(),
    name: "Tables",
  },
  {
    id: v4(),
    url: "/slots",
    icon: SlotsIcon(),
    name: "Slots",
  },
  {
    id: v4(),
    url: "/fishing",
    icon: FishingIcon(),
    name: "Fishing",
  },
];
