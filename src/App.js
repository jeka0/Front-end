import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Home from './pages/Home';
import { Auth } from "./auth/authContext"
import AuthorizedRoute from './security/AuthorizedRoute';
import UnauthorizedRoute from './security/UnauthorizedRoute';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Auth>
      <UnauthorizedRoute>
        <Routes>
          <Route path="/*" element={<Navigate to="/sign-In"/>}/>
          <Route path="/sign-In" element={
            <Login />
          }/>
          <Route path="/sign-Up" element={
            <Registration />
          }/>
        </Routes>
      </UnauthorizedRoute>
      <AuthorizedRoute>
        <Routes>
        <Route path="/*" element={<Navigate to="/home"/>}/>
          <Route path="/post/:id" element={
              <SinglePost />
            }/>
          <Route path="/home" element={
              <Home />
            }/>
        </Routes>
      </AuthorizedRoute>
    </Auth>
  );
}

export default App;
