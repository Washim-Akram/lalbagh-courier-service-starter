import React from 'react';
import { useParams } from 'react-router';

const Enroll = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>{serviceId}</h2>
        </div>
    );
};

export default Enroll;