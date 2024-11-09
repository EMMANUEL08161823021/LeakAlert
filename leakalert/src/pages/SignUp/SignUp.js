import React, { useState } from 'react';
import "./SignUp.css";
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const requestBody = {
            email,
            password,
            phone,
            firstname,
            lastname
        };

        try {
            const response = await fetch('https://leak-d9yr.onrender.com/api/v1/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });

            const result = await response.json();

            console.log(result)

            if (response.ok) {
                toast.success("User Registered Successfully!", {
                    position: 'top-center',
                    style: { fontSize: '14px', padding: '10px' }
                });
                navigate('/dashboard');
            } else {
                throw new Error(result.message || "Registration failed");
            }
        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                style: { fontSize: '14px', padding: '10px' }
            });
        }
    };

    return (
        <div className='signup-wrapper'>
            <div className='signUp'>
                <div className='content' style={{ marginTop: '30px' }}>
                    <h1 style={{ color: 'white', margin: '0', textAlign: 'center' }}>Welcome!</h1>
                    <p style={{ color: 'white', margin: '0', textAlign: 'center' }}>
                        Detect leaks, prevent danger and hazard <br />
                        sign up for free.
                    </p>
                </div>
                <ToastContainer />
                <form onSubmit={handleSignUp} className='form'>
                    <div className='wrap'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>First Name</label>
                            <input className='input' name='firstname' type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} required placeholder='Your first name' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Last Name</label>
                            <input className='input' name='lastname' type='text' value={lastname} onChange={(e) => setLastname(e.target.value)} required placeholder='Your last name' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Email</label>
                            <input className='input' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Your Email Address' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Password</label>
                            <input className='input' name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Your password' />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label>Phone</label>
                            <input className='input' name='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder='Your phone number' />
                        </div>
                        <button className='button' type='submit'>SIGN UP</button>
                        <p style={{ textAlign: 'center', fontSize: '13px' }}>Already have an account? <span><Link className='link' to='/login'>Sign in</Link></span></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;