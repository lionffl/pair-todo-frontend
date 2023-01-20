import React from 'react';
import endpoint from '../helpers/endpoints';
import { fetchTasks } from '../helpers/fetch';

export const TaskContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks('get', endpoint.tasks);
      setTasks(data);
    };
    getTasks();
    const interval = setInterval(getTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  const globalState = React.useMemo(() => ({
    tasks,
    setTasks,
  }));

  return (
    <TaskContext.Provider value={globalState}>
      {children}
    </TaskContext.Provider>
  );
}
