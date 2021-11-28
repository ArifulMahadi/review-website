import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Figure } from 'react-bootstrap';
import img from '../../images/84617913-students-in-front-of-school-cartoon.jpg';

const Home = () => {
    const [home, setHome] = useState([])
    useEffect ( () => {
        fetch('/school.json')
        .then(res => res.json())
        .then(data => setHome(data))
    },[])



    return (
    <div className='d-flex'>
        <div className='bg-primary'>
           <Figure>
           <Figure.Image
            width={650}
            alt="1200x700"
            src={img}
         />
         </Figure>
        </div>
        <div className='m-auto'>
            <h1>about our services</h1>
            {
                home.map(dt => (
                <h3>{dt.points}</h3>
                    
                ))
            }
             
        </div>
    </div>
    );
};

export default Home;