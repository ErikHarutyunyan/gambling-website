import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import TokenService from "../services/token.service";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const user = TokenService.getUser() || false;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRouter;
