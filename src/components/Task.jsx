import React from 'react';
import PropTypes from 'prop-types';

// id: '1',
// description: 'Task 1 description',
// completed: false,

export default function Task({ task: { description } }) {
  return (
    <div className="task-container">
      <p
        className="task"
      >
        {description}

      </p>
      <button
        type="button"
        className="btn btn-task"
      >
        Done

      </button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};
