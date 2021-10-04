import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Figure } from 'react-bootstrap';
import imgUrl from '../../images/5-59452_cartoons-for-play-school-clipart-png-download-cartoon.png'

const About = () => {
    const [about,setAbout]= useState([])
    useEffect(()=>{
        fetch('/school.json')
        .then(res => res.json())
        .then(data => setAbout(data))
    },[])
    return (
        <div className='d-flex'>
            <div>
            <Figure>
            <Figure.Image
               width={650}
               alt="imgUrl"
               src={imgUrl}
            />
            </Figure> 
            </div>
            <div className='w-75 mt-2 mx-2'>
                <h1 >know more about our services </h1>
                {
                 about.map(detail => (
                 
                 <p>{detail.about3}</p>
                 
                  ))
                }
            </div>
        </div>
    );
};

export default About;