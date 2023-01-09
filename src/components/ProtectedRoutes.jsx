import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

  const getToken = localStorage.getItem('token')

  if (getToken) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }

};

export default ProtectedRoutes;
