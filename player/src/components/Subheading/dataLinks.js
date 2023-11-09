import { FishingIcon, LiveCasinoIcon, LiveSportbookIcon, SlotsIcon, TablesIcon } from "../Icons/Icons";
import { v4 } from "uuid";
export const dataLinks = [
  {
    id: v4(),
    url: "/games/sports",
    icon: LiveSportbookIcon(),
    name: "Sports",
  },
  {
    id: v4(),
    url: "/games/casino",
    icon: LiveCasinoIcon(),
    name: "Casino",
  },
  {
    id: v4(),
    url: "/games/tables",
    icon: TablesIcon(),
    name: "Tables",
  },
  {
    id: v4(),
    url: "/games/slots",
    icon: SlotsIcon(),
    name: "Slots",
  },
  {
    id: v4(),
    url: "/games/fishing",
    icon: FishingIcon(),
    name: "Fishing",
  },
];
