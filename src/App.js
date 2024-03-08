import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignupComponent/SignupComponent';
import { auth } from './config/fire';
function App() {
  const[userName,setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        setUserName(user.displayName)
        // console.log(user);
      }
      else{
        setUserName("")
      }
    })
  },[])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent name={userName}/>}/>
          <Route path='/Login' element={<LoginComponent/>}/>
          <Route path='/Signup' element={<SignupComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;