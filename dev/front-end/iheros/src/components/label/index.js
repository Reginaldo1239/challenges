import React from 'react';
import './style.scss';
export default function Label(props){
    let {title} = props;
    return(
        <div className="label">
        <label>{title}</label>
        </div>
    )
}