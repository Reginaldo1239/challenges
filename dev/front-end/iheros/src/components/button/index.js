import React from 'react';
import './style.scss';
export default function Button(props){
    let {title} = props;
   const eventClick=(event)=>{
       event.preventDefault()
       props.onClick();
   }
    return (
        <div className="button" >
            <button onClick={(event)=>eventClick(event)} >{ title} </button>
        </div>
    )
}