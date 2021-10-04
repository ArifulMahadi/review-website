import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Achive from '../Achive/Achive';

const Achivement = () => {
    const [achivement,setAchivement] = useState([])
    useEffect( () =>{
        fetch('/school.json')
        .then(res => res.json())
        .then(data => setAchivement(data))
    } ,[])
    return (
        
            <div style={{ width: '50%' }}>
               
               {
                   achivement.map(achive => <Achive achive={achive}></Achive>)
               }

            </div>
    );
};

export default Achivement;