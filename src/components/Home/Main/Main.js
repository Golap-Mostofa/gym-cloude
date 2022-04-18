
import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import banner from '../../../img/banner_48 .jpg'
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