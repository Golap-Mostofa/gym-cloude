import React from 'react';
import profile from '../../img/profile.png'
const About = () => {
    return (
        <div className='container mt-5 d-flex '>
            <div>
                <img className='rounded m-4 w-90 ' src={profile} alt="" />
            </div>
            <div className='m-4 border p-3'>
                <h3 className='bg-secondary p-2 text-white'>Name: Golap Mostofa</h3>
                <p>
                   Hello Friend i am Golap mostofa my country in bangladish i am font-end devloper my scile html css javascript javascript fremwork react and css fremwork bootstrap react bootstrap and telwiend css this project used react fermwork or libary react router firebase firebase hooks and  parfect idea my knologe simpole base and athear website soo i need job
                </p>
                <button className='btn btn-dark text-white'>contact as </button>
            </div>
        </div>
    );
};

export default About;