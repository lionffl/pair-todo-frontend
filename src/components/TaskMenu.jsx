import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import endpoint from '../helpers/endpoints';
import fetchTasks from '../helpers/fetch';

export default function TaskMenu() {
  const [inputTaskValue, setInputTaskValue] = useState('');

  const {
    flash,
    setTasks,
  } = useContext(TaskContext);

  const handleChange = (event) => setInputTaskValue(event.target.value);

  const handleClick = async () => {
    if (inputTaskValue) {
      const newTask = { description: inputTaskValue, completed: false };
      const data = await fetchTasks('post', endpoint.tasks, newTask);
      setTasks(data);
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
