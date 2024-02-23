import React, { useState } from 'react';
import './RegisterFormComponent.css';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Registering with:', { firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div>
      <form className='register-form' onSubmit={handleSubmit}>
        <div className='register-content'>
          <h1>Registration Form</h1>
          <label className="register-label" htmlFor="firstName">
            First Name
            <input 
              type='text'
              id="register-firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </label>
          <label className="register-label" htmlFor="lastName">
            Last Name
            <input 
              type='text'
              id="register-lastName"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </label>
          <label className="register-label" htmlFor="email">
            Email
            <input 
              type='email'
              id="register-email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <label className="register-label" htmlFor="password">
            Password
            <input 
              type='password'
              id="register-password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </label>
          <label className="register-label" htmlFor="confirmPassword">
            Confirm Password
            <input 
              type='password'
              id="register-confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </label>
          <div className='register-btn'>
            <button type='submit'>Register</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
