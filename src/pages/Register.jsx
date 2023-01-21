import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Flash from '../components/Flash';
import endpoint from '../helpers/endpoints';
import { fetchUser } from '../helpers/fetch';
import { AuthContext } from '../context/AuthContext';
import { FlashContext } from '../context/FlashContext';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [secretQuestion, setSecretQuestion] = useState('');
  const [secretAnswer, setSecretAnswer] = useState('');
  const { setUser } = useContext(AuthContext);
  const { flash } = useContext(FlashContext);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value, name: type } = target;
    const inputs = new Map();
    inputs.set('username', () => setUsername(value));
    inputs.set('password', () => setPassword(value));
    inputs.set('passwordConfirmation', () => setPasswordConfirmation(value));
    inputs.set('secretQuestion', () => setSecretQuestion(value));
    inputs.set('secretAnswer', () => setSecretAnswer(value));
    inputs.get(type)();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      user: {
        username,
        password,
        password_confirmation: passwordConfirmation,
        secret_question: secretQuestion,
        secret_answer: secretAnswer,
      },
    };

    const data = await fetchUser('post', endpoint.register, payload);
    if (data.success) {
      setUser({ id: data.id, username: data.username });
      navigate('/tasks');
    } else {
      for (let i = 0; i < data.messages.length; i += 1) {
        flash(data.messages[i]);
      }
    }
  };

  return (
    <>
      <Flash />
      <form onSubmit={handleSubmit} className="auth-container">
        <h1>Sign up</h1>
        <fieldset>
          <legend>Credentials</legend>
          <input
            placeholder="Login"
            type="text"
            autoComplete="off"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <input
            placeholder="Password confirmation"
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <legend>Recover</legend>
          <input
            placeholder="Secret question"
            type="text"
            autoComplete="off"
            name="secretQuestion"
            value={secretQuestion}
            onChange={handleChange}
          />
          <input
            placeholder="Secret answer"
            type="password"
            autoComplete="off"
            name="secretAnswer"
            value={secretAnswer}
            onChange={handleChange}
          />
        </fieldset>
        <p className="login-new-user">
          Already registred?
          {' '}
          <Link to="/">Sign in</Link>
        </p>
        <button
          className="btn btn-login"
          type="submit"
          disabled={!(username && password
            && passwordConfirmation && secretAnswer && secretQuestion)}
        >
          Sign up
        </button>
      </form>
    </>
  );
}
