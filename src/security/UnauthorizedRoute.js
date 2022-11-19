import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from '../auth/useAuth.js';

function UnauthorizedRoute({ children }) {
  const { isAuth } = useAuth();

    return !isAuth? children: <Navigate to="/home"/>;
  }
  
  export default UnauthorizedRoute;