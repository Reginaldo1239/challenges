import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo';
import './style.scss';

export default function Header(props){
    return(
        <header className="component_header">
            <div className="flex center">
                <Logo></Logo>
                <div className="sair" >
                    <Link to='/login'>sair</Link>
                </div>
            </div>
        </header>
    )
} 