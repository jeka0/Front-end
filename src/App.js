import React from 'react';
import { Auth } from "./auth/authContext"
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration"
import Home from './pages/Home';
import AuthorizedRoute from './security/AuthorizedRoute';
import UnauthorizedRoute from './security/UnauthorizedRoute';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Auth>
      <AuthorizedRoute>
        <Routes>
          <Route path="/post/:id" element={ <SinglePost /> }/>
          <Route exact path="/home" element={ <Home /> }/>
          <Route path="*" element={ <Navigate to="/home"/> }/>
        </Routes>
      </AuthorizedRoute>
      <UnauthorizedRoute>
        <Routes>
          <Route exact path="/sign-In" element={ <Login /> }/>
          <Route exact path="/sign-Up" element={ <Registration /> }/>
          <Route path="*" element={ <Navigate to="/sign-In"/> }/>
        </Routes>
      </UnauthorizedRoute>
    </Auth>
  );
}

export default App;
