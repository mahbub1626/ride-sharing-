import React from 'react';
import './Info.css';

const Info = () => {
    const information = [
        {
            id: 1,
            number: '01',
            count: '+ Million',
            title: "Tickets Sold",
            bor: "border-white"
        },
        {
            id: 2,
            number: '100',
            count: '',
            title: "Routes",
            bor: "border-white"
        },
        {
            id: 3,
            number: '1',
            count: '+ Million',
            title: "App Downloads",
            bor: "border-none"
        }
    ]
     
    return (
        <div className='grid lg:grid-cols-3 gap-4 justify-items-center lg:px-96 place-content-center bgColorI lg:h-[130px]'>
            {
                information.map(inf => <div className={`w-[344px] lg:border-r-4 ${inf.bor} last-child:border-0  lg:py-5 text-white text-center`}
                key={inf.id}
                >
                <h3><span className='text-5xl font-semibold'>{inf.number}</span> <span className='text-3xl'> {inf.count}</span></h3>
                <p>{inf.title}</p>
                </div>
                )
            }
        </div>
    );
};

export default Info;