import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import './UpdateService.css';

const UpdateService = () => {
    const { register, handleSubmit,reset } = useForm();
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [id]);

    // Update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedService = { name: updatedName, price: service.price, description: service.description, img: service.img };
        setService(updatedService);
    }

    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedService = { name: service.name, price: updatedPrice, description: service.description, img: service.img}
        setService(updatedService);
    }

    const handleDescriptionChange = e => {
        const updatedDescription = e.target.value;
        const updatedService = { name: service.name, price: service.price, description: updatedDescription, img: service.img}
        setService(updatedService);
    }
    const handleImgUrlChange = e => {
        const updatedImg = e.target.value;
        const updatedService = { name: service.name, price: service.price, description: service.description, img: updatedImg}
        setService(updatedService);
    }
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setService({});
                    reset();
                }
            })

    };
    return (
        <div className='update-service-section-bg'>
            <div className="container update-service-section-container">
                <h2 className = "text-center fw-bold update-service-section-title">PLEASE UPDATE A SERVICE</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} onChange={handleNameChange} value={service.name || ''} />
                    <input type="number" {...register("price")} onChange={handlePriceChange} value={service.price || ''}/>
                    <textarea {...register("description")} onChange={handleDescriptionChange} value={service.description || ''}/>
                    <input {...register("img")} onChange={handleImgUrlChange} value={service.img || ''} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateService;