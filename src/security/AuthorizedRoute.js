import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../auth/useAuth.js';

function AuthorizedRoute({ children }) {
  const { isAuth } = useAuth();

    return isAuth? children: <Navigate to="/sign-In"/>;
  }
  
  export default AuthorizedRoute;