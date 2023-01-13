import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App;
