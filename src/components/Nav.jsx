import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { fetchUser } from '../helpers/fetch';
import endpoint from '../helpers/endpoints';
import { AuthContext } from '../context/AuthContext';

export default function Nav({ user }) {
  const { setUser } = useContext(AuthContext);
  const handleClick = async () => {
    await fetchUser('delete', endpoint.auth.logout);
    setUser('');
  };
  return (
    <div className="nav-container">
      <span>
        Hello,
        {' '}
        {user}
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
  user: PropTypes.string.isRequired,
};
