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

  React.useEffect(() => {
    setTasks(seed);
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
