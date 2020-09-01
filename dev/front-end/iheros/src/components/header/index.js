import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import Logo from '../../components/logo';
import {removeData} from '../../util/local_storage';
import './style.scss';

export default function Header(props){
        let history = useHistory();
    const loggout=()=>{
        removeData('token');
        removeData('id_usuario');
        removeData('nome');
        history.push('/')
    }
    return(
        <header className="component_header">
            <div className="flex center">
                <Logo></Logo>
                <div className="sair" onClick={()=>loggout()} >
                    <span >sair</span>
                </div>
            </div>
        </header>
    )
}  