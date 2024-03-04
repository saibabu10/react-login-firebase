import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../config/fire'
function LoginComponent() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    }

    function handleSubmission(e) {
        console.log(values);
        createUserWithEmailAndPassword(auth,values.email,values.password)
        .then(res=>{console.log(res)})
        .catch((error)=> {
            console.log(error);
        });
        e.preventDefault();
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Email</label>
                <br />
                <input type='text' name='email' placeholder='Enter the Email' onChange={handleChange} />
                <br />
                <label>Password</label>
                <br />
                <input type='password' name='password' placeholder='Enter the Password' onChange={handleChange} />
                <br />
                Already have an Account? <Link to="/signup">Signup</Link>
                <br />
                <button onClick={handleSubmission}>Login</button>
            </form>
        </div>
    );
}

export default LoginComponent;
