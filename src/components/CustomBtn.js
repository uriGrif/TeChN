import React from 'react';
import './CustomBtn.css';

const CustomBtn = (props) => {
    const handleClick = props.handleClick;
    return (
        <button className="CustomBtn" onClick={handleClick}>{props.btnText}</button>
    )
}

export default CustomBtn;