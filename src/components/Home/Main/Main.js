import { Carousel } from 'bootstrap';
import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import banner from '../../../img/banner.jpg'
const Main = () => {
    return (
        <div>
            <div>
                <img className='w-100' src={banner} alt="" />
            </div>
            <TopBanner></TopBanner>
        </div>
    );
};

export default Main;