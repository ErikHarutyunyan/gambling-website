// import { PLAYER_PROFILE, FUND_IN_OUT, OUTSTANDING, TRANSACTIONS } from "../../router/route-path";
import { v4 } from "uuid";
import { LogoutIcon, PasswordIcon } from "../Icons/Icons";
// import { FundInOutIcon, LogoutIcon, OutstandingIcon, ProfileIcon, TransactionsIcon } from "../Icons/Icons";
export const playerLinks = [
  {
    id: v4(),
    name: "Password",
    url: "PASSWORD",
    icon: PasswordIcon(),
  },
  {
    id: v4(),
    name: "Log out",
    url: "",
    icon: LogoutIcon(),
  },
];
