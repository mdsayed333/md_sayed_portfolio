import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;