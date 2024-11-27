import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import {ToastContainer} from "react-toastify"
import Dashboard from './pages/Dashboard/Dashboard';
import Reset from './pages/Reset/Reset';
import Reports from './pages/Reports/Reports';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';

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
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path='/reset' element={<Reset/>}/>
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
