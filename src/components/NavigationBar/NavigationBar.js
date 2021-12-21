import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './NavigationBar.css';


const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <Link to="/home" className = "navbar-brand">Hitup<span className = "text-primary">.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link to="/home" className="nav-item">
                                <li>Home</li>
                            </Link>

                            <Link to="/about" className="nav-item">
                                <li>About us</li>
                            </Link>

                            <Link to="/ourServices" className="nav-item">
                                <li>Services</li>
                            </Link>

                            <Link to="/contact" className="nav-item">
                                <li>Contact us</li>
                            </Link>

                            <HashLink className='nav-item' to="/home#trainer">Trainer</HashLink>

                            <HashLink className='nav-item' to="/home#membership">Membership</HashLink>

                            {
                                user?.email ? <button onClick={logOut}>Logout</button> :
                                <Link  className='nav-item' to="/login">Login</Link>
                            }

                        </ul>

                            <span className="navbar-text">
                            </span>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};

export default NavigationBar;