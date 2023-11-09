import React from "react";
import {
  // Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import PrivateRouter from './PrivateRouter'

import Layout from "../layout/Layout";
import {
  AGENTS,
  CREATE_PERSON_ID,
  DASHBOARD,
  EDIT_PERSON_ID,
  HOME,
  NOT_FOUND_PAGE,
  SUPPER_AGENT,
  TRANSACTIONS,
  TRANSACTIONS_DEPOSIT,
  TRANSACTIONS_MANUAL_DEPOSIT,
  TRANSACTIONS_MANUAL_WITHDRAW,
  TRANSACTIONS_WITHDRAW,
  VIEW_PERSON_ID,
  WALLET_PERSON_ID,
  PLAYERS,
  SPORTS,
  SPORTS_BETS,
  SPORTS_STATS,
  MY_PROFILE,
  CASINO,
  CASINO_STATS,
  CASINO_BETS
} from "./route-path";
// import TokenService from "../services/token.service";
// Pages
import {
  Dashboard,
  DepositsRequests,
  CreatePerson,
  WalletPerson,
  EditPerson,
  Home,
  ManualDeposit,
  ManualWithdraw,
  NotFoundPage,
  SuperAgents,
  WithdrawRequests,
  Agents,
  Players,
  ViewPerson,
  MyProfile,
  CasinoStats

} from "../pages";
import { SportsStats } from "../pages/Sports";
import PrivateRouter from "./PrivateRouter";

// const user = TokenService.getUser() || null;
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<Home />} />
      {/* <Route errorElement={<ErrorPage />}> */}
      <Route
        element={
          <PrivateRouter>
            <Layout />
          </PrivateRouter>
        }
      >
        <Route path={DASHBOARD} index element={<Dashboard />} />
        <Route path={TRANSACTIONS}>
          <Route path={TRANSACTIONS_WITHDRAW} element={<WithdrawRequests />} />
          <Route path={TRANSACTIONS_DEPOSIT} element={<DepositsRequests />} />

          <Route
            path={TRANSACTIONS_MANUAL_WITHDRAW}
            element={<ManualWithdraw />}
          />
          <Route
            path={TRANSACTIONS_MANUAL_DEPOSIT}
            element={<ManualDeposit />}
          />
        </Route>
        <Route path={CASINO}>
          <Route path={CASINO_STATS} element={<CasinoStats />} />
          {/* <Route path={CASINO_BETS} element={<CasinoStats />} /> */}
        </Route>
        <Route path={SUPPER_AGENT} element={<SuperAgents />} />
        <Route path={AGENTS} element={<Agents />} />
        <Route path={PLAYERS} element={<Players />} />
        <Route path={CREATE_PERSON_ID} element={<CreatePerson />} />
        <Route path={EDIT_PERSON_ID} element={<EditPerson />} />
        <Route path={WALLET_PERSON_ID} element={<WalletPerson />} />
        <Route path={VIEW_PERSON_ID} element={<ViewPerson />} />
        <Route path={SPORTS}>
          <Route path={SPORTS_STATS} element={<SportsStats />} />
          <Route path={SPORTS_BETS} element={<SportsStats />} />
        </Route>
        <Route path={MY_PROFILE} element={<MyProfile />} />
      </Route>

      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </>
  )
);

export default router;
