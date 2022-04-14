import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const {id,name, price, description, img } = service;
    const navigate=useNavigate()
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div id="service" className='service'>
            <img className='w-100' src={img} alt="" />
            <h1>{name}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book : {name}</button>


        </div>
    );
};

export default Service;