import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase.init';
import './Header.css'
const Header = () => {
    const [user] =useAuthState(auth)
    const hendelSignOut = ()=>{
        signOut(auth)
    }
    return (

        <div className='sticky-top'>
            <nav className='d-flex justify-content-between align-content-center  p-2  nav-color'>
                <div>
                    <img style={{ height: '50px' }} className='ms-3' src='' alt="" />
                    <h4>Logo</h4>
                </div>
                <div className='d-flex font-weight-bold'>
                    <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>Home</Link>
                {user ?
                // <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/signup'>LogOut</Link>
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