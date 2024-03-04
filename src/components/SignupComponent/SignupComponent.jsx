

import React from 'react'
import {Link} from 'react-router-dom'
function SignupComponent() {
  return (
    <div>
        <h1>Signup</h1>
        <form> 
            <label>First Name</label>
            <br/>
            <input type='text' placeholder='Enter the FirstName'/>
            <br/>
            <label>Last Name</label>
            <br/>
            <input type='text' placeholder='Enter the LastName'/>
            <br/>
            <label>Email</label>
            <br/>
            <input type='text' placeholder='Enter the Email'/>
            <br/>
            <label>Password</label>
            <br/>
            <input type='password' placeholder='Enter the Password'/>
            <br/>
            <label>Comfirm Password</label>
            <br/>
            <input type='password' placeholder='Enter the Confirm Password'/>
            <br/>
            Already have a Account? <Link to="/Login">Login</Link>
            <br/>
            <button>Signup</button>
        </form>
    </div>
  )
}

export default SignupComponent