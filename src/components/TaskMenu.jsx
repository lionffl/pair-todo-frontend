import React from 'react';

export default function TaskMenu() {
  return (
    <div className="main">

      <div className="input-task-container">
        <input
          type="text"
          placeholder="Task"
        />
      </div>
      <div className="btn-task-container">
        <button
          type="button"
          className="btn btn-add"
        >
          Add task

        </button>
      </div>
    </div>
  );
}
