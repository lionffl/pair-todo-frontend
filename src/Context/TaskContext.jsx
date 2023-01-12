import React from 'react';
import endpoint from '../helpers/endpoints';
import fetchTasks from '../helpers/fetch';

export const TaskContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);
  const [hasFlash, setFlash] = React.useState(false);
  const [flashMsg, setFlashMsg] = React.useState('');

  React.useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks('get', endpoint.tasks);
      setTasks(data);
    };
    getTasks();
  }, []);

  React.useEffect(() => {
    let timer;
    if (hasFlash) {
      timer = setTimeout(() => {
        setFlash(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  const flash = (message) => {
    setFlash(true);
    setFlashMsg(message);
  };

  const globalState = React.useMemo(() => ({
    tasks,
    setTasks,
    hasFlash,
    setFlash,
    flash,
    flashMsg,
  }));

  return (
    <TaskContext.Provider value={globalState}>
      {children}
    </TaskContext.Provider>
  );
}
