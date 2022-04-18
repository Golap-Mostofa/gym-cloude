import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import './Login.css'
const Login = () => {

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [e,setE] = useState('')
    const navitate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user1,
        lode,
        err,
      ] = useSignInWithEmailAndPassword(auth);

    const hendelEmail = e =>{
        setEmail(e.target.value)
    }
    const hendelPassword = e =>{
        setPass(e.target.value)
    }
    const hendelSubmit = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email,pass)

    }

    if(user1){

        navitate('/')
    }

    return (
        <div className='signUp-form mt-5'>
        <h1 className='text-center text-primary mb-3'>Pleash Login</h1>

        <form onSubmit={hendelSubmit} className='from-container'>
            <h3 className='text-center text-dark'>Login account</h3>
            
            <input onBlur={hendelEmail} type="email" name="email" id="" required placeholder='your email' />
            <input onBlur={hendelPassword} type="password" name="password" id="" required placeholder='password' />
            <input  type="checkbox" name="terms" id="" />
            <label className={`ps-2 `} htmlFor="terms">accept terms of condition</label>
           

                  <input className='bg-success' id='submit' type="submit" value="Login" />
            <>
                <p className='text-center'>New to Genius Car <Link to={'/signup'} className='text-primary text-decoration-none' >Pleash SignUp</Link></p>
               
            </>
           
        </form>
        <div className='text-center'>


        <button  className='btn btn-warning '  onClick={()=>signInWithGoogle()}>Google</button>
        </div>
        
        
    </div>
    );
};

export default Login;