import React, {useState} from 'react';
import "../SignUp/SignUp.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const provider = new GoogleAuthProvider();


    const handleLogin = () => {
        signInWithPopup(auth, provider)
        .then((result)=> {
          const credentials = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user
      
          console.log(user);
      
          window.location.href = "/dashboard"
        }).catch((error)=> {
          const errorCode = error.code;
          const errorMessage = error.message;
      
        })
    }

    const handleSignUp = async (e)=> {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if(user) {
                await setDoc(doc(database, "Users", user.uid), {
                    email: user.email,
                    fullName: name,

                })
            }
            toast.success("User Registered Successfully!!!", {
                position: 'top-center',
                style: { fontSize: '14px', padding: '10px' }
            })
        } catch (error) {
            toast.error(error.message, {
                position: 'top-center',
                style: { fontSize: '14px', padding: '10px' }
            })
        }

    }
  return (
    <div className='signup-wrapper'>
        <div className='signUp'>
            <div className='content' style={{marginTop: '30px'}}>
                <h1 style={{color: 'white', margin:'0', textAlign: 'center',}}>Welcome!</h1>
                <p style={{color: 'white', margin:'0', textAlign: 'center'}}> Detect leaks, prevent danger and hazard <br/>
                    sign up for free.
                </p>
            </div>
            <ToastContainer/>
            <form onSubmit={handleSignUp} className='form'>
                <div className='wrap'>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                        <p style={{textAlign: 'center', margin:'0'}}>Register With</p>
                        <button className='button' style={{ padding: '10px 0'}} onClick={handleLogin}>Google</button>
                        <p style={{textAlign: 'center', margin:'0'}}>or</p>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Name</label>
                        <input className='input' name='name' type='name' value={name} onChange={(e)=> setName(e.target.value)} required placeholder='Your full name'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Email</label>
                        <input className='input' name='email' type='email' value={email} onChange={(e)=> setEmail(e.target.value)} required placeholder='Your Email Address'/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <label>Password</label>
                        <input className='input' name='password' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} required placeholder='Your password'/>
                    </div>
                    {/* <div style={{display: 'flex', alignContent: "center"}}>
                        <input type='checkbox'/>
                        <p style={{margin: '0', fontSize: '13px'}}>Remember me</p>
                    </div> */}
                    <button className='button' type='submit'>SIGN UP</button>
                    <p style={{textAlign: 'center', fontSize: '13px'}}>Already have an account? <span><Link className='link' to='/login'>Sign in</Link></span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp