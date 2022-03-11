import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Enroll.css";

const Enroll = () => {

    let {serviceId} = useParams();
    const [details, setDetails] = useState([]);

    useEffect( () => {
        fetch(`https://guarded-dawn-12838.herokuapp.com/services/${serviceId}`)
        .then( res => res.json())
        .then( data => {
            setDetails(data)
        })
    },[serviceId])
    return (
        <div className='enroll-section-bg'>

            <div className='container enroll-section-container my-5'>
               <div className='text-center'>
                   <h2>Service Id: {serviceId}</h2>
                   <img src={details.img} className='enroll-img mb-3' alt="our service" />
                   <h3>Service Name: {details.name}</h3>
                   <h4>Price: {details.price}</h4>
                    <p className='fst-italic'>Details : {details.description}</p>
               </div>
            </div>

        </div>
    );
};

export default Enroll;