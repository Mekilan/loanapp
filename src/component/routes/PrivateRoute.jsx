import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { setAuthToken } from "../common/AxiosCreate";

const PrivateRoute = () => {
  let isAuthenticated = localStorage.getItem("email");
  let token = process.env.REACT_APP_API_AUTHKEY;
  setAuthToken(token);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
