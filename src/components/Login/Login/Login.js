import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className=''>
                <div className="container login-section-container login-section-bg my-5">
                    <div className='text-center'>
                        <h2 className='text-secondary my-3'>Please Login</h2>
                    </div>


                    <div className='d-flex align-items-center justify-content-center'>
                        <form className='my-4'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-info">Submit</button>
                        </form>
                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <p>-------------------Or--------------------</p>
                    </div>


                    <div className='d-flex justify-content-center align-items-center'>
                        <button onClick={handleGoogleLogin} className="btn btn-info">Google Sign In</button>
                    </div>

                    <Link to="/registration">
                        <div className='d-flex justify-content-center align-items-center fw-bold fst-italic my-3'>
                            <p>Are You New User ? Please Registration.</p>
                        </div>
                    </Link>
            </div>
        </div>
    );
};

export default Login;