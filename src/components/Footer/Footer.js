import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='row footer '>
            <h3 className='text-center text-white mb-5'>an action or actions intended actions </h3>
            <div className="col-lg-4 text-white">
                <h4>LEARN</h4>
                <small className='text-white d-block' >New Words</small>
                <small className='text-white d-block' >Help</small>
                <small className='text-white d-block' >Word of the Year</small>
            </div>
            <div className="col-lg-4 text-white d-block">
                <h4>DEVELOP</h4>
                <small className='text-white d-block '>Dictionary API</small>
                <small className='text-white d-block'>Double-Click Look</small>
                <small className='text-white d-block'>Search Widgets</small>
            </div>
            <div className="col-lg-4 text-white">
                <h4>ABOUT</h4>
                <small className='text-white d-block'>License Data</small>
                <small className='text-white d-block'>Cambridge English</small>
                <small className='text-white d-block'>Cambridge University Press
                            Cookies Settings</small>
            </div>
            
        </div>
    );
};

export default Footer;