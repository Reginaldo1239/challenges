import React,{useEffect,useState} from 'react';
import {Route,Redirect} from "react-router-dom";
import {readData} from '../../util/local_storage'

export default function PrivateRoute (props){
    let {component,path}=props;
    return(
        readData('token')!=undefined?( 
             <Route path={path} component={component}></Route> 
        ):(
            <Redirect to={'/'}></Redirect>
        )
    )      
}    