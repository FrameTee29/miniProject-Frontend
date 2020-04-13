import React, { useState, useEffect } from 'react';
import './AllDetail.css';

const AllDetail = (props) => {

    const { id, date, department, detail, end, give, name, start } = props.activity;
    return (
        <div className="LayoutDetail">
            <div className="headDetail">ชื่อกิจกรรม</div>
            <div className="headDetail">{name}</div>
            <div>{date}</div>
            <div>{department}</div>
            <div>{detail}</div>
            <div>{give}</div>
            <div>{start} น.</div>
            <div>{end} น.</div>
        </div>
    );
}

export default AllDetail;