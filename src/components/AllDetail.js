import React, { useState, useEffect } from 'react';
import './AllDetail.css';

const AllDetail = (props) => {

    const { id, date, department, detail, end, give, name, start } = props.activity;
    return (
        <div className="LayoutDetail">
            <div>{name}</div>
            <div>{date}</div>
            <div>{department}</div>
            <div>{detail}</div>
            <div>{give}</div>
            <div>{start}</div>
            <div>{end}</div>
        </div>
    );
}

export default AllDetail;