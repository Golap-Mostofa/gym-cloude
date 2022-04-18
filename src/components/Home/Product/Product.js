import React from 'react';
import './Product.css'
const Product = ({product}) => {
    const {deatil,name,price,img} = product
    return (
        <div className='col-lg-4 p-5 shado'> 
            <img className='w-100' src={img} alt="" />
            <h5>{name}</h5>
            <p>{price}</p>
            <small>{deatil}</small><br /><br />
            <button className='btn btn-success'>shaw All</button>
        </div>
    );
};

export default Product;