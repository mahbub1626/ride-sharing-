import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;