import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const useAuth = () => {
    let isConnected = useSelector((state) => state.user.auth.isLoggedIn);
    const user = { loggedIn: isConnected };
    return user && user.loggedIn;
  };

  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
