import { faEnvelopeOpenText, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

const Contact = () => {
    const envelopeIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} />
    const phoneIcon = <FontAwesomeIcon icon = {faPhone}/>
    const mapIcon = <FontAwesomeIcon icon = {faMapMarkerAlt}/>

    return (
        <div>
             <section className = "contact-section-bg">
                <div className = "container contact-section-container">
                    <h1 className = "text-center fw-bold contact-section-title">Get In Touch</h1>

                    <div className = "row">
                        <div className = "col-md-4 col-12 d-flex align-items-center justify-content-evenly contact-div">
                            <div>
                                <span className = "contact-icons">{envelopeIcon}</span>
                            </div>
                            <div>
                            <h2>Email Address</h2>
                            <p className = "text-secondary">abcdef@gmail.com</p>
                            <p className = "text-secondary">Info@webmail.com</p>
                            </div>
                        </div>

                        <div className = "col-md-4 col-12 d-flex align-items-center justify-content-evenly contact-div">
                       <div>
                            <span className = "contact-icons">{phoneIcon}</span>
                       </div>
                       <div>
                       <h2>Phone Number</h2>
                        <p className = "text-secondary">+1255 - 568 - 6523</p>
                        <p className = "text-secondary">+1255 - 568 - 6523</p>
                       </div>
                        </div>

                        <div className = "col-md-4 col-12 d-flex align-items-center justify-content-evenly contact-div">
                            <div>
                               <span className = "contact-icons">{mapIcon}</span>
                            </div>
                           <div>
                           <h2>Our Location</h2>
                            <p className = "text-secondary">160/1 Azimpur-road, Azimpur, Dhaka</p>
                            <p className = "text-secondary"> Madina Tower, 7th Floor, Azimpur <br />
                            Dhaka-1205, Bangladesh.</p>
                           </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default Contact;