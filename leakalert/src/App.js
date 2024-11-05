import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import {ToastContainer} from "react-toastify"
import Dashboard from './components/Dashboard/Dashboard';
import Reset from './components/Reset/Reset';
import Reports from './components/Reports/Reports';
import ResetPassword from './components/Password/Password';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='auth-wrapper'>
          <div className='auth-inner'>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/reset' element={<Reset/>}/>
              <Route path='/password' element={<ResetPassword/>}/>
              <Route path='/reports' element={<Reports/>}/>
            </Routes>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
