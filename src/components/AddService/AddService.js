import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";


const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/services', data)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                alert("Added Successfully.")
                reset();
            }
        })
    };
    return (
        <div className='add-service-section-bg'>
           <div className="container add-service-section-container">
               <h2 className = "text-center fw-bold add-service-section-title">PLEASE ADD A SERVICE</h2>
               <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                    <input type="number" {...register("price")} placeholder='Price' />
                    <textarea {...register("description")} placeholder='Description' />
                    <input {...register("img")} placeholder='Image Url' />
                    <input type="submit" />
                </form>
           </div>
        </div>
    );
};

export default AddService;