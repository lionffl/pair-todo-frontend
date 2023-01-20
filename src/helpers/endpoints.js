const endpoint = {
  tasks: process.env.REACT_APP_BACKEND_TASK,
  register: process.env.REACT_APP_REGISTER,
  auth: {
    loggedIn: process.env.REACT_APP_BACKEND_LOGGED,
    login: process.env.REACT_APP_BACKEND_LOGIN,
    logout: process.env.REACT_APP_BACKEND_LOGOUT,
  },
};

export default endpoint;
