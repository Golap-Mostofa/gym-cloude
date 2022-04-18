import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase.init';
import './Header.css'
import logo from '../../img/logo.png'
const Header = () => {
    const [user] =useAuthState(auth)
    const hendelSignOut = ()=>{
        signOut(auth)
    }
    return (

        <div className='sticky-top'>
            <nav className='d-flex justify-content-between align-content-center  p-2  nav-color'>
                <div className='d-flex justify-content-evenly align-items-center me-3'>
                    <img style={{ height: '50px' }} className='ms-3 me-3' src={logo} alt="" />
                    <h4 className='text-success'>Powder - Vediva</h4>
                </div>
                <div className='d-flex font-weight-bold'>
                    <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>Home</Link>
                    <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>about</Link>
                {user ?
                
               <button onClick={hendelSignOut}>Sign Out</button>
                :
                <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/Login'>Login</Link>}

                    <div>
                    </div>
                </div>
            </nav>

        </div>



    );
};

export default Header;