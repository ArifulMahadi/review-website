import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const {img, description,title} = props.service
    return (
        <div>
           <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {description}
          </Card.Text>
        </Card.Body>
      </Card>
    
        </div>
    );
};

export default Service;