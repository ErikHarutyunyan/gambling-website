import { createSlice } from "@reduxjs/toolkit";
import {
  changeBallance,
  changeMyProfile,
  getUserDetails,
  getUsersByRole,
  userLogin,
} from "./userActions";
import TokenService from "../../../services/token.service";
// initialize userToken from local storage

const userToken = TokenService.getLocalAccessToken() || null;
const userInfo = TokenService.getUser() || null;

const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  message: null,
  agents:[],
  userDetails: null,
  loginModal:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      TokenService.removeUser(); // delete token from storage
      state.loading = initialState.loading;
      state.userInfo = null;
      state.userToken = null;
      state.error = initialState.error;
      state.message = initialState.message;
      state.agents = initialState.agents;
    },
    setMessage: (state, { payload }) => {
      state.message = payload;
    },
    setLoginModal:(state,{payload}) => {
      state.loginModal = payload
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    updateUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
    resetUserDetails: (state, { payload }) => {
      state.userDetails = payload;
    },
    resetAgent: (state, { payload }) => {
       state.agents = initialState.agents;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload.userToken;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.userDetails = payload;
      })
      .addCase(getUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(changeMyProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeMyProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
      })
      .addCase(changeMyProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getUsersByRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersByRole.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.agents = payload;
      })
      .addCase(getUsersByRole.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(changeBallance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeBallance.fulfilled, (state, {payload}) => {
        
        state.loading = false;
        state.userInfo.user = payload;
      })
      .addCase(changeBallance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {
  logout,
  setMessage,
  setError,
  updateUserInfo,
  resetUserDetails,
  resetAgent,
  setLoginModal,
} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
