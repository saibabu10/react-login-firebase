import React from 'react'
import {Link} from 'react-router-dom'
function HomeComponent() {
  return (
    <div>
        <div>
            <h1>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
            </h1>
        </div>
    </div>
  )
}

export default HomeComponent