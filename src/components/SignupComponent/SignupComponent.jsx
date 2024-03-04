import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupComponent() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPass: ""
    });
    const[errorMsg,setErrorMsg] = useState("")
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    function handleSubmission(e){
        e.preventDefault();
        console.log(values)
    }

    return (
        <div>
            <h1>Signup</h1>
            <form>
                <label>First Name</label>
                <br/>
                <input type='text' name='firstname' placeholder='Enter the FirstName' onChange={handleChange}/>
                <br/>
                <label>Last Name</label>
                <br/>
                <input type='text' name='lastname' placeholder='Enter the LastName' onChange={handleChange}/>
                <br/>
                <label>Email</label>
                <br/>
                <input type='text' name='email' placeholder='Enter the Email' onChange={handleChange}/>
                <br/>
                <label>Password</label>
                <br/>
                <input type='password' name='password' placeholder='Enter the Password' onChange={handleChange}/>
                <br/>
                <label>Confirm Password</label>
                <br/>
                <input type='password' name='confirmPass' placeholder='Enter the Confirm Password' onChange={handleChange}/>
                <br/>
                Already have an account? <Link to="/login">Login</Link>
                <br/>
                <button onClick={handleSubmission}>Signup</button>
            </form>
        </div>
    );
}

export default SignupComponent;
