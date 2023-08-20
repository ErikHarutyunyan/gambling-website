import { v4 as uuidv4 } from "uuid";
import {
  AgentsIcon,
  CasinoIcon,
  DashboardIcon,
  LogoutIcon,
  PlayerIcon,
  SecurityIcon,
  SportIcon,
  SuperAgentsIcon,
  TransferIcon,
} from "../Icons/Icons";
import {
  CASINO_BETS,
  CASINO_STATS,
  DASHBOARD,
  MY_PROFILE,
  SPORTS_BETS,
  SPORTS_STATS,
  SUPPER_AGENT,
  // TRANSACTIONS,
  // TRANSACTIONS_DEPOSIT,
  TRANSACTIONS_MANUAL_DEPOSIT,
  TRANSACTIONS_MANUAL_WITHDRAW,
  // TRANSACTIONS_WITHDRAW,
} from "../../router/route-path";
// import TokenService from "../../services/token.service";
import { roles } from "../../utils/utils";
// import { roleMemo, roles } from "../../utils/utils";

export const sidebarLinks = [
  {
    id: uuidv4(),
    name: "Dashboard",
    url: DASHBOARD,

    icon: <DashboardIcon />,
  },
  {
    id: uuidv4(),
    name: "Transactions",
    // url: TRANSACTIONS,
    icon: <TransferIcon />,

    children: [
      // {
      //   id: uuidv4(),
      //   name: "Withdraw Requests",
      //   url: TRANSACTIONS_WITHDRAW,
      // },
      // {
      //   id: uuidv4(),
      //   name: "Deposits Requests",
      //   url: TRANSACTIONS_DEPOSIT,
      // },
      {
        id: uuidv4(),
        name: "Manual Withdraw",
        url: TRANSACTIONS_MANUAL_WITHDRAW,
      },
      {
        id: uuidv4(),
        name: "Manual Deposit",
        url: TRANSACTIONS_MANUAL_DEPOSIT,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Super agents",
    checked: [roles.super_agent, roles.agent],
    url: SUPPER_AGENT,
    icon: <SuperAgentsIcon />,
  },
  {
    id: uuidv4(),
    name: "Agents",
    checked: [roles.agent],
    url: "/agents",
    icon: <AgentsIcon />,
  },
  {
    id: uuidv4(),
    name: "Players",
    url: "/players",

    icon: <PlayerIcon />,
  },
  {
    id: uuidv4(),
    name: "Sports",
    url: "/sports",
    icon: <SportIcon />,
    children: [
      {
        id: uuidv4(),
        name: "Stats",
        url: SPORTS_STATS,
      },
      {
        id: uuidv4(),
        name: "Bets list",
        url: SPORTS_BETS,
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Casino",
    url: "/casino",
    icon: <CasinoIcon />,
    children: [
      {
        id: uuidv4(),
        name: "Stats",
        url: CASINO_STATS,
      },
      {
        id: uuidv4(),
        name: "Bets list",
        url: CASINO_BETS,
      },
    ],
  },
];

export const footerLinks = [
  {
    id: uuidv4(),
    name: "My profile",
    url: MY_PROFILE,
    icon: <SecurityIcon />,
  },
  {
    id: uuidv4(),
    name: "Log out",
    url: "/logout",
    icon: <LogoutIcon />,
  },
];
