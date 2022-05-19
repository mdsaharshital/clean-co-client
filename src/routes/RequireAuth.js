import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "./../firebase.init";

const RequireAuth = () => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <p>Loading....</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default RequireAuth;
