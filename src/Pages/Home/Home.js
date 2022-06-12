import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;