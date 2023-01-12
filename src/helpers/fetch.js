import axios from 'axios';

const fetchTasks = async (method, url, _payload) => {
  try {
    const tasks = await axios({
      method,
      url,
      data: _payload,
    });
    return tasks.data;
  } catch (err) {
    throw new Error(err);
  }
};

export default fetchTasks;
