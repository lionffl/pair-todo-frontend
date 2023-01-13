import React from 'react';
import TaskMenu from '../components/TaskMenu';
import Flash from '../components/Flash';
import TasksList from '../components/TasksList';

export default function Tasks() {
  return (
    <div className="App">
      <Flash />
      <TaskMenu />
      <TasksList />
    </div>
  );
}
