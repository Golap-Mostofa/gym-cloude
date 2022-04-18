import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import google from '../../../img/google.png'
import facebook from '../../../img/facebook.webp'
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [e, setE] = useState('')
    const navitate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user1,
        lode,
        err,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const hendelEmail = e => {
        setEmail(e.target.value)
    }
    const hendelPassword = e => {
        setPass(e.target.value)
    }
    const hendelSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)

    }

    if (user1) {
        // navitate('/')
        navitate(from, { replace: true })
    }

    return (
        <div className='signUp-form mt-5 from-container'>
            <h1 className='text-center text-primary mb-3'>Pleash Login</h1>

            <form onSubmit={hendelSubmit} className=''>
                <h3 className='text-center text-dark'>Login account</h3>

                <input onBlur={hendelEmail} type="email" name="email" id="" required placeholder='your email' />
                <input onBlur={hendelPassword} type="password" name="password" id="" required placeholder='password' />
                <p>l{lode}</p>
                <input type="checkbox" name="terms" id="" />
                <label className={`ps-2 `} htmlFor="terms">accept terms of condition</label>


                <input className='bg-success' id='submit' type="submit" value="Login" />
                <>
                    <p className='text-center'>New to Genius Car <Link to={'/signup'} className='text-primary text-decoration-none' >Pleash SignUp</Link></p>

                </>

            </form>
            <div className='text-center'>

                <div className='d-flex justify-content-evenly me-3'>
                    <button onClick={() => signInWithGoogle()} className='' >
                        <img src={google} alt="" />
                        Google
                    </button>
                    <button className='' >
                        <img className='facebook' src={facebook} alt="" />
                        Facebook
                    </button>
                </div>
               
            </div>


        </div>
    );
};

export default Login;