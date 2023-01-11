import React from 'react';

export const TaskContext = React.createContext(null);

const seed = [
  {
    id: '1',
    description: 'Task 1 description',
    completed: false,
  },
  {
    id: '2',
    description: 'Task 2 description',
    completed: false,
  },
];

// eslint-disable-next-line react/prop-types
export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);
  const [hasFlash, setFlash] = React.useState(false);
  const [flashMsg, setFlashMsg] = React.useState('');

  React.useEffect(() => {
    setTasks(seed);
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
