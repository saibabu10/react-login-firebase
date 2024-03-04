

import React from 'react'
import {Link} from 'react-router-dom'
function LoginComponent() {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <label>Email</label>
            <br/>
            <input type='text' placeholder='Enter the Email'/>
            <br/>
            <label>Password</label>
            <br/>
            <input type='password' placeholder='Enter the Password'/>
            <br/>
            Already have a Account? <Link to="/Signup">Signup</Link>
            <br/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default LoginComponent