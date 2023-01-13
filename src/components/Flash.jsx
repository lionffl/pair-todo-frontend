import React from 'react';
import { TaskContext } from '../context/TaskContext';

export default function Flash() {
  const { hasFlash, flashMsg } = React.useContext(TaskContext);

  return (
    <div
      className="alert"
      hidden={!hasFlash}
    >
      <p className="flash-msg">{flashMsg}</p>
    </div>
  );
}
