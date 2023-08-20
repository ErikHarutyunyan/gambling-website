import { CONTACT_US, HOME, NOTIFICATIONS } from "../../router/route-path";
import { v4  } from "uuid";
export const mainLinks = [
  // {
  //   id: v4(),
  //   name: "Home",
  //   url: HOME,
  // },
  {
    id: v4(),
    name: "Contact us",
    url: CONTACT_US,
  }
];