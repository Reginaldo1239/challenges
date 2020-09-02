
import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import ItemListHero from '../../components/item_list_hero';
import Paginacao from '../../components/paginacao';
import{ removeData } from '../../util/local_storage';
import {get,del} from '../../api/index'; 
import {cleanAuth} from '../../util/common';
import './style.scss';

require('dotenv').config()

export default function ListHeroes (props){
    //LIMIT e quantidade maxima de herois que deve ser retornado por request
    let history = useHistory();

    const LIMIT = 15;    
    const [page,setPage] =useState(1);
    const [listHeroes,setListHeroes] = useState([]);
    const [listaHeroisVazia,setListaHeroisVazia] = useState(false)
    useEffect(()=>{
       
      console.log( process.env)
      
        getListHeroes();
       
    },[page])  

    useEffect(()=>{
   
    },[listHeroes])
    const getListHeroes= async()=>{
        console.log('listHeroes');
        try{
            //na hora que vou fazer a request coloco page-1 para trazer a pagina correta
            // porque o backend considera a primeira pagina como 0
            let listHeroes = await get(`/hero?page=${page-1}&limit=${LIMIT}`);
                if(listHeroes.status===200){
                    listHeroes = await listHeroes.data;
                   setListHeroes(listHeroes);
                   setListaHeroisVazia(false)
                }else if(listHeroes.status===404){
                    setListHeroes([]);
                    if(page==1){
                        setListaHeroisVazia(true)
                    }
                }if(listHeroes.status===401){
                    cleanAuth();
                    history.push('/');
                } 
        }catch(e){
            console.log(e);
        
        }
    }

    const deleteHero= async (id_hero)=>{
        let resulDeleteHero = await del(`/hero/${id_hero}`);
        if(resulDeleteHero.status===200){
            resulDeleteHero =await resulDeleteHero.data;
            if(resulDeleteHero.affectedRows===1){
                getListHeroes();
            }
        }
    }
    const  handleChangePage=(value)=>{
          setPage(value)
    }
    const handleClickNextPage=()=>{
        setPage(page+1);
    }
    const handleClickBeforePage=()=>{
        setPage(page-1);
    }
    return(
        <div className='container_list_heroes'>
            {listaHeroisVazia?(
             <div className={'lista_de_herois_vazia'} >
                 <span>adicione o seu primeiro heroi</span>
             </div>
             ):(
                <> 
                <div className="box_heroes">
                {listHeroes.map((hero,index)=> 
                    <ItemListHero
                    deletehero={(id_hero)=>deleteHero(id_hero)}
                     key={hero.id_hero} values={hero} 
                     index ={index}></ItemListHero>) }
                </div>
                <div className="box_paginacao">
                <Paginacao
                limit={LIMIT}
                itensCarregados={listHeroes.length}
                onClickBeforePage={()=>handleClickBeforePage()}
                onClickNextPage={()=>handleClickNextPage()}
                onChangeValuePage={(value)=>handleChangePage(value)}
                page={page}></Paginacao>
                 </div>
                 </>
             )}
        </div>
    )
}  