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
        <div className='text-center'>
            <Row xs={1} md={3} lg={2} className="g-4">
 
    <Col>
       {
           services.map(service => <Service service = {service}></Service>)
       } 
    </Col>
  
</Row>
        </div>
    );
};

export default Services;
  