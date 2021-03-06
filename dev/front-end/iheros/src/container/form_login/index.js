import React,{useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";

import Label from '../../components/label';
import Button from '../../components/button';
import MsgError from '../../components/msgError';
import {minLength} from '../../util/validacao';
import {post} from '../../api/index';
import {saveData} from '../../util/local_storage';
import './style.scss'; 
export default function FormLogin(props){
    let history = useHistory();
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [nameError,setNameError]  =useState('');
    //passwordError é usando para passar mensagens de erros enviadas do backend end e no front verifica se o campo tem algum valor
    const [passwordError,setPasswordError] = useState('');
    useEffect(()=>{
    console.log(props)
    })
    const sendForm= async ()=>{
       
        if(validarForm()){
            let body  ={
                nome:name,
                senha:password
            }
            let endPoint = '/public/login';
          try{ 
            let loginUser = await post(endPoint,body);
            let data;
            console.log(loginUser)
            if(loginUser.status===200){
                 data = await loginUser.data;
              await  saveData('token',data.token);
             await   saveData('id_usuario',data.id_usuario);
             await   saveData('nome',data.nome);
                 history.push('/hero')
                
            }else if(loginUser.status==404){
                data = await loginUser.data;
                setPasswordError(data.msg)
            }else{
                alert('ocorreu um erro tente novamente mais tarde');
            }
            }catch(e){
               console.log(e)
               alert('ocorreu um erro tente novamente mais tarde');
            }

        } 
    }
    const validarForm=()=>{
        
        limparErrors();
        let errors = [];
        if(!minLength(name,1)){
            setNameError('o campo nome está vazio');
            errors.push({name:'o campo nome está vazio'})
        }
        if(!minLength(password,1)){
            setPasswordError('o campo senha está vazio');
            errors.push({password:'o campo senha está vazio'})
        }
        return errors.length===0;
    }
    const limparErrors = ()=>{
        setNameError('');
        setPasswordError('');
    }
   const handlechangeName=(event)=>{
        setName(event.target.value)
   }
   const handlechangePassword =(event)=>{
        setPassword(event.target.value);
   } 
    return(
        <form className='form_login'>
            <div className="form_group">
                <Label title='nome' ></Label>
                <input
                    type='text'
                    value={name}
                    onChange={(event)=>handlechangeName(event)}
                ></input>
                <MsgError title={nameError}></MsgError>
            </div>
            <div className="form_group">
                <Label title='senha' ></Label>
                <input
                    type='password'
                    value={password}
                    onChange={(event)=>handlechangePassword(event)}
                ></input>
                 <MsgError title={passwordError}></MsgError>
            </div>
            <div className="form_group">
                <Button 
                onClick={()=>sendForm()}
                title='enviar'></Button>
            </div>
        </form>
    )
}