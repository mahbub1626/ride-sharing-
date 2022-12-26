import React from 'react';
import './Service.css';
import { BsArrowRightShort } from "react-icons/bs";

const Service = ({ service }) => {
    console.log(service)
    return (
        <div className='bg-white lg:max-w-[308px] h-[450px] text-center grid justify-items-center'>
            <img className='w-[135px]' src={service.img} alt="" />
            <div className=''>
                <h2 className='pt-4 pb-3.5 text-2xl font-bold blueColor'>{service.name}</h2>
                <p className='text-sm px-4'>{service.description}</p>
                <h3 className='text-xl py-2 blueColor'>Get Service<BsArrowRightShort className='inline'/></h3>
            </div>
        </div>
    );
};

export default Service;