import React from 'react'
import {Link} from 'react-router-dom'
function HomeComponent(props) {
  return (
    <div>
        <div>
            <h1>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                </h1>
                <h2>{props.name ? `Welcome ${props.name}` : "Login "}</h2>
        </div>
    </div>
  )
}

export default HomeComponent