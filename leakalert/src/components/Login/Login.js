import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { toast, ToastContainer } from 'react-toastify';
import { Navigate } from 'react-router-dom';
import "../Login/Login.css";
import 'react-toastify/dist/ReactToastify.css';
// import { RecaptchaVerifier } from 'firebase/auth';
import Logo from "../../images/logo.svg";
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // const setUpRecaptcha = () => {
    //     try {
    //       window.recaptchaVerifier = new RecaptchaVerifier(
    //         'recaptcha-container',
    //         { size: 'invisible' },
    //         auth
    //       );
    //     } catch (error) {
    //       console.error("Error setting up RecaptchaVerifier:", error);
    //     }
    // };
      
    // setUpRecaptcha();

    const handleLogin = async (e) => {
      e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/dashboard');
            toast.success("Login successful!");
        } catch (err) {
            setError("Wrong credentials!");
        }
    }
    return (
    <div className='wrapper'>
        <div className='login'>
            <ToastContainer/>
            <form className='form' onSubmit={handleLogin} >
                <div className='leakalert' style={{}}>
                    <img src={Logo} alt='logo' style={{marginLeft: '-20px',}} height={100} width={170}/>
                </div>
                <div className='wrap'>
                    <div id="recaptcha-container"></div>
                    <h1 style={{color: '#0052CC', marginTop: '0'}}>Welcome Back</h1>
                    <p style={{fontSize: '15px', marginTop: '0'}}>Enter your email and password to sign in</p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Email</label>
                        <input className='input' name='email' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder='Your Email Address'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Password</label>
                        <input className='input' name='password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder='Your password'/>
                    </div>
                    <div style={{display: 'flex', alignContent: 'center'}}>
                        <input type='checkbox'/>
                        <p style={{margin: '0', fontSize: '13px'}}>Remember me</p>
                    </div>
                    <button className='button' type='submit'>SIGN IN</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
                        <p style={{textAlign: 'center', fontSize: '13px'}}>Forgot password? <span><Link className='link' to='/reset'>Click here</Link></span></p>
                        <p style={{textAlign: 'center', fontSize: '13px'}}>Don't have an account? <span><Link className='link' to='/signup'>Sign up</Link></span></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login