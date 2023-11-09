import { createSlice } from '@reduxjs/toolkit'
import { getCasinoList, getGameDate, getGameFiltered, getGameList, getGameListPopular, getGameListPopularSports, getOtherGameList } from './gameActions';
const initialState = {
  loading: false,
  error: null,
  message: "",
  gameList: null,
  gamePopularList: null,
  casinoList: null,
  otherGameList: null,
  getPopularSports:null,
  gameDate: null,
  gameTypes: {
    all: [
    "livecasino",
    "poker",
    "virtual-sports",
    "sportsbook",
    "live-casino-table",
    "video-slots",
    "table-games",
    "video-poker",
    "virtual-games",
    "scratch-cards",
    "video-bingo",
    "tournaments",
    "livegames",
    "crash-game",
    "fast-games",
  ],
  sports: ["sportsbook", "virtual-sports"],
  casino: ["livecasino", "tournaments", "livegames"],
  tables: [
    "table-games",
    "live-casino-table",
    "poker",
    "video-poker",
    "video-bingo",
  ],
  slots: ["video-slots"],
  fishing: ["virtual-games", "scratch-cards", "crash-game", "fast-games"],
  },
  gameFiltered:{},
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetErrorGame: (state) => {
      state.error = null;
    },
    resetGameFilter: (state) => {
      state.gameFiltered = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGameList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGameList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.gameList = payload;
      })
      .addCase(getGameList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getGameListPopular.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGameListPopular.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.gamePopularList = payload;
      })
      .addCase(getGameListPopular.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getGameListPopularSports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGameListPopularSports.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.getPopularSports = payload;
      })
      .addCase(getGameListPopularSports.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getCasinoList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCasinoList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.casinoList = payload;
      })
      .addCase(getCasinoList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getOtherGameList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOtherGameList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.otherGameList = payload;
      })
      .addCase(getOtherGameList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getGameDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGameDate.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.gameDate = payload;
      })
      .addCase(getGameDate.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getGameFiltered.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGameFiltered.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.gameFiltered = payload;
      })
      .addCase(getGameFiltered.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetErrorGame, resetGameFilter } = gameSlice.actions;

export const selectGame = (state) => state.game;

export default gameSlice.reducer
