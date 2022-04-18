import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <div className='sticky-top'>
            <nav className='d-flex justify-content-between align-content-center  p-2  nav-color'>
                <div>
                    <img style={{ height: '50px' }} className='ms-3' src='' alt="" />
                    <h4>Logo</h4>
                </div>
                <div className='d-flex font-weight-bold'>
                    <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/'>Home</Link>
                    <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/Login'>Login</Link>
                    <Link className='text-decoration-none text-white me-5 font-weight-bold' to='/signup'>SignUp</Link>

                    {/* {
                    user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>} */}

                    {/* <div >

<nav className='d-flex bg-dark justify-content-around'>
    <div className="nav-logo">
        <h4>Hello</h4>
    </div>
    <div className="nav-link d-flex">
    <Link to={'/'}>home</Link>
    <Link to={'/'}>home</Link>
    <Link to={'/login'}>Login</Link>
    <Link to={'/signup'}>SignUp</Link>

    </div>
</nav>
    
</div> */}

                    <div>
                    </div>
                </div>
            </nav>

        </div>



    );
};

export default Header;