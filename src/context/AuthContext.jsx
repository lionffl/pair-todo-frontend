import React from 'react';
import { useNavigate } from 'react-router-dom';
import endpoint from '../helpers/endpoints';
import { fetchUser } from '../helpers/fetch';

export const AuthContext = React.createContext(null);

// eslint-disable-next-line react/prop-types
export default function TaskContextProvider({ children }) {
  const [user, setUser] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser('get', endpoint.auth.loggedIn);
      if (data.login) {
        setUser(data.username);
        navigate('/tasks');
      }
    };
    getUser();
  }, []);

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
