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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link to="/home" className = "navbar-brand">Lalbagh<span className = "text-primary">.</span></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link to="/home" className="nav-item">
                                <li>HOME</li>
                            </Link>

                            <Link to="/about" className="nav-item">
                                <li>ABOUT</li>
                            </Link>

                            <HashLink className="nav-item" to="/home#ourServices">SERVICES</HashLink>

                            <HashLink className='nav-item' to="/home#branches">BRANCHES</HashLink>

                            <HashLink className='nav-item' to="/home#delivery">DELIVERY</HashLink>

                            <Link to="/contact" className="nav-item">
                                <li>CONTACT</li>
                            </Link>
                        </ul>

                            <Link to="/registration" className="nav-item">
                                <li>REGISTRATION</li>
                            </Link>

                            <Link to="/addService" className='nav-item'>
                                <li>Add Service</li>
                            </Link>

                            <Link to="/manageServices" className='nav-item'>
                                <li>Manage Services</li>
                            </Link>

                            {user?.displayName ?
                            <button onClick={logOut} type="button" className="btn btn-primary btn-sm me-3">Logout</button>
                            :
                            <Link to="/login" className='nav-item'>LOGIN</Link>}

                            <span className="navbar-text text-success fst-italic">
                                SIGNED IN AS : {user?.displayName}
                            </span>
                    </div>
                </div>
            </nav>
            </div>
        </div>
    );
};

export default NavigationBar;