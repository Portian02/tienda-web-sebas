import React from "react";
import useAuth from "../../hooks/useAuth";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { auth } = useAuth();

  // ESTE OUTLE SUSTITUYE LAS PÁGINA PRIVADAS HOME AND PERFIL 
  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
