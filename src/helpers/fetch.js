import axios from 'axios';

axios.defaults.xsrfCookieName = 'CSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

export const fetchTasks = async (method, url, _payload) => {
  try {
    const tasks = await axios({
      method,
      url,
      data: _payload,
      withCredentials: true,
    });
    return tasks.data;
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchUser = async (method, url, _payload) => {
  try {
    const user = await axios({
      method,
      url,
      data: _payload,
      withCredentials: true,
    });
    return user.data;
  } catch (err) {
    throw new Error(err);
  }
};
