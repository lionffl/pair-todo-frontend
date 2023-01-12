import axios from 'axios';

const fetchTasks = async (method, url, _payload) => {
  try {
    const tasks = await axios({
      headers: { 'Access-Control-Allow-Origin': 'https://sage-dragon-5c5b26.netlify.app' },
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
