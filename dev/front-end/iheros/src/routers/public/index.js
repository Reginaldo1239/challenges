import React,{useEffect,useState} from 'react';
import {Route,Redirect} from "react-router-dom";

import Hero from '../../pages/private/hero';
import Login from '../../pages/public/login'
import {readData} from '../../util/local_storage';

export default  function PublicRoute  (props){
    let {component,path,exact}=props;

 
    return(  
        readData('token')!=undefined?
        <Redirect to={'/hero'}/>
     : 
        <Route path={path} component={component} ></Route>
     
    ) 
}     