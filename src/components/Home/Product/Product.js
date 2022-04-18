import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {deatil,name,price,img,id} = product
    const navigate = useNavigate()
    const navigateShowall =id =>{
        navigate(`/showall/${id}`)
    }
    return (
        <div className='col-lg-4 p-5 shado'> 
            <img className='w-100' src={img} alt="" />
            <h5 className=' text-primary mt-2'>{name}</h5>
            <p style={{color:'#06113C'}} className='fw-bold '>{price}</p>
            <small>{deatil}</small><br /><br />
            <button onClick={()=>navigateShowall(id)} className='btn btn-success'>shaw All</button>
        </div>
    );
};

export default Product;