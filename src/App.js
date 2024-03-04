import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomeComponent from './components/HomeComponent/HomeComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import SignupComponent from './components/SignupComponent/SignupComponent';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomeComponent/>}/>
          <Route path='/Login' element={<LoginComponent/>}/>
          <Route path='/Signup' element={<SignupComponent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;