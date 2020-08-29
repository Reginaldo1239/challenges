import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';

export default function ItemListHero(props){
    let { nome,id_hero,classe,bairro,cidade,pais}=props.values;

    const onClickDelete=(id_hero)=>{
        props.deletehero(id_hero)
    }
    return (
        <div className="component_item_list_hero">
            <div className='flex'>
                <div className="box">
                    <span>nome</span>
                </div>
                <div className="box">
                    <span>classe</span>
                </div>
                <div className="box">
                    <span>latitude</span>
                </div>
                <div className="box">
                    <span>longitude</span>
                </div>
                <div className="box">
                    <Link to='/hero/editar/:id_hero'>editar</Link>
                </div>
                <div className="box">
                    <span onClick={()=>onClickDelete(id_hero)}>deletar</span>
                </div>
            </div>
        </div>
    )
}