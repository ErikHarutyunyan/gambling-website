import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import TokenService from './services/token.service';
import { useDispatch } from 'react-redux';
import { userLogout } from './app/features/user/userActions';
import jwt_decode from "jwt-decode";

function App() {

  let authTokens = TokenService.getUser() || "";
  const dispatch = useDispatch();
  if (authTokens) {
    const user = jwt_decode(authTokens.token);
    const isExpired = new Date(user?.exp * 1000) - Date.now() < 1;
    isExpired && dispatch(userLogout());
  }
  return (
    <>
      <RouterProvider router={router}/>  
    </>
  );
}

export default App;
