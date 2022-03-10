import React from 'react';
import "./Delivery.css";

const Delivery = () => {
    return (

        <div className='delivery-bg'>
            <div id='delivery' className='container delivery-container'>
                <div className='container p-4 orange-bg'>
                    <h2 className='fs-1 text-white fw-bold text-center'>DELIVERY COSTS</h2>
                    <p className='text-white fw-bold text-center'>building customer sales, satisfaction and improving customer loyalty.</p>
                </div>
                <div className='d-flex justify-content-between my-5'>
                    <div>
                        <h2 className='fs-1 text-secondary fw-bold'>FAST AND RELIABLE DELIVERY SERVICES</h2>
                        <h2 className='fs-1 orange-text'>THAT MEET YOUR TIMELINE.</h2>
                    </div>

                    <div>
                        <h3  className='fs-2 orange-text'>EXPRESS COURIER DELIVERY</h3>
                        <p className='text-secondary fw-bold'>Lalbagh Parcel & Courier Service LTD. delivery services ensures fastest delivery in Bangladesh. <br /> We use three ways of Bangladesh. We have cars and van to ensure you fastest service. <br /> We deliver emergency courier by Bangladesh Airlines.</p>
                    </div>
                </div>
                <div>
                    <p className='text-secondary'>Express Delivery at Your Door: <br />
                        Lalbagh Parcel & Courier Service Ltd. is a company in Bangladesh. Enjoy the up-to- date facilities of our company. We provide standard as well as tailor-made Express & Logistics services in Bangladesh. Customer satisfaction and trust is our main goal in all of our activities. In this regard, we offer a wide range of services and solutions that meets all customers’ needs. Our professionals assist you in your daily life by providing you door-to-door delivery and collect services for all your local & international Documents and Goods.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Delivery;