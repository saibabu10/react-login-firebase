import React from 'react'
import './LoginFormComponent.css'
function LoginForm() {
  return (
    <div>
        <form className='login-form'>
          <div className="login-content">
          <div className='login-title'>Login Credential</div>
            <label>
                UserName
                <input type='text'/>
            </label>
            <label>
                Password
                <input type='password'/>
            </label>
            <label>
               <button type="submit">Login</button>
            </label>
            </div>
        </form>
    </div>
  )
}

export default LoginForm