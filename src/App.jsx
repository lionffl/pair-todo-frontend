import './App.css';
import React, { useContext } from 'react';
import TaskMenu from './components/TaskMenu';
import Task from './components/Task';
import { TaskContext } from './Context/TaskContext';

function App() {
  const { tasks } = useContext(TaskContext);
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
