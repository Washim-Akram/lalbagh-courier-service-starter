import React from 'react';
import Banner from '../Banner/Banner';
import Branches from '../Branches/Branches';
import Delivery from '../Delivery/Delivery';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Branches></Branches>
            <Delivery></Delivery>
        </div>
    );
};

export default Home;