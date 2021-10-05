import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect (()=> {
        fetch('/school.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className="text-center w-50 mx-auto mt-1">
            
 
    
       {
           services.map(service => <Service service = {service}></Service>)
       } 
    
  
          
        </div>
    );
};

export default Services;
  