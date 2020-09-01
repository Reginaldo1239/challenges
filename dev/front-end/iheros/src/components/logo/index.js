import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';
export default function Logo(props){
    return (
            <div className="component_logo">
                <Link to={'/hero'}>
                    <span>Ihero</span>
                </Link>
            </div> 
    ) 
} 