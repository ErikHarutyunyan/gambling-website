import { PLAYER_PROFILE, FUND_IN_OUT, OUTSTANDING, TRANSACTIONS } from "../../router/route-path";
import { v4 } from "uuid";
import { FundInOutIcon, LogoutIcon, OutstandingIcon, ProfileIcon, TransactionsIcon } from "../Icons/Icons";
export const playerLinks = [
  {
    id: v4(),
    name: "Profile",
    url: PLAYER_PROFILE,
    icon: ProfileIcon(),
  },
  {
    id: v4(),
    name: "Fund In/Out",
    url: FUND_IN_OUT,
    icon: FundInOutIcon(),
  },
  {
    id: v4(),
    name: "Outstanding",
    url: OUTSTANDING,
    icon: OutstandingIcon(),
  },
  {
    id: v4(),
    name: "Transactions",
    url: TRANSACTIONS,
    icon: TransactionsIcon(),
  },
  {
    id: v4(),
    name: "Log out",
    url: "",
    icon: LogoutIcon(),
  },
];
