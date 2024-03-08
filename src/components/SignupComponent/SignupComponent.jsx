import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupComponent.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/fire';
function SignupComponent() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPass: ""
    });
    const[errorMsg,setErrorMsg] = useState("")
    const[submitButtonDisabled,setSubmitButtonDisabled] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    function handleSubmission(e){
        // e.preventDefault();
       if(!values.firstname || !values.lastname || !values.email || !values.password || !values.confirmPass)
       {
        setErrorMsg('Fill all fields');
        return;
       }
       setSubmitButtonDisabled(true);
       createUserWithEmailAndPassword(auth,values.email,values.password)
       .then(res=>
        {
            setSubmitButtonDisabled(false)
            console.log(res)
        })
       .catch(err=>{
        setSubmitButtonDisabled(false)
        setErrorMsg(err.message)
    })
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
                <div className='errormsg'>{errorMsg}</div>
                <button onClick={handleSubmission} disabled={submitButtonDisabled}>Signup</button>
            </form>
        </div>
    );
}

export default SignupComponent;
