import React from 'react';
import Header from '../Components/Header/Header';
import Service from '../Components/Service/Service';
import Action from '../Components/Action/Action';
import Contact from '../Components/Contact/Contact';
import Client from '../Components/Client/Client';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Action />
            <Contact />
            <Client />
        </div>
    );
}

export default Home;
