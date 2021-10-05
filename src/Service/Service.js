import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const {img, description,title} = props.service
    return (
        
        <div>
          <Card.Img variant="top" src={img} />
        
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        </div>
        
    );
};

export default Service;