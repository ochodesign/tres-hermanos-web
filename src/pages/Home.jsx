import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Gallery from '../components/sections/Gallery';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Services />
            <Gallery />
            <Contact />
        </Layout>
    );
};

export default Home;
