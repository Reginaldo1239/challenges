import React from 'react';
import {Link} from 'react-router-dom'
import './style.scss';

export default function ItemListHero(props){
    let { nome,id_hero,classe,bairro,cidade,pais}=props.values;
    let {index}= props;
    const onClickDelete=(id_hero)=>{
        props.deletehero(id_hero)
    }
    return (
        <div className="component_item_list_hero">


   <div className="item_desktop"> 
        {index===0&&
    <div className='flex box_title'> 
                <div className="box">
                    <span>{'nome'}</span>
                </div>
                <div className="box">
                    <span>{'classe'}</span>
                </div>
                <div className="box">
                    <span>{'bairro'}</span>
                </div>
                <div className="box">
                    <span>{'cidade'}</span>
                </div>
                <div className="box">
                    <span>{'pais'}</span>
                </div>
                <div className="box">
                    
                </div>
                <div className="box">
                   
                </div>
            </div>
        }
            <div className='flex'>
                <div className="box align_text_left">
                    <span>{nome}</span>
                </div>
                <div className="box align_text_left">
                    <span>{classe}</span>
                </div>
                <div className="box align_text_left">
                    <span>{bairro}</span>
                </div>
                <div className="box align_text_left">
                    <span>{cidade}</span>
                </div>
                <div className="box align_text_left">
                    <span>{pais}</span>
                </div>
                <div className="box align_text_left">
                    <Link to={`/hero/editar/${id_hero}`}>editar</Link>
                </div>
                <div className="box align_text_left">
                    <span onClick={()=>onClickDelete(id_hero)}>deletar</span>
                </div>
            </div>
       </div>
                 <div className="item_mobile">
                 <div className='flex'>
                <div className="box align_text_rigth">
                    <span>{'nome :'}</span>
                </div>
                <div className="box align_text_left">
                    <span>{nome}'</span>
                </div>
                <div className="box align_text_rigth">
                    <span>{'classe :'}</span>
                </div>
                <div className="box align_text_left">
                    <span>{classe}</span>
                </div>
                <div className="box align_text_rigth">
                    <span>{'bairro :'}</span>
                </div>
                <div className="box align_text_left">
                    <span>{bairro}</span>
                </div>
                <div className="box align_text_rigth">
                    <span>{'cidade :'}</span>
                </div>
                <div className="box align_text_left">
                    <span>{cidade}</span>
                </div>
                <div className="box align_text_rigth">
                    <span>{'pais :'}</span>
                </div>
                <div className="box align_text_left">
                    <span>{pais}</span>
                </div>
                <div className="box align_text_rigth">
                    <Link to={`/hero/editar/${id_hero}`}>editar</Link>
                </div>
                <div className="box align_text_left">
                    <span onClick={()=>onClickDelete(id_hero)}>deletar</span>
                </div>
            </div>
                     </div>
        </div>
    )
}