import React from 'react'
import './RegisterFormComponent.css'
function RegisterForm() {
  return (
    <div>
        <form className='register-form'>
            <div className='register-content'>
          <h1>Registration Form</h1>
            <label>
                First Name
                <input type='text'/>
            </label>
            <label>
                Last Name
                <input type='text'/>
            </label>
            <label>
                Email
                <input type='email'/>
            </label>
            <label>
                Password<input type='password'/>
            </label>
            <label>
                Confirm Password
                <input type='password'/>
            </label>
          <div className='btn'> <button type='submit'>Register</button> </div>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm