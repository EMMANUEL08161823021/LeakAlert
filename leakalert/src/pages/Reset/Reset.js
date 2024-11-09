import React, { useState } from 'react';
import { database, newPassword, auth } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import "./Reset.css";
import OtpInput from "otp-input-react";
import { Link } from 'react-router-dom';
import {CgSpinner} from "react-icons/cg";
import { toast, ToastContainer } from 'react-toastify';
import { getFunctions, httpsCallable } from "firebase/functions";
import { sendPasswordResetEmail } from 'firebase/auth';



const Reset = () => {
    // const functions = require('firebase-functions');
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState("");
    const [showOtp, setShowOtp] = useState(true);
    const [user, setUser] = useState(null);
    const [newPassword, setNewPassword] = useState("");
    // const [message, setMessage] = useState("");
  
    const functions = getFunctions();
  
    const handlePasswordReset = async () => {
        sendPasswordResetEmail(auth, email). 
        then(()=> {
            toast.success('A Password Reset link has been sent to your email')
        }).catch(error=> {
            console.log(error);
            console.log(error.message);

        })
    };


    const checkIfEmailExists = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            // Query the Firestore collection
            const usersRef = collection(database, "Users");
            const q = query(usersRef, where("email", "==", email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setMessage(`Email does not exist. Please Sign Up.`);
            } else {
                handlePasswordReset();
                setMessage("Email exists in the database.");
                setShowOtp(false);
            }
        } catch (error) {
            setMessage("Error checking email: " + error.message);
        }
        setLoading(false);
    };

    return (
        <div className='signup-wrapper'>
            <div className='signUp'>
                <ToastContainer/>
                <div className='content' style={{ marginTop: '30px' }}>
                    <h1 style={{ color: 'white', margin: '0', textAlign: 'center' }}>Forgot Password?</h1>
                    <p style={{ color: 'white', margin: '0', textAlign: 'center', fontSize: '13px' }}>
                        No worries we would send you a reset instruction.
                    </p>
                </div>
                { !user &&
                    
                    <form onSubmit={checkIfEmailExists} className='form'>
                        <div className='reset'>
                            <h3 style={{margin: '0'}}>Forgot Password?</h3>
                            <p style={{margin: '0', fontSize: '13px'}}>Please enter email address you used to create account, and we’ll send you a link to reset your password</p>
                            <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
                                <label>Email</label>
                                <input className='input' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Your Email Address' />
                            </div>
                            <button className='button' type="submit" disabled={loading}>
                                {loading ? "Checking..." : "Check Email"}
                            </button>
                            <Link to="/login">
                                <p style={{textAlign: 'center'}}>Go Back to Login</p>
                            </Link>
                        </div>
                        {message && <p>{message}</p>}
                    </form>
                    
                
                }
            </div>
        </div>
    )
}

export default Reset;
