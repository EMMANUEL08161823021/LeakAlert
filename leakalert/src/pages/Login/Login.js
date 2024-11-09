import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../images/logo.svg";
import "./Login.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from '../Dashboard/Dashboard';
import ProtectedRoute from '../../components/ProtectedRoute';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        
        try {
            const response = await fetch('https://leak-d9yr.onrender.com/api/v1/auth/login', {
                method: 'POST',
                headers: {
                  
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("token", data.data.token);
                toast.success("Login successful!");
                navigate('/dashboard')
            } else {
                setError(data.message || "Login failed. Please try again.");
            }
        } catch (err) {
            console.log(err);
            console.error("Login error:", err);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className='wrapper'>
            <div className='login'>
                <ToastContainer />
                <form className='form' onSubmit={handleLogin}>
                    <div className='leakalert'>
                        <img src={Logo} alt='logo' style={{ marginLeft: '-20px' }} height={100} width={170} />
                    </div>
                    <div className='wrap'>
                        <h1 style={{ color: '#0052CC', marginTop: '0' }}>Welcome Back</h1>
                        <p style={{ fontSize: '15px', marginTop: '0' }}>Enter your email and password to sign in</p>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Email</label>
                            <input
                                className='input'
                                name='email'
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder='Your Email Address'
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Password</label>
                            <input
                                className='input'
                                name='password'
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder='Your password'
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type='checkbox' />
                            <p style={{ margin: '0', fontSize: '13px' }}>Remember me</p>
                        </div>
                        <button className='button' type='submit'>SIGN IN</button>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p style={{ textAlign: 'center', fontSize: '13px' }}>Forgot password? <span><Link className='link' to='/reset'>Click here</Link></span></p>
                            <p style={{ textAlign: 'center', fontSize: '13px' }}>Don't have an account? <span><Link className='link' to='/signup'>Sign up</Link></span></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;