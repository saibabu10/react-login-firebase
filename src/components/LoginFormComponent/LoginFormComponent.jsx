import React, { useState } from 'react';
import './LoginFormComponent.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="login-content">
          <h2 className='login-title'>Login Credentials</h2>
          <label className="login-label" htmlFor="username">
            Username
            <input 
              type='text'
              id="login-username"
              placeholder='Enter username...'
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </label>
          <label className="login-label"htmlFor="password">
            Password
            <input 
              type='password'
              id="login-password"
              placeholder='Enter password...'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
