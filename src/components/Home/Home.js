import React from 'react';
import Banner from '../Banner/Banner';
import Membership from '../Membership/Membership';
import OurServices from '../OurServices/OurServices';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Trainer></Trainer>
            <Membership></Membership>
        </div>
    );
};

export default Home;