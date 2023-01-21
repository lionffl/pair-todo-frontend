import React from 'react';

export const TaskContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function TaskContextProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);

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
