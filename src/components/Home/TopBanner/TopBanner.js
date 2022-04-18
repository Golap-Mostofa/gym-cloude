import React from 'react';
import services1 from '../../../img/serviceImg/services1.jpg'
import services2 from '../../../img/serviceImg/services2.jpg'
import services3 from '../../../img/serviceImg/services3.jpg'
import services4 from '../../../img/serviceImg/services4.jpg'
import services5 from '../../../img/serviceImg/services5.jpg'
import services6 from '../../../img/serviceImg/services6.jpg'
import Product from '../Product/Product';

const data = [
    { name: "Fitness Heroes", deatil: ' Many reasons to go to gym. Of course exercise is priority. The gym has plenty exercise machines that people can use to develop different muscle groups. Kulas (para. 1) in her article,', price: 20.5, id: 1, img: services1 },
    { name: "Sculpting Studio", deatil: ' Many reasons to go to gym. Of course exercise is priority. The gym has plenty exercise machines that people can use to develop different muscle groups. Kulas (para. 1) in her article,', price: 22.6, id: 2, img: services2 },
    { name: "Strength Center.", deatil: ' Many reasons to go to gym. Of course exercise is priority. The gym has plenty exercise machines that people can use to develop different muscle groups. Kulas (para. 1) in her article,', price: 10.99, id: 3, img: services3 },
    { name: "Pump House", deatil: 'Many reasons to go to gym. Of course exercise is priority. The gym has plenty exercise machines that people can use to develop different muscle groups. Kulas (para. 1) in her article,', price: 20.09, id: 4, img: services4 },
    { name: "Strength Center.", deatil: ' Many reasons to go to gym. Of course exercise is priority. The gym has plenty exercise machines that people can use to develop different muscle groups. Kulas (para. 1) in her article,', price: 21.14, id: 5, img: services5 },
    { name: " Muscle Studio", deatil: ' Many reasons to go to gym. Of course exercise is priority. The gym has plenty exercise machines that people can use to develop different muscle groups. Kulas (para. 1) in her article,', price: 20, id: 6, img: services6 }
]

const TopBanner = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-center text-success '>The JYM System simplifies</h1>
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