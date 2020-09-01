import React from 'react';
import './style.scss';
export default function(props){
    let {nome,classe,moster_name,moster_danger_level,distance_of_moster} = props.infoBatalha;
    return(
        <div className="item_lista_batalha_component">
            <div className="x"><span>x</span></div>
             <div className='box_batalha flex'>
                <div className="sub_box_batalha align_text_center">
                        <header className ='heroi' ><span>heroi</span></header>
                        <div className="box_text">
                                 <span>{nome.slice(0,10)}</span>
                            </div>
                        <div className="box_text">
                                <span>{classe}</span>
                        </div>   
                    </div>
                <div className="sub_box_batalha align_text_center">
                         <header   className ='moster'><span>monstro</span></header>
                         <div className="box_text">
                                 <span>{moster_name.slice(0,10)}</span>
                            </div>
                        <div className="box_text">
                                <span>{moster_danger_level.slice(0,10)}</span>
                        </div>
                    </div>  
                    <div className="sub_box_batalha align_text_center">
                         <span>distancia entre oponentes</span>
                         <div className="box_text">
                                    <span>{parseInt(distance_of_moster)} km</span>
                        </div>
                     </div>   
                </div>
            </div>
    )
}