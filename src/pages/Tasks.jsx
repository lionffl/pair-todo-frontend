import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskMenu from '../components/TaskMenu';
import Flash from '../components/Flash';
import TasksList from '../components/TasksList';
import { AuthContext } from '../context/AuthContext';
import Nav from '../components/Nav';

export default function Tasks() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) navigate('/');
  }, [user]);

  return (
    <div className="App">
      <Nav user={user} />
      <Flash />
      <TaskMenu />
      <TasksList />
    </div>
  );
}
