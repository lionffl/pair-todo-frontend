import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Recover() {
  const navigate = useNavigate();
  return (
    <div className="auth-container">
      <h1>Recover</h1>
      <fieldset>
        <p>Question?</p>
        <input
          placeholder="Secret answer"
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
        onClick={() => navigate('/reset')}
      >
        Recover
      </button>
    </div>
  );
}
