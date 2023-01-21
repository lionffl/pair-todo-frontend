import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchUser } from '../helpers/fetch';
import endpoint from '../helpers/endpoints';
import { AuthContext } from '../context/AuthContext';
import { TaskContext } from '../context/TaskContext';

export default function Nav({ user }) {
  const { setUser } = useContext(AuthContext);
  const { setTasks } = useContext(TaskContext);
  const handleClick = async () => {
    await fetchUser('delete', endpoint.auth.logout);
    setUser({});
    setTasks([]);
  };
  return (
    <div className="nav-container">
      <span>
        Hello,
        {' '}
        {user.username}
        !
      </span>
      <button
        className="btn btn-logout btn-small"
        onClick={handleClick}
        type="button"
      >
        Logout

      </button>
    </div>
  );
}

Nav.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }).isRequired,
};
