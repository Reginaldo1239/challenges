import React, { useEffect,createRef } from 'react';
import {Link} from 'react-router-dom';

import './style.scss';
export default  function Menu (props){
    let {pathname} = props;
    let heroesRef = createRef();
    let batalhasRef = createRef();
   
     useEffect(()=>{
        selectLink();
     },[pathname]);
     const  selectLink=()=>{
        if(pathname==='/hero'){
           heroesRef.current.style.textDecoration='underline'
           batalhasRef.current.style.textDecoration='none'
        }else{
            heroesRef.current.style.textDecoration='none'
            batalhasRef.current.style.textDecoration='underline'
        }
    }
   

    return(
        <div className="menu_component" >
              
                    <Link to={'hero'} ref={heroesRef}>heroes</Link>
                    <Link to={'batalhas'} ref={batalhasRef} >batalhas</Link>
                
            </div>
    ) 
}