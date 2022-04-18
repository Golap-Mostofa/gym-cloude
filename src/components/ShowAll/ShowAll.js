import React from 'react';
import './ShowAll.css'
import { useNavigate, useParams } from 'react-router-dom';

const ShowAll = () => {
    const {svid} = useParams()
   
    const navigate = useNavigate()
    const hendelnavigate =id =>{
        navigate(`/showalldt`)
    }
    

    return (
        <div className='text-center'>
            <h2 className='text-center text-success'>Choise you favarite gym{svid}</h2>
            <button onClick={hendelnavigate}  className='btn btn-success display-block '>show all</button>
        </div>
    );
};

export default ShowAll;