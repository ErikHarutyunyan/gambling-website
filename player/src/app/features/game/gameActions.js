import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_ENDPOINT } from '../../../config/config'
import axiosInstance from '../../../services/axiosInstance';

export const getGameList = createAsyncThunk(
  "game/getGameList",

  async ({ page = 4, size = 18 }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `${API_ENDPOINT}game-hub/get-games-list?page=${page}&size=${size}`,
        config
      );
      if (data?.message) {
        return data.message;
      }
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getGameListPopular = createAsyncThunk(
  "game/getGameListPopular",

  async ({ page = 4, size = 18 }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `${API_ENDPOINT}game-hub/get-games-list?page=${page}&size=${size}`,
        config
      );
      if (data?.message) {
        return data.message;
      }
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



export const getCasinoList = createAsyncThunk(
  "game/getCasinoList",

  async ({ page = 4, size=18 }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `${API_ENDPOINT}game-hub/get-games-list?page=${page}&size=${size}`,
        config
      );
      if (data?.message) {
        return data.message;
      }
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getOtherGameList = createAsyncThunk(
  "game/getOtherGameList",

  async ({ page = 4, size = 18 }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `${API_ENDPOINT}game-hub/get-games-list?page=${page}&size=${size}`,
        config
      );
      if (data?.message) {
        return data.message;
      }
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getGameDate = createAsyncThunk(
  "game/getGameDate",

  async (id, { rejectWithValue }) => {
    debugger
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}game-hub/get-game`,
        { game_id: id },
        config
      );
     if(data.game.error) {
      throw new Error(data.game.message);
     }
        return data;
      
    } catch (error) {
    console.log('error :', error);

      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);