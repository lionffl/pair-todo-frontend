import React from 'react';

export const AuthContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function TaskContextProvider({ children }) {
  const [user, setUser] = React.useState('');

  const globalState = React.useMemo(() => ({
    user,
    setUser,
  }));

  return (
    <AuthContext.Provider value={globalState}>
      {children}
    </AuthContext.Provider>
  );
}
