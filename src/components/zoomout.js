import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Zoom } from 'react-slideshow-image';
import './zoomout.css'

const images = [
  'https://www.phuket.psu.ac.th/wp-content/uploads/2019/01/DSC_8815-squoosh.jpg',
  'https://www.asiaexchange.org/wp-content/uploads/2019/10/PSU_Campus_Main_Building_side-1200x800.jpg',
  'https://www.phuket.psu.ac.th/wp-content/uploads/2019/01/DJI_0253.jpg',

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
    <div className="containerzoomout">
      <div style={{ width: "60%" }}>
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
          }
        </Zoom>
      </div>
    </div>
  );

}

export default Zoomout;