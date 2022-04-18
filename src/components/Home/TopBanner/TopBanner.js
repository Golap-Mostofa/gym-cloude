import React from 'react';
import services1 from '../../../img/serviceImg/services1.jpg'
import services2 from '../../../img/serviceImg/services2.jpg'
import services3 from '../../../img/serviceImg/services3.jpg'
import services4 from '../../../img/serviceImg/services4.jpg'
import services5 from '../../../img/serviceImg/services5.jpg'
import services6 from '../../../img/serviceImg/services6.jpg'
import Product from '../Product/Product';

const data = [
    { name: "pasta", deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 1, img: services1 },
    { name: "tomato", deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 2, img: services2 },
    { name: "barger", deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 3, img: services3 },
    { name: "biriyani", deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 4, img: services4 },
    { name: "kalavuna", deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 5, img: services5 },
    { name: "chicen", deatil: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, impedit!', price: 20, id: 6, img: services6 }
]

const TopBanner = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center text-success'>The JYM System simplifies</h1>
            <div className='row p-4'>
                {
                    data.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default TopBanner;