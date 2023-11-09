import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import TokenService from '../../../services/token.service'
import { API_ENDPOINT } from '../../../config/config'
import axiosInstance from '../../../services/axiosInstance';
import { logout, updateUserInfo } from './userSlice';
import { roles } from '../../../utils/utils';

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

      if(data.message.user.role === roles.player) {
        throw new Error("Player can't login to dashboard ");
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
  async (_, { rejectWithValue,dispatch }) => {
    
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

export const registerUser = createAsyncThunk(
  'user/register',
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      await axios.post(
        ' /api/user/register',
        { firstName, email, password },
        config
      )
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const createSuperAgent = createAsyncThunk(
  "user/createSuperAgent",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      
      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}admin/create-super-agent`,
        person,
        config
      );
      return data;
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

export const createAgent = createAsyncThunk(
  "user/createAgent",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}super-agent/create-agent`,
        person,
        config
      );

      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)

      return data;
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
export const createPlayer = createAsyncThunk(
  "user/createPlayer",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}agent/create-player`,
        person,
        config
      );
      return data;
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

export const changeUserDetails = createAsyncThunk(
  "user/changeUserDetails",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      await axiosInstance.post(
        `${API_ENDPOINT}user-profile-information-change`,
        person,
        config
      );
      dispatch(getUserDetails(person.user_id));
      return { message: "Change Done" };
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

export const changeMyProfile = createAsyncThunk(
  "user/changeMyProfile",
  async (person, { rejectWithValue, dispatch }) => {
    try {
      debugger;
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
      dispatch(updateUserInfo({token:user.token, user:newUser}));
      return {message: "Change My Profile"};
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
export const getUsersByRole = createAsyncThunk(
  "user/getUsersByRole",
  async (role="", { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}get-users-by-role`,
        { role },
        config
      );
      let roleIdentification = role === "super_agent" ? 'superAgents' : role === 'agent' ? 'agents' : 'players'
      return { users: data.message.users, role: roleIdentification };
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



export const changeUserPass = createAsyncThunk(
  "user/changeUserInfo",
  async (passwords, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}user/update-password`,
        passwords,
        config
      );
      return data;
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


export const sendWallet = createAsyncThunk(
  "user/sendWallet",
  async (balance, { rejectWithValue, dispatch }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}coin-transfer`,
        balance,
        config
      );
      return data;
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
  'user/getUserDetails',
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
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserAgents = createAsyncThunk(
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
        `${API_ENDPOINT}super-agent/get-agents`,
        {
          user_id: id,
        },
        config
      );
      return data[0];
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const coinTransfer = createAsyncThunk(
  "user/coinTransfer",
  async (balance, { rejectWithValue,dispatch }) => {
    
 
    try {
      // configure authorization header with user's token
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}coin-transfer`,
        balance.balance,
        config
      );
      if (data.message)  {

        const userBalance = TokenService.getUserBalance();
        const newBalance = balance.switchFlag
          ? userBalance - balance.balance.amount
          : userBalance + balance.balance.amount;
        const updateBalance = TokenService.updateUserBalance(newBalance);
    
        dispatch(updateUserInfo(updateBalance));
        return balance.message
      }
      if(!data.message) {
        throw new Error("Failed")
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const coinWithdraw = createAsyncThunk(
  "user/coinWithdraw",
  async (balance, { rejectWithValue, dispatch }) => {
    try {
      // configure authorization header with user's token
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}coin-withdrawl`,
        balance.balance,
        config
      );
      if (data.message) {
        const userBalance = TokenService.getUserBalance();
        const newBalance = balance.switchFlag
          ? userBalance - balance.balance.amount
          : userBalance + balance.balance.amount;
        const updateBalance = TokenService.updateUserBalance(newBalance);

        dispatch(updateUserInfo(updateBalance));
        return balance.message;
      }
      if (!data.message) {
        throw new Error("Failed");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
