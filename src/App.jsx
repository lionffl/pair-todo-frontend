import './App.css';
import React from 'react';
import TaskMenu from './components/TaskMenu';
import Flash from './components/Flash';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="App">
      <Flash />
      <TaskMenu />
      <TasksList />
    </div>
  );
}

export default App;
