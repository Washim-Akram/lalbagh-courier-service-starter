import React from 'react';
import image from "../../images/banner/banner-2.jpg";
import "./About.css";

const About = () => {
    return (
        <div className ="about-section-bg">
            <div className = "container about-section-container">
                <h1 className = "text-center fw-bold about-section-title">ABOUT US</h1>
                <img src={image} alt="about us " className='about-us-img' />

                <p className='fst-italic fw-bold my-3'>
                    It is reliable and the label is a trustworthy name to all who have taken, taking and will take the services of this Company. The many years of service to the mass and to the corporate have made it the service for all to take.

                    We balance all the clients in a democratic manner and therefore there is no bias and that has itself encouraged repeat clients with similar wants for services.

                    Due to its presence in every remote pocket throughout this country many have found it to be very convenient to send and receive with ease and harmony and this has tempted all to lalbagh against many competitors who are in the similar trade.

                    Single point of contact for the many services. It is catering to multiple services from a one point and that also includes its own logistics fleet.
                </p>

                <h3 className='text-center text-success'>"Your Trusted Most Popular & First Courier Service in Bangladesh"</h3>


            </div>

        </div>
    );
};

export default About;