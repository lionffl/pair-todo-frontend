import './App.css';
import React from 'react';
import TaskMenu from './components/TaskMenu';
import Task from './components/Task';

const tasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task 1 description',
    completed: false,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task 2 description',
    completed: false,
  },
];

function App() {
  return (
    <div className="App">
      <TaskMenu />
      {
        tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))
      }
    </div>
  );
}

export default App;
