import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Recover() {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <h1>Reset password</h1>
      <fieldset>
        <legend>New credentials</legend>
        <input
          placeholder="New password"
          type="password"
        />
        <input
          placeholder="Confirm new password"
          type="password"
        />
      </fieldset>
      <p className="login-new-user">
        Remembered?
        {' '}
        <Link to="/">Sign in</Link>
      </p>
      <button
        className="btn btn-login"
        type="button"
        onClick={() => navigate('/')}
      >
        Reset
      </button>
    </div>
  );
}
