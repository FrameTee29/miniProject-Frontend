import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import './Part2Home.css'
import { Link } from 'react-router-dom';



const Part2Home = () => {
  return (
    <div className="ContainerPart2Home">
      <div className="BoxPart2">
        <div className="headpart2">บอร์ดกิจกรรม</div>
        <p className="fontpart2">รวบรวมข่าวสารการจัดกิจกรรมภายในมหาวิทยาสงขลานครินทร์ วิทยาเขตภูเก็ต รวมไปถึงหน่วยงานในการจัดกิจกรรมในมหาวิทยาลัย</p>
        <div className="boximg">
          <img className="imgPart2" src="http://www.psupix.com/wp-content/uploads/2018/02/IMG_3874.jpg" alt="http://www.psupix.com/wp-content/uploads/2018/02/IMG_3874.jpg" />
          <img className="imgPart2" src="http://www.psupix.com/wp-content/uploads/2018/02/IMG_3873.jpg" alt="http://www.psupix.com/wp-content/uploads/2018/02/IMG_3873.jpg" />
          <img className="imgPart2" src="http://www.psupix.com/wp-content/uploads/2018/04/PINK4613.jpg" alt="http://www.psupix.com/wp-content/uploads/2018/04/PINK4613.jpg" />
        </div>
        <p className="headpart3">รูปภาพจาก<a className="alink" href="http://www.psupix.com/"> PSUPIX PHUKET</a></p>
      </div>
    </div>

  );

}

export default Part2Home;