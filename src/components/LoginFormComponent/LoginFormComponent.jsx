import React, { useState } from 'react';
import { database } from '/Users/saibabu/Desktop/html/react-credential-firebase/src/config/fire.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './LoginFormComponent.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = email;
    const checkPassword = password;
    createUserWithEmailAndPassword(database, checkEmail, checkPassword)
      .then(data => { console.log(data) });
  };

  return (
    <div>
      <form className='login-form' onSubmit={handleSubmit}>
        <div className="login-content">
          <h2 className='login-title'>Login Credentials</h2>
          <label className="login-label" htmlFor="email">
            Username
            <input
              type='text'
              id="login-email"
              placeholder='Enter email...'
              value={email}
              onChange={handleEmailChange} 
              required
            />
          </label>
          <label className="login-label" htmlFor="password">
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
