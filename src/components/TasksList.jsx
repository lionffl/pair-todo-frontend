import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/TaskContext';

export default function TasksList() {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      {
      tasks
        ? tasks.map((task) => (
          <Task key={task.id} task={task} />
        )) : null
    }
    </div>
  );
}
