import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className = "text-center my-5 py-5">
            <h1 className = "fw-bold mb-4">404</h1>
            <h2 className = "text-danger mb-4">Page Not Found<span className = "text-danger">!</span></h2>
            <h4 className = "text-secondary mb-4">We can't find the page you're looking for. <br /> You can either return to previous page, <br /> Visit our home page or contact our support team</h4>
            <Link to="/home">
                <button type="button" className="btn btn-primary p-2 m-3">Visit Homepage</button>
            </Link>

            <Link to="/contact">
                <button type="button" className="btn btn-outline-primary p-2 m-3">Contact Us</button>
            </Link>
        </div>
    );
};

export default NotFound;