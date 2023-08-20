import axios from "axios";
import { API_ENDPOINT } from "../config/config";
import TokenService from "./token.service";
import jwt_decode from "jwt-decode";

const axiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let authTokens = TokenService.getUser() || "";

    const user = jwt_decode(authTokens.token);
    // 5 minute
    const isExpired = new Date(user.exp * 1000) - Date.now() < 3000000;
    if (authTokens) {
      config.headers["token"] = `${authTokens.token}`;
    }
    if (isExpired) {
      let config = {
        method: "post",
        url: `${API_ENDPOINT}refresh-token`,
        headers: {
          Accept: "application/json",
          token: `${authTokens.token}`,
        },
      };
      try {
        const response = await axios.request(config);
  
        const newToken = response.data.message;
        TokenService.setUser({
          ...authTokens,
          token: newToken.token,
        });
        
      } catch (error) {
        if(error.response.status === 401) {
          TokenService.removeUser()
          window.location.reload(false)
        
        }
      
         
      }

    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
