import React, { useEffect, useState } from 'react';
import OurService from '../OurService/OurService';
import "./OurServices.css";

const OurServices = () => {
    const [ourServices, setOurServices] = useState([]);
    useEffect( () => {
        fetch('ourServices.json')
        .then(res => res.json())
        .then(data => setOurServices(data));
    } ,[])
    return (
     <div className='our-services-container-bg'>
            <div className='container services-container'>
            <h5 className='text-center text-primary'>Service We Provide</h5>
            <h2 className='text-center fw-bold mb-4'>Our Services</h2>
           <div className="our-services-container">
           {
                    ourServices?.map(ourService => <OurService
                        key={ourService.id}
                        ourService={ourService}
                    ></OurService>)
                }
           </div>
        </div>
     </div>
    );
};

export default OurServices;