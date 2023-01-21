import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskMenu from '../components/TaskMenu';
import Flash from '../components/Flash';
import TasksList from '../components/TasksList';
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';
import Nav from '../components/Nav';
import endpoint from '../helpers/endpoints';
import { fetchTasks } from '../helpers/fetch';

export default function Tasks() {
  const { user } = useContext(AuthContext);
  const { setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user.id) navigate('/');
  }, [user]);

  React.useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks('get', endpoint.tasks);
      setTasks(data);
    };
    getTasks();
    const interval = setInterval(getTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Nav user={user} />
      <Flash />
      <TaskMenu />
      <TasksList />
    </div>
  );
}
