import React from 'react';
import './style.scss';
export default function MsgError(props){
    let {title} = props;
    return(
        <div className="component_msg_error">
            <span>{title}</span>
        </div>
    )
}   