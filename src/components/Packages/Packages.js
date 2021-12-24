import React from 'react';
import "./Packages.css";

const Packages = () => {
    return (

        <div className='membership-bg'>
        <div className='container membership-container'>
        <h5 className='text-center text-primary'>BECOME A PART OF US</h5>
        <h2 className='text-center fw-bold mb-3'>OUR MEMBERSHIP</h2>
        <p className='text-center mb-5 fw-bold'>We offer a wide range of membership with options to suit budget.
        Everything from one day <br/>pass, Punch pass to monthly or annual prepaid memberships.
        What's more, we won't tie <br/>in to a long term contract, giving you greater flexibility </p>

    <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
            <div className="card h-100 membership-card">
            <div className="card-body">
                <h5 className="card-title text-center text-primary border rounded-pill p-2">BEGINNER PLAN</h5>
                <h2 className='text-center fw-bold'>Tk. 1000</h2>
                <p className='text-center fst-italic fs-5'>24 Hours Support</p>
                <p className='text-center fst-italic fs-5'>All Over the Bangladesh</p>
                <p className='text-center fst-italic fs-5'>Customer Management</p>
                <p className='text-center fst-italic fs-5'>Business and Finance Analyzing</p>
                <p className='text-center fst-italic fs-5'>Unlimited Tires</p>
            </div>
            <div className="card-footer bg-primary text-center ">
                <small className="text-light fs-5 fw-bold">GET MEMBERSHIP</small>
            </div>
            </div>
        </div>

        <div className="col">
            <div className="card h-100 membership-card">
            <div className="card-body">
                <h5 className="card-title text-center text-primary border rounded-pill p-2">INTERMEDIATE PLAN</h5>
                <h2 className='text-center fw-bold'>Tk. 1500</h2>
                <p className='text-center fst-italic fs-5'>24 Hours Support</p>
                <p className='text-center fst-italic fs-5'>All Over the Bangladesh</p>
                <p className='text-center fst-italic fs-5'>Customer Management</p>
                <p className='text-center fst-italic fs-5'>Business and Finance Analyzing</p>
                <p className='text-center fst-italic fs-5'>Unlimited Tires</p>
            </div>
            <div className="card-footer bg-primary text-center ">
                <small className="text-light fs-5 fw-bold">GET MEMBERSHIP</small>
            </div>
            </div>
        </div>

        <div className="col">
            <div className="card h-100 membership-card">
            <div className="card-body">
                <h5 className="card-title text-center text-primary border rounded-pill p-2">ULTIMATE PLAN</h5>
                <h2 className='text-center fw-bold'>Tk. 2000</h2>
                <p className='text-center fst-italic fs-5'>24 Hours Support</p>
                <p className='text-center fst-italic fs-5'>All Over the Bangladesh</p>
                <p className='text-center fst-italic fs-5'>Customer Management</p>
                <p className='text-center fst-italic fs-5'>Business and Finance Analyzing</p>
                <p className='text-center fst-italic fs-5'>Unlimited Tires</p>
            </div>
            <div className="card-footer bg-primary text-center ">
                <small className="text-light fs-5 fw-bold">GET MEMBERSHIP</small>
            </div>
            </div>
        </div>
        
        </div>
        
    </div>
   </div>
 
    );
};

export default Packages;