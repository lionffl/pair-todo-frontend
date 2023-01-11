import React, { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

// id: '1',
// description: 'Task 1 description',
// completed: false,

export default function TaskMenu() {
  const [inputTaskValue, setInputTaskValue] = useState('');

  const {
    tasks,
    setTasks,
    flash,
    setFlash,
  } = useContext(TaskContext);

  const handleChange = (event) => setInputTaskValue(event.target.value);

  const handleClick = () => {
    if (inputTaskValue) {
      const newTasks = [...tasks];
      const nextIndex = +tasks[tasks.length - 1].id + 1;
      const newTask = {
        id: nextIndex,
        description: inputTaskValue,
        completed: false,
      };
      setTasks([...newTasks, newTask]);
      setFlash(false);
    } else flash('Please, provide a task description');
  };

  return (
    <div className="main">

      <div className="input-task-container">
        <input
          type="text"
          placeholder="Task"
          onChange={handleChange}
          value={inputTaskValue}
        />
      </div>
      <div className="btn-task-add-container">
        <button
          type="button"
          className="btn btn-add"
          onClick={handleClick}
        >
          Add task

        </button>
      </div>
    </div>
  );
}
