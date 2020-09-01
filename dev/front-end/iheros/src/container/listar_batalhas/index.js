import React, { useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import ItemListaBatalha from '../../components/item_lista_batalha';
import Paginacao from '../../components/paginacao';
import {get} from '../../api/index';
import {cleanAuth} from '../../util/common';
import './style.scss';

export default function ListarBatalhasContainer(props){
    let history = useHistory();
    const LIMIT =20;
    const [page,setPage] =useState(1);
    const [listBatalhas,setListBatalhas] = useState([]);
  
    useEffect(()=>{
        getBatalhas();
    },[page]);

    const getBatalhas = async ()=>{
        //no backend paginação começa apartir da pagina 0
        let endPoint = `/batalhas?limit=${LIMIT}&page=${page-1}`;
        let listarBatalhas = await get(endPoint);
        console.log(listarBatalhas)
        if(listarBatalhas.status===200){
            listarBatalhas = await listarBatalhas.data;
            console.log(listarBatalhas)
            setListBatalhas(listarBatalhas);
        }else if(listarBatalhas.status===404){
            setListBatalhas([]);
        }else if(listarBatalhas.status===401){
            cleanAuth();
            history.push('/');
        }
    }
    const nextPage=()=>{    
        setPage(page+1);
    }
    const beforePage=()=>{
        setPage(page-1)
    }
    const changePage = (value)=>{
        setPage(value)
    }
    return(
        <div className="listar_batalhas_container">
          <div className="list">  
            <div className="flex">
                {listBatalhas.map((infoBatalha)=>
                    <ItemListaBatalha key={infoBatalha.id_batalha} infoBatalha={infoBatalha}></ItemListaBatalha> 
                ) 
            }
             </div>
       </div>
               <Paginacao
               onClickBeforePage={()=>beforePage()}
               onClickNextPage={()=>nextPage()}
               onChangeValuePage={(value)=>changePage(value)}
               page={page}
               itensCarregados={listBatalhas.length}
               limit={LIMIT}></Paginacao>
        </div>
    )
}