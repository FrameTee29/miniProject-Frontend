import React, { useState, useEffect } from 'react';
import './AllDetail.css';

const AllDetail = (props) => {

    const { id, date, department, detail, end, give, name, start } = props.activity;
    return (
        <div className="LayoutDetail">
            <div className="headDetail">
                ชื่อกิจกรรม<p className="intoHead">{name}</p>
            </div>
            <div className="headDetail">
                วันที่ <p className="intoHead">{date}</p>
            </div>
            <div className="headDetail">
                หน่วยงานที่จัดกิจกรรม <p className="intoHead">{department}</p>
            </div>
            <div className="headDetail">
                รายละเอียดของกิจกรรม <p className="intoHead">{detail}</p>
            </div>
            <div className="headDetail">
                สิ่งที่ได้รับจากกิจกรรม <p className="intoHead">{give}</p>
            </div>
            <div className="headDetail">
                เริ่มกิจกรรม <p className="intoHead">{start}</p>
            </div>
            <div className="headDetail">
                สิ้นสุดกิจกรรม <p className="intoHead">{end}</p>
            </div>

        </div>
    );
}

export default AllDetail;