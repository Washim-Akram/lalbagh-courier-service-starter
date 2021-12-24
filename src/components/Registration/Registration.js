import React from 'react';
import { Link } from 'react-router-dom';
import "./Registration.css";

const Registration = () => {
    return (

            <div className='container registration-section-container registration-section-bg my-5'>

                <div className='text-center fw-bold mb-3'>
                    <h2 className='text-secondary my-3'>Please Registration</h2>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                        <form className='my-4'>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                    </div>

                    <Link to= "/login">
                        <div className='d-flex justify-content-center align-items-center fw-bold fst-italic my-3'>
                            <p>Already Registered ? Please Login.</p>
                        </div>
                    </Link>

            </div>
            
    );
};

export default Registration;