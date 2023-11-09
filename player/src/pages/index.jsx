import Home from "./Home";
import About from "./About";

// Auth
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import ResetPassword from "./Auth/ResetPassword";
import ForgotPassword from "./Auth/ForgotPassword";

// import Withdraw from "./Withdraw";
// import Deposit from "./Deposit"

// PlayerProfile
import { Profile, FundInOut, Outstanding, Transactions } from "./PlayerProfile";
import Notifications from "./Notifications/";
import AgentList from "../components/AgentList";
import CallAgent from "./CallAgent";
import NotFoundPage from "./NotFoundPage/NotFoundPage.lazy";
import ErrorPage from "./ErrorPage";

import SingleGame from "../pages/SingleGame/SingleGame";
import GameList from "./GameLists/GameLists"
export {
  Home,
  About,
  Login,
  Register,
  ResetPassword,
  ForgotPassword,
  NotFoundPage,
  ErrorPage,
  Profile,
  FundInOut,
  Outstanding,
  Transactions,
  Notifications,
  AgentList,
  // Withdraw,
  // Deposit,
  CallAgent,
  SingleGame,
  GameList,
};
