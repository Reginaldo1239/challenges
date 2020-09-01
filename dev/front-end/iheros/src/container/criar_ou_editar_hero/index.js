import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from "react-router-dom";

import Label from '../../components/label';
import Button from '../../components/button';
import MsgError from '../../components/msgError';
import {minLength} from '../../util/validacao';
import { maxLength ,classeHero} from '../../util/validacao';
import {post,get,put} from '../../api'; 
import {readData} from '../../util/local_storage';
import {isNumber} from '../../util/validacao';
import {cleanAuth} from '../../util/common';
import './style.scss';
export default function CriarOuEditarHero(props){
  //  let {id_hero} = props;
  let {id_hero} = useParams();
        let history = useHistory();
        const [nome,setNome] =     useState(''); 
        const [classe,setClasse] = useState('');
        const [bairro,setBairro] = useState('');
        const [cidade,setCidade] = useState('');
        const [pais,setPais]=      useState('');

        const [nomeError,setNomeError] = useState('');
        const [classeError,setClasseError] = useState('');
        const [bairroError,setBairroError] = useState('');
        const [cidadeError,setCidadeError] = useState('');
        const [paisError,setPaisError] = useState('');
        const [outroError,setOutroError] = useState('');

        useEffect(()=>{
         //   console.log(id_hero)
     if(id_hero!=undefined){
        getInfoHero();
            }

        },[id_hero])

        const getInfoHero = async ()=>{
            let infohero =  await get(`/hero/${id_hero}`);
            console.log(infohero);
            if(infohero.status===200){
                infohero =await infohero.data;
                infohero = infohero[0];
                setNome(infohero.nome);
                setClasse(infohero.classe);
                setBairro(infohero.bairro);
                setCidade(infohero.cidade);
                setPais(infohero.pais);
            }else if(infohero.status===404){
                alert('heroi não existe')
                history.push('/hero')
            }else if(infohero.status===401){
                cleanAuth();
                history.push('/')
            }
        }
        const sendForm=async ()=>{
  if(validarForm()){
                    let body = {
                            nome:nome,
                            classe:classe,
                            bairro:bairro,
                            cidade:cidade,
                            pais:pais
                    }
                        //se id_hero está undefined isso quer dizer que é para criar um novo heroi, 
                        // se existir um valor em  id_hero é  para atualizar o heroi
            if(id_hero==undefined){
                let endPoint = '/hero'    
                let resultInsertHero = await post(endPoint,body);
                console.log(resultInsertHero)
                if(resultInsertHero.status==201){
                    resultInsertHero = await resultInsertHero.data;
                    alert('heroi criado com sucesso');
                    history.push('/hero');
                }else if(resultInsertHero.status==400){
                    resultInsertHero = await resultInsertHero.data;
                    setOutroError(resultInsertHero.msg);
                }else if(resultInsertHero.status===401){
                    history.push('/login');
                }
            }else if(isNumber(id_hero)){
                let endPoint = `/hero/${id_hero}`;
                let resultUpdateHero = await put(endPoint,body);
                if(resultUpdateHero.status===200){
                    resultUpdateHero = await resultUpdateHero.data;
                    alert('heroi atualizado com sucesso');
                    history.push('/hero');
                }else if(resultUpdateHero.status==400){
                    resultUpdateHero = await resultUpdateHero.data;
                    setOutroError(resultUpdateHero.msg);
                }else if(resultUpdateHero.status===401){
                    cleanAuth();
                    history.push('/');
                }
            }   
    }else{
                
       }
        
        }

        const validarForm=()=>{
           console.log(readData('token'))
            limparErros();
            let erros = [];
            if(!minLength(nome,1)){
                setNomeError('nome do heroi é obrigatório');
                erros.push({nome:'nome do heroi é obrigatório'});
            }else if(!maxLength(nome,30)){
                setNomeError('o campo nome aceita no máximo 30 caracteres')
                erros.push({nome:'o campo nome aceita no máximo 30 caracteres'});
            }
            if(!minLength(classe,1)){
                setClasseError('selecione a classe do heroi');
                erros.push({classe:'selecione a classe do heroi'});
            }else if(!classeHero(classe)){
                setClasseError('classe invalida');
                erros.push({classe:'classe invalida'});
            }
            if(!minLength(bairro,1)){
                setBairroError('o campo  bairro é obritatório');
                erros.push({bairro:'o campo  bairro é obritatório'});
            }
            if(!minLength(cidade,1)){
                setCidadeError('o campo  cidade é obrigatório');
                erros.push({cidade:'o campo  cidade é obrigatório'});
            }
            if(!minLength(pais,1)){
                setPaisError('o pais é obrigatório');
                erros.push({pais:'o pais é obrigatório'});
            }
            return erros.length===0;
        }


        const limparErros  = ()=>{
            setNomeError('');
            setClasseError('');
            setBairroError('');
            setCidadeError('');
            setPaisError('');
            setOutroError('');
        }
       const  handleChangeNome=(event)=>{
            setNome(event.target.value);
       }
       const handleChangeClasse = (event)=>{
         
           setClasse(event.target.value)
       }
       const handleChangeBairro = (event)=>{
        setBairro(event.target.value);
    }
       const handleChangeCidade = (event)=>{
           setCidade(event.target.value);
       }
     
       const handleChangePais = (event)=>{
           setPais(event.target.value);
       }

       
        return(
        <div className="component_criar_ou_editar_hero">
            <form className="flex">
                <header>
                    <h2>novo heroi</h2>
                </header>
                <div className="form_group"> 
                        <Label title='nome'></Label>
                        <input 
                            value={nome}
                            onChange={(event)=>handleChangeNome(event)}
                     />
                     <MsgError title ={nomeError}></MsgError>  
                </div>
                <div className="form_group">
                        <Label title='classe'></Label>
                        <select 
                        value={classe} 
                        onChange={(event)=>handleChangeClasse(event)}>
                            <option value=''></option>
                            <option value='S'>S</option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                        </select>
                        <MsgError title ={classeError}></MsgError>  
                </div>
                <div className="form_group">
                    <h4>endereço do heroi</h4>
                </div>
                <div className="form_group">
                        <Label title='bairro'></Label>
                        <input 
                            value={bairro}
                            onChange={(event)=>handleChangeBairro(event)}
                     />
                      <MsgError title ={bairroError}></MsgError>  
                </div>
                <div className="form_group">
                        <Label title='cidade'></Label>
                        <input 
                            value={cidade}
                            onChange={(event)=>handleChangeCidade(event)}
                     />
                        <MsgError title ={cidadeError}></MsgError>  
                </div>
          
                <div className="form_group">
                        <Label title='país'></Label>
                        <input 
                            value={pais}
                            onChange={(event)=>handleChangePais(event)}
                     />
                      <MsgError title ={paisError}></MsgError>  
                </div>
                <div className="form_group">
                    <Button 
                    onClick={()=>sendForm()}
                    title={'salvar'} ></Button>
                </div>
                <MsgError title ={outroError}></MsgError>  
            </form>
        </div>
    )
} 