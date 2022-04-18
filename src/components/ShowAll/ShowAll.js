import React from 'react';
import { useParams } from 'react-router-dom';

const ShowAll = () => {
    const {svid} = useParams()
    return (
        <div>
            <h2 className='text-center'>show all{svid}</h2>
        </div>
    );
};

export default ShowAll;