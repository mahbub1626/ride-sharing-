import React from 'react';
import Bus from '../../assets/bus/bus.svg';
import BusShape from '../../assets/bus/busShape.png';
import RideSharing from '../../assets/about/RideSharing.svg';
import InterDistrictBus from '../../assets/about/InterDistrictBus.jpg';
import BusPickupRequest from '../../assets/about/BusPickupRequest.svg';
import './About.css'

const About = () => {
    const data = [
        {
            id: 1,
            title: "Bus Pickup Request, and Track Your Bus",
            img: BusPickupRequest,
            ca: "row-span-2",
            p: "lg:pt-32"
        },
        {
            id: 2,
            title: "Inter-District Bus E-Ticketing Service",
            img: InterDistrictBus,
            ca: "",
            p: "py-0"
        },
        {
            id: 3,
            title: "Ride Sharing and Rental Service ",
            img: RideSharing,
            ca: "row-span-2",
            p: "py-8"
        },
        {
            id: 4,
            title: "Bus Pickup Request, and Track Your Bus",
            img: BusPickupRequest,
            ca: "",
            p: "py-0"
        },

    ]
    return (
        <div className=''>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:pt-52'>
                    <img className='busShape lg:grid hidden lg:w-[950px] absolute' src={BusShape} alt="" />
                    <div className='relative lg:w-[800px] lg:h-[400px] grid lg:grid-cols-3 gap-4 justify-items-start ml-2 py-32'>
                        {/* dynamic card */}
                        {
                            data.map(d => <div
                                key={d.id}
                                className={`grid-flow-col bg-white p-4 ${d.ca} ${d.p} text-center rounded-xl drop-shadow-xl lg:w-[232px] max-w-[232px] lg:h-[254px] mx-auto`}
                                >
                                    <img src={d.img} alt="" />
                                    <h2 className='lg:text-xl font-bold py-4'>{d.title}</h2>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className='bus lg:py-20 lg:pt-60 pl-4'>
                    <h2 className='lg:ml-32'>Why we are for you</h2>
                    <p className='lg:ml-32 my-4 lg:w-[596px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </p>

                    <img src={Bus} alt="Bus" className='' />

                </div>
            </div>

        </div>
    );
};

export default About;