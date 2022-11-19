import React from 'react';
import { Routes, Route } from "react-router-dom";
import Base from './pages/Base';
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Home from './pages/Home';
import { Auth } from "./auth/authContext"
import AuthorizedRoute from './security/AuthorizedRoute';
import UnauthorizedRoute from './security/UnauthorizedRoute';

function App() {
  return (
    <Auth>
      <Routes>
        <Route path="/" element={
          <UnauthorizedRoute>
            <Base />
          </UnauthorizedRoute>
        }/>
        <Route path="/sign-In" element={
          <UnauthorizedRoute>
            <Login />
          </UnauthorizedRoute>
        }/>
        <Route path="/sign-Up" element={
          <UnauthorizedRoute>
            <Registration />
          </UnauthorizedRoute>
        }/>
        <Route path="/home" element={
          <AuthorizedRoute>
            <Home />
          </AuthorizedRoute>
        }/>
      </Routes>
    </Auth>
  );
}

export default App;
