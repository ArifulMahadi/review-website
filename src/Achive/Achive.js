import React from 'react';
import { Card } from 'react-bootstrap';

const Achive = (props) => {
    const {img1,description1,achive} = props.achive
    return (
        <div c>
            <Card.Body>
             <Card.Img src={img1}/>
             <Card.Title>{achive}</Card.Title>
              <Card.Text>
              {description1}
             </Card.Text>
             </Card.Body>
        </div>
    );
};

export default Achive;