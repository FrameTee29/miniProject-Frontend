import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Zoom } from 'react-slideshow-image';


const images = [
  '/static/media/slide1.a7b0af0b.jpg',
  '/static/media/slide3.8aaf2794.jpg',
  '/static/media/slide2.63eabdcd.jpg',
  
];
const zoomOutProperties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
const Zoomout = () => {
  return (
    <div>
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>

    </div>
    
  );

}

export default Zoomout;