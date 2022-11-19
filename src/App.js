import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Registration from "./pages/Registration"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-In" element={<Login />}/>
      <Route path="/sign-Up" element={<Registration />}/>
    </Routes>
  );
}

export default App;
