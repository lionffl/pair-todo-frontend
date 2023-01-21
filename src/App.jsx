import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
// import Recover from './pages/Recover';
// import Reset from './pages/Reset';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/tasks" element={<Tasks />} />
      {/* <Route path="/recover" element={<Recover />} />
      <Route path="/reset" element={<Reset />} /> */}
    </Routes>
  );
}

export default App;
