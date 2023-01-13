import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <button
        type="button"
        onClick={() => navigate('/tasks')}
      >
        Go to Tasks

      </button>
      <button
        type="button"
        onClick={() => navigate('/register')}
      >
        Go to Register

      </button>
    </div>
  );
}
