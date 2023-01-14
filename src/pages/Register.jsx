import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="auth-container">
      <h1>Sign up</h1>
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
        <input
          placeholder="Confirm password"
          type="password"
        />
      </fieldset>
      <fieldset>
        <legend>Recover</legend>
        <input
          placeholder="Secret question"
          type="text"
        />
        <input
          placeholder="Secret answer"
          type="password"
        />
      </fieldset>
      <p className="login-new-user">
        Already registred?
        {' '}
        <Link to="/">Sign in</Link>
      </p>
      <button
        className="btn btn-login"
        type="button"
      >
        Sign up
      </button>
    </div>
  );
}
