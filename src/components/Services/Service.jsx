import React from 'react';
import './Service.css';
import { BsArrowRightShort } from "react-icons/bs";

const Service = ({ service }) => {
    console.log(service)
    return (
        <div className='bg-white lg:max-w-[308px] h-[450px] text-center grid justify-items-center rounded-[14px]'>
            <img className='w-[135px] pt-8' src={service.img} alt="" />
            <div className=''>
                <h2 className='pb-3.5 text-[32px] font-black blueColor'>{service.name}</h2>
                <p className='text-sm px-4'>{service.description}</p>
                
                <a href="/#">
                <h3 className='text-xl py-5 font-black blueColor'>Get Service<BsArrowRightShort className='inline'/></h3>
                </a>
            </div>
        </div>
    );
};

export default Service;