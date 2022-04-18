import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const SignUp = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
      if (user) {
        navigate('/')
    }
    
    const hendelEmail = e =>{
        setEmail(e.target.value)
    }
    const hendelPassword = e =>{
        setPassword(e.target.value)
    }
    const hendelName = e =>{
        
    }
    const HendelSubmit = async e =>{
        
        e.preventDefault()
       await createUserWithEmailAndPassword(email,password)
    }
    
    return (
        <div className='signUp-form mt-5'>
            <h1 className='text-center text-primary mb-3'>Create account</h1>

            <form onSubmit={HendelSubmit} className='from-container'>
                <h3 className='text-center text-dark'>SignUp</h3>

                <input onBlur={hendelName} type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" required onBlur={hendelEmail} placeholder='your email' />

                <input onBlur={hendelPassword} type="password" name="password" id="" required placeholder='password' />

                <input type="checkbox" name="terms" id="" />
                
                <label className={`ps-2 `} htmlFor="terms">accept terms of condition</label>
            
                    <input type="submit" value="SignUp" />
               
                    <>
                <p className='text-center'>alrady have an account <Link to={'/login'} className='text-primary text-decoration-none' >Pleash Login</Link></p>
                <button  className='btn btn-warning' >Google</button>
            </>
            </form>


        </div>
    );
};

export default SignUp;