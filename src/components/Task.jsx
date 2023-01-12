/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { TaskContext } from '../Context/TaskContext';

export default function Task({ task: { description, completed, id } }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleClick = ({ target: { id: _id, name: action } }) => {
    const buttons = {
      done: () => {
        const task = tasks.find((t) => t.id === +_id);
        const { id: _, ...rest } = task;
        const updatedTask = { rest, completed: !completed };
        axios.patch(`http://localhost:3000/tasks/${_id}`, updatedTask).then((response) => setTasks(response.data));
      },
      delete: () => axios.delete(`http://localhost:3000/tasks/${_id}`).then((response) => setTasks(response.data)),
    };
    buttons[action]();
  };

  return (
    <div className="task-container">
      <p
        className="task"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {description}
      </p>
      <div className="btn-container">
        <button
          type="button"
          className="btn btn-task btn-add"
          name="done"
          onClick={handleClick}
          id={id}
        >
          {completed ? 'Unmark' : 'Done'}

        </button>
        <button
          type="button"
          className="btn btn-task btn-edit"
          name="edit"
          onClick={handleClick}
          id={id}
        >
          Edit

        </button>
        <button
          type="button"
          className="btn btn-task btn-del"
          name="delete"
          onClick={handleClick}
          id={id}
        >
          Delete

        </button>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    completed: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};
