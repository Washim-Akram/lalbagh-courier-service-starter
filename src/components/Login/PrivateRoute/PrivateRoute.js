import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading} = useAuth();

    if (isLoading) {

        return <div className="d-flex justify-content-center my-3"        >
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                
            }

    return (
        <Route
            {...rest}
            render={({ location }) => user.displayName ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;