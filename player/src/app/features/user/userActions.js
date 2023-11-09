import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TokenService from "../../../services/token.service";
import { API_ENDPOINT } from "../../../config/config";
import axiosInstance from "../../../services/axiosInstance";
import { logout, updateUserInfo } from "./userSlice";

export const userLogin = createAsyncThunk(
  "user/login",

  async ({ user_name, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API_ENDPOINT}sign-in`,
        { user_name, password },
        config
      );
      if (data.message.user.role !== 'player') {
        throw new Error("Can't login to dashboard ");
      }
      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)
      TokenService.setUser(data.message);

      return data.message;
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

export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}log-out`,
        config
      );
      dispatch(logout());
      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)

      return data;
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


export const changeMyProfile = createAsyncThunk(
  "user/changeMyProfile",
  async (person, { rejectWithValue, dispatch }) => {
    try {
 
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}user-profile-information-change`,
        person,
        config
      );
      // dispatch

      const user = TokenService.getUser();
      const newUser = { ...user.user, ...data.message.user };
      TokenService.updateUser(newUser);
      dispatch(updateUserInfo({ token: user.token, user: newUser }));
      return { message: "Change My Profile" };
    } catch (error) {
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (id, { rejectWithValue }) => {
    try {
      // configure authorization header with user's token
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}get-user-by-id`,
        {
          user_id: id,
        },
        config
      );

      return data.message?.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const changeBallance = createAsyncThunk(
  "user/changeBallance",
  async (id, { rejectWithValue }) => {
    try {
      
      // configure authorization header with user's token
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}get-user-by-id`,
        {
          user_id: id,
        },
        config
      );
      
      const user = TokenService.getUser();
      const newUser = { ...user.user, ...data.message.user };
      TokenService.updateUser(newUser);
      return data.message.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const getUsersByRole = createAsyncThunk(
  "user/getUsersByRole",
  async (role = "", { rejectWithValue, dispatch }) => {
    try {

      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${API_ENDPOINT}get-users-by-role`,
        { role },
        config
      );
      
      return data?.message?.users;
    } catch (error) {
      // return custom error message from API if any
      if (error?.response && error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
