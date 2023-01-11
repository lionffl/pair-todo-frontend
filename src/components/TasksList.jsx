import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../Context/TaskContext';

export default function TasksList() {
  const { tasks } = useContext(TaskContext);
  return (
    <>
      {
      tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))
    }
    </>
  );
}