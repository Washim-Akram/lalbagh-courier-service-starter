import React from 'react';
import { Link } from 'react-router-dom';
import "./OurService.css";

const OurService = ({ourService}) => {
    const { img,name, description,price,id } = ourService;
    return (
        <div className="our-service">
            <img src={img} className='our-service-img' alt="our service" />
            <div className='text-center my-3'>
            <h3>{name}</h3>
            <p className='fst-italic'>{description}</p>
            <h5>Price: {price}</h5>
            <Link to={`/enroll/${id}`}>
                <button className="btn btn-primary">Enroll Now</button>
            </Link>
            </div>
        </div>
    );
};
export default OurService;