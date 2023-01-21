import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FlashContext } from '../context/FlashContext';
import endpoint from '../helpers/endpoints';
import { fetchUser } from '../helpers/fetch';
import Flash from '../components/Flash';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);
  const { flash } = useContext(FlashContext);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value, name: type } = target;
    const inputs = new Map();
    inputs.set('username', () => setUsername(value));
    inputs.set('password', () => setPassword(value));
    inputs.get(type)();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      user: {
        username, password,
      },
    };

    const data = await fetchUser('post', endpoint.auth.login, payload);
    if (data.login) {
      setUser({ id: data.id, username: data.username });
      navigate('/tasks');
    } else {
      flash(data.message);
    }
  };

  return (
    <>
      <Flash />
      <form onSubmit={handleSubmit} className="auth-container">
        <h1>Sign in</h1>
        <br />
        <br />
        <fieldset>
          <legend>Credentials</legend>
          <input
            placeholder="Login"
            value={username}
            onChange={handleChange}
            name="username"
            type="text"
            autoComplete="off"
          />
          <input
            placeholder="Password"
            value={password}
            onChange={handleChange}
            name="password"
            type="password"
          />
          <br />
          <p className="login-new-user">
            New user?
            {' '}
            <Link to="/signup">Sign up</Link>
          </p>
        </fieldset>
        <button
          className="btn btn-login"
          type="submit"
          disabled={!(password && username)}
        >
          Sign in
        </button>
        <p className="forget">
          Forgot your password?
          {' '}
          <Link to="/recover">Recover</Link>
        </p>
      </form>
    </>
  );
}
