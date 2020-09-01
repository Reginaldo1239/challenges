import React,{useState} from 'react';
import Label from '../../components/label';
import Button from '../button';
import MsgError from '../msgError';
import './style.scss';
export default function CriarOuEditarHero(props){
     
        return(
        <div className="component_criar_ou_editar_hero">
            <form className="flex">
                <header>
                    <h2>novo heroi</h2>
                </header>
                <div className="form_group">
                        <Label title='nome'></Label>
                        <input 
                            value={'nome'}
                     />
                     <MsgError title ='123'></MsgError> 
                </div>
                <div className="form_group">
                        <Label title='classe'></Label>
                        <select>
                            <option value=''></option>
                            <option value='S'>S</option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                        </select>
                </div>
                <div className="form_group">
                    <h1>endereço do heroi</h1>
                </div>
                <div className="form_group">
                        <Label title='cidade'></Label>
                        <input 
                            value={'nome'}
                     />
                </div> 
                <div className="form_group">
                        <Label title='bairro'></Label>
                        <input 
                            value={'nome'}
                     />
                </div>
                <div className="form_group">
                        <Label title='país'></Label>
                        <input 
                            value={'nome'}
                     />
                </div>
                <div className="form_group">
                    <Button 
                    onClick={()=>console.log('11')}
                    title={'salvar'} ></Button>
                </div>



                
            </form>
        </div>
    )
} 