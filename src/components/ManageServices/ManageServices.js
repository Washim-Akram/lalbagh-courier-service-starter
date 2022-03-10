import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (

        <div className='manage-services-container-bg'>
            <div id='ourServices' className='container services-container'>
            <h3 className='text-center text-primary'>Service We Provide</h3>
                <h2 className='text-center fw-bold mb-4'>Manage Services</h2>
                    <div className="manage-services-container">

                            {
                                services.map(manageService => <ManageService
                                key={manageService._id}
                                manageService = {manageService}
                                ></ManageService>)
                            }
                    </div>
            </div>
        </div>
    );
};

export default ManageServices;