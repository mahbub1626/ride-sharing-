import React from 'react';
import Service from './Service';
import BusTicket from '../../assets/best-service/BusTicket.svg';
import HotelBooking from '../../assets/best-service/HotelBooking.svg';
import PickupBus from '../../assets/best-service/PickupBus.svg';
import RideSharing from '../../assets/best-service/RideSharing.svg';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Pickup Bus",
            img: PickupBus,
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
        },
        {
            id: 2,
            name: "Bus Ticket",
            img: BusTicket,
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
        },
        {
            id: 3,
            name: "Ride Sharing",
            img: RideSharing,
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
        },
        {
            id: 4,
            name: "Hotel Booking",
            img: HotelBooking,
            description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "
        }
    ]
    return (
        <div className='lg:px-52'>
            <h2 className='text-3xl font-bold pt-20 pb-14 text-center'>We Will Give You The Best Service</h2>
            <div className='grid lg:grid-cols-4 gap-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;