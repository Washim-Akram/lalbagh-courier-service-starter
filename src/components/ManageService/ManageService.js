import React from 'react';
import { Link } from 'react-router-dom';
import './ManageService.css';
const ManageService = ({manageService}) => {
    const {_id, name, price, description, img} = manageService;
    // console.log(manageService);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {

            if(data.deletedCount){
                alert('Are You Sure? You Want To Delete')
            }
        })
    }

    return (
        <div>
            <div className="manage-service">
                {/* <h2>Id: {_id}</h2> */}
                <img src={img} className='manage-service-img' alt="our service" />
                <div className='text-center my-3'>
                <h3>{name}</h3>
                <p className='fst-italic'>{description}</p>
                <h5>Price: {price}</h5>
                <Link to={`services/update/${_id}`}><button className='btn btn-info'>Update</button></Link>
                <button onClick={ () => handleDelete(_id)} className="btn btn-warning ms-3">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageService;