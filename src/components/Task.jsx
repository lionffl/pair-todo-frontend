/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskContext } from '../Context/TaskContext';

export default function Task({ task: { description, completed, id } }) {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleClick = ({ target: { id: _id, name: action } }) => {
    const buttons = {
      done: () => {
        const newTasks = [...tasks];
        newTasks.forEach((t) => {
          if (t.id === _id) {
            t.completed = !completed;
          }
        });
        setTasks(newTasks);
      },
      delete: () => {
        const newTasks = tasks.filter((t) => t.id !== id);
        setTasks(newTasks);
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
    id: PropTypes.string,
  }).isRequired,
};
