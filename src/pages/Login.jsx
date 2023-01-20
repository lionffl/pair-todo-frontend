import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navToTasks = useNavigate();
  return (
    <div className="auth-container">
      <h1>Sign in</h1>
      <br />
      <br />
      <fieldset>
        <legend>Credentials</legend>
        <input
          placeholder="Login"
          type="text"
        />
        <input
          placeholder="Password"
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
        type="button"
        onClick={() => navToTasks('/tasks')}
      >
        Sign in
      </button>
      <p className="forget">
        Forgot your password?
        {' '}
        <Link to="/recover">Recover</Link>
      </p>
    </div>
  );
}
