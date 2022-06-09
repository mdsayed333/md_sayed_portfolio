import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <h2 className='text-red-500'>This Is Home...</h2> */}
            <Projects></Projects>
        </div>
    );
};

export default Home;