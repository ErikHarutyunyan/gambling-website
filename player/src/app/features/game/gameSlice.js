import { createSlice } from '@reduxjs/toolkit'
import { getCasinoList, getGameDate, getGameList, getGameListPopular, getOtherGameList } from './gameActions';
const initialState = {
  loading: false,
  error: null,
  message: "",
  gameList: null,
  gamePopularList: null,
  casinoList: null,
  otherGameList: null,
  gameDate:null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {

    resetErrorGame:(state) => {
      state.error = null
    }
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
        debugger
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { resetErrorGame } = gameSlice.actions;

export const selectGame = (state) => state.game;

export default gameSlice.reducer
