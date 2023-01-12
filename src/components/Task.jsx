/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../Context/TaskContext';
import endpoint from '../helpers/endpoints';
import fetchTasks from '../helpers/fetch';

export default function Task({ task: { description, completed, id } }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleClick = ({ target: { id: _id, name: action } }) => {
    const url = `${endpoint.tasks}/${_id}`;
    const buttons = {
      done: async () => {
        let task = tasks.find((t) => t.id === +_id);
        const { id: _, ...rest } = task;
        task = { rest, completed: !completed };
        const updatedTasks = await fetchTasks('patch', url, task);
        setTasks(updatedTasks);
      },
      delete: async () => {
        const updatedTasks = await fetchTasks('delete', url);
        setTasks(updatedTasks);
      },
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
