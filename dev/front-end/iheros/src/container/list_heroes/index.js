import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import ItemListHero from '../../components/item_list_hero';
import Paginacao from '../../components/paginacao';
import {get} from '../../api/index'; 
import './style.scss';
export default function ListHeroes (props){
    //LIMIT e quantidade maxima de herois que deve ser retornado por request
    let history = useHistory();

    const LIMIT = 15;    
    const [page,setPage] =useState(1);
    const [listHeroes,setListHeroes] = useState([]);
    const [listaHeroisVazia,setListaHeroisVazia] = useState(false)
    useEffect(()=>{
        getListHeroes();
       
    },[page]) 

    useEffect(()=>{
        if(listHeroes.length===0 &&page==1){
            setListaHeroisVazia(true)
        }else{
            setListaHeroisVazia(false)
        }
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
                }else if(listHeroes.status===404){
                    setListHeroes([]);
                }if(listHeroes.status===401){
                    history.push('/login');
                } 
        }catch(e){
            console.log(e);
        
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
                    <ItemListHero values={hero}  index ={index}></ItemListHero>) }
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