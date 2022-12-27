import React from 'react';
import Bus from '../../assets/bus/bus.svg';
import BusShape from '../../assets/bus/busShape.svg';

const About = () => {
    return (
        <div className='py-20'>
            <div className='grid grid-cols-2'>
            <div className='w-1/2 mr-0'>
                <img src={BusShape} alt="" />
                <div className=''>

                </div>
            </div>
            <div className='w-1/2'>
                <h2>Why we are for you</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>
                <img src={Bus} alt="" />
            </div>
        </div>
        </div>
    );
};

export default About;