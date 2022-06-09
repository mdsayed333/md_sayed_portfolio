import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h2 className='text-red-500'>This Is Home...</h2>
        </div>
    );
};

export default Home;