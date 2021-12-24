import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Enroll.css";

const Enroll = () => {

    let {serviceId} = useParams();
    const [details, setDetails] = useState([]);

    useEffect( () => {
        fetch("/ourServices.json")
        .then( res => res.json())
        .then( data => {
            // console.log(data)
            const result = data.find(singleService => singleService.id ===+ serviceId)
            setDetails(result);
        })
    },[serviceId])
    // console.log(detail)
    return (
        <div className='enroll-section-bg'>

            <div className='container enroll-section-container my-5'>
               <div className='text-center'>
                    <h2>Service Id : {details.id}</h2>
                    <img src={details.img} className='' alt="our service" />
                    <h3>Service Name : {details.name}</h3>
                    <h4>Price: {details.price}</h4>
                    <p className='fst-italic'>Details : {details.description}</p>
               </div>
            </div>
            
        </div>
    );
};

export default Enroll;