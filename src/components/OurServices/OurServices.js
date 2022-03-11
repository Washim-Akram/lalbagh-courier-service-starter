import React, { useEffect, useState } from 'react';
import OurService from '../OurService/OurService';
import "./OurServices.css";

const OurServices = () => {
    const [ourServices, setOurServices] = useState([]);
    useEffect( () => {
        fetch('https://guarded-dawn-12838.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setOurServices(data));
    } ,[])
    return (
     <div className='our-services-container-bg'>
            <div id='ourServices' className='container services-container'>
            <h2 className='text-center text-primary'>Service We Provide</h2>
            <h3 className='text-center fw-bold mb-3'>Our Services</h3>
            <h3 className='text-center mb-4 fst-italic'>Thanks for stay at Lalbagh Courier Service.We hope to have the pleasure of doing business with you in the future.</h3>
           <div className="our-services-container">
           {
                    ourServices?.map(ourService => <OurService
                        key={ourService._id}
                        ourService={ourService}
                    ></OurService>)
                }
           </div>
        </div>
     </div>
    );
};

export default OurServices;