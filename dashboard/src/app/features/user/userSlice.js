import { createSlice } from '@reduxjs/toolkit'
import { changeMyProfile, changeUserDetails, changeUserPass, coinTransfer, coinWithdraw, createAgent, createPlayer, createSuperAgent, getUserDetails, getUsersByRole, registerUser, userLogin } from './userActions'
import TokenService from "../../../services/token.service";
// initialize userToken from local storage

const userToken = TokenService.getLocalAccessToken() || null
const userInfo = TokenService.getUser() || null

const initialState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
  message: null,
  superAgents: [],
  agents:[],
  players:[],
  userDetails:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      TokenService.removeUser(); // delete token from storage
      state.loading = initialState.loading
      state.userInfo = null
      state.userToken = null
      state.error = initialState.error;
      state.message = initialState.message
      state.superAgents = initialState.superAgents;
      state.agents = initialState.agents;
      state.players = initialState.players;
    },
    setMessage:(state,{payload}) => {
      state.message = payload;
    },
    setError:(state,{payload}) => {
      state.error = payload;
    },
    updateUserInfo:(state,{payload}) => {
      state.userInfo = payload
    },
    resetUserDetails:(state,{payload}) => {
      state.userDetails = payload;
    }
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
      .addCase(createSuperAgent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSuperAgent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = "Create Super Agent";
      })
      .addCase(createSuperAgent.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createAgent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createAgent.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = "Create Agent";
      })
      .addCase(createAgent.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createPlayer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPlayer.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = "Create Player";
      })
      .addCase(createPlayer.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(changeUserPass.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUserPass.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
      })
      .addCase(changeUserPass.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        // registration successful
        state.success = true;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
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
      .addCase(getUsersByRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersByRole.fulfilled, (state, { payload }) => {
        state.loading = false;
        state[payload.role] = payload.users;
      })
      .addCase(getUsersByRole.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(coinTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(coinTransfer.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
      })
      .addCase(coinTransfer.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(coinWithdraw.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(coinWithdraw.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.message;
      })
      .addCase(coinWithdraw.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(changeUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUserDetails.fulfilled, (state, { payload }) => {
        debugger;
        state.loading = false;
        state.message = payload.message;
      })
      .addCase(changeUserDetails.rejected, (state, { payload }) => {
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
      });

  },
})

export const { logout, setMessage, setError, updateUserInfo, resetUserDetails } =
  userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer
